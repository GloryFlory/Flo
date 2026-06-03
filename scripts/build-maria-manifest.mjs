// Build a dimensions manifest for all images in the R2 bucket and upload it
// to the bucket as `_dimensions.json`. The /api/maria-photos route reads this
// manifest to serve correct image aspect ratios without per-request probing.
//
// Usage: node scripts/build-maria-manifest.mjs
import { S3Client, ListObjectsV2Command, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { imageSize } from 'image-size';
import { config } from 'dotenv';

config({ path: '.env.local' });

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET = 'maria',
} = process.env;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
  console.error('Missing R2_* env vars in .env.local');
  process.exit(1);
}

const MANIFEST_KEY = '_dimensions.json';
const IMAGE_RE = /\.(jpe?g|png|webp|gif|avif)$/i;
const CONCURRENCY = 8;

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
});

async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks);
}

async function loadExistingManifest() {
  try {
    const obj = await client.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: MANIFEST_KEY }));
    const buf = await streamToBuffer(obj.Body);
    return JSON.parse(buf.toString('utf-8'));
  } catch {
    return {};
  }
}

async function probe(key) {
  const obj = await client.send(
    new GetObjectCommand({ Bucket: R2_BUCKET, Key: key, Range: 'bytes=0-524287' })
  );
  const buf = await streamToBuffer(obj.Body);
  const dims = imageSize(buf);
  if (!dims.width || !dims.height) throw new Error('unreadable');
  return { width: dims.width, height: dims.height };
}

async function mapWithLimit(items, limit, fn) {
  const results = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  });
  await Promise.all(workers);
  return results;
}

async function main() {
  console.log(`Listing bucket "${R2_BUCKET}"...`);
  const list = await client.send(new ListObjectsV2Command({ Bucket: R2_BUCKET, MaxKeys: 1000 }));
  const images = (list.Contents || [])
    .filter((o) => o.Key && o.Key !== MANIFEST_KEY && IMAGE_RE.test(o.Key))
    .map((o) => o.Key);
  console.log(`Found ${images.length} images.`);

  const existing = await loadExistingManifest();
  const missing = images.filter((k) => !existing[k]);
  console.log(`Need to probe ${missing.length} new images (${images.length - missing.length} cached).`);

  let done = 0;
  await mapWithLimit(missing, CONCURRENCY, async (key) => {
    try {
      const dims = await probe(key);
      existing[key] = dims;
      done++;
      if (done % 10 === 0 || done === missing.length) {
        console.log(`  probed ${done}/${missing.length}`);
      }
    } catch (err) {
      console.warn(`  skip ${key}: ${err.message}`);
    }
  });

  // Drop entries for keys that no longer exist in the bucket.
  const keep = new Set(images);
  for (const k of Object.keys(existing)) {
    if (!keep.has(k)) delete existing[k];
  }

  console.log(`Uploading manifest with ${Object.keys(existing).length} entries...`);
  await client.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: MANIFEST_KEY,
      Body: JSON.stringify(existing),
      ContentType: 'application/json',
      CacheControl: 'no-cache',
    })
  );
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

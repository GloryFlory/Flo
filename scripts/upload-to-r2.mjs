// Upload a single large file to R2 using multipart upload
// Usage: node scripts/upload-to-r2.mjs <path-to-file>
import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';

config({ path: '.env.local' });

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/upload-to-r2.mjs <path-to-file>');
  process.exit(1);
}
if (!fs.existsSync(file)) {
  console.error(`File not found: ${file}`);
  process.exit(1);
}

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET = 'maria',
} = process.env;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
  console.error('Missing R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY in .env.local');
  process.exit(1);
}

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

const key = path.basename(file);
const stats = fs.statSync(file);
const sizeMb = (stats.size / 1024 / 1024).toFixed(1);

console.log(`Uploading ${key} (${sizeMb} MB) to bucket "${R2_BUCKET}"...`);

const upload = new Upload({
  client,
  params: {
    Bucket: R2_BUCKET,
    Key: key,
    Body: fs.createReadStream(file),
    ContentType: 'video/mp4',
  },
  queueSize: 4,
  partSize: 10 * 1024 * 1024, // 10 MB parts
});

upload.on('httpUploadProgress', (p) => {
  if (p.loaded && p.total) {
    const pct = ((p.loaded / p.total) * 100).toFixed(1);
    process.stdout.write(`\r  ${pct}%`);
  }
});

try {
  await upload.done();
  console.log('\n✓ Upload complete');
} catch (err) {
  console.error('\n✗ Upload failed:', err);
  process.exit(1);
}

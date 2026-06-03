import { NextResponse } from 'next/server';
import { ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { imageSize } from 'image-size';
import { getR2Client, R2_BUCKET } from '../../../lib/r2';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

// Manifest stored in R2 as `_dimensions.json`. Format: { [key]: { width, height } }
const MANIFEST_KEY = '_dimensions.json';
type Manifest = Record<string, { width: number; height: number }>;

// In-memory caches — survive across requests on the same serverless instance.
let manifestCache: { data: Manifest; loadedAt: number } | null = null;
const MANIFEST_TTL_MS = 5 * 60 * 1000; // 5 min
const runtimeCache = new Map<string, { width: number; height: number; etag: string }>();

const IMAGE_RE = /\.(jpe?g|png|webp|gif|avif)$/i;
const VIDEO_RE = /\.(mp4|webm|mov)$/i;

async function streamToBuffer(stream: ReadableStream<Uint8Array>): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }
  return Buffer.concat(chunks.map((c) => Buffer.from(c)));
}

async function loadManifest(): Promise<Manifest> {
  if (manifestCache && Date.now() - manifestCache.loadedAt < MANIFEST_TTL_MS) {
    return manifestCache.data;
  }
  try {
    const client = getR2Client();
    const obj = await client.send(
      new GetObjectCommand({ Bucket: R2_BUCKET, Key: MANIFEST_KEY })
    );
    const stream = obj.Body as ReadableStream<Uint8Array> | undefined;
    if (!stream) throw new Error('empty manifest body');
    const buf = await streamToBuffer(stream);
    const data = JSON.parse(buf.toString('utf-8')) as Manifest;
    manifestCache = { data, loadedAt: Date.now() };
    return data;
  } catch {
    // Manifest doesn't exist yet — first run. Cache an empty manifest briefly
    // so we don't hammer R2.
    const data: Manifest = {};
    manifestCache = { data, loadedAt: Date.now() };
    return data;
  }
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T | null> {
  return new Promise((resolve) => {
    const t = setTimeout(() => resolve(null), ms);
    p.then((v) => {
      clearTimeout(t);
      resolve(v);
    }).catch(() => {
      clearTimeout(t);
      resolve(null);
    });
  });
}

async function probeDimensions(key: string, etag: string): Promise<{ width: number; height: number } | null> {
  const cached = runtimeCache.get(key);
  if (cached && cached.etag === etag) return { width: cached.width, height: cached.height };

  try {
    const client = getR2Client();
    const obj = await client.send(
      new GetObjectCommand({ Bucket: R2_BUCKET, Key: key, Range: 'bytes=0-524287' })
    );
    const stream = obj.Body as ReadableStream<Uint8Array> | undefined;
    if (!stream) return null;
    const buf = await streamToBuffer(stream);
    const dims = imageSize(buf);
    if (!dims.width || !dims.height) return null;
    const result = { width: dims.width, height: dims.height };
    runtimeCache.set(key, { ...result, etag });
    return result;
  } catch (err) {
    console.warn(`Could not probe ${key}:`, err);
    return null;
  }
}

// Bounded-concurrency map: at most `limit` tasks run at once.
async function mapWithLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]);
    }
  });
  await Promise.all(workers);
  return results;
}

export async function GET() {
  try {
    const client = getR2Client();
    const result = await client.send(
      new ListObjectsV2Command({ Bucket: R2_BUCKET, MaxKeys: 1000 })
    );

    const objects = (result.Contents || [])
      .filter((o) => o.Key && o.Key !== MANIFEST_KEY && (IMAGE_RE.test(o.Key) || VIDEO_RE.test(o.Key)))
      .sort((a, b) => (a.Key || '').localeCompare(b.Key || ''));

    const manifest = await loadManifest();

    // Build items immediately using manifest + fallbacks. Probe only missing
    // image keys, with bounded concurrency and a short per-image timeout so a
    // slow R2 response can never hang the API.
    const items = await mapWithLimit(objects, 8, async (o) => {
      const key = o.Key!;
      const isVideo = VIDEO_RE.test(key);
      let width = 4;
      let height = isVideo ? 2.25 : 3; // fallback aspects: 16:9 video, 4:3 image

      const fromManifest = manifest[key];
      if (fromManifest) {
        width = fromManifest.width;
        height = fromManifest.height;
      } else if (!isVideo) {
        const dims = await withTimeout(probeDimensions(key, o.ETag || ''), 1500);
        if (dims) {
          width = dims.width;
          height = dims.height;
        }
      }

      return {
        src: `/api/maria-media/${encodeURIComponent(key)}`,
        type: isVideo ? 'video' : 'image',
        width,
        height,
      };
    });

    return NextResponse.json({ items });
  } catch (err) {
    console.error('Failed to list R2 objects', err);
    return NextResponse.json({ items: [], error: 'Failed to load' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getR2Client, R2_BUCKET } from '../../../lib/r2';

export async function GET() {
  try {
    const client = getR2Client();
    const result = await client.send(
      new ListObjectsV2Command({ Bucket: R2_BUCKET, MaxKeys: 1000 })
    );

    const files = (result.Contents || [])
      .map((o) => o.Key!)
      .filter((k) => /\.(jpe?g|png|webp|gif|avif|mp4|webm|mov)$/i.test(k))
      .sort();

    const items = files.map((key) => ({
      src: `/api/maria-media/${encodeURIComponent(key)}`,
      type: /\.(mp4|webm|mov)$/i.test(key) ? 'video' : 'image',
    }));

    return NextResponse.json({ items });
  } catch (err) {
    console.error('Failed to list R2 objects', err);
    return NextResponse.json({ items: [], error: 'Failed to load' }, { status: 500 });
  }
}

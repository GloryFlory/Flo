import { NextRequest, NextResponse } from 'next/server';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { getR2Client, R2_BUCKET } from '../../../../lib/r2';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ key: string[] }> }
) {
  try {
    const { key } = await params;
    // key may contain slashes if photos are in subfolders
    const objectKey = decodeURIComponent(key.join('/'));

    // Basic safety: only allow expected media extensions
    if (!/\.(jpe?g|png|webp|gif|avif|mp4|webm|mov)$/i.test(objectKey)) {
      return new NextResponse('Not found', { status: 404 });
    }

    const client = getR2Client();
    const command = new GetObjectCommand({ Bucket: R2_BUCKET, Key: objectKey });
    // Signed URL valid for 5 minutes
    const signedUrl = await getSignedUrl(client, command, { expiresIn: 300 });

    return NextResponse.redirect(signedUrl, 302);
  } catch (err) {
    console.error('Failed to sign R2 url', err);
    return new NextResponse('Error', { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { getAllEpisodes } from '../../../../lib/podcast';

export async function GET() {
  try {
    const episodes = await getAllEpisodes();
    
    return NextResponse.json({ episodes }, {
      headers: {
        'Cache-Control': 's-maxage=21600, stale-while-revalidate=3600' // 6 hours cache
      }
    });
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
    return NextResponse.json({ error: 'Failed to fetch episodes' }, { status: 500 });
  }
}

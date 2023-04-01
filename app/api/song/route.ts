import { NextResponse } from 'next/server';

import { getTrack } from '@/lib/spotifyApi';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const songId = searchParams.get('songId');

    const res = await getTrack(songId);

    return NextResponse.json(res);
}
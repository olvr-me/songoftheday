import { getTrack } from '@/lib/spotifyApi';
import { NextResponse } from 'next/server';

export async function GET() {

    const res = await getTrack('4AGwu2Zn3sYmR2s2y3vfft');

    return NextResponse.json(res);
}
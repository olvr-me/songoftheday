import { NextResponse } from 'next/server';

export async function GET() {

    const song = {
        title: 'Hannah (the sun)',
        artist: 'Fred again..'
    }

    return NextResponse.json(song);
}
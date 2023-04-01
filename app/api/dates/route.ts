import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

import { getTrack } from '@/lib/spotifyApi';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    const noSpecificDateRequested = date === null;
    if (noSpecificDateRequested) {
        const allDates = await getAllDates();

        return NextResponse.json(allDates);
    }

    let foundSongId = await getSongIdByDate(date);
    if (foundSongId === null) {
        return NextResponse.error();
    }

    return NextResponse.json(await getTrack(foundSongId));
}

async function getSongIdByDate(date) {
    const allDates = await getAllDates();

    let foundSongId = null;
    allDates.dates.forEach(d => {

        console.log(`date: ${d.date} searchDate: ${date} are equal: ${d.date === date}`)

        if (d.date === date) {
            foundSongId = d.songId;
        }
    });

    return foundSongId;
}

async function getAllDates() {
    const jsonDirectory = path.join(process.cwd(), '');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    const dataobj = JSON.parse(fileContents);

    return dataobj;
}
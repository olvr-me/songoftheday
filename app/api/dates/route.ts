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

function extractTrackId(link) {
    const regex = /\/track\/([a-zA-Z0-9]{22})/;
    const match = link.match(regex);
    if (match) {
      return match[1];
    }
    return null; // or throw an error, depending on how you want to handle invalid links
  }

async function getSongIdByDate(date) {
    const allDates = await getAllDates();

    let foundSongId = null;
    allDates.dates.every(d => {

        if (d.date === date) {
            foundSongId = extractTrackId(d.link);

            return false;
        }

        return true;
    });

    return foundSongId;
}

async function getAllDates() {
    const jsonDirectory = path.join(process.cwd(), '');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    const dataobj = JSON.parse(fileContents);

    return dataobj;
}
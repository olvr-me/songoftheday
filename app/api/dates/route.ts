import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

const allDates = [
    {
        date: '01.04.2023',
        songId: '6YjVrP2g7gJYh3aXkgnspC'
    },
    {
        date: '31.03.2023',
        songId: '0hJfuyUwtEYMlGgvr3nzz9'
    },
    {
        date: '28.03.2023',
        songId: '1sklC11tCgdL59gNWB7Vli'
    },
    {
        date: '27.03.2023',
        songId: '4AGwu2Zn3sYmR2s2y3vfft'
    },
    {
        date: '26.03.2023',
        songId: '3KffMs30iYfPNYI8epNj5a'
    },
    {
        date: '25.03.2023',
        songId: '4zlbKky2yA657Sk5rekZoR'
    },
];

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    const noSpecificDateRequested = date === null;
    if (noSpecificDateRequested) {
        const allDates = await getAllDates();

        return NextResponse.json(allDates);
    }

    // ToDo: Hier den Eintrag aus dem spezifischen Datum
    const result = {
        date: '25.03.2023',
        songId: '4zlbKky2yA657Sk5rekZoR'
    };

    return NextResponse.json(result);
}

async function getAllDates() {
    const jsonDirectory = path.join(process.cwd(), '');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    const dataobj = JSON.parse(fileContents);

    return dataobj;
}
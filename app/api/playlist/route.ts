import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
    
    const jsonDirectory = path.join(process.cwd(), '');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    const dataobj = JSON.parse(fileContents);
    
    return NextResponse.json(dataobj.playlistUrl);
}
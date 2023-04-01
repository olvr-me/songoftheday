import { NextResponse } from 'next/server';

const songs = [
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

export async function GET() {

    return NextResponse.json(songs);
}
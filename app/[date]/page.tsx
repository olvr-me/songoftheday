import Song from '@/components/Song';

import { getSong, getSongByDate } from '@/lib/api';

export default async function Page({ params }) {
    const song = await getSongByDate(params.date);

    return (
        <main>
            <div>
                <Song
                    title={song.title}
                    artists={song.artists}
                    imageUrl={song.imageUrl}
                />
            </div>
        </main>
    )
}

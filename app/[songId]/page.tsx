import Song from '@/components/Song';

import { getSong } from '@/lib/api';

export default async function Page({ params }) {
    const song = await getSong(params.songId);

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

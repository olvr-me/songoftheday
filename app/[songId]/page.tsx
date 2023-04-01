import { getTrack } from '@/lib/spotifyApi';
import Song from '@/components/Song';

export default async function Page({ params }) {
    const song = await getTrack(params.songId);

    return (
        <main>
            <div>
                <Song
                    title={song.title}
                    artists={song.artists}
                    imageUrl={song.imageUrl} />
            </div>
        </main>
    )
}

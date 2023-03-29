import { getTrack } from '@/lib/spotifyApi';
import Song from '@/components/Song';

const getSongData = async (songId) => {
    return await getTrack(songId);
}

export default async function Page({ params }) {
    const song = await getSongData(params.songId);

    return (
        <main>
            <div>
                <Song
                    title={song.title}
                    artist={song.artist}
                    imageUrl={song.imageUrl} />
            </div>
        </main>
    )
}

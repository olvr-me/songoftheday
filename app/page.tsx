import { Inter } from 'next/font/google'
import { getTrack } from '@/lib/spotifyApi';
import Image from 'next/image';
import DateSelectionBar from '@/components/DateSelectorBar';

const getExampleSongData = async () => {
  return await getTrack('4zlbKky2yA657Sk5rekZoR');
}

export default async function Page() {
  const song = await getExampleSongData();

  return (
    <main>
      <div>
        <DateSelectionBar />

        <h3>Song: {song.title}</h3>
        <h3>Artist: {song.artist}</h3>
        <Image 
          src={song.imageUrl}
          width={600}
          height={600}
          alt={`Coverimage of song \'${song.title}\' from artist \'${song.artist}\'`}
        />
      </div>
    </main>
  )
}

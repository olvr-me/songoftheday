import { Inter } from 'next/font/google'
import { getTrack } from '@/lib/spotifyApi';
import Image from 'next/image';
import DateSelectionBar from '@/components/DateSelectorBar';
import Song from '@/components/Song';

const getExampleSongData = async () => {
  return await getTrack('4zlbKky2yA657Sk5rekZoR');
}

export default async function Page() {
  const song = await getExampleSongData();

  return (
    <main>
      <div>
        <Song title={song.title} artist={song.artist} imageUrl={song.imageUrl}/>
      </div>
    </main>
  )
}

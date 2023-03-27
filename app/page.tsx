import { Inter } from 'next/font/google'
import { getTrack } from '@/lib/spotifyApi';

const inter = Inter({ subsets: ['latin'] })

const getExampleSongData = async () => {
  return await getTrack('4AGwu2Zn3sYmR2s2y3vfft');
}

export default async function Page() {
  const song = await getExampleSongData();

  console.log(song)

  return (
    <main>
      <div>
        <h1>Hello :)</h1>
        <h3>Song: {song.title}</h3>
        <h3>Artist: {song.artist}</h3>
      </div>
    </main>
  )
}

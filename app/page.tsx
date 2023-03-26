import { getTrack } from '@/lib/api'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const getExampleSongData = async () => {
  return await getTrack('');
}

export default async function Page() {
  const song = await getExampleSongData();
  
  return (
    <main>
      <div>
        <h1>Hello :)</h1>
        <h3>title: {song.title}</h3>
        <h3>artist: {song.artist}</h3>
      </div>
    </main>
  )
}

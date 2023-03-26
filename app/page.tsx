import { getTrack } from '@/lib/api'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const getExampleSongData = async () => {
  const res = await getTrack('moin');

  return res;
}

export default async function Page() {
  const data = await getExampleSongData();
  const song = data.data;
  
  console.log(song);
  
  console.log(`title: ${song.title}`)

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

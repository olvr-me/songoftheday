import { Inter } from 'next/font/google'
import { getTrack } from '@/lib/spotifyApi';

const inter = Inter({ subsets: ['latin'] })

const getExampleSongData = async () => {
  return await getTrack('4AGwu2Zn3sYmR2s2y3vfft');
}

export default async function Page() {
  const data = await getExampleSongData();

  console.log(data)

  return (
    <main>
      <div>
        <h1>Hello :)</h1>
      </div>
    </main>
  )
}

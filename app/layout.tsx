import DateSelectionBar from '@/components/DateSelectorBar'
import './globals.css'
import { roboto } from '@/lib/fonts'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata = {
  title: 'songoftheday',
  description: ':)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        <div className='flex flex-row justify-between'>
          <DateSelectionBar />
          <div className='flex items-center h-screen'>
            {children}
          </div>
          <Link href='https://open.spotify.com/playlist/19VvREnkIgYtLATS9s9hFo?si=20ceb02ab6854365'>playlist</Link>
        </div>
      </body>
    </html>
  )
}

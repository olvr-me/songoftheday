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
          <div />
        </div>
      </body>
    </html>
  )
}

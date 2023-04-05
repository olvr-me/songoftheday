import DateSelectionBar from '@/components/DateSelectorBar'
import './globals.css'
import { roboto } from '@/lib/fonts'
import Link from 'next/link'
import Header from '@/components/Header'

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
        <div className='flex flex-row'>
          <DateSelectionBar />
          {children}
        </div>
      </body>
    </html>
  )
}

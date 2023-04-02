import DateSelectionBar from '@/components/DateSelectorBar'
import './globals.css'
import { roboto } from '@/lib/fonts'

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
      <body className='flex flex-row'>
        <DateSelectionBar />
        {children}
      </body>
    </html>
  )
}

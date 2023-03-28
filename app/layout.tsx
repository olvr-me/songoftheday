import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

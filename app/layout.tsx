import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LonyiDev — Clean Modern Website',
  description:
    'LonyiDev temporary modern website preview for testing.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

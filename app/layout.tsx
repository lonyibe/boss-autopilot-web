import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LonyiTrade — Meet & Trade Locally',
  description:
    'Buy and sell items locally with secure meetups, in-app chat, reputation, and zero online payments.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

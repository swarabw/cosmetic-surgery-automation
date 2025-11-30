import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cosmetic Surgery Practice Manager',
  description: 'Complete automation system for cosmetic surgery practice management',
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

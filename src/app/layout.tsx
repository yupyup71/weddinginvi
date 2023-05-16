import './globals.css'
import { Noto_Serif_KR } from 'next/font/google'
import 'next/head'
import 'next/link'

const inter = Noto_Serif_KR (
  { weight: '300',
    subsets: ['latin'] })

export const metadata = {
  title: 'Wedding Invitation',
  description: 'made by Yubeen and Tormod'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



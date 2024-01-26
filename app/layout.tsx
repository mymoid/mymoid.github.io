import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './ui/header'
import { BgLights } from './ui/bg-lights'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open Source | MYMOID',
  description:
    'Explore our collaborative tools designed to enhance the development and scalability of your projects.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <BgLights />
      </body>
    </html>
  )
}

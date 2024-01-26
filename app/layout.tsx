import type { Metadata } from 'next'
import { cookies } from 'next/headers'
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
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')

  return (
    <html lang="en" data-theme={theme?.value}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <BgLights />
      </body>
    </html>
  )
}

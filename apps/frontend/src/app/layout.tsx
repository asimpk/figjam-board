import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex h-screen w-screen flex-col'>
          <div className='sticky top-0 z-10 flex h-[60px] justify-items-center p-4'>
            <p className='text-lg font-semibold'>Figjam</p>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
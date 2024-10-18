import './globals.css'
import { Inter } from 'next/font/google'
import { BottomNav } from '@/components'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chinedum Onyema',
  description: `a full-stack developer with a passion 
  for data science and engineering, passionate about building 
  amazing web experiences and robust, data-driven 
  applications`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="md:container mx-auto p-4">
          <BottomNav />
          <div className='page-content'>
            {/* <BottomNav /> */}

            <Toaster position="top-left"/>   
            {children}
            
          </div>
        </main>
      </body>
    </html>
  )
}

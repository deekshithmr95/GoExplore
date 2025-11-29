import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'GoExplore',
  description: 'Explore and discover amazing places',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <footer className="bg-gray-900 dark:bg-black text-white mt-12 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p>&copy; 2024 GoExplore. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

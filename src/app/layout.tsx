import type { Metadata } from 'next'
import './globals.css'

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
        <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">GoExplore</h1>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-blue-200 transition">Home</a></li>
              <li><a href="/explore" className="hover:text-blue-200 transition">Explore</a></li>
              <li><a href="/about" className="hover:text-blue-200 transition">About</a></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2024 GoExplore. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

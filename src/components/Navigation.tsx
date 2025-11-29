'use client'

import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

export default function Navigation() {
  const [activeHover, setActiveHover] = useState<string | null>(null)

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/explore', label: 'Explore', icon: '🌍' },
    { href: '/deals', label: 'Deals', icon: '💰' },
    { href: '/about', label: 'About', icon: 'ℹ️' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary-600 via-primary-500 to-crystal-500 dark:from-gray-900 dark:via-primary-900 dark:to-gray-800 text-white shadow-glow-lg backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 transition-all duration-300">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with animation */}
        <Link
          href="/"
          className="relative text-2xl font-bold font-display tracking-wider hover:scale-110 transition-transform duration-300 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-accent-400 blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></span>
          <span className="relative flex items-center gap-2">
            <span className="animate-bounce-gentle">🗺️</span>
            GoExplore
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-2 md:space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onMouseEnter={() => setActiveHover(item.href)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative group px-3 md:px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-smooth flex items-center gap-1 md:gap-2 text-sm md:text-base hover:bg-white/20 dark:hover:bg-gray-700/50"
              >
                {/* Background glow on hover */}
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg transition-opacity duration-300 ${
                    activeHover === item.href ? 'opacity-100' : 'opacity-0'
                  }`}
                ></span>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-1 md:gap-2">
                  <span className="text-lg animate-pulse-slow">{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </span>

                {/* Bottom border animation */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-300 to-accent-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Animated top border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-accent-400 to-primary-400 animate-pulse-slow"></div>
    </nav>
  )
}

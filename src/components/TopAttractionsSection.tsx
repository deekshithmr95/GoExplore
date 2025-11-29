'use client'

import { useState, useEffect } from 'react'
import { fetchTopAttractionsOSM } from '@/lib/attractions'

interface Attraction {
  id: number
  name: string
  type: string
  description: string
  rating: number
}

interface TopAttractionsSectionProps {
  lat: number
  lon: number
  city?: string
}

export default function TopAttractionsSection({ lat, lon }: TopAttractionsSectionProps) {
  const [attractions, setAttractions] = useState<Attraction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAttractions = async () => {
      setLoading(true)
      const data = await fetchTopAttractionsOSM(lat, lon)
      setAttractions(data)
      setLoading(false)
    }

    loadAttractions()
  }, [lat, lon])

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top 6 Attractions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 h-40 rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🏛️ Top 6 Attractions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attractions.map((attraction) => (
          <div
            key={attraction.id}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{attraction.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{attraction.type}</p>
              </div>
              <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded-full">
                <span className="text-yellow-600 dark:text-yellow-300">★</span>
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-300">{attraction.rating}</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{attraction.description}</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

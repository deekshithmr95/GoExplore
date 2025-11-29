'use client'

import { useState, useEffect } from 'react'
import { fetchEventsForCity } from '@/lib/attractions'

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: string
  attendees: number
  price: string
}

interface EventsSectionProps {
  city: string
}

export default function EventsSection({ city }: EventsSectionProps) {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true)
      const data = await fetchEventsForCity(city)
      setEvents(data)
      setLoading(false)
    }

    loadEvents()
  }, [city])

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      music: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
      food: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
      art: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300',
      sports: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
      tech: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
      culture: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300',
    }
    return colors[category] || colors.culture
  }

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🎉 Upcoming Events</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 h-24 rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🎉 Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="grid md:grid-cols-4 gap-4 items-center">
              <div className="md:col-span-2">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{event.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="md:col-span-1">
                <p className="text-xs text-gray-600 dark:text-gray-400 uppercase font-semibold mb-1">Date & Time</p>
                <p className="font-bold text-gray-900 dark:text-white">{event.date}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{event.time}</p>
              </div>

              <div className="md:col-span-1 text-right">
                <p className="text-xs text-gray-600 dark:text-gray-400 uppercase font-semibold mb-1">Price</p>
                <p className="font-bold text-blue-600 dark:text-blue-400 text-lg">{event.price}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{event.attendees.toLocaleString()} attending</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">📍 {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

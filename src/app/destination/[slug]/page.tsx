import Image from 'next/image'
import { Suspense } from 'react'
import TopAttractionsSection from '@/components/TopAttractionsSection'
import EventsSection from '@/components/EventsSection'

interface DestinationDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

const destinationData: Record<string, any> = {
  paris: {
    name: 'Paris',
    country: 'France',
    lat: 48.8566,
    lon: 2.3522,
    emoji: '🗼',
    description: 'City of Love and Lights',
    fullDescription:
      'Paris is renowned for its stunning architecture, world-class museums, and romantic ambiance. From the iconic Eiffel Tower to charming cafés along the Seine, every corner offers a unique experience.',
    highlights: [
      'Eiffel Tower & Arc de Triomphe',
      'Louvre Museum & Notre-Dame',
      'Seine River Cruises',
      'Champs-Élysées Shopping',
      'Authentic French Cuisine',
    ],
    bestTime: 'April-June, Sept-Oct',
    language: 'French',
    currency: 'EUR (€)',
    population: '2.2M',
    area: '105 km²',
    timezone: 'CET (UTC+1)',
    weather: '12-18°C',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&h=600&fit=crop',
  },
  tokyo: {
    name: 'Tokyo',
    country: 'Japan',
    lat: 35.6762,
    lon: 139.6503,
    emoji: '🗾',
    description: 'Modern Meets Tradition',
    fullDescription:
      'Tokyo seamlessly blends ancient traditions with cutting-edge technology. Experience serene temples, bustling markets, futuristic skyscrapers, and incredible food scenes all in one vibrant city.',
    highlights: ['Senso-ji Temple', 'Shibuya Crossing', 'Tokyo Skytree', 'Tsukiji Fish Market', 'Cherry Blossom Season'],
    bestTime: 'March-May, Sept-Nov',
    language: 'Japanese',
    currency: 'JPY (¥)',
    population: '13.9M',
    area: '2,194 km²',
    timezone: 'JST (UTC+9)',
    weather: '5-15°C',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a4?w=1000&h=600&fit=crop',
  },
  barcelona: {
    name: 'Barcelona',
    country: 'Spain',
    lat: 41.3874,
    lon: 2.1686,
    emoji: '🏖️',
    description: 'Beach and Architecture',
    fullDescription:
      'Barcelona captivates with its unique architecture, beautiful beaches, and vibrant culture. Gaudí\'s masterpieces and lively tapas bars create an unforgettable Mediterranean experience.',
    highlights: ['Sagrada Familia', 'Park Güell', 'Gothic Quarter', 'Montjuïc Castle', 'Beach Clubs & Nightlife'],
    bestTime: 'May-June, Sept-Oct',
    language: 'Catalan, Spanish',
    currency: 'EUR (€)',
    population: '1.6M',
    area: '101.9 km²',
    timezone: 'CET (UTC+1)',
    weather: '8-20°C',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1000&h=600&fit=crop',
  },
}

export function generateStaticParams() {
  return Object.keys(destinationData).map((slug) => ({
    slug,
  }))
}

export default async function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const resolvedParams = await params
  const destination = destinationData[resolvedParams.slug] || destinationData.paris

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <div className="flex items-end gap-4">
                <div className="text-7xl">{destination.emoji}</div>
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">{destination.name}</h1>
                  <p className="text-2xl text-gray-200">{destination.country}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Population', value: destination.population, icon: '👥' },
              { label: 'Area', value: destination.area, icon: '📍' },
              { label: 'Timezone', value: destination.timezone, icon: '🕐' },
              { label: 'Temperature', value: destination.weather, icon: '🌡️' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase font-semibold mb-1">{item.label}</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About {destination.name}</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">{destination.fullDescription}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">✨ Highlights</h3>
              <ul className="space-y-3">
                {destination.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📋 Travel Info</h3>
              <div className="space-y-3">
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-900 dark:text-white">Best Time:</span>
                  <span className="text-gray-700 dark:text-gray-300">{destination.bestTime}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-900 dark:text-white">Language:</span>
                  <span className="text-gray-700 dark:text-gray-300">{destination.language}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-900 dark:text-white">Currency:</span>
                  <span className="text-gray-700 dark:text-gray-300">{destination.currency}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Attractions */}
        <Suspense fallback={<div className="text-center py-12">Loading attractions...</div>}>
          <div className="mb-8">
            <TopAttractionsSection lat={destination.lat} lon={destination.lon} city={destination.name} />
          </div>
        </Suspense>

        {/* Events */}
        <Suspense fallback={<div className="text-center py-12">Loading events...</div>}>
          <div>
            <EventsSection city={destination.name} />
          </div>
        </Suspense>
      </div>
    </div>
  )
}

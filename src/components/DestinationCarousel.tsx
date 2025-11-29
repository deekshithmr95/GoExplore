'use client'

import { useState } from 'react'

interface CarouselProps {
  onLocationChange: (location: any) => void
}

const destinations = [
  {
    name: 'Paris',
    country: 'France',
    emoji: '🗼',
    description: 'City of Love and Lights',
    details: 'Paris is renowned for its stunning architecture, world-class museums, and romantic ambiance. From the iconic Eiffel Tower to charming cafés along the Seine, every corner offers a unique experience.',
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
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=500&fit=crop',
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    emoji: '🗾',
    description: 'Modern Meets Tradition',
    details: 'Tokyo seamlessly blends ancient traditions with cutting-edge technology. Experience serene temples, bustling markets, futuristic skyscrapers, and incredible food scenes all in one vibrant city.',
    highlights: [
      'Senso-ji Temple',
      'Shibuya Crossing',
      'Tokyo Skytree',
      'Tsukiji Fish Market',
      'Cherry Blossom Season',
    ],
    bestTime: 'March-May, Sept-Nov',
    language: 'Japanese',
    currency: 'JPY (¥)',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a4?w=500&h=500&fit=crop',
  },
  {
    name: 'Barcelona',
    country: 'Spain',
    emoji: '🏖️',
    description: 'Beach and Architecture',
    details: 'Barcelona captivates with its unique architecture, beautiful beaches, and vibrant culture. Gaudí\'s masterpieces and lively tapas bars create an unforgettable Mediterranean experience.',
    highlights: [
      'Sagrada Familia',
      'Park Güell',
      'Gothic Quarter',
      'Montjuïc Castle',
      'Beach Clubs & Nightlife',
    ],
    bestTime: 'May-June, Sept-Oct',
    language: 'Catalan, Spanish',
    currency: 'EUR (€)',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=500&h=500&fit=crop',
  },
  {
    name: 'New York',
    country: 'USA',
    emoji: '🗽',
    description: 'The City That Never Sleeps',
    details: 'New York is a global metropolis of endless energy and diversity. From Broadway shows to world-famous museums, iconic landmarks, and diverse neighborhoods, there\'s always something new to discover.',
    highlights: [
      'Statue of Liberty',
      'Times Square',
      'Central Park',
      'Broadway Shows',
      'World-Class Museums',
    ],
    bestTime: 'May-June, Sept-Oct',
    language: 'English',
    currency: 'USD ($)',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=500&fit=crop',
  },
  {
    name: 'Sydney',
    country: 'Australia',
    emoji: '🏄',
    description: 'Beaches and Harbor',
    details: 'Sydney offers stunning coastal beauty, vibrant culture, and year-round outdoor activities. The iconic Opera House and Harbour Bridge dominate a picturesque waterfront setting.',
    highlights: [
      'Sydney Opera House',
      'Bondi Beach',
      'Harbour Bridge Climb',
      'Royal Botanic Gardens',
      'Coastal Walks',
    ],
    bestTime: 'Sept-Nov, March-May',
    language: 'English',
    currency: 'AUD ($)',
    image: 'https://images.unsplash.com/photo-1506973404872-a4a8f1d778e5?w=500&h=500&fit=crop',
  },
  {
    name: 'Dubai',
    country: 'UAE',
    emoji: '🌆',
    description: 'Desert and Luxury',
    details: 'Dubai is a playground of ultra-modern architecture, luxury shopping, and desert adventures. Experience world-class hospitality in the heart of the Arabian Peninsula.',
    highlights: [
      'Burj Khalifa',
      'Palm Jumeirah',
      'Desert Safari',
      'Gold Souk',
      'Luxury Shopping Malls',
    ],
    bestTime: 'November-March',
    language: 'Arabic, English',
    currency: 'AED (د.إ)',
    image: 'https://images.unsplash.com/photo-1512453475868-d7bebf2fb3ad?w=500&h=500&fit=crop',
  },
]

export default function DestinationCarousel({ onLocationChange }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1))
    onLocationChange(destinations[(currentIndex === 0 ? destinations.length - 1 : currentIndex - 1)])
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1))
    onLocationChange(destinations[(currentIndex === destinations.length - 1 ? 0 : currentIndex + 1)])
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    onLocationChange(destinations[index])
  }

  const current = destinations[currentIndex]

  return (
    <div className="w-full">
      {/* Main Carousel Card */}
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/400x400?text=${current.name}`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-5xl font-bold text-white">{current.emoji}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {current.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{current.country}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {current.details}
              </p>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                  ✨ Highlights
                </h3>
                <ul className="space-y-1">
                  {current.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase font-semibold">Best Time</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">{current.bestTime}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase font-semibold">Language</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">{current.language}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 uppercase font-semibold">Currency</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">{current.currency}</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 active:scale-95">
              <a href={`/destination/${current.name.toLowerCase()}`}>
                Plan Your Trip →
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={goToPrevious}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 active:scale-95"
        >
          ← Previous
        </button>

        {/* Dots */}
        <div className="flex gap-2 justify-center flex-wrap">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-8 h-3 bg-blue-600 rounded-full'
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-blue-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 active:scale-95"
        >
          Next →
        </button>
      </div>

      {/* Counter */}
      <div className="text-center mt-6 text-gray-600 dark:text-gray-400 text-sm">
        {currentIndex + 1} / {destinations.length}
      </div>
    </div>
  )
}

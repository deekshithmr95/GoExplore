'use client'

import DestinationCarousel from '@/components/DestinationCarousel'
import InteractiveEngagement from '@/components/InteractiveEngagement'
import BookingAggregator from '@/components/BookingAggregator'
import InteractiveWorldMap from '@/components/InteractiveWorldMap'

export default function Explore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Explore the World
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover amazing destinations with our interactive carousel. Select a destination to explore attractions, events, and local information.
          </p>
        </div>

        {/* Carousel Section - Full Width First */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Destinations</h2>
            <DestinationCarousel onLocationChange={() => {}} />
          </div>
        </div>

        {/* Booking Aggregator Section */}
        <div className="mb-16">
          <BookingAggregator />
        </div>

        {/* Interactive World Map Section */}
        <div className="mb-16">
          <InteractiveWorldMap />
        </div>

        {/* Interactive Engagement Section */}
        <div className="mb-16">
          <InteractiveEngagement />
        </div>

        {/* Information Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">How to Use GoExplore</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-6xl">�</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Browse Destinations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use the carousel to browse through our collection of 250+ destinations worldwide. Click on any destination to learn more.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-6xl">📍</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Discover Attractions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  View top attractions, restaurants, and points of interest powered by OpenStreetMap. Find exactly what you want to see.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="text-6xl">🎫</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Find Events</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Discover upcoming events, festivals, and experiences. Check dates, locations, and ticket information all in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">💡 Pro Tips</h3>
            <ul className="space-y-3 text-blue-800 dark:text-blue-200">
              <li>✓ Check the best time to visit each destination</li>
              <li>✓ Review currency and language information</li>
              <li>✓ Save your favorite destinations for later</li>
              <li>✓ Check real-time weather before traveling</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">🌟 Featured Features</h3>
            <ul className="space-y-3 text-purple-800 dark:text-purple-200">
              <li>✓ Real-time weather data integration</li>
              <li>✓ Local event recommendations</li>
              <li>✓ OpenStreetMap attractions database</li>
              <li>✓ Dark mode support for comfortable browsing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

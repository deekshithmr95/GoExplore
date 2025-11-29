'use client'

import { useState } from 'react'

interface MapLocation {
  id: string
  name: string
  country: string
  lat: number
  lon: number
  emoji: string
  image: string
  rating: number
  description: string
  highlights: string[]
}

const locations: MapLocation[] = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    lat: 48.8566,
    lon: 2.3522,
    emoji: '🗼',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
    rating: 4.8,
    description: 'City of Love and Lights',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River'],
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    lat: 35.6762,
    lon: 139.6503,
    emoji: '🗾',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a4?w=600&h=400&fit=crop',
    rating: 4.7,
    description: 'Modern Meets Tradition',
    highlights: ['Senso-ji Temple', 'Shibuya Crossing', 'Tokyo Skytree'],
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    lat: 41.3874,
    lon: 2.1686,
    emoji: '🏖️',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop',
    rating: 4.7,
    description: 'Beach and Architecture',
    highlights: ['Sagrada Familia', 'Park Güell', 'Gothic Quarter'],
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    lat: 25.2048,
    lon: 55.2708,
    emoji: '🏙️',
    image: 'https://images.unsplash.com/photo-1512453475868-caf998fdf4fe?w=600&h=400&fit=crop',
    rating: 4.6,
    description: 'Luxury Desert Oasis',
    highlights: ['Burj Khalifa', 'Palm Jumeirah', 'Desert Safari'],
  },
  {
    id: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    lat: 13.7563,
    lon: 100.5018,
    emoji: '🏯',
    image: 'https://images.unsplash.com/photo-1571896349842-c8b7baf0e6b1?w=600&h=400&fit=crop',
    rating: 4.6,
    description: 'Land of Smiles',
    highlights: ['Grand Palace', 'Floating Markets', 'Street Food'],
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    lat: 41.9028,
    lon: 12.4964,
    emoji: '🏛️',
    image: 'https://images.unsplash.com/photo-1552832860-cfaf4f71a564?w=600&h=400&fit=crop',
    rating: 4.8,
    description: 'Eternal City',
    highlights: ['Colosseum', 'Vatican', 'Roman Forum'],
  },
  {
    id: 'newyork',
    name: 'New York',
    country: 'USA',
    lat: 40.7128,
    lon: -74.006,
    emoji: '🗽',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
    rating: 4.7,
    description: 'The City That Never Sleeps',
    highlights: ['Statue of Liberty', 'Times Square', 'Central Park'],
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    country: 'Netherlands',
    lat: 52.3676,
    lon: 4.9041,
    emoji: '🚲',
    image: 'https://images.unsplash.com/photo-1519167758993-d2dc14990b47?w=600&h=400&fit=crop',
    rating: 4.9,
    description: 'Venice of the North',
    highlights: ['Canal Tour', 'Anne Frank House', 'Van Gogh Museum'],
  },
]

export default function InteractiveWorldMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation>(locations[0])
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [mapStyle, setMapStyle] = useState('satellite')

  // Calculate pixel position on map (Web Mercator projection simplified)
  const getMapPosition = (lat: number, lon: number) => {
    const mapWidth = 1200
    const mapHeight = 600
    const x = ((lon + 180) / 360) * mapWidth
    const y = ((90 - lat) / 180) * mapHeight
    return { x, y }
  }

  const getMapGradient = () => {
    switch (mapStyle) {
      case 'satellite':
        return 'bg-gradient-to-br from-crystal-300 via-primary-400 to-crystal-500'
      case 'terrain':
        return 'bg-gradient-to-br from-emerald-300 via-green-400 to-emerald-500'
      default:
        return 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950'
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="text-6xl animate-bounce-gentle mb-4">🌍</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-4">
            Interactive <span className="text-gradient">World Map</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore destinations around the globe. Click pins to view details or select from list below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="card-interactive bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
              {/* Map Style Toggle */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-2 bg-gray-50 dark:bg-gray-700/30">
                {[
                  { id: 'satellite', label: '📡 Satellite', icon: '📡' },
                  { id: 'terrain', label: '🏔️ Terrain', icon: '🏔️' },
                  { id: 'dark', label: '🌙 Dark', icon: '🌙' },
                ].map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setMapStyle(style.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                      mapStyle === style.id
                        ? 'bg-gradient-to-r from-primary-600 to-crystal-600 text-white shadow-glow'
                        : 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500 shadow-card'
                    }`}
                  >
                    <span className="text-lg">{style.icon}</span>
                    <span className="hidden sm:inline">{style.label.split(' ')[1]}</span>
                  </button>
                ))}
              </div>

              {/* Interactive Map Canvas */}
              <div
                className={`relative w-full h-96 md:h-[500px] overflow-hidden transition-all duration-500 ${getMapGradient()}`}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* World Map SVG Background */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 600">
                  <defs>
                    <pattern id="grid" width="120" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 120 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="1200" height="600" fill="url(#grid)" />
                </svg>

                {/* Location Pins */}
                <div className="absolute inset-0">
                  {locations.map((location, idx) => {
                    const pos = getMapPosition(location.lat, location.lon)
                    const isSelected = selectedLocation.id === location.id
                    const isHovered = hoveredLocation === location.id

                    return (
                      <div
                        key={location.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all"
                        style={{
                          left: `${(pos.x / 1200) * 100}%`,
                          top: `${(pos.y / 600) * 100}%`,
                          animationDelay: `${idx * 50}ms`,
                        }}
                        onMouseEnter={() => setHoveredLocation(location.id)}
                        onMouseLeave={() => setHoveredLocation(null)}
                      >
                        {/* Pin Button */}
                        <button
                          onClick={() => setSelectedLocation(location)}
                          className={`relative z-10 transition-all duration-300 transform hover:scale-125 active:scale-110 ${
                            isSelected ? 'scale-150' : isHovered ? 'scale-125' : 'scale-100'
                          }`}
                        >
                          {/* Pulse animation for selected */}
                          {isSelected && (
                            <>
                              <div className="absolute inset-0 rounded-full bg-accent-400 opacity-40 animate-pulse-slow"></div>
                              <div className="absolute inset-0 rounded-full border-2 border-accent-400 animate-ping" style={{ animationDuration: '1.5s' }}></div>
                            </>
                          )}

                          {/* Pin Circle */}
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold border-3 shadow-glow-lg transition-all duration-300 ${
                              isSelected
                                ? 'bg-gradient-to-br from-accent-500 to-accent-600 border-white scale-125 shadow-glow-lg'
                                : isHovered
                                  ? 'bg-gradient-to-br from-primary-500 to-crystal-500 border-white shadow-lg'
                                  : 'bg-white dark:bg-gray-700 border-primary-500 dark:border-primary-400 shadow-card hover:shadow-glow'
                            }`}
                          >
                            {location.emoji}
                          </div>
                        </button>

                        {/* Tooltip on hover */}
                        {(isHovered || isSelected) && (
                          <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 px-4 py-3 rounded-xl shadow-glow-lg whitespace-nowrap border-2 border-primary-400 dark:border-primary-600 z-20 animate-scale-in">
                            <p className="font-bold text-gray-900 dark:text-white">{location.name}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{location.country}</p>
                            <p className="text-xs text-yellow-600 dark:text-yellow-400 font-semibold">⭐ {location.rating}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Map Attribution */}
                <div className="absolute bottom-4 right-4 text-sm font-semibold text-white bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  {mapStyle === 'satellite' ? '📡 Satellite View' : mapStyle === 'terrain' ? '🏔️ Terrain View' : '🌙 Dark Mode'}
                </div>
              </div>

              {/* Map Info */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-50 to-crystal-50 dark:from-gray-700/30 dark:to-gray-800/30">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium flex items-center gap-2">
                  <span>📍 Selected:</span>
                  <span className="font-bold text-primary-700 dark:text-primary-300">{selectedLocation.name}</span>
                  <span>•</span>
                  <span className="text-crystal-600 dark:text-crystal-400 font-mono">
                    Lat: {selectedLocation.lat.toFixed(2)}° Lon: {selectedLocation.lon.toFixed(2)}°
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {/* Image Preview */}
            <div className="card-interactive bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden hover:shadow-glow-lg">
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-4xl font-bold text-white drop-shadow-lg">{selectedLocation.emoji}</h2>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-6">
                <h3 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-2">
                  {selectedLocation.name}
                </h3>
                <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">
                  {selectedLocation.country}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                  &quot;{selectedLocation.description}&quot;
                </p>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl transition-transform ${
                          i < Math.floor(selectedLocation.rating)
                            ? 'text-yellow-400 hover:scale-125'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white text-lg">
                    {selectedLocation.rating}
                  </span>
                </div>

                {/* Coordinates */}
                <div className="bg-gradient-to-br from-primary-50 to-crystal-50 dark:from-primary-900/20 dark:to-crystal-900/20 rounded-lg p-3 mb-4 border border-primary-200 dark:border-primary-700/50">
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-mono font-semibold">
                    <span className="text-primary-700 dark:text-primary-400">📍 Latitude:</span> {selectedLocation.lat.toFixed(4)}°<br />
                    <span className="text-crystal-700 dark:text-crystal-400">📍 Longitude:</span> {selectedLocation.lon.toFixed(4)}°
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-bold font-display text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-lg">✨</span>
                    Top Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedLocation.highlights.map((highlight, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-3 p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                      >
                        <span className="text-primary-600 dark:text-primary-400 font-bold">•</span>
                        {highlight}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Explore Button */}
                <button className="w-full btn-primary bg-gradient-to-r from-primary-600 to-crystal-600 hover:from-primary-700 hover:to-crystal-700 text-white font-bold py-3 rounded-lg shadow-glow hover:shadow-glow-lg mt-6">
                  🔍 Explore {selectedLocation.name} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Location List */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h3 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-3xl">📍</span>
            All Destinations
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((location, idx) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`card-interactive relative overflow-hidden group transition-all duration-300 transform hover:scale-105 p-4 ${
                  selectedLocation.id === location.id
                    ? 'bg-gradient-to-br from-primary-600 to-crystal-600 text-white shadow-glow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-glow'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-accent-400/0 to-accent-400/0 group-hover:from-accent-400/10 group-hover:to-accent-400/20 transition-all duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {location.emoji}
                  </div>
                  <p className="font-bold font-display text-lg">{location.name}</p>
                  <p
                    className={`text-sm ${
                      selectedLocation.id === location.id
                        ? 'text-blue-100 font-medium'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {location.country}
                  </p>
                  <p
                    className={`text-xs mt-2 font-semibold ${
                      selectedLocation.id === location.id
                        ? 'text-yellow-100'
                        : 'text-yellow-600 dark:text-yellow-400'
                    }`}
                  >
                    ⭐ {location.rating}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="bg-gradient-to-r from-primary-600 via-crystal-500 to-primary-600 dark:from-primary-900 dark:via-gray-800 dark:to-primary-900 rounded-2xl p-8 sm:p-12 text-white shadow-glow-lg relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold font-display mb-8 flex items-center gap-3">
                <span className="text-4xl">🗺️</span>
                How to Use Interactive Map
              </h3>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: '👆', title: 'Click Pins', desc: 'Click any location pin on the map to view detailed information and images.' },
                  { icon: '🖱️', title: 'Hover for Preview', desc: 'Hover over pins to see location name, country, and rating information.' },
                  { icon: '📡', title: 'Switch Views', desc: 'Toggle between satellite, terrain, and dark map views for different perspectives.' },
                ].map((tip, idx) => (
                  <div key={idx} className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {tip.icon}
                    </div>
                    <p className="font-bold font-display mb-2 text-lg">{tip.title}</p>
                    <p className="text-blue-100">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'

interface AccommodationOffer {
  id: string
  platform: 'airbnb' | 'booking' | 'hotels' | 'expedia'
  name: string
  location: string
  price: number
  originalPrice: number
  rating: number
  reviews: number
  image: string
  amenities: string[]
  discount: number
  url: string
  badge?: string
}

// Mock data - In production, this would come from real APIs
const mockOffers: AccommodationOffer[] = [
  {
    id: '1',
    platform: 'airbnb',
    name: 'Cozy Parisian Apartment',
    location: 'Paris, France',
    price: 45,
    originalPrice: 89,
    rating: 4.8,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    amenities: ['WiFi', 'Kitchen', 'Pool'],
    discount: 49,
    url: 'https://www.airbnb.com',
    badge: '🔥 Flash Deal',
  },
  {
    id: '2',
    platform: 'booking',
    name: 'Tokyo Business Hotel',
    location: 'Tokyo, Japan',
    price: 38,
    originalPrice: 75,
    rating: 4.6,
    reviews: 521,
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=400&h=300&fit=crop',
    amenities: ['WiFi', 'Restaurant', 'Gym'],
    discount: 49,
    url: 'https://www.booking.com',
    badge: '⭐ Best Value',
  },
  {
    id: '3',
    platform: 'hotels',
    name: 'Barcelona Beach Resort',
    location: 'Barcelona, Spain',
    price: 52,
    originalPrice: 105,
    rating: 4.7,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    amenities: ['Beach Access', 'Spa', 'Restaurant'],
    discount: 50,
    url: 'https://www.hotels.com',
    badge: '🏖️ Summer Special',
  },
  {
    id: '4',
    platform: 'expedia',
    name: 'New York Boutique Hotel',
    location: 'New York, USA',
    price: 65,
    originalPrice: 150,
    rating: 4.5,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    amenities: ['Rooftop Bar', 'Gym', 'Concierge'],
    discount: 57,
    url: 'https://www.expedia.com',
    badge: '✨ Luxury Deal',
  },
  {
    id: '5',
    platform: 'booking',
    name: 'Amsterdam Canal House',
    location: 'Amsterdam, Netherlands',
    price: 48,
    originalPrice: 95,
    rating: 4.9,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1519167758993-d2dc14990b47?w=400&h=300&fit=crop',
    amenities: ['Canal View', 'Kitchen', 'Bike Rental'],
    discount: 49,
    url: 'https://www.booking.com',
  },
  {
    id: '6',
    platform: 'airbnb',
    name: 'Bangkok Luxury Condo',
    location: 'Bangkok, Thailand',
    price: 28,
    originalPrice: 65,
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1571896349842-c8b7baf0e6b1?w=400&h=300&fit=crop',
    amenities: ['Pool', 'Gym', 'City View'],
    discount: 57,
    url: 'https://www.airbnb.com',
    badge: '💎 Best Price',
  },
]

const platformColors = {
  airbnb: 'from-rose-500 to-pink-600',
  booking: 'from-blue-500 to-cyan-600',
  hotels: 'from-purple-500 to-indigo-600',
  expedia: 'from-orange-500 to-red-600',
}

const platformLogos = {
  airbnb: '🏠',
  booking: '🛏️',
  hotels: '🏨',
  expedia: '✈️',
}

export default function BookingAggregator() {
  const [offers, setOffers] = useState<AccommodationOffer[]>([])
  const [filteredOffers, setFilteredOffers] = useState<AccommodationOffer[]>([])
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'discount'>('discount')
  const [priceRange, setPriceRange] = useState<number>(200)

  useEffect(() => {
    // Simulate API call
    setOffers(mockOffers)
    filterAndSortOffers(mockOffers, 'all', 'discount', 200)
  }, [])

  const filterAndSortOffers = (
    data: AccommodationOffer[],
    platform: string,
    sort: 'price' | 'rating' | 'discount',
    maxPrice: number
  ) => {
    let filtered = data

    // Filter by platform
    if (platform !== 'all') {
      filtered = filtered.filter((offer) => offer.platform === platform)
    }

    // Filter by price
    filtered = filtered.filter((offer) => offer.price <= maxPrice)

    // Sort
    if (sort === 'price') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating)
    } else if (sort === 'discount') {
      filtered.sort((a, b) => b.discount - a.discount)
    }

    setFilteredOffers(filtered)
  }

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform)
    filterAndSortOffers(offers, platform, sortBy, priceRange)
  }

  const handleSortChange = (sort: 'price' | 'rating' | 'discount') => {
    setSortBy(sort)
    filterAndSortOffers(offers, selectedPlatform, sort, priceRange)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value)
    setPriceRange(newPrice)
    filterAndSortOffers(offers, selectedPlatform, sortBy, newPrice)
  }

  return (
    <div className="w-full bg-gradient-to-br from-white to-indigo-50/50 dark:from-gray-950 dark:to-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="text-6xl animate-bounce-gentle mb-4">💰</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-4">
            Find <span className="text-gradient">Cheap Stays</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Compare prices across top booking platforms and find the best deals for your next adventure
          </p>
        </div>

        {/* Filters & Controls */}
        <div className="card-interactive bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Platform Filter */}
            <div>
              <label className="block text-sm font-bold font-display text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-xl">📱</span>
                Filter by Platform
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handlePlatformChange('all')}
                  className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
                    selectedPlatform === 'all'
                      ? 'bg-gradient-to-r from-primary-600 to-crystal-600 text-white shadow-glow'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-card'
                  }`}
                >
                  All Platforms
                </button>
                {(['airbnb', 'booking', 'hotels', 'expedia'] as const).map((platform) => (
                  <button
                    key={platform}
                    onClick={() => handlePlatformChange(platform)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedPlatform === platform
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {platformLogos[platform]} {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
                📊 Sort By
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleSortChange('discount')}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    sortBy === 'discount'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  🔥 Best Discount
                </button>
                <button
                  onClick={() => handleSortChange('price')}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    sortBy === 'price'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  💵 Lowest Price
                </button>
                <button
                  onClick={() => handleSortChange('rating')}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    sortBy === 'rating'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  ⭐ Highest Rated
                </button>
              </div>
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
              💰 Max Price per Night: ${priceRange}
            </label>
            <input
              type="range"
              min="20"
              max="200"
              value={priceRange}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>$20</span>
              <span>$200</span>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            🎯 Found {filteredOffers.length} amazing deals
          </p>
        </div>

        {/* Offers Grid */}
        {filteredOffers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Badge */}
                  {offer.badge && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {offer.badge}
                    </div>
                  )}
                  {/* Platform Badge */}
                  <div
                    className={`absolute top-2 right-2 bg-gradient-to-r ${platformColors[offer.platform]} text-white px-3 py-1 rounded-full text-sm font-bold`}
                  >
                    {platformLogos[offer.platform]} {offer.platform}
                  </div>
                  {/* Discount Badge */}
                  <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount}% OFF
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
                    {offer.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-1">
                    📍 {offer.location}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="font-bold text-gray-900 dark:text-white">{offer.rating}</span>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      ({offer.reviews} reviews)
                    </span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {offer.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                        ${offer.price}
                      </span>
                      <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                        ${offer.originalPrice}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">per night</p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={offer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 text-center"
                  >
                    🔗 Book Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No deals found matching your filters. Try adjusting your preferences! 🔍
            </p>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6 mt-12">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">ℹ️ How It Works</h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>✓ We compare prices from multiple booking platforms in real-time</li>
            <li>✓ Filter by price, rating, and platform to find the perfect deal</li>
            <li>✓ Click &quot;Book Now&quot; to visit the booking platform and complete your reservation</li>
            <li>✓ We help you save money by showing all available options in one place</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

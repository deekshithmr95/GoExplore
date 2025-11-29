'use client'

import { useState } from 'react'

interface Deal {
  id: string
  title: string
  description: string
  discount: number
  code?: string
  validUntil: string
  image: string
  category: 'flight' | 'hotel' | 'package' | 'activity'
  platform: string
  badge: string
}

const dealsData: Deal[] = [
  {
    id: '1',
    title: 'Paris 3-Night Getaway Bundle',
    description: 'Hotel + Flight combo at unbeatable prices. Includes 3-star hotel and round-trip flight.',
    discount: 40,
    code: 'PARIS40',
    validUntil: '2025-12-31',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=300&fit=crop',
    category: 'package',
    platform: 'Booking.com',
    badge: '🔥 Limited Time',
  },
  {
    id: '2',
    title: 'Tokyo Flash Sale - Flights',
    description: 'Round-trip flights to Tokyo from major US cities. Book within 48 hours.',
    discount: 35,
    validUntil: '2025-11-30',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a4?w=500&h=300&fit=crop',
    category: 'flight',
    platform: 'Expedia',
    badge: '✈️ Last Minute',
  },
  {
    id: '3',
    title: 'Barcelona Beach Hotels',
    description: '4-star beachfront hotels with free breakfast. Perfect for summer vacation.',
    discount: 50,
    code: 'BEACH50',
    validUntil: '2025-12-15',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=500&h=300&fit=crop',
    category: 'hotel',
    platform: 'Hotels.com',
    badge: '🏖️ Summer Deal',
  },
  {
    id: '4',
    title: 'New York Adventure Package',
    description: '5 days, 4 nights including hotel, Broadway show tickets, and NYC tour.',
    discount: 45,
    validUntil: '2025-12-20',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
    category: 'package',
    platform: 'Viator',
    badge: '🎭 Experience',
  },
  {
    id: '5',
    title: 'Dubai Luxury Resorts',
    description: 'All-inclusive 5-star resort stays. Spa, golf, and beach access included.',
    discount: 38,
    code: 'DUBAI38',
    validUntil: '2025-12-25',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop',
    category: 'hotel',
    platform: 'Airbnb',
    badge: '✨ Luxury',
  },
  {
    id: '6',
    title: 'Thailand Adventure Tour',
    description: '7-day guided tour including temples, islands, and cultural experiences.',
    discount: 42,
    validUntil: '2025-12-10',
    image: 'https://images.unsplash.com/photo-1571896349842-c8b7baf0e6b1?w=500&h=300&fit=crop',
    category: 'activity',
    platform: 'GetYourGuide',
    badge: '🌴 Adventure',
  },
  {
    id: '7',
    title: 'Amsterdam Canal Tour',
    description: 'Scenic 2-hour boat tour through historic canals with unlimited drinks.',
    discount: 25,
    validUntil: '2025-11-30',
    image: 'https://images.unsplash.com/photo-1519167758993-d2dc14990b47?w=500&h=300&fit=crop',
    category: 'activity',
    platform: 'Klook',
    badge: '🚤 Popular',
  },
  {
    id: '8',
    title: 'Rome Classic Tour',
    description: 'Skip-the-line tickets to Colosseum, Roman Forum, and Palatine Hill.',
    discount: 30,
    code: 'ROME30',
    validUntil: '2025-12-31',
    image: 'https://images.unsplash.com/photo-1552832860-cfaf4f71a564?w=500&h=300&fit=crop',
    category: 'activity',
    platform: 'Viator',
    badge: '🏛️ Cultural',
  },
]

const categoryColors = {
  flight: 'from-blue-500 to-cyan-600',
  hotel: 'from-purple-500 to-pink-600',
  package: 'from-green-500 to-emerald-600',
  activity: 'from-orange-500 to-red-600',
}

const categoryIcons = {
  flight: '✈️',
  hotel: '🏨',
  package: '📦',
  activity: '🎯',
}

export default function DealsAndOffers() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const deals = dealsData

  const filteredDeals = selectedCategory === 'all' ? deals : deals.filter((d) => d.category === selectedCategory)

  const handleCopyCode = (code: string | undefined) => {
    if (!code) return
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getDaysRemaining = (dateString: string) => {
    const today = new Date()
    const expiryDate = new Date(dateString)
    const diffTime = expiryDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🎉 Exclusive Travel Deals
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Save up to 50% on flights, hotels, packages, and activities. Limited time offers from top travel platforms!
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-bold transition transform ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white scale-105 shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg'
            }`}
          >
            All Deals
          </button>
          {Object.entries(categoryIcons).map(([category, icon]) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-bold transition transform ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white scale-105 shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg'
              }`}
            >
              {icon} {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDeals.map((deal) => {
            const daysLeft = getDaysRemaining(deal.validUntil)
            const isUrgent = daysLeft <= 7

            return (
              <div
                key={deal.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Category Badge */}
                  <div className={`absolute top-3 left-3 bg-gradient-to-r ${categoryColors[deal.category]} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                    {categoryIcons[deal.category]} {deal.category}
                  </div>
                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                    -{deal.discount}%
                  </div>
                  {/* Special Badge */}
                  <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold">
                    {deal.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {deal.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {deal.description}
                  </p>

                  {/* Platform & Urgency */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {deal.platform}
                    </span>
                    {isUrgent && (
                      <span className="text-xs bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-2 py-1 rounded-full font-bold">
                        Only {daysLeft} days left!
                      </span>
                    )}
                  </div>

                  {/* Promo Code */}
                  {deal.code && (
                    <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Promo Code:</p>
                          <p className="text-sm font-bold text-gray-900 dark:text-white font-mono">
                            {deal.code}
                          </p>
                        </div>
                        <button
                          onClick={() => handleCopyCode(deal.code)}
                          className={`px-3 py-1 rounded text-sm font-bold transition ${
                            copiedCode === deal.code
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                          }`}
                        >
                          {copiedCode === deal.code ? '✓' : '📋'}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Validity */}
                  <div className="mb-4 text-xs text-gray-600 dark:text-gray-400">
                    Valid until: <span className="font-bold">{deal.validUntil}</span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105">
                    🎁 Claim Deal →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">💰 How to Maximize Your Savings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-lg font-bold mb-2">Copy Promo Code</h3>
              <p>Click the copy button next to any promo code. It will be saved to your clipboard instantly.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="text-lg font-bold mb-2">Click Claim Deal</h3>
              <p>Each deal links directly to the booking platform. You&apos;ll be taken there with all the details.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg font-bold mb-2">Apply & Book</h3>
              <p>Paste the promo code at checkout to get your discount. Then book and enjoy your trip!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

interface LocationCardProps {
  location: {
    name: string
    emoji: string
    description: string
    details: string
    highlights: string[]
    bestTime: string
    language: string
    currency: string
  }
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-8 h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-6xl">{location.emoji}</div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{location.name}</h2>
          <p className="text-gray-600 dark:text-gray-400">{location.description}</p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        {location.details}
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
            ✨ Highlights
          </h3>
          <ul className="space-y-2">
            {location.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400 uppercase font-semibold">Best Time to Visit</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">{location.bestTime}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400 uppercase font-semibold">Language</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">{location.language}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400 uppercase font-semibold">Currency</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">{location.currency}</p>
          </div>
        </div>
      </div>

      <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 active:scale-95">
        Plan Your Trip →
      </button>
    </div>
  )
}

export default function Explore() {
  const destinations = [
    { name: 'Paris, France', emoji: '🗼', description: 'City of Love and Lights' },
    { name: 'Tokyo, Japan', emoji: '🗾', description: 'Modern Meets Tradition' },
    { name: 'Barcelona, Spain', emoji: '🏖️', description: 'Beach and Architecture' },
    { name: 'New York, USA', emoji: '🗽', description: 'The City That Never Sleeps' },
    { name: 'Sydney, Australia', emoji: '🏄', description: 'Beaches and Harbor' },
    { name: 'Dubai, UAE', emoji: '🌆', description: 'Desert and Luxury' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Explore Destinations
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Choose from our curated list of amazing destinations
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-40 flex items-center justify-center">
                <span className="text-6xl">{destination.emoji}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {destination.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{destination.description}</p>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to GoExplore
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Discover amazing destinations and plan your next adventure
          </p>
          <a
            href="/explore"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition"
          >
            Start Exploring
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">🌍 Discover</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Find hidden gems and popular destinations across the globe
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-green-600 mb-2">📍 Navigate</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get directions and local recommendations for your journey
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">✨ Share</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Share your experiences and inspire other travelers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

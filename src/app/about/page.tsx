export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          About GoExplore
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            GoExplore is dedicated to inspiring travelers and adventurers to discover the world's most 
            beautiful and unique destinations. We believe that travel should be accessible, fun, and 
            enriching for everyone.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What We Offer</h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-2xl mr-4">🗺️</span>
              <div>
                <strong>Comprehensive Guides:</strong> Detailed information about destinations worldwide
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">💡</span>
              <div>
                <strong>Travel Tips:</strong> Practical advice for travelers from experienced explorers
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">🌟</span>
              <div>
                <strong>Hidden Gems:</strong> Discover off-the-beaten-path locations and local experiences
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">👥</span>
              <div>
                <strong>Community:</strong> Connect with fellow travelers and share your stories
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-blue-600 dark:bg-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Adventure?</h3>
          <a
            href="/explore"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition inline-block"
          >
            Explore Destinations
          </a>
        </div>
      </div>
    </div>
  )
}

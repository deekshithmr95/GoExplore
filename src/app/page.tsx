import Link from 'next/link'
import InteractiveWorldMap from '@/components/InteractiveWorldMap'

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-300 to-crystal-300 dark:from-primary-900/30 dark:to-crystal-900/30 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-300 to-primary-300 dark:from-accent-900/20 dark:to-primary-900/20 rounded-full blur-3xl opacity-15 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-crystal-300 to-emerald-300 dark:from-crystal-900/20 dark:to-emerald-900/20 rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-block bg-gradient-to-r from-primary-100 to-crystal-100 dark:from-primary-900/50 dark:to-crystal-900/50 px-4 py-3 rounded-full border border-primary-200 dark:border-primary-700/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
                  <span className="text-primary-700 dark:text-primary-300 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    <span className="animate-swing">🌍</span>
                    Welcome to GoExplore
                  </span>
                </div>
                <h1 className="text-6xl sm:text-7xl font-bold font-display text-gray-900 dark:text-white leading-tight">
                  Discover Your Next 
                  <span className="ml-3 text-gradient animate-pulse-slow"> Adventure</span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                Explore the world&apos;s most amazing destinations. Find hidden gems, discover local attractions, and plan your perfect journey all in one place.
              </p>

              {/* Stats with animation */}
              <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-200 dark:border-gray-700">
                {[
                  { value: '250+', label: 'Destinations', delay: '0ms' },
                  { value: '50K+', label: 'Travelers', delay: '100ms' },
                  { value: '10K+', label: 'Reviews', delay: '200ms' },
                ].map((stat, i) => (
                  <div key={i} className="group cursor-pointer" style={{ animationDelay: stat.delay }}>
                    <div className="text-3xl font-bold font-display text-gradient group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/explore"
                  className="btn-primary relative overflow-hidden text-lg px-8 py-4 group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                    Start Exploring
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="btn-outline relative overflow-hidden text-lg"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Visual with animation */}
            <div className="relative h-96 sm:h-[500px] hidden lg:block animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-crystal-500 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-glow-lg transition-all duration-500 hover:-rotate-3">
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-crystal-500/20"></div>
                  <div className="text-9xl animate-bounce-gentle hover:animate-spin-slow transition-all cursor-pointer">
                    🌍
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-300 to-accent-400 rounded-full opacity-40 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-crystal-300 to-primary-300 rounded-full opacity-30 blur-xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 sm:py-32 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-gradient">GoExplore?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to plan and discover amazing destinations around the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🌐', title: 'Global Coverage', desc: 'Explore over 250 destinations worldwide with detailed information, attractions, and local tips.', color: 'from-primary-500 to-crystal-500' },
              { icon: '📍', title: 'Smart Recommendations', desc: 'Discover top attractions, restaurants, and events recommended by travelers and local experts.', color: 'from-crystal-500 to-emerald-500' },
              { icon: '✨', title: 'Easy Planning', desc: 'Plan your entire trip with real-time weather, currency info, and cultural insights.', color: 'from-accent-500 to-primary-500' },
              { icon: '🎫', title: 'Event Discovery', desc: 'Find and book local events, festivals, and experiences happening near your destination.', color: 'from-emerald-500 to-crystal-500' },
              { icon: '💰', title: 'Budget Friendly', desc: 'Get local currency info and pricing guides to make smart travel decisions.', color: 'from-accent-500 to-emerald-500' },
              { icon: '👥', title: 'Community Driven', desc: 'Share reviews, tips, and photos from thousands of travelers exploring the world.', color: 'from-primary-500 to-accent-500' },
            ].map((feature, i) => (
              <div
                key={i}
                className="card-interactive group hover:card-gradient"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className={`text-6xl mb-4 group-hover:scale-125 group-hover:animate-swing transition-all duration-300`}>
                  {feature.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive World Map Section */}
      <div className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 relative">
        <InteractiveWorldMap />
      </div>

      {/* Popular Destinations Preview */}
      <div className="py-20 sm:py-32 bg-white dark:bg-gray-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
              Popular <span className="text-gradient">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start your journey with some of the world&apos;s most visited and loved destinations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Paris', emoji: '🗼', description: 'City of Love and Lights', color: 'from-primary-500 to-crystal-500' },
              { name: 'Tokyo', emoji: '🗾', description: 'Modern Meets Tradition', color: 'from-crystal-500 to-emerald-500' },
              { name: 'Barcelona', emoji: '🏖️', description: 'Beach and Architecture', color: 'from-accent-500 to-primary-500' },
            ].map((dest, i) => (
              <Link
                key={dest.name}
                href={`/destination/${dest.name.toLowerCase()}`}
                className="card-interactive group relative overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                <div className="text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {dest.emoji}
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-2">
                  {dest.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {dest.description}
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-2 transition-all">
                  Explore <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 sm:py-32 bg-gradient-to-r from-primary-600 via-crystal-500 to-primary-600 dark:from-primary-900 dark:via-gray-800 dark:to-primary-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
            Ready to Explore the World?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers discovering amazing destinations and creating unforgettable memories.
          </p>
          <Link
            href="/explore"
            className="inline-block btn-primary text-lg px-10 py-4 bg-white text-primary-600 hover:text-primary-700 hover:bg-blue-50 font-semibold"
          >
            Start Your Adventure Now →
          </Link>
        </div>
      </div>
    </div>
  )
}

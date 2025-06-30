import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Dream Destinations
          </h1>
          <p className="text-center text-blue-100 mt-2 text-lg">
            Discover your next adventure
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">
            Popular Vacation Spots
          </h2>
          <p className="text-blue-700 text-lg max-w-2xl mx-auto">
            Explore these breathtaking destinations that offer unforgettable experiences
            and memories to last a lifetime.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1 - Santorini */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold">Santorini, Greece</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Santorini, Greece
              </h3>
              <p className="text-blue-700 mb-4 leading-relaxed">
                Experience the magic of white-washed buildings perched on dramatic cliffs, 
                stunning sunsets over the Aegean Sea, and charming villages that seem to 
                float above the crystal-clear waters.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold">From $1,200</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Maldives */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏝️</div>
                <h3 className="text-2xl font-bold">Maldives</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Maldives
              </h3>
              <p className="text-blue-700 mb-4 leading-relaxed">
                Escape to paradise with overwater bungalows, pristine beaches, 
                and some of the world's clearest turquoise waters. Perfect for 
                romance, relaxation, and unforgettable snorkeling adventures.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold">From $2,500</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200">
            © 2025 Dream Destinations. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
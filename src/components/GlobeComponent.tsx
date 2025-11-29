'use client'

import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

export default function GlobeComponent() {
  const [animationData, setAnimationData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/globe.json')
      .then(res => res.json())
      .then(data => {
        setAnimationData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Failed to load globe animation:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full py-20">
        <div className="text-5xl mb-4 animate-spin">🌍</div>
        <p className="text-gray-400 text-center">Loading globe...</p>
      </div>
    )
  }

  if (!animationData) {
    return (
      <div className="flex items-center justify-center w-full h-full py-20">
        <div className="text-6xl">🌍</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-20">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 400, height: 400 }}
        className="drop-shadow-lg"
      />
      <div className="mt-8 text-center">
        <p className="text-white text-lg font-semibold">Explore the World</p>
        <p className="text-blue-100 text-sm mt-2">Select a destination to get started</p>
      </div>
    </div>
  )
}

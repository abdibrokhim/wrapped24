'use client'

import { useState, useEffect } from 'react'
import SplashScreen from './components/SplashScreen'
import MainContent from './components/MainContent'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-[#0B0E11] text-[#FFFFFF] min-h-screen">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <MainContent />
      )}
    </main>
  )
}


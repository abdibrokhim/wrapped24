'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface Activity {
  description: string
  citations: string[]
}

interface MonthData {
  month: string
  activities: Activity[]
}

interface MonthCardProps {
  month: MonthData
}

const MonthCard: React.FC<MonthCardProps> = ({ month }) => {
  const [currentActivity, setCurrentActivity] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentActivity((prev) => (prev + 1) % month.activities.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [inView, month.activities.length])

  const handleScroll = () => {
    if (cardRef.current) {
      const scrollPercentage = cardRef.current.scrollTop / (cardRef.current.scrollHeight - cardRef.current.clientHeight)
      const activityIndex = Math.floor(scrollPercentage * month.activities.length)
      setCurrentActivity(activityIndex)
    }
  }

  return (
    <div
      ref={ref}
      className="bg-[#1A1E23] rounded-lg shadow-lg p-6 mb-8 h-96 overflow-hidden"
    >
      <h3 className="text-2xl font-bold mb-4 text-[#ee5d19]">{month.month}</h3>
      <div
        ref={cardRef}
        className="h-full overflow-y-auto custom-scrollbar"
        onScroll={handleScroll}
      >
        {month.activities.map((activity, index) => (
          <div
            key={index}
            className={`mb-4 transition-all duration-500 ${
              index === currentActivity ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <p className="text-lg">{activity.description}</p>
            {activity.citations.length > 0 && (
              <div className="text-sm text-[#787B89] mt-2">
                Citations: {activity.citations.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MonthCard


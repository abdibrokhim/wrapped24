import React, { useState, useEffect } from 'react'
import MonthCard from './MonthCard'
import ProgressBar from './ProgressBar'
import wrappedData from '../wrapped2024.json'

const MainContent: React.FC = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)

  const handleMonthChange = (index: number) => {
    setCurrentMonthIndex((index + wrappedData.months.length) % wrappedData.months.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleMonthChange(currentMonthIndex + 1)
      } else if (e.key === 'ArrowLeft') {
        handleMonthChange(currentMonthIndex - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentMonthIndex])

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0B0E11] to-[#1A1E23]">
        <h1 className="text-[20vw] font-bold leading-none text-center text-[#ee5d19]">Wrapped</h1>
        <h2 className="text-[10vw] leading-none text-center text-[#625df5]">2024</h2>
      </div>
      <div className="w-full max-w-4xl px-4 py-8">
        <MonthCard month={wrappedData.months[currentMonthIndex]} />
        <div className="mt-4 flex gap-2 justify-between">
          {wrappedData.months.map((_, index) => (
            <ProgressBar
              key={index}
              isCurrent={index === currentMonthIndex}
              onClick={() => handleMonthChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent


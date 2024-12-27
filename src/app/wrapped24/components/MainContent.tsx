import React from 'react'
import MonthCard from './MonthCard'
import ProgressBar from './ProgressBar'
import wrappedData from '../wrapped2024.json'

const MainContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-8xl font-bold mb-4">Wrapped</h1>
      <h2 className="text-6xl mb-8">2024</h2>
      <div className="w-full max-w-4xl">
        {wrappedData.months.map((month, index) => (
          <React.Fragment key={month.month}>
            <MonthCard month={month} />
            <ProgressBar current={index + 1} total={wrappedData.months.length} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default MainContent


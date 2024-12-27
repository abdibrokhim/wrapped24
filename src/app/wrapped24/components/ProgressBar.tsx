import React from 'react'

interface ProgressBarProps {
  current: number
  total: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100

  return (
    <div className="w-full bg-[#1A1E23] h-2 rounded-full mb-4">
      <div
        className="bg-[#625df5] h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar


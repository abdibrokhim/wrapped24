import React from 'react'

interface ProgressBarProps {
  isCurrent: boolean
  onClick: () => void
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isCurrent, onClick }) => {
  return (
    <div
      className={`w-full h-1 rounded-full cursor-pointer transition-all duration-300 ${
        isCurrent ? 'bg-[#625df5]' : 'bg-[#1A1E23]'
      }`}
      onClick={onClick}
    ></div>
  )
}

export default ProgressBar


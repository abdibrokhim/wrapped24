"use client";
import React, { useState, useRef, useEffect } from "react";

interface Activity {
  description: string;
  citations: string[];
}

interface MonthData {
  month: string;
  activities: Activity[];
}

interface MonthCardProps {
  month: MonthData;
}

const MonthCard: React.FC<MonthCardProps> = ({ month }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset to the first activity whenever the 'month' changes
    setCurrentActivityIndex(0);
  }, [month]);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    // Prevent normal scrolling
    e.preventDefault();

    const delta = e.deltaY;
    const totalActivities = month.activities.length;

    setCurrentActivityIndex((prevIndex) => {
      // If delta > 0, move forward; if < 0, move backward
      const newIndex = prevIndex + (delta > 0 ? 1 : -1);
      // Cycle through array (modulus approach)
      return (newIndex + totalActivities) % totalActivities;
    });
  };

  // Instead of returning a string of Tailwind classes, return style objects
  const getActivityStyle = (index: number) => {
    const { length } = month.activities;
    // Position difference in the circular list
    const diff = (index - currentActivityIndex + length) % length;

    let translateY = 0; // 0% => centered
    let opacity = 1;    // fully visible

    if (diff === 0) {
      // The current activity => fully visible, no translate
      translateY = 0;
      opacity = 1;
    } else if (diff === 1 || diff === length - 1) {
      // The next or previous activity => partially visible
      translateY = diff === 1 ? 100 : -100;
      opacity = 0.5;
    } else {
      // Farther away => hidden
      translateY = diff < Math.floor(length / 2) ? 200 : -200;
      opacity = 0;
    }

    // Return an inline style object that sets transform & opacity
    return {
      transform: `translateY(${translateY}%)`,
      opacity: opacity,
    };
  };

  return (
    <div
      ref={cardRef}
      className="bg-[#1A1E23] rounded-lg shadow-lg p-6 h-96 overflow-hidden relative items-center justify-center"
      onWheel={handleScroll}
    >
      <h3 className="text-2xl font-bold mb-4 text-[#ee5d19]">{month.month}</h3>
      <div className="h-full relative">
        {month.activities.map((activity, index) => (
          <div
            key={index}
            className="
              absolute 
              w-full 
              top-1/3 
              -translate-x-1/2 
              -translate-y-1/2
              transition-all 
              duration-300 
              ease-in-out
            "
            // Apply transform & opacity via inline style
            style={getActivityStyle(index)}
          >
            <p className="text-lg text-center">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthCard;

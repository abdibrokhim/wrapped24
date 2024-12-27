"use client";

import React, { useState, useEffect } from "react";
import { MonthCard } from "./components/MonthCard";
import { ProgressBar } from "./components/ProgressBar";
import { monthsData } from "./lib/monthsData";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);

  useEffect(() => {
    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollNextMonth = () => {
    if (activeMonthIndex < monthsData.length - 1) {
      setActiveMonthIndex((prev) => prev + 1);
    }
  };

  const handleScrollPreviousMonth = () => {
    if (activeMonthIndex > 0) {
      setActiveMonthIndex((prev) => prev - 1);
    }
  };

  if (showSplash) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-bg-a text-text-a">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-bg-a text-text-a overflow-x-hidden relative">
      {/* Full-screen "Wrapped 2024" landing section */}
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-7xl font-extrabold">Wrapped</h1>
        <h2 className="text-5xl mt-5">2024</h2>
      </section>

      {/* Main content container with separate scroll from the card */}
      <section className="flex flex-col items-center w-full h-auto py-10">
        {/* Card that contains the month data */}
        <div className="relative w-[90%] max-w-4xl bg-[#111418] rounded-md p-6 shadow-lg flex flex-col">
          <MonthCard data={monthsData[activeMonthIndex]} />

          {/* Next / Prev buttons just for demonstration */}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleScrollPreviousMonth}
              disabled={activeMonthIndex === 0}
              className="px-4 py-2 bg-violet text-white disabled:opacity-50 rounded"
            >
              Previous
            </button>
            <button
              onClick={handleScrollNextMonth}
              disabled={activeMonthIndex === monthsData.length - 1}
              className="px-4 py-2 bg-orange text-white disabled:opacity-50 rounded"
            >
              Next
            </button>
          </div>
        </div>

        {/* Progress bars for each month */}
        <div className="mt-10 flex space-x-2">
          {monthsData.map((month, index) => (
            <ProgressBar
              key={month.month}
              isActive={index === activeMonthIndex}
              completedPercentage={
                index < activeMonthIndex
                  ? 100
                  : index > activeMonthIndex
                  ? 0
                  : 50
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}
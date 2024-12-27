"use client";

import React, { useRef, useState, UIEvent } from "react";
import { MonthDataType } from "../lib/monthsData";

interface MonthCardProps {
  data: MonthDataType;
}

export function MonthCard({ data }: MonthCardProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    setScrollProgress(scrolled);
  };

  return (
    <div className="flex flex-col w-full h-[400px]">
      {/* Month Title */}
      <div className="mb-2 text-2xl font-bold text-violet">{data.month}</div>

      {/* Scroll container for the activities */}
      <div
        ref={scrollContainerRef}
        onScroll={onScroll}
        className="flex flex-col space-y-5 overflow-y-auto h-full pr-2"
      >
        {data.activities.map((activity, index) => (
          <div key={index} className="opacity-80 hover:opacity-100 transition">
            <div className="text-xl text-text-b font-semibold mb-1">
              {activity.description}
            </div>
            {activity.citations.length > 0 && (
              <ul className="ml-4 text-text-c text-sm list-disc">
                {activity.citations.map((c, cIndex) => (
                  <li key={cIndex}>{c}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Example of scroll progress inside card if you want */}
      <div className="mt-2 h-2 bg-[#222] rounded">
        <div
          className="h-full bg-orange rounded"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
}

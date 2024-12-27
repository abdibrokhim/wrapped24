"use client";

import React from "react";

interface ProgressBarProps {
  isActive: boolean;
  completedPercentage: number;
}

export function ProgressBar({ isActive, completedPercentage }: ProgressBarProps) {
  return (
    <div className="relative w-8 h-2 bg-[#333] rounded overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-violet transition-all duration-300"
        style={{
          width: isActive ? `${completedPercentage}%` : "0%",
        }}
      />
    </div>
  );
}

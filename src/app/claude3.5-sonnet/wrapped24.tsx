'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Calendar, Trophy, Activity, Brain } from 'lucide-react';

const Wrapped2024 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      month: 'January',
      events: [
        'Founded GPTHub - first ChatGPT-powered company',
        'Published first Flutter package',
        'Started content creation journey across platforms'
      ]
    },
    {
      month: 'February - March',
      events: [
        'Won hackathon with AstroAI',
        'Joined Microsoft for Startups',
        'Created Brain MRI (now CoMed)',
        'Shared knowledge through articles and tutorials'
      ]
    },
    {
      month: 'April - June',
      events: [
        'Applied to Y Combinator as solo founder',
        'Completed EPAM Systems course in 1 week',
        'Started GenAI Research at HeadOn',
        'Founded Open Community'
      ]
    },
    {
      month: 'July - September',
      events: [
        'Built MeWell AI - won 3rd place',
        'Created MonkeytypeAI - won PS5',
        'Published first paper on Springer Nature',
        'Presented at DKU 2024 Conference'
      ]
    },
    {
      month: 'October - December',
      events: [
        'Won NASA Space Apps Challenge',
        'Became Regional Ambassador for AI/ML API',
        'Launched Open Community officially',
        'Released AI startup studio album'
      ]
    }
  ];

  const stats = {
    hackathons: 70,
    applications: 400,
    papers: 5,
    mentored: '200K+'
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            2024 Wrapped
          </h1>
          <h2 className="text-2xl text-gray-300">Ibrohim Abdivokhidov</h2>
        </header>

        {/* Main Timeline */}
        <div className="relative bg-gray-900 bg-opacity-50 rounded-xl p-8 mb-12 backdrop-blur-sm">
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-700 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="text-center px-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <Calendar className="text-purple-400" />
              {highlights[currentSlide].month}
            </h3>
            <ul className="space-y-4">
              {highlights[currentSlide].events.map((event, idx) => (
                <li 
                  key={idx}
                  className="text-lg py-2 border-b border-gray-700"
                >
                  {event}
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-700 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Year Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="text-yellow-400" />
              Year in Numbers
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Hackathons Participated</span>
                <span className="text-purple-400 font-bold">{stats.hackathons}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Applications Submitted</span>
                <span className="text-purple-400 font-bold">{stats.applications}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Papers Written</span>
                <span className="text-purple-400 font-bold">{stats.papers}</span>
              </li>
              <li className="flex justify-between items-center">
                <span>People Mentored</span>
                <span className="text-purple-400 font-bold">{stats.mentored}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="text-green-400" />
              Key Achievements
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Activity className="text-pink-400" size={16} />
                Founded Open Community
              </li>
              <li className="flex items-center gap-2">
                <Activity className="text-pink-400" size={16} />
                Published paper in Springer Nature
              </li>
              <li className="flex items-center gap-2">
                <Activity className="text-pink-400" size={16} />
                Won NASA Space Apps Challenge
              </li>
              <li className="flex items-center gap-2">
                <Activity className="text-pink-400" size={16} />
                Became Regional Ambassador
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapped2024;
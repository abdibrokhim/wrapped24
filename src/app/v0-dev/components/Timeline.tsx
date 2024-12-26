'use client';

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

interface TimelineEvent {
  month: string
  events: string[]
}

interface TimelineProps {
  events: TimelineEvent[]
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(0)

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev + 1) % events.length)
  }

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Wrapped 2024</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-semibold">{events[currentMonth].month}</span>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {events[currentMonth].events.map((event, index) => (
            <li key={index} className="text-sm">
              • {event}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

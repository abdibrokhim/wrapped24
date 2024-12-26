import React from 'react'
import { Timeline } from './Timeline'

const events = [
  {
    month: 'January',
    events: [
      'Founded GPTHub, the first company entirely powered by ChatGPT.',
      'Started filming tutorials for YouTube channel.',
      'Became more active on X, sharing tutorials and engaging with startup founders and engineers.',
      'Published first Flutter package.',
      'Continued working as an Undergraduate Research Assistant.',
    ],
  },
  {
    month: 'February',
    events: [
      'Developed Spotius, AstroAI, and JobViz for GPTHub.',
      'Won a hackathon with AstroAI.',
      'Accepted into Microsoft for Startups Founders Hub.',
      'Joined Nobel Learning PBC as an intern.',
      'Participated in the Google Solution Challenge.',
    ],
  },
  // ... Add events for other months
  {
    month: 'December',
    events: [
      'Failed Y Combinator for the second time.',
      'Finished reading "The Pathless Path" by Paul Millerd.',
      'Open Community gained popularity online.',
      'Featured on Topmate\'s landing page. Scheduled to appear in Times Square in January 2025.',
      'Ranked in the top 1% on Topmate.',
    ],
  },
]

export const Wrapped2024: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Ibrohim Abdivokhidov Wrapped 2024</h1>
        <Timeline events={events} />
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Participated in over 70 hackathons in the last 2 years. Failed over 400 applications in the last 3 years.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Wrote 5 papers. One published, others under peer review.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Mentored over 200K people in the last 2 years.
          </p>
        </div>
      </div>
    </div>
  )
}


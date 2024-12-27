'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 5) % 360)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-yellow-300 to-red-600 animate-pulse">
      <header className="p-4 bg-black text-white text-center">
        <h1 className="text-6xl font-bold animate-bounce">Welcome to My Awful Website</h1>
      </header>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="bg-green-300 p-4 rounded-lg shadow-lg transform -skew-y-6">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">My Socials</h2>
            <SocialLinks />
          </section>
          <section className="bg-yellow-200 p-4 rounded-lg shadow-lg transform skew-y-6">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Other Socials</h2>
            <OtherSocialLinks />
          </section>
        </div>
        <section className="mt-8 bg-pink-200 p-4 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-orange-800 mb-4">Useful Links</h2>
          <UsefulLinks />
        </section>
      </main>
      <footer className="fixed bottom-0 left-0 w-full bg-black text-white text-center p-2">
        <p className="animate-spin inline-block">© 2024 Worst Website Ever</p>
      </footer>
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=100&width=100")',
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.1s linear',
          opacity: 0.2,
        }}
      ></div>
    </div>
  )
}

function SocialLinks() {
  return (
    <ul className="list-disc pl-5 text-lg font-comic-sans">
      <li><Link href="https://scholar.google.com/citations?user=lwz2FZgAAAAJ&hl=en" className="text-red-600 hover:text-blue-600">Google Scholar</Link></li>
      <li><Link href="https://github.com/abdibrokhim" className="text-green-600 hover:text-yellow-600">Github</Link></li>
      <li><Link href="https://www.linkedin.com/in/abdibrokhim/" className="text-blue-600 hover:text-red-600">LinkedIn</Link></li>
      {/* Add more social links here */}
    </ul>
  )
}

function OtherSocialLinks() {
  return (
    <ul className="list-decimal pl-5 text-lg font-papyrus">
      <li><Link href="https://abdibrokhim.vercel.app/" className="text-purple-600 hover:text-orange-600">Personal webpage</Link></li>
      <li><Link href="https://buymeacoffee.com/abdibrokhim" className="text-orange-600 hover:text-purple-600">Buy me a Coffee</Link></li>
      <li><Link href="https://www.t.me/abdibrokhim" className="text-indigo-600 hover:text-green-600">Telegram</Link></li>
      {/* Add more other social links here */}
    </ul>
  )
}

function UsefulLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h3 className="text-2xl font-bold text-red-800 mb-2">My Stuff</h3>
        <ul className="list-none pl-0 text-md font-cursive">
          <li><Link href="https://github.com/abdibrokhim/ibrohim-abdivokhidov-history/blob/main/infos/about-16122024.md" className="text-blue-800 hover:text-yellow-800">About me (in very short)</Link></li>
          <li><Link href="https://abdibrokhim.vercel.app/testimonials" className="text-green-800 hover:text-purple-800">People love what I'm making</Link></li>
          {/* Add more "My Stuff" links here */}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-blue-800 mb-2">Stories & Articles</h3>
        <ul className="list-none pl-0 text-md font-fantasy">
          <li><Link href="https://www.linkedin.com/posts/abdibrokhim_seedsforthefuture-tech4good-softwareengineer-activity-7231681708578795521-BiLX" className="text-red-800 hover:text-green-800">Huawei Seeds For The Future program my end notes</Link></li>
          {/* Add more "Stories & Articles" links here */}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Courses & Tutorials</h3>
        <ul className="list-none pl-0 text-md font-monospace">
          <li><Link href="https://topmate.io/abdibrokhim/1355360" className="text-purple-800 hover:text-red-800">AI/ML Tutorials: From Scratch. Full Code Access</Link></li>
          {/* Add more "Courses & Tutorials" links here */}
        </ul>
      </div>
    </div>
  )
}


"use client"

import { motion } from "motion/react"

export function NewsHeader() {
  return (
    <header className="relative bg-[#0A1B3D] py-24 text-white">
      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          School News & Updates
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-gray-200"
        >
          Stay informed about the latest happenings, events, and achievements at Star Hacs
        </motion.p>
      </div>
      <div className="absolute inset-0 bg-[url('/doodles.svg')] bg-repeat opacity-10" />
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="h-[120px] w-full"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 120L1440 120L1440 0C1440 0 1040 120 720 120C400 120 0 0 0 0L0 120Z" fill="#f3f4f6" />
        </svg>
      </div>
    </header>
  )
}


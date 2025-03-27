'use client'

import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <div className="relative flex h-[50vh] items-center" id="hero">
      <div
        className="bg-fill absolute inset-0 z-0 bg-top"
        style={{
          backgroundImage: 'url("/assets/images/teach.webp")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust transparency as needed
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">About Us</h1>
          <p className="max-w-2xl text-xl text-white/90">
            Empowering innovation through technology and collaboration.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

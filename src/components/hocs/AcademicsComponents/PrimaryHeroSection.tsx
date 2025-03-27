'use client'

import { motion } from 'motion/react'

export default function PrimaryHeroSection() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-white py-10">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-[#0f9e99]">Academics</h1>
        </div>
      </header>

      <div className="relative flex h-[40vh] items-center" id="hero">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
            backgroundBlendMode: 'overlay',
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
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">Primary</h1>
            <p className="max-w-2xl text-xl text-white/90">
              Empowering innovation through technology and collaboration.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

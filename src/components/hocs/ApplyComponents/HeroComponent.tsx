'use client'

import React from 'react'
import { motion } from 'motion/react'

const HeroComponent = () => {
  return (
    <>
      {/* Header Section */}
      <section className="relative bg-[#0A1B3D] py-30 text-white">
        <div className="relative z-10 container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            APPLICATION PROCESS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-200"
          >
            What happens when? Timeline. Closing dates.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-[url('/doodles.svg')] bg-repeat opacity-10" />
      </section>
    </>
  )
}

export default HeroComponent

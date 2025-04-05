'use client'

import React from 'react'
import { motion } from 'motion/react'

const HeroComponent = () => {
  return (
    <>
      {/* Header Section */}
      <section className="relative bg-black/20 py-30 text-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-left"
          style={{
            backgroundImage:
              'url("/assets/images/apply/happy-curly-haired-african-american-woman-laughs-positively-points-aside-copy-space-wears-black-t-shirt.jpg")',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust transparency as needed
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
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

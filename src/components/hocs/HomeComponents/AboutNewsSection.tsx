'use client'

import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

const AboutNewsSection = () => {
  return (
    <section className="mb-30 flex w-full flex-col gap-30 px-10 py-5 lg:flex-row">
      <div className="w-full text-start">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-4xl font-bold text-[#0f9e99]"
        >
          About Star Hacs
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full text-start"
        >
          We are an innovative educational institution dedicated to excellence in academics,
          technology, and leadership. Founded with the mission to nurture the next generation of
          thinkers, problem-solvers, and innovators, StarHacs combines a strong academic foundation
          with a hands-on, practical approach to learning. Our school fosters an environment where
          students can explore their potential, develop essential skills, and prepare for a rapidly
          evolving world.
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-96 w-full rounded-lg bg-blue-300"
      >
        <Image
          src={'/assets/images/image-1.webp'}
          alt={'image'}
          className="h-full w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
          width={300}
          height={300}
        />
      </motion.div>
    </section>
  )
}

export default AboutNewsSection

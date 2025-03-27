'use client'

import React from 'react'
import { motion } from 'motion/react'

const WhyStarHacsSection = () => {
  return (
    <section className="mb-30 flex justify-end px-10">
      <div className="w-full text-end lg:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-4xl font-bold text-[#0f9e99]"
        >
          Why Star Hacs ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 20, scale: 2 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-left"
        >
          Choosing our institution means embracing a world-class education that blends academic
          excellence with creativity and innovation. Our well-rounded curriculum ensures that
          students not only meet rigorous academic standards but also develop the critical thinking
          and problem-solving skills needed for success. We are committed to technology-driven
          learning, integrating modern tools and digital literacy into our programs to prepare
          students for the future. Our innovative teaching methods emphasize interactive and
          experiential learning, making education both engaging and effective. Beyond academics, we
          prioritize character development, instilling core values such as integrity, leadership,
          and social responsibility in every student. We cultivate a supportive community where
          students, teachers, and parents collaborate, fostering an environment of encouragement and
          shared success. Furthermore, our global perspective equips students with the skills and
          knowledge needed to thrive in an interconnected world, empowering them to make meaningful
          contributions wherever they go. By choosing our institution, students gain more than just
          an education—they gain the foundation for a future of limitless possibilities.
        </motion.p>
      </div>
    </section>
  )
}

export default WhyStarHacsSection

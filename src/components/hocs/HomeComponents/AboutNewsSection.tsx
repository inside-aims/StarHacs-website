'use client'

import React from 'react'
import { motion } from 'motion/react'

const AboutNewsSection = () => {
  return (
    <section className="mb-30 flex w-full flex-col gap-30 px-10 py-5 lg:flex-row">
      <div className=' text-start w-full'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-4xl font-bold text-[#0A1B3D]"
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, tenetur! Eius,
          laudantium corrupti dolores minima itaque maxime, accusantium vero sit eveniet facilis
          iste eaque, impedit possimus delectus iure nisi tempora. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Et quae inventore distinctio aliquam sunt quaerat
          consequuntur maiores corporis laborum nobis, accusamus deleniti. Ipsa iste aliquid animi
          fuga corrupti aperiam ut!
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-96 w-full bg-blue-300 rounded-lg"
      >
        box
      </motion.div>
    </section>
  )
}

export default AboutNewsSection

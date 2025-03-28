'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function VisionSection() {
  return (
    <div className="bg-[#0f9e99] py-24 text-[#efe9e0]" id="vision">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 leading-relaxed">
              <span className="font-semibold">Vision Statement:</span> <br />
              At Star Hacs International School, our vision is to inspire and empower students to
              become curious, creative, and compassionate global citizens. We equip them with the
              skills, knowledge, and values necessary to succeed in an ever-changing world.
            </p>

            <h3 className="mt-6 text-2xl font-semibold">Core Principles</h3>
            <ul className="mt-2 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Academic Excellence:</span> Fostering a culture of
                academic rigor, creativity, and critical thinking.
              </li>
              <li>
                <span className="font-semibold">Global Mindset:</span> Encouraging students to
                appreciate diverse cultures, perspectives, and experiences.
              </li>
              <li>
                <span className="font-semibold">Character Development:</span> Nurturing essential
                life skills such as empathy, resilience, and leadership.
              </li>
              <li>
                <span className="font-semibold">Community Engagement:</span> Instilling a sense of
                social responsibility and encouraging students to make a positive impact.
              </li>
              <li>
                <span className="font-semibold">Innovation and Adaptability:</span> Embracing
                creativity and adaptability to prepare students for success in an uncertain future.
              </li>
            </ul>

            <h3 className="mt-6 text-2xl font-semibold">Guiding Philosophy</h3>
            <p className="mt-2 leading-relaxed">
              At Star Hacs International School, we believe that every student has the potential to
              shine brightly. We are committed to providing a supportive, inclusive, and challenging
              learning environment that inspires students to reach their full potential and become
              the leaders of tomorrow.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <Image
              src="/assets/images/image-1.webp"
              alt="Values illustration"
              fill
              className="rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
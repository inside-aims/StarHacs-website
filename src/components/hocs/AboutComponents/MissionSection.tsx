'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function MissionSection() {
  return (
    <div className="bg-gray-50 py-24" id="mission">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <Image
              src="/assets/images/image-1.webp"
              alt="Mission illustration"
              className="rounded-2xl object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-[#0f9e99]">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              <span className="font-semibold">Mission Statement:</span> <br />
              To empower students to succeed in an ever-changing world, Star Hacs International
              School is committed to delivering an exceptional education that fosters academic
              achievement, creativity, and social responsibility.
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-[#0f9e99]">Core Commitments</h3>
            <ul className="mt-2 list-inside list-disc space-y-2 text-gray-600">
              <li>
                <span className="font-semibold">Academic Excellence:</span> Providing a challenging
                and engaging curriculum that prepares students for success.
              </li>
              <li>
                <span className="font-semibold">Personalized Learning:</span> Tailoring education to
                meet the unique needs and abilities of each student.
              </li>
              <li>
                <span className="font-semibold">Global Perspective:</span> Fostering cultural
                awareness, understanding, and empathy to prepare students for a globalized world.
              </li>
              <li>
                <span className="font-semibold">Character Development:</span> Nurturing essential
                life skills such as resilience, adaptability, and leadership.
              </li>
              <li>
                <span className="font-semibold">Community Engagement:</span> Encouraging students to
                become active, responsible, and compassionate members of their communities.
              </li>
            </ul>

            <h3 className="mt-6 text-2xl font-semibold text-[#0f9e99]">Guiding Principle</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              At Star Hacs International School, we believe that education should inspire, motivate,
              and empower students to reach their full potential. We are committed to providing a
              world-class education that prepares students for success and enables them to make a
              positive impact in the world.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

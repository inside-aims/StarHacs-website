'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function ValuesSection() {
  return (
    <div className="bg-gray-50 py-24" id="values">
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
              alt="Values illustration"
              fill
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
            <h2 className="text-3xl font-bold text-[#0f9e99]">Our Values</h2>
            <h2 className="text-2xl font-bold text-[#0f9e99]">Core Values</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              At Star Hacs International School, we cultivate a culture of mindfulness and
              compassion, guided by the following core values:
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#0f9e99]">Respect</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                  <li>We honor the dignity and worth of every individual.</li>
                  <li>We listen with empathy and understanding.</li>
                  <li>We foster a spirit of inclusivity and kindness.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0f9e99]">Gratitude</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                  <li>We appreciate the beauty and wonder of life.</li>
                  <li>We express thanks and recognition for the blessings we receive.</li>
                  <li>We cultivate a sense of contentment and joy.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0f9e99]">Courage</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                  <li>We stand up for what is right and just.</li>
                  <li>We face challenges with resilience and determination.</li>
                  <li>We embody compassion and kindness in all our actions.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0f9e99]">Selflessness</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                  <li>We put the needs of others before our own.</li>
                  <li>We serve with humility and generosity.</li>
                  <li>We strive for the greater good.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0f9e99]">Honesty</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                  <li>We speak the truth with kindness and compassion.</li>
                  <li>We act with integrity and transparency.</li>
                  <li>We foster a culture of trust and respect.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0f9e99]">Hard Work</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                  <li>We strive for excellence with diligence and perseverance.</li>
                  <li>We take pride in our achievements and learn from our mistakes.</li>
                  <li>We cultivate a growth mindset and a love of learning.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0f9e99]">Patience</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                  <li>We cultivate calmness and composure in the face of adversity.</li>
                  <li>We practice empathy and understanding towards others.</li>
                  <li>We take the time to reflect, learn, and grow.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0f9e99]">Compassion</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                  <li>We show kindness and empathy towards all living beings.</li>
                  <li>We understand and support those in need.</li>
                  <li>We foster a culture of care and compassion.</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-xl font-semibold text-[#0f9e99]">
              May these core values guide us on our journey towards mindfulness, compassion, and
              wisdom.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

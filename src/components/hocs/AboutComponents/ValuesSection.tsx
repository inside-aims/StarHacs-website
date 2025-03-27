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
              src="/placeholder.svg?height=600&width=600"
              alt="Values illustration"
              fill
              className="rounded-2xl object-cover"
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

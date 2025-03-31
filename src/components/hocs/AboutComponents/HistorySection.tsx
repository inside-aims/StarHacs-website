'use client'

import { motion } from 'motion/react'

export default function HistorySection() {
  return (
    <div className="bg-[#0f9e99] py-24" id="history">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-[#efe9e0]">History of Star Hacks</h2>
            <p className="leading-relaxed text-[#efe9e0]">
              School Name was established in Year with the vision of creating an educational
              institution that fosters excellence, innovation, and character development. Since its
              inception, the school has grown into a beacon of knowledge, nurturing young minds and
              shaping future leaders. With a commitment to academic rigor and holistic education, we
              continue to uphold our legacy of excellence while embracing modern educational
              advancements.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
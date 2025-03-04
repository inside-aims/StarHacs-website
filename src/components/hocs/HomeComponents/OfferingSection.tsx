"use client"

import { motion } from "motion/react"
import Image from "next/image"

const offerings = [
  {
    title: "Quality Lesson",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20at%206.31.11%E2%80%AFPM.jpg-sw88JNiwGwY69yoCCLGencyDlOUJu2.jpeg",
    delay: 0,
  },
  {
    title: "Friendly Environment",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20at%206.31.11%E2%80%AFPM.jpg-sw88JNiwGwY69yoCCLGencyDlOUJu2.jpeg",
    delay: 0.2,
  },
  {
    title: "Library & Laboratory",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20at%206.31.11%E2%80%AFPM.jpg-sw88JNiwGwY69yoCCLGencyDlOUJu2.jpeg",
    delay: 0.4,
  },
]

export function OfferingsSection() {
  return (
    <section className="relative">
      {/* Navy curved section */}
      <div className="relative bg-[#fff]">
        <div className="h-32" />
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="h-[120px] w-full"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 120L1440 120L1440 0C1440 0 1040 120 720 120C400 120 0 0 0 0L0 120Z" fill="#F5C347" />
          </svg>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-[#F5C347] pb-24">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-4xl font-bold text-[#0A1B3D]"
          >
            What We Are Offering
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering,_) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: offering.delay }}
                className="group relative h-64 overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                <Image
                  src={offering.image || "/placeholder.svg"}
                  alt={offering.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-center text-2xl font-bold text-white">{offering.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background icons/doodles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/doodles.svg')] bg-repeat opacity-10" />
        </div>
      </div>
    </section>
  )
}


'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import preAllCol2 from "../../../public/assets/images/pre-school/all-col-party2.jpeg"
import preAllCol6 from "../../../public/assets/images/pre-school/all-col-party6.jpeg"
import priTrad2 from "../../../public/assets/images/primary/ptrad-day2.jpeg"


import { Button } from '@/components/ui/button'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: preAllCol2,
    title: 'Welcome to Star Hacs',
    description: 'Empowering young minds for a brighter future',
  },
  {
    id: 2,
    image: preAllCol6,
    title: 'Innovative Learning',
    description: 'Discover our cutting-edge educational programs',
  },
  {
    id: 3,
    image: priTrad2,
    title: 'Join Our Community',
    description: 'Experience a nurturing environment for growth',
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  React.useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(intervalId)
  }, [nextSlide])

  return (
    <div className="relative mb-30 h-[400px] overflow-hidden md:h-[600px]">
      <AnimatePresence initial={false} custom={currentSlide}>
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={slide.image || '/placeholder.svg'}
              alt={slide.title}
              className="h-full w-full object-cover"
              width={300}
              height={300}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`title-${slide.id}`}
                  className="mb-4 text-4xl font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {slide.title}
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${slide.id}`}
                  className="mb-8 text-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {slide.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 text-white hover:bg-white/40"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 text-white hover:bg-white/40"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
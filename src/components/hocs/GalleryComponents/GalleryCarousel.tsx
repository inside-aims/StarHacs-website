'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselItem = {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

export const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      src: '/placeholder.svg?height=500&width=900',
      alt: 'Campus library',
      title: 'Modern Library',
      description: 'Our state-of-the-art library provides a quiet space for study and research.',
    },
    {
      id: 2,
      src: '/placeholder.svg?height=500&width=900',
      alt: 'Science lab',
      title: 'Science Laboratory',
      description: 'Equipped with the latest technology for hands-on learning experiences.',
    },
    {
      id: 3,
      src: '/placeholder.svg?height=500&width=900',
      alt: 'Sports field',
      title: 'Sports Complex',
      description: 'A place where students develop teamwork and physical fitness.',
    },
    {
      id: 4,
      src: '/placeholder.svg?height=500&width=900',
      alt: 'Cafeteria',
      title: 'Student Cafeteria',
      description: 'Serving nutritious meals in a social environment.',
    },
    {
      id: 5,
      src: '/placeholder.svg?height=500&width=900',
      alt: 'Art studio',
      title: 'Creative Arts Studio',
      description: 'Where imagination comes to life through various art forms.',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
  }

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div
        className="flex h-[400px] transition-transform duration-500 ease-out md:h-[500px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="relative min-w-full">
            <img
              src={item.src || '/placeholder.svg'}
              alt={item.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 md:p-10">
              <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">{item.title}</h3>
              <p className="max-w-lg text-white/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm hover:bg-white/50"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm hover:bg-white/50"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? 'scale-125 bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

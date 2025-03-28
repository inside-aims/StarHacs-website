'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

type GalleryItem = {
  id: number
  src: string
  alt: string
  title: string
  category: string
  size: 'small' | 'medium' | 'large'
}

export const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/placeholder.svg?height=600&width=800',
      alt: 'School sports day',
      title: 'Annual Sports Day',
      category: 'Sports',
      size: 'large',
    },
    {
      id: 2,
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Art exhibition',
      title: 'Student Art Exhibition',
      category: 'Arts',
      size: 'medium',
    },
    {
      id: 3,
      src: '/placeholder.svg?height=300&width=400',
      alt: 'Science fair',
      title: 'Science Fair Projects',
      category: 'Science',
      size: 'small',
    },
    {
      id: 4,
      src: '/placeholder.svg?height=500&width=700',
      alt: 'Music concert',
      title: 'Spring Music Concert',
      category: 'Music',
      size: 'medium',
    },
    {
      id: 5,
      src: '/placeholder.svg?height=350&width=500',
      alt: 'Graduation ceremony',
      title: 'Graduation Day',
      category: 'Events',
      size: 'small',
    },
    {
      id: 6,
      src: '/placeholder.svg?height=600&width=800',
      alt: 'School trip',
      title: 'Field Trip to Museum',
      category: 'Trips',
      size: 'large',
    },
    {
      id: 7,
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Debate competition',
      title: 'Inter-School Debate',
      category: 'Academic',
      size: 'medium',
    },
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1'
      case 'medium':
        return 'col-span-1 row-span-2 md:col-span-2 md:row-span-1'
      case 'large':
        return 'col-span-1 md:col-span-2 md:row-span-2'
      default:
        return 'col-span-1 row-span-1'
    }
  }

  return (
    <>
      <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className={`${getSizeClasses(item.size)} group relative cursor-pointer overflow-hidden rounded-xl`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.src || '/placeholder.svg'}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="mb-2 w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0f9e99]">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-h-[80vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src || '/placeholder.svg'}
              alt={selectedImage.alt}
              className="max-h-[80vh] max-w-full object-contain"
            />
            <div className="absolute right-0 bottom-0 left-0 bg-black/70 p-4">
              <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

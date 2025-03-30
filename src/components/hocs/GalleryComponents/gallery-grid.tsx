"use client"

import { motion } from "motion/react"
import Image from "next/image"

interface GalleryImage {
  id: string
  src: string
  alt: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  onImageClick: (src: string) => void
}

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  console.log("Rendering ", images)
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: (index % 8) * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md"
          onClick={() => onImageClick(image.src)}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}


"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"

interface ImageModalProps {
  isOpen: boolean
  imageUrl: string
  onClose: () => void
}

export function ImageModal({ isOpen, imageUrl, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute -right-4 -top-4 rounded-full bg-white p-2 shadow-lg" onClick={onClose}>
              <X className="h-6 w-6" />
            </button>
            <img
              src={imageUrl || "/placeholder.svg"}
              alt="Gallery image"
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


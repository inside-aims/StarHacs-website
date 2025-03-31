"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { GalleryGrid } from "@/components/hocs/GalleryComponents/gallery-grid"
import { ImageModal } from "@/components/shared/image-modal"
import { preschoolImages, primaryImages } from "@/constants/images"

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("preschool")
  const [visiblePreschoolImages, setVisiblePreschoolImages] = useState(12)
  const [visiblePrimaryImages, setVisiblePrimaryImages] = useState(12)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleLoadMore = (section: string) => {
    if (section === "preschool") {
      setVisiblePreschoolImages((prev) => Math.min(prev + 6, preschoolImages.length))
    } else {
      setVisiblePrimaryImages((prev) => Math.min(prev + 6, primaryImages.length))
    }
  }

  const handleImageClick = (src: string) => {
    setSelectedImage(src)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  // Convert imported image objects to the format expected by GalleryGrid
  const formattedPreschoolImages = preschoolImages.map((img, index) => ({
    id: `preschool-${index + 1}`,
    src: img.src,
    alt: `Preschool image ${index + 1}`,
  }))

  const formattedPrimaryImages = primaryImages.map((img, index) => ({
    id: `primary-${index + 1}`,
    src: img.src,
    alt: `Primary image ${index + 1}`,
  }))

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0A1B3D] py-24 text-white">
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            School Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-200"
          >
            Explore moments and memories from our school activities and events
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-[url('/doodles.svg')] bg-repeat opacity-10" />
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-12">
        <Tabs
          defaultValue="preschool"
          value={activeTab}
          onValueChange={(value) => {
            setActiveTab(value)
          }}
          className="space-y-8"
        >
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="preschool" className="text-lg">
              Pre-school
            </TabsTrigger>
            <TabsTrigger value="primary" className="text-lg">
              Primary
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="preschool" className="mt-0 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GalleryGrid
                  images={formattedPreschoolImages.slice(0, visiblePreschoolImages)}
                  onImageClick={handleImageClick}
                />

                {visiblePreschoolImages < formattedPreschoolImages.length && (
                  <div className="mt-8 flex justify-center">
                    <Button onClick={() => handleLoadMore("preschool")} variant="outline" size="lg" className="gap-2">
                      Load More
                    </Button>
                  </div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="primary" className="mt-0 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GalleryGrid 
                  images={formattedPrimaryImages.slice(0, visiblePrimaryImages)} 
                  onImageClick={handleImageClick} 
                />

                {visiblePrimaryImages < formattedPrimaryImages.length && (
                  <div className="mt-8 flex justify-center">
                    <Button onClick={() => handleLoadMore("primary")} variant="outline" size="lg" className="gap-2">
                      Load More
                    </Button>
                  </div>
                )}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </section>

      {/* Image Modal */}
      <ImageModal isOpen={!!selectedImage} imageUrl={selectedImage || ""} onClose={handleCloseModal} />
    </>
  )
}


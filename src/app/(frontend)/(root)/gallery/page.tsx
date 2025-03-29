"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { GalleryGrid } from "@/components/hocs/GalleryComponents/gallery-grid"
import { ImageModal } from "@/components/shared/image-modal"

// Sample image data - in a real app, this would come from an API or CMS
const preschoolImages = Array.from({ length: 20 }, (_, i) => ({
  id: `preschool-${i + 1}`,
  src: `/placeholder.svg?height=400&width=600&text=Preschool+${i + 1}`,
  alt: `Preschool image ${i + 1}`,
}))

const primaryImages = Array.from({ length: 20 }, (_, i) => ({
  id: `primary-${i + 1}`,
  src: `/placeholder.svg?height=400&width=600&text=Primary+${i + 1}`,
  alt: `Primary image ${i + 1}`,
}))

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("preschool")
  const [visiblePreschoolImages, setVisiblePreschoolImages] = useState(10)
  const [visiblePrimaryImages, setVisiblePrimaryImages] = useState(10)
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
                  images={preschoolImages.slice(0, visiblePreschoolImages)}
                  onImageClick={handleImageClick}
                />

                {visiblePreschoolImages < preschoolImages.length && (
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
                <GalleryGrid images={primaryImages.slice(0, visiblePrimaryImages)} onImageClick={handleImageClick} />

                {visiblePrimaryImages < primaryImages.length && (
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


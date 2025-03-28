'use client'

import { GalleryCarousel } from '@/components/hocs/GalleryComponents/GalleryCarousel'
import { GalleryGrid } from '@/components/hocs/GalleryComponents/GaleryGrid'

const GalleryPage = () => {
  return (
    <div className="font-alta min-h-screen bg-gradient-to-b from-[#efe9e0] to-[#f5f2ec] text-gray-800">
      <header className="px-4 py-16 text-center">
        <h1 className="mb-4 text-5xl font-bold text-[#0f9e99] md:text-6xl">Our School Gallery</h1>
        <div className="mx-auto mb-6 h-1 w-24 bg-[#0f9e99]"></div>
        <p className="mx-auto mt-2 max-w-2xl text-xl text-gray-600">
          A glimpse into our vibrant learning environment and the memorable moments that shape our
          community.
        </p>
      </header>

      {/* Featured Image */}
      <section className="mx-auto mb-16 max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Featured school event"
            className="h-[300px] w-full object-cover md:h-[500px]"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
            <div className="p-6 text-white md:p-10">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">Annual Science Fair 2023</h2>
              <p className="text-white/80">
                Celebrating innovation and creativity through student projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <section className="mx-auto mb-20 max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-center justify-between md:flex-row">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Memorable Moments</h2>
          <p className="mt-2 font-medium text-[#0f9e99] md:mt-0">
            Explore our collection of special events
          </p>
        </div>
        <GalleryGrid />
      </section>

      {/* Carousel */}
      <section className="mb-16 bg-[#0f9e99]/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Campus Life</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Swipe through our collection of daily activities and campus highlights
            </p>
          </div>
          <GalleryCarousel />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto mb-20 max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            What Our Students Say
          </h2>
          <div className="mx-auto h-1 w-16 bg-[#0f9e99]"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f9e99]/20">
                  <span className="text-xl text-[#0f9e99]">❝</span>
                </div>
                <div>
                  <h3 className="font-bold">Student Name</h3>
                  <p className="text-sm text-gray-500">Class of 2023</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The gallery events at our school have been some of my most cherished memories. I've
                learned so much about art and expression through these experiences."
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0f9e99] py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Join Our Next Event</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Be part of our vibrant community and experience the creativity and talent of our
            students.
          </p>
          <button className="hover:bg-opacity-90 rounded-full bg-white px-8 py-3 font-bold text-[#0f9e99] transition-all">
            View Calendar
          </button>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage

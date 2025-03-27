import React from 'react'
import { Navbar } from '@/components/shared/Navigation/Navbar'
import { Footer } from '@/components/shared/Navigation/Footer'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen bg-[#efe9e0]">
      <Navbar />
      <section className="min-h-screen">{children}</section>

      <Footer />
    </main>
  )
}

export default RootLayout

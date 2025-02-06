import { HeroCarousel } from '@/components/shared/HeroCarousel'
import AboutNewsSection from '@/components/hocs/HomeComponents/AboutNewsSection'
import React from 'react'
import { OfferingsSection } from '@/components/hocs/HomeComponents/OfferingSection'


const HomePage = () => {
  return (
    <div>
      <HeroCarousel/>
      <AboutNewsSection/>
      <OfferingsSection/>
    </div>
  )
}

export default HomePage

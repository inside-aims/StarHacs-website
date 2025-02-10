import { HeroCarousel } from '@/components/shared/HeroCarousel'
import AboutNewsSection from '@/components/hocs/HomeComponents/AboutNewsSection'
import React from 'react'
import { OfferingsSection } from '@/components/hocs/HomeComponents/OfferingSection'
import WhyStarHacsSection from '@/components/hocs/HomeComponents/WhyStarHacsSection'


const HomePage = () => {
  return (
    <div>
      <HeroCarousel/>
      <AboutNewsSection/>
      <WhyStarHacsSection/>
      <OfferingsSection/>
    </div>
  )
}

export default HomePage

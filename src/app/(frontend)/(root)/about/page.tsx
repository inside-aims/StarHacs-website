import React from 'react'

import HeroSection from '@/components/hocs/AboutComponents/HeroSection'
import HistorySection from '@/components/hocs/AboutComponents/HistorySection'
import MissionSection from '@/components/hocs/AboutComponents/MissionSection'
import VisionSection from '@/components/hocs/AboutComponents/VisionSection'
import ValuesSection from '@/components/hocs/AboutComponents/ValuesSection'

const AboutPage = () => {
  return (
    <>
    <HeroSection />
    <HistorySection/>
    <MissionSection/>
    <VisionSection/>
    <ValuesSection/>
    </>
  )
}

export default AboutPage
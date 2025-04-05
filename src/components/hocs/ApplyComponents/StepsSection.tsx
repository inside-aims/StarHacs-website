'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

import { steps } from '@/constants'

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState('step-1')

  return (
    <>
      {/* Steps Section */}
      <section className="container mx-auto px-4 py-12">
        <Tabs value={activeStep} onValueChange={setActiveStep} className="space-y-8">
          <div className="sticky top-[64px] z-20 bg-gray-100 py-4">
            <TabsList className="grid w-full grid-cols-7">
              {steps.map((step) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className="relative data-[state=active]:bg-[#0A1B3D] data-[state=active]:text-white"
                >
                  <span className="flex flex-col items-center gap-2">
                    {step.icon}
                    <span className="text-xs font-medium max-md:hidden">{step.title}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {steps.map((step) => (
              <TabsContent
                key={step.id}
                value={step.id}
                className="mt-0 focus-visible:ring-0 focus-visible:outline-none"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg bg-white p-8 shadow-lg"
                >
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-[#0A1B3D]">{step.heading}</h2>
                      <div className="space-y-4">
                        <p className="text-lg text-gray-600">{step.content}</p>
                        {step.formLink && (
                          <p>
                            <a
                              href={step.formLink}
                              className="text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {step.formLink}
                            </a>
                          </p>
                        )}
                        {step.contactInfo && (
                          <div className="rounded-lg bg-gray-50 p-4">
                            <p className="mb-2 font-medium">
                              Alternatively, you can call our Administrator,{' '}
                              <span className="font-semibold">{step.contactInfo.name}</span> and
                              arrange to visit the school to fill in the form.
                            </p>
                            <p className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              <span className="font-semibold">{step.contactInfo.phone}</span>
                            </p>
                          </div>
                        )}
                        <div className="pt-4">
                          <div className="flex gap-4">
                            {step.id !== 'step-1' && (
                              <Button
                                variant="outline"
                                onClick={() => {
                                  const currentIndex = steps.findIndex((s) => s.id === step.id)
                                  setActiveStep(steps[currentIndex - 1].id)
                                }}
                              >
                                Previous Step
                              </Button>
                            )}
                            {step.id !== 'step-7' && (
                              <Button
                                onClick={() => {
                                  const currentIndex = steps.findIndex((s) => s.id === step.id)
                                  setActiveStep(steps[currentIndex + 1].id)
                                }}
                              >
                                Next Step
                              </Button>
                            )}
                            {step.id === 'step-7' && <Button>Start Application</Button>}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={step.image || '/placeholder.svg'}
                        alt={step.heading}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </section>
    </>
  )
}

export default StepsSection

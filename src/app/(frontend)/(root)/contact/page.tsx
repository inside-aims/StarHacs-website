'use client'

import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-[#0A1B3D] py-24 text-white">
        <div className="relative z-10 container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-200"
          >
            We&apos;d love to hear from you. Get in touch with us.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-[url('/doodles.svg')] bg-repeat opacity-10" />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#0A1B3D]">Get in touch with us</h2>
              <p className="text-gray-600">
                Have questions about admissions, programs, or anything else? Our team is here to
                help you. Feel free to reach out through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#0A1B3D] p-3 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Sota-Dodowa, Accra,</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#0A1B3D] p-3 text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+233 (0) xx xxx xxxx</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#0A1B3D] p-3 text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">hacsinternational@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#0A1B3D] p-3 text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <p className="text-gray-600">Mon-Fri, 8:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[300px] overflow-hidden rounded-lg bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8394.821154813711!2d-0.07130203442675377!3d5.854109838399843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf7d001456a171%3A0x1923feebeef46fd2!2sStar%20Hacs%20International%20School!5e0!3m2!1sen!2sgh!4v1743771233503!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8394.821154813711!2d-0.07130203442675377!3d5.854109838399843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf7d001456a171%3A0x1923feebeef46fd2!2sStar%20Hacs%20International%20School!5e0!3m2!1sen!2sgh!4v1743771233503!5m2!1sen!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

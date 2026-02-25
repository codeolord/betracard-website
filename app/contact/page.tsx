'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-primary mb-8 text-center"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Ready to transform your trust infrastructure? Get in touch with our team to learn how Betracard can help your business.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.div
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-semibold text-secondary text-lg">Business Address</h3>
              </div>
              <p className="text-gray-700">Dolphin Estate Extension, Lagos, Nigeria</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-semibold text-secondary text-lg">Phone Numbers</h3>
              </div>
              <p className="text-gray-700">08100100839<br />08077553373</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-semibold text-secondary text-lg">Email</h3>
              </div>
              <p className="text-gray-700">contact@betracard.com</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}
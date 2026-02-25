'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CareersHero from '@/components/CareersHero'
import { motion } from 'framer-motion'
import { Users, Target, Heart } from 'lucide-react'

export default function Careers() {
  const values = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with passionate individuals who share your vision for transforming trust infrastructure.'
    },
    {
      icon: Target,
      title: 'Impact-Driven Work',
      description: 'Make a real difference in Africa\'s digital transformation and economic growth.'
    },
    {
      icon: Heart,
      title: 'Innovation Focus',
      description: 'Be part of cutting-edge technology development in AI, blockchain, and identity solutions.'
    }
  ]

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
      <CareersHero />
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Join Our Mission</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We are building the future of trust infrastructure in Africa. Join our team of innovators,
            engineers, and visionaries who are transforming how businesses and institutions verify trust.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6">No Open Roles Currently</h2>
          <p className="text-xl text-gray-700 mb-6">
            We're growing rapidly and always looking for exceptional talent. While we don't have open positions right now,
            we'd love to hear from you.
          </p>
          <p className="text-lg text-gray-600">
            Send your resume to <span className="font-semibold text-primary">careers@betracard.com</span> and we'll keep you in mind for future opportunities.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  )
}
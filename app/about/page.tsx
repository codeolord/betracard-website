'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import { motion } from 'framer-motion'

export default function About() {
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
      <AboutHero />
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
          About Betracard
        </motion.h1>
        <div className="space-y-8 max-w-4xl mx-auto">
          <motion.section
            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">Company Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Betracard is a pioneering Trust Infrastructure company dedicated to building Africa's most reliable identity and reputation ecosystem. We provide cutting-edge solutions for identity verification, document vetting, and trust scoring to empower businesses and institutions across the continent.
            </p>
          </motion.section>

          <motion.section
            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To create a world where trust is quantifiable, verifiable, and accessible to all, enabling secure and confident decision-making in every aspect of business and life.
            </p>
          </motion.section>

          <motion.section
            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Building Africa's most trusted identity and reputation infrastructure, enabling secure hiring, lending, and verification processes that drive economic growth and social progress.
            </p>
          </motion.section>

          <motion.section
            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">Why Betracard Exists</h2>
            <p className="text-gray-700 leading-relaxed">
              In a rapidly digitizing world, traditional methods of verification are insufficient. Betracard exists to bridge the gap between digital innovation and trust, providing the infrastructure needed for Africa's digital transformation.
            </p>
          </motion.section>

          <motion.section
            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">Future Roadmap</h2>
            <p className="text-gray-700 leading-relaxed">
              Our roadmap includes expanding our platform to cover more African countries, integrating advanced AI technologies for even more accurate verification, and partnering with governments and institutions to create a unified trust ecosystem.
            </p>
          </motion.section>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}
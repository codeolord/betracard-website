'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamHero from '@/components/TeamHero'
import TeamCard from '@/components/TeamCard'
import { motion } from 'framer-motion'

export default function Team() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years in fintech and identity solutions.',
      photo: '/placeholder-avatar.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Tech innovator specializing in AI and blockchain for trust infrastructure.',
      photo: '/placeholder-avatar.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Engineering',
      bio: 'Experienced engineer leading our development team in building scalable solutions.',
      photo: '/placeholder-avatar.jpg'
    },
    {
      name: 'Sarah Wilson',
      role: 'Head of Operations',
      bio: 'Operations expert ensuring smooth delivery of our trust infrastructure services.',
      photo: '/placeholder-avatar.jpg'
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
      <TeamHero />
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
          Our Team
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Meet the visionaries and experts driving Betracard's mission to revolutionize trust infrastructure across Africa.
        </motion.p>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  )
}
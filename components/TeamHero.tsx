'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Award } from 'lucide-react'
import { RotatingText, AnimatedBackground, TrustNetwork3D } from './HeroComponents'

export default function TeamHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-sky-50/40 to-indigo-50/60 overflow-hidden">
      <AnimatedBackground />

      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4 mr-2" />
            Meet Our Experts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            The Minds Behind{' '}
            <RotatingText words={['Trust Innovation', 'Digital Trust', 'Secure Solutions', 'Smart Technology']} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Our diverse team of experts combines deep industry knowledge with cutting-edge technology
            to build Africa's most reliable trust infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Join Our Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#team"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-200"
            >
              Meet the Team
            </Link>
          </motion.div>

          {/* Team highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
              <div className="text-xs text-gray-500">Combined</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-sm text-gray-600">Industry</div>
              <div className="text-xs text-gray-500">Leaders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-gray-600">Projects</div>
              <div className="text-xs text-gray-500">Delivered</div>
            </div>
          </motion.div>

          {/* 3D Trust Network Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <TrustNetwork3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
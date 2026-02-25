'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, BarChart3 } from 'lucide-react'
import { RotatingText, AnimatedBackground, TrustNetwork3D } from './HeroComponents'

export default function SolutionHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-sky-50/40 to-indigo-50/60 overflow-hidden">
      <AnimatedBackground />

      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6"
              >
                <Zap className="w-4 h-4 mr-2" />
                Advanced Trust Technology
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Trust Scoring{' '}
                <RotatingText words={['Solutions', 'Platform', 'Technology', 'Infrastructure']} />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Transform uncertainty into confidence with our comprehensive trust scoring platform.
                Make data-driven decisions that drive business success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-secondary hover:text-secondary transition-all duration-200"
                >
                  View Features
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Trust Network */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <TrustNetwork3D />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
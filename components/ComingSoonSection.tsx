'use client'

import { motion } from 'framer-motion'
import { Download, Star } from 'lucide-react'

export default function ComingSoonSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Trust Scoring on the Go
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-12 max-w-2xl mx-auto"
        >
          Get instant trust scores anywhere, anytime. Our mobile app brings the power of Betracard to your pocket.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          {/* iOS App Store */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 cursor-pointer"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-500 rounded-3xl">
              <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                {/* Apple Logo */}
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.46 4.7 9.12c.87-1.63 2.25-2.66 3.72-2.67 1.24-.02 2.42.76 3.18.76.74 0 2.38-1.01 4.04-.85 1.44.05 2.89.42 3.91 1.26-1.23.74-1.82 2.08-1.91 3.4-.04 1.42.84 2.96 2.05 3.91-.5.79-1.35 1.54-2.30 2.13z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">iOS App</h3>
            <p className="text-sm opacity-90 mb-4">Coming to App Store</p>
            <div className="flex justify-center">
              <Download className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Google Play Store */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/20 cursor-pointer"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                {/* Google Play Store Logo */}
                <path d="M3 13.5L12.46 3.04c.38-.38 1.01-.38 1.39 0L22.46 13.5c.78.78.78 2.05 0 2.83L13.85 22.96c-.38.38-1.01.38-1.39 0L3 13.5z" fill="#00BCD4"/>
                <path d="M3 13.5L12.46 3.04c.38-.38 1.01-.38 1.39 0L13.85 4.92L3 13.5z" fill="#4CAF50"/>
                <path d="M13.85 22.96c-.38.38-1.01.38-1.39 0l-9.46-9.46L13.85 4.92v18.04z" fill="#FFEB3B"/>
                <path d="M13.85 4.92L22.46 13.5c.78.78.78 2.05 0 2.83l-8.61 5.21V4.92z" fill="#FF5252"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Android App</h3>
            <p className="text-sm opacity-90 mb-4">Coming to Play Store</p>
            <div className="flex justify-center">
              <Download className="w-6 h-6" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center space-x-1"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + star * 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
          <span className="ml-4 text-lg">Join our beta waitlist</span>
        </motion.div>
      </div>
    </section>
  )
}
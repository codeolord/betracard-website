'use client'

import { motion } from 'framer-motion'
import { Download, Star } from 'lucide-react'
import Image from 'next/image'

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
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/images/app-store-logo.png.png"
                alt="Apple App Store"
                width={80}
                height={80}
                className="object-contain"
              />
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
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/images/play-store-logo.png.png"
                alt="Google Play Store"
                width={80}
                height={80}
                className="object-contain"
              />
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
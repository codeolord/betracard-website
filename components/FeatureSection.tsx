'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Shield, Users, Zap } from 'lucide-react'

export default function FeatureSection() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Dynamic Trust Scoring',
      description: 'Real-time trust scores that adapt to new data and behaviors, providing accurate risk assessment.'
    },
    {
      icon: Shield,
      title: 'Identity Verification',
      description: 'Advanced biometric and document-based verification to establish baseline trust.'
    },
    {
      icon: Users,
      title: 'Social Trust Networks',
      description: 'Leverage community and network data to build comprehensive trust profiles.'
    },
    {
      icon: Zap,
      title: 'Instant Risk Assessment',
      description: 'Lightning-fast trust evaluations for seamless user experiences and instant decisions.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-lightgray to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-primary text-center mb-4"
        >
          Trust Scoring at Scale
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Our advanced trust scoring engine analyzes multiple data points to provide reliable, actionable insights.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 mx-auto"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-700 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
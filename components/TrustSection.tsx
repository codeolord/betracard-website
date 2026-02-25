'use client'

import { motion } from 'framer-motion'
import { Award, Target, Heart } from 'lucide-react'

export default function TrustSection() {
  const stats = [
    { icon: Award, value: '99.9%', label: 'Accuracy Rate' },
    { icon: Target, value: '10M+', label: 'Trust Scores Generated' },
    { icon: Heart, value: '500+', label: 'Happy Partners' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">
            Why Trust Scores Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In a world of uncertainty, trust scores provide the clarity and confidence needed to make informed decisions.
            Betracard transforms complex data into simple, actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-gradient-to-br from-lightgray to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring" }}
                className="text-4xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Our Mission: Quantifying Trust
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We're building the world's most advanced trust scoring infrastructure, enabling businesses and individuals
            to make confident decisions in an increasingly complex world. Every score represents a commitment to
            transparency, accuracy, and the power of data-driven trust.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
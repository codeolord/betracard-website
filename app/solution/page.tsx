'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SolutionHero from '@/components/SolutionHero'
import { motion } from 'framer-motion'
import { TrendingUp, Shield, Users, Zap, BarChart3, Target } from 'lucide-react'

export default function Solution() {
  const solutions = [
    {
      icon: TrendingUp,
      title: 'Dynamic Trust Scoring Engine',
      description: 'Our AI-powered scoring system analyzes multiple data points in real-time to generate accurate, adaptive trust scores that evolve with new information.'
    },
    {
      icon: Shield,
      title: 'Risk Assessment Platform',
      description: 'Comprehensive risk evaluation tools that help businesses make informed decisions about partnerships, lending, and hiring.'
    },
    {
      icon: Users,
      title: 'Social Trust Networks',
      description: 'Leverage community and network data to build comprehensive trust profiles that go beyond individual verification.'
    },
    {
      icon: Zap,
      title: 'Instant Verification API',
      description: 'Lightning-fast API endpoints for real-time trust score generation and verification across all platforms.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Detailed insights and reporting on trust trends, risk patterns, and decision-making metrics for your organization.'
    },
    {
      icon: Target,
      title: 'Custom Scoring Models',
      description: 'Tailored trust scoring algorithms designed for specific industries and use cases, from fintech to healthcare.'
    }
  ]

  const benefits = [
    {
      title: 'For Employers',
      description: 'Make confident hiring decisions with comprehensive background checks and trust scores that predict reliability.',
      stats: '85% reduction in bad hires'
    },
    {
      title: 'For Financial Institutions',
      description: 'Reduce lending risks with multi-dimensional trust assessments that go beyond traditional credit scores.',
      stats: '60% faster loan approvals'
    },
    {
      title: 'For Businesses',
      description: 'Build stronger partnerships and customer relationships with verified trust scores and reputation data.',
      stats: '40% increase in successful partnerships'
    },
    {
      title: 'For Educational Institutions',
      description: 'Verify student identities and credentials while maintaining academic integrity and preventing fraud.',
      stats: '95% accuracy in identity verification'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SolutionHero />
      <div className="pt-20">

        {/* Solutions Grid */}
        <section className="py-20 bg-lightgray">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-primary text-center mb-4"
            >
              Our Trust Scoring Platform
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            >
              Comprehensive tools and APIs designed to quantify and leverage trust in every decision.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4"
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{solution.title}</h3>
                  <p className="text-gray-700">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-primary text-center mb-12"
            >
              Trusted by Industry Leaders
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-lightgray to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-gray-700 mb-6">{benefit.description}</p>
                  <div className="text-2xl font-bold text-secondary">{benefit.stats}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const RotatingText = ({ words }: { words: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-primary"
    >
      {words[currentIndex]}
    </motion.span>
  )
}

export const AnimatedBackground = () => (
  <div className="absolute inset-0">
    {/* Animated gradient overlay */}
    <motion.div
      animate={{
        background: [
          'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1))',
          'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1))',
          'linear-gradient(45deg, rgba(14, 165, 233, 0.1), rgba(99, 102, 241, 0.1))'
        ]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0"
    />

    {/* Subtle geometric patterns */}
    <div className="absolute inset-0" style={{
      backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(99, 102, 241, 0.04) 0%, transparent 50%)
      `
    }}></div>

    {/* Animated floating orbs */}
    <motion.div
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"
    />
    <motion.div
      animate={{
        x: [0, -100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5
      }}
      className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-sky-200/25 to-transparent rounded-full blur-3xl"
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-transparent rounded-full blur-3xl"
    />

    {/* Additional floating particles */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -100, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          delay: Math.random() * 10
        }}
        className="absolute w-2 h-2 bg-primary/20 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
      />
    ))}
  </div>
)

export const TrustNetwork3D = () => (
  <div className="relative w-full h-[700px] flex items-center justify-center bg-gradient-to-b from-transparent via-blue-500/5 to-transparent overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-16"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-2">Trust Score System</h3>
        <p className="text-sm text-blue-300">Individual Identity Verification Scores</p>
      </motion.div>

      {/* Main Score Visualization - 3 columns */}
      <div className="flex items-center justify-center gap-20">
        
        {/* Left: Score 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Circular Progress */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 140 140">
              {/* Background circle */}
              <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(15, 118, 110, 0.1)" strokeWidth="8"/>
              
              {/* Animated progress circle */}
              <motion.circle
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke="url(#scoreGrad1)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 376.99 }}
                animate={{ strokeDashoffset: 113.09 }}
                transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
                strokeDasharray="376.99"
                transform="rotate(-90 70 70)"
              />
              
              <defs>
                <linearGradient id="scoreGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e40af"/>
                  <stop offset="100%" stopColor="#0d9488"/>
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center text */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">
                92
              </div>
              <div className="text-xs text-blue-300 font-semibold">Score</div>
            </motion.div>
          </div>

          {/* Person Label */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-center"
          >
            <div className="text-4xl mb-2">👤</div>
            <div className="text-sm font-semibold text-white">User Profile</div>
            <div className="text-xs text-green-400 mt-1 flex items-center justify-center gap-1">
              <span className="text-lg">✓</span> Verified
            </div>
          </motion.div>
        </motion.div>

        {/* Center: Badge */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-full shadow-2xl border-4 border-white/30 flex items-center justify-center"
              style={{
                boxShadow: '0 0 50px rgba(13, 148, 136, 0.8)'
              }}
            >
              <div className="text-5xl">🔐</div>
            </div>
          </motion.div>
          
          <div className="text-center">
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs font-bold text-teal-400 tracking-wider"
            >
              BETRACARD
            </motion.div>
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
              className="text-xs text-teal-300 mt-1"
            >
              Trust Network
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Score 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Circular Progress */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 140 140">
              {/* Background circle */}
              <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(5, 150, 105, 0.1)" strokeWidth="8"/>
              
              {/* Animated progress circle */}
              <motion.circle
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke="url(#scoreGrad2)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 376.99 }}
                animate={{ strokeDashoffset: 94.24 }}
                transition={{ duration: 2.2, delay: 0.9, ease: 'easeInOut' }}
                strokeDasharray="376.99"
                transform="rotate(-90 70 70)"
              />
              
              <defs>
                <linearGradient id="scoreGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488"/>
                  <stop offset="100%" stopColor="#059669"/>
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center text */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text">
                95
              </div>
              <div className="text-xs text-emerald-300 font-semibold">Score</div>
            </motion.div>
          </div>

          {/* Person Label */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl mb-2">👥</div>
            <div className="text-sm font-semibold text-white">Member Account</div>
            <div className="text-xs text-green-400 mt-1 flex items-center justify-center gap-1">
              <span className="text-lg">✓</span> Approved
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex gap-12 justify-center pt-8 border-t border-blue-500/20"
      >
        <div className="text-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl font-bold text-teal-500 mb-1"
          >
            10M+
          </motion.div>
          <div className="text-xs text-blue-200">Identities Verified</div>
        </div>
        
        <div className="text-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="text-2xl font-bold text-emerald-500 mb-1"
          >
            99.9%
          </motion.div>
          <div className="text-xs text-blue-200">Accuracy</div>
        </div>
        
        <div className="text-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            className="text-2xl font-bold text-blue-500 mb-1"
          >
            500+
          </motion.div>
          <div className="text-xs text-blue-200">Partners</div>
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            x: Math.sin(i) * 50
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut'
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${10 + i * 7}%`,
            bottom: '10%',
            background: 'radial-gradient(circle, #0d9488, #1e40af)',
            boxShadow: '0 0 10px rgba(13, 148, 136, 0.8)',
            zIndex: 5
          }}
        />
      ))}
    </motion.div>
  </div>
)
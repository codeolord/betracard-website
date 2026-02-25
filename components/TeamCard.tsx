'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  bio: string
  photo: string
}

export default function TeamCard({ name, role, bio, photo }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -10 }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
    >
      <div className="relative mb-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center overflow-hidden"
        >
          <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
            <Linkedin className="w-4 h-4 text-white" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer">
            <Twitter className="w-4 h-4 text-white" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer">
            <Mail className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>
      </div>
      <motion.h3
        className="text-xl font-semibold text-primary text-center mb-2"
        whileHover={{ scale: 1.05 }}
      >
        {name}
      </motion.h3>
      <p className="text-secondary text-center mb-4 font-medium">{role}</p>
      <motion.p
        className="text-gray-700 text-sm text-center leading-relaxed"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {bio}
      </motion.p>
    </motion.div>
  )
}
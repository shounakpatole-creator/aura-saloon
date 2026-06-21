import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ label, title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`${center ? 'text-center' : 'text-left'} mb-14`}
    >
      <span className="section-label">{label}</span>
      <div className={`${center ? 'mx-auto' : ''} divider-gold`} />
      <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-600 mt-4 leading-tight ${light ? 'text-champagne' : 'gold-text'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="font-inter text-sm md:text-base text-champagne/50 mt-4 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const categories = [
  {
    id: 'hair',
    label: 'Hair Services',
    icon: '✂️',
    services: [
      { name: "Men's Haircut", price: '₹699', desc: 'Precision cut tailored to your face shape and style' },
      { name: "Women's Haircut", price: '₹999', desc: 'Expert cut with consultation and blow-dry finish' },
      { name: 'Beard Styling', price: '₹399', desc: 'Shaping, trimming and grooming to perfection' },
      { name: 'Hair Spa', price: '₹1,999', desc: 'Deep conditioning treatment for lustrous, healthy hair' },
      { name: 'Keratin Treatment', price: '₹5,999', desc: 'Frizz-free, smooth hair for up to 6 months' },
      { name: 'Smoothening', price: '₹6,999', desc: 'Permanent straightening for silky, manageable hair' },
      { name: 'Hair Coloring', price: '₹2,499 onwards', desc: 'Highlights, balayage, ombre and creative coloring' },
      { name: 'Global Hair Color', price: '₹4,999 onwards', desc: 'Full head color with premium professional products' },
    ],
  },
  {
    id: 'skin',
    label: 'Skin Services',
    icon: '✨',
    services: [
      { name: 'Cleanup', price: '₹999', desc: 'Deep pore cleansing for fresh, radiant skin' },
      { name: 'Fruit Facial', price: '₹1,499', desc: 'Natural fruit extracts for glowing, nourished skin' },
      { name: 'Gold Facial', price: '₹2,499', desc: 'Luxury 24K gold treatment for anti-aging benefits' },
      { name: 'Hydra Facial', price: '₹3,999', desc: 'Advanced hydration and skin rejuvenation therapy' },
      { name: 'Anti-Aging Facial', price: '₹4,999', desc: 'Premium treatment targeting fine lines and firmness' },
      { name: 'De-Tan Treatment', price: '₹1,299', desc: 'Effective tan removal for even, bright skin tone' },
    ],
  },
  {
    id: 'nail',
    label: 'Nail Services',
    icon: '💅',
    services: [
      { name: 'Manicure', price: '₹899', desc: 'Hand care, shaping and polish for beautiful hands' },
      { name: 'Pedicure', price: '₹1,099', desc: 'Relaxing foot care with exfoliation and polish' },
      { name: 'Gel Polish', price: '₹799', desc: 'Long-lasting gel color that stays chip-free for weeks' },
      { name: 'Nail Extensions', price: '₹2,499', desc: 'Acrylic or gel extensions for your perfect nail length' },
    ],
  },
  {
    id: 'grooming',
    label: 'Grooming',
    icon: '🪒',
    services: [
      { name: 'Threading', price: '₹99', desc: 'Precise eyebrow and facial threading for defined features' },
      { name: 'Waxing', price: '₹499 onwards', desc: 'Smooth, long-lasting hair removal with gentle wax' },
      { name: 'Body Polishing', price: '₹2,999', desc: 'Full body exfoliation for luminous, soft skin' },
    ],
  },
  {
    id: 'bridal',
    label: 'Bridal Packages',
    icon: '👰',
    services: [
      { name: 'Pre-Bridal Package', price: '₹9,999', desc: 'Complete pre-wedding beauty preparation package' },
      { name: 'Bridal Makeup', price: '₹14,999', desc: 'Flawless bridal look with premium products' },
      { name: 'HD Bridal Makeup', price: '₹24,999', desc: 'High-definition makeup perfect for photography' },
      { name: 'Airbrush Makeup', price: '₹29,999', desc: 'Ultra-smooth airbrush finish for the perfect bridal glow' },
      { name: 'Groom Package', price: '₹5,999', desc: "Complete grooming package for the groom's big day" },
    ],
  },
]

export default function ServicesPage() {
  const [active, setActive] = useState('hair')

  const current = categories.find((c) => c.id === active)!

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Premium Services</span>
            <div className="divider-gold" />
            <h1 className="font-playfair text-5xl md:text-6xl gold-text font-700 mt-6 mb-4">
              Our Services
            </h1>
            <p className="font-inter text-sm text-champagne/60 leading-relaxed">
              {"From precision haircuts to transformative bridal packages — every service crafted with expertise and luxury."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-30 bg-charcoal-800/95 backdrop-blur-xl border-b border-gold/10 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-sm font-inter text-xs font-600 tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  active === id
                    ? 'bg-gold-500 text-charcoal-900'
                    : 'border border-gold/20 text-champagne/60 hover:border-gold/50 hover:text-champagne'
                }`}
              >
                <span>{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-charcoal-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-10">
                <h2 className="font-playfair text-3xl text-champagne mb-2">
                  {current.icon} {current.label}
                </h2>
                <div className="h-px bg-gradient-to-r from-gold-500/50 to-transparent w-48" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {current.services.map(({ name, price, desc }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="glass-card glass-card-hover rounded-lg p-7 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-playfair text-lg text-champagne group-hover:text-gold-400 transition-colors duration-300 leading-tight pr-4">
                        {name}
                      </h3>
                      <span className="font-inter text-sm font-600 text-gold-500 whitespace-nowrap">{price}</span>
                    </div>
                    <p className="font-inter text-xs text-champagne/50 leading-relaxed mb-5">{desc}</p>
                    <Link
                      to="/book"
                      className="font-inter text-xs text-gold-500/60 hover:text-gold-400 tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 group/btn"
                    >
                      Book This Service
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-charcoal-800 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="section-label">We Use Only The Best</span>
          <div className="divider-gold" />
          <p className="font-inter text-sm text-champagne/50 mt-4 mb-10">
            {"All our services are performed exclusively with internationally acclaimed premium products"}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {["L'Oréal Professionnel", 'Schwarzkopf', 'Olaplex', 'Kérastase', 'Moroccanoil'].map((b) => (
              <span key={b} className="font-playfair text-base text-champagne/30 hover:text-gold-500/60 transition-colors duration-300 tracking-widest">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Ready to Begin?</span>
            <div className="divider-gold" />
            <h2 className="font-playfair text-4xl gold-text font-700 mt-6 mb-6">
              Book Your Service Today
            </h2>
            <p className="font-inter text-sm text-champagne/60 mb-10">
              {"Choose your preferred service and let our experts craft your perfect look."}
            </p>
            <Link to="/book" className="btn-gold">
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

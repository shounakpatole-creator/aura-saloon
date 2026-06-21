import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-800/95 backdrop-blur-xl border-b border-gold/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group">
            <span className="font-playfair text-xl font-700 tracking-[0.15em] gold-text leading-none">
              AURA
            </span>
            <span className="font-inter text-[0.55rem] tracking-[0.35em] text-champagne/60 uppercase leading-none mt-0.5">
              Luxe Salon & Spa
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter text-[0.72rem] font-500 tracking-[0.12em] uppercase transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? 'text-gold-500'
                    : 'text-champagne/70 hover:text-gold-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-champagne/60 hover:text-gold-400 transition-colors duration-300"
            >
              <Phone size={14} />
              <span className="font-inter text-xs tracking-widest">+91 98765 43210</span>
            </a>
            <Link to="/book" className="btn-gold text-xs">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-champagne/80 hover:text-gold-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-charcoal-800/98 backdrop-blur-2xl flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`font-playfair text-2xl font-500 transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-gold-500'
                        : 'text-champagne/80 hover:text-gold-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-10 pt-8 border-t border-gold/10">
              <Link to="/book" className="btn-gold w-full text-center block">
                Book Appointment
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 mt-4 text-champagne/50 text-sm"
              >
                <Phone size={14} />
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

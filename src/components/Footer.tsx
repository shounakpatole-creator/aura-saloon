import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-gold/10">
      {/* Top decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="font-playfair text-3xl font-700 tracking-[0.15em] gold-text leading-none">
                AURA
              </div>
              <div className="font-inter text-[0.6rem] tracking-[0.35em] text-champagne/40 uppercase mt-1">
                Luxe Salon & Spa
              </div>
            </div>
            <p className="font-inter text-sm text-champagne/50 leading-relaxed mb-6">
              {"Pune's premier luxury salon experience. Where beauty meets artistry in the heart of Koregaon Park."}
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-champagne/50 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="section-label mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'Book Appointment', path: '/book' },
                { label: 'Contact', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="font-inter text-sm text-champagne/50 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-500/0 group-hover:bg-gold-500/100 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-label mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Hair Treatments",
                "Skin Care",
                "Nail Services",
                "Bridal Packages",
                "Grooming",
                "Body Spa",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="font-inter text-sm text-champagne/50 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-500/0 group-hover:bg-gold-500/100 transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-champagne/50 leading-relaxed">
                  Koregaon Park, Pune,<br />Maharashtra, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="font-inter text-sm text-champagne/50 hover:text-gold-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@auraluxe.in" className="font-inter text-sm text-champagne/50 hover:text-gold-400 transition-colors">
                  hello@auraluxe.in
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-champagne/50">
                  Mon – Sun: 9:00 AM – 9:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs text-champagne/30 tracking-wider">
            © 2024 AURA Luxe Salon & Spa. All Rights Reserved.
          </p>
          <p className="font-inter text-xs text-champagne/20 tracking-wider">
            Koregaon Park, Pune, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}

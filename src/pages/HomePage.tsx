import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, Award, Users, Clock, ChevronDown, Sparkles, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const heroImages = [
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
]

const featuredServices = [
  {
    title: 'Bridal Makeup',
    desc: 'Flawless HD & airbrush artistry for your most special day',
    price: 'From ₹14,999',
    img: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    title: 'Hair Transformation',
    desc: 'Keratin, smoothening, global color & bespoke styling',
    price: 'From ₹699',
    img: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    title: 'Hydra Facial',
    desc: 'Advanced skin rejuvenation for a luminous, youthful glow',
    price: 'From ₹3,999',
    img: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    title: 'Luxury Nail Art',
    desc: 'Gel polish, extensions & bespoke nail artistry',
    price: 'From ₹799',
    img: 'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
]

const whyUs = [
  { icon: Award, title: 'Certified Experts', desc: 'Our stylists are internationally trained and certified by top beauty academies.' },
  { icon: Sparkles, title: 'Premium Products', desc: "We exclusively use L'Oréal, Olaplex, Kérastase & other luxury brands." },
  { icon: Users, title: '10,000+ Happy Clients', desc: 'Trusted by thousands of discerning clients across Pune for 8+ years.' },
  { icon: Star, title: '4.9★ Google Rating', desc: 'Consistently rated as the best luxury salon experience in Pune.' },
  { icon: Clock, title: 'Open 7 Days', desc: 'Available every day from 9 AM to 9 PM for your convenience.' },
  { icon: Award, title: 'Luxury Ambience', desc: 'Step into a world-class space designed to evoke calm and elegance.' },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    text: '"The bridal makeup was absolutely stunning. I felt like royalty on my wedding day. The team at AURA is truly world-class."',
    rating: 5,
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    name: 'Rahul Mehta',
    role: 'Regular Client',
    text: '"Best luxury salon experience in Pune, hands down. The ambience feels like a five-star spa and the staff is incredibly professional."',
    rating: 5,
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Fashion Blogger',
    text: '"The Hydra Facial left my skin glowing for weeks. AURA is my go-to for all things beauty in Pune. Truly premium experience!"',
    rating: 5,
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
]

const brands = [
  { name: "L'Oréal Professionnel" },
  { name: 'Schwarzkopf' },
  { name: 'Olaplex' },
  { name: 'Kérastase' },
  { name: 'Moroccanoil' },
]

const stats = [
  { value: '10K+', label: 'Happy Clients' },
  { value: '15+', label: 'Expert Stylists' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '8+', label: 'Years of Excellence' },
]

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, 180])

  useEffect(() => {
    const timer = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {heroImages.map((src, i) => (
          <motion.div
            key={src}
            initial={false}
            animate={{ opacity: i === heroIndex ? 1 : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.img
              src={src}
              alt="AURA Luxe Salon interior"
              className="w-full h-full object-cover"
              style={{ y: heroY }}
            />
          </motion.div>
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/60 to-charcoal-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/40 via-transparent to-charcoal-900/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="section-label mb-6"
          >
            Koregaon Park, Pune
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-700 leading-[1.05] mb-6 text-shadow-gold"
          >
            <span className="gold-text">{"Pune's Premier"}</span>
            <br />
            <span className="text-champagne">Luxury Salon</span>
            <br />
            <span className="text-champagne/70 italic text-4xl md:text-5xl lg:text-6xl font-400">Experience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-inter text-sm md:text-base tracking-[0.25em] text-champagne/60 uppercase mb-10"
          >
            Hair &nbsp;•&nbsp; Beauty &nbsp;•&nbsp; Skin &nbsp;•&nbsp; Grooming &nbsp;•&nbsp; Bridal
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/book" className="btn-gold">
              Book Appointment
            </Link>
            <Link to="/services" className="btn-outline-gold">
              Explore Services
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 glass-card rounded-lg p-6"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-playfair text-2xl md:text-3xl gold-text font-700">{value}</div>
                <div className="font-inter text-xs text-champagne/50 tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-500/50"
        >
          <ChevronDown size={28} />
        </motion.div>

        {/* Hero dots */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === heroIndex ? 'w-8 h-2 bg-gold-500' : 'w-2 h-2 bg-champagne/30'
              }`}
              aria-label={`Hero image ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Why AURA"
            title="The Art of Luxury"
            subtitle="We blend world-class expertise with premium products to deliver an unparalleled beauty experience every single visit."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card glass-card-hover rounded-lg p-8"
              >
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-gold-500" />
                </div>
                <h3 className="font-playfair text-lg text-champagne mb-3">{title}</h3>
                <p className="font-inter text-sm text-champagne/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED SERVICES ─── */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Our Specialties"
            title="Signature Services"
            subtitle="From transformative hair treatments to luminous skin rituals, discover our most sought-after luxury services."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map(({ title, desc, price, img }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group relative overflow-hidden rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-lg text-champagne mb-2">{title}</h3>
                  <p className="font-inter text-xs text-champagne/50 leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm font-600 text-gold-500">{price}</span>
                    <Link
                      to="/book"
                      className="font-inter text-xs text-champagne/50 hover:text-gold-400 flex items-center gap-1 transition-colors group/link"
                    >
                      Book <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline-gold">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── AMBIENCE SHOWCASE ─── */}
      <section className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Our Space"
            title="Salon Ambience"
            subtitle="Step into a sanctuary of luxury, designed to transport you to a world of calm and elegance."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', span: 'col-span-2 md:col-span-1', h: 'h-64 md:h-80' },
              { src: 'https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', span: '', h: 'h-64 md:h-80' },
              { src: 'https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', span: '', h: 'h-64 md:h-80' },
              { src: 'https://images.pexels.com/photos/3993466/pexels-photo-3993466.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', span: '', h: 'h-56' },
              { src: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', span: 'col-span-2', h: 'h-56' },
            ].map(({ src, span, h }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`${span} ${h} overflow-hidden rounded-lg group relative`}
              >
                <img
                  src={src}
                  alt="Salon ambience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Client Love"
            title="What They Say"
            subtitle="Real experiences from our valued clients who trust AURA for their beauty needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, rating, img }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card rounded-lg p-8 relative"
              >
                <div className="text-gold-500 text-4xl font-playfair absolute top-6 right-8 opacity-30">"</div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="font-inter text-sm text-champagne/70 leading-relaxed mb-6 italic">{text}</p>
                <div className="flex items-center gap-3">
                  <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover border border-gold/20" />
                  <div>
                    <div className="font-inter text-sm font-600 text-champagne">{name}</div>
                    <div className="font-inter text-xs text-gold-500">{role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="btn-outline-gold">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BRANDS ─── */}
      <section className="py-16 bg-charcoal-800 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label">Premium Products</span>
            <div className="divider-gold" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {brands.map(({ name }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="font-playfair text-lg md:text-xl text-champagne/30 hover:text-gold-500/70 transition-colors duration-300 tracking-widest"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEMBERSHIP PREVIEW ─── */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Exclusive Membership"
            title="Join the AURA Circle"
            subtitle="Unlock exclusive privileges, priority booking, and luxury perks with our membership plans."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Silver', price: '₹2,999', period: '/year', perks: ['10% Discount on all services', 'Member-only offers', 'Birthday privilege'], highlight: false },
              { name: 'Gold', price: '₹5,999', period: '/year', perks: ['15% Discount on all services', 'Priority Booking', 'Exclusive member events', 'Birthday luxury gift'], highlight: true },
              { name: 'Platinum', price: '₹9,999', period: '/year', perks: ['20% Discount on all services', 'VIP Lounge Access', 'Free Monthly Hair Spa', 'Personal Style Consultant', 'Complimentary birthday treatment'], highlight: false },
            ].map(({ name, price, period, perks, highlight }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative rounded-lg p-8 border transition-all duration-300 ${
                  highlight
                    ? 'border-gold-500 bg-gradient-to-b from-gold-500/10 to-transparent'
                    : 'border-gold/15 glass-card hover:border-gold/30'
                }`}
              >
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-gradient text-charcoal-900 text-xs font-inter font-700 tracking-widest uppercase px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="section-label mb-4">{name} Membership</div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="font-playfair text-4xl gold-text font-700">{price}</span>
                  <span className="font-inter text-sm text-champagne/40 pb-1">{period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 font-inter text-sm text-champagne/60">
                      <span className="text-gold-500 mt-0.5">✦</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/book" className={highlight ? 'btn-gold w-full text-center block' : 'btn-outline-gold w-full text-center block'}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Luxury salon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/85" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Ready to Transform?</span>
            <div className="divider-gold" />
            <h2 className="font-playfair text-4xl md:text-5xl gold-text font-700 mt-6 mb-6">
              Book Your Luxury Experience
            </h2>
            <p className="font-inter text-sm text-champagne/60 mb-10 leading-relaxed">
              {"Treat yourself to the finest salon experience in Pune. Our expert team is ready to craft your perfect look."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book" className="btn-gold">
                Book Appointment
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

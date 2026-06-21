import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, Heart, Sparkles, Users } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const stats = [
  { value: '10,000+', label: 'Happy Clients', icon: Users },
  { value: '15+', label: 'Expert Stylists', icon: Award },
  { value: '4.9★', label: 'Google Rating', icon: Sparkles },
  { value: '8+', label: 'Years Experience', icon: Heart },
]

const team = [
  {
    name: 'Riya Kapoor',
    role: 'Creative Director & Lead Stylist',
    specialty: 'Bridal & Color Specialist',
    img: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    exp: '12 Years',
  },
  {
    name: 'Arjun Desai',
    role: 'Senior Hair Stylist',
    specialty: 'Cuts & Keratin Expert',
    img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    exp: '9 Years',
  },
  {
    name: 'Priyanka Nair',
    role: 'Skin & Beauty Expert',
    specialty: 'Facials & Skincare',
    img: 'https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    exp: '7 Years',
  },
  {
    name: 'Vikram Joshi',
    role: 'Grooming Specialist',
    specialty: "Men's Grooming & Beard Art",
    img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    exp: '6 Years',
  },
]

const values = [
  { title: 'Artistry', desc: "Beauty is our canvas. Every client is a unique masterpiece deserving of our finest craft." },
  { title: 'Excellence', desc: "We settle for nothing less than perfection in every service, every time, without compromise." },
  { title: 'Integrity', desc: "Honest consultations, transparent pricing, and genuine care for your well-being and beauty goals." },
  { title: 'Innovation', desc: "We stay ahead of global trends, continuously training our team with the latest techniques." },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="AURA Salon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Our Story</span>
            <div className="divider-gold" />
            <h1 className="font-playfair text-5xl md:text-6xl gold-text font-700 mt-6 mb-6">
              About AURA Luxe
            </h1>
            <p className="font-inter text-base text-champagne/60 leading-relaxed max-w-2xl mx-auto">
              {"Born from a passion for beauty and a vision for luxury, AURA Luxe Salon & Spa has redefined the salon experience in Pune for over eight years."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">The Beginning</span>
              <div className="divider-gold mx-0 mb-6" />
              <h2 className="font-playfair text-4xl text-champagne mb-6 leading-tight">
                A Decade of Crafting{' '}
                <span className="italic gold-text">Beauty</span>
              </h2>
              <p className="font-inter text-sm text-champagne/60 leading-relaxed mb-5">
                {"AURA Luxe Salon & Spa was founded in 2016 with a singular vision: to bring the luxury of Dubai's and Mumbai's finest salons to the heart of Pune. Nestled in the prestigious Koregaon Park, we set out to create not just a salon, but a destination."}
              </p>
              <p className="font-inter text-sm text-champagne/60 leading-relaxed mb-5">
                {"What began as a boutique studio has blossomed into Pune's most celebrated luxury salon, serving thousands of discerning clients who demand nothing but the finest in beauty and grooming."}
              </p>
              <p className="font-inter text-sm text-champagne/60 leading-relaxed mb-8">
                {"Our team of internationally trained stylists and beauty experts bring global expertise to every appointment, ensuring you leave not just looking your best — but feeling truly transformed."}
              </p>
              <Link to="/book" className="btn-gold">
                Experience AURA
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Salon interior"
                className="w-full h-96 object-cover rounded-lg border border-gold/20"
              />
              <div className="absolute -bottom-6 -right-6 glass-card rounded-lg p-6 border border-gold/20">
                <div className="font-playfair text-4xl gold-text font-700">8+</div>
                <div className="font-inter text-xs text-champagne/50 tracking-wider mt-1">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card rounded-lg p-8 text-center"
              >
                <Icon size={24} className="text-gold-500 mx-auto mb-4" />
                <div className="font-playfair text-4xl gold-text font-700 mb-2">{value}</div>
                <div className="font-inter text-xs text-champagne/50 tracking-wider">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Our Purpose" title="Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-lg p-10 border border-gold/20"
            >
              <div className="section-label mb-4">Vision</div>
              <h3 className="font-playfair text-2xl text-champagne mb-5">
                {"To be India's most celebrated luxury salon brand"}
              </h3>
              <p className="font-inter text-sm text-champagne/60 leading-relaxed">
                {"We envision a world where every person can access world-class beauty expertise in a setting that makes them feel truly special. We are building a legacy of luxury, one transformation at a time."}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-card rounded-lg p-10 border border-gold/20"
            >
              <div className="section-label mb-4">Mission</div>
              <h3 className="font-playfair text-2xl text-champagne mb-5">
                {"To deliver transformative beauty experiences with artistry and care"}
              </h3>
              <p className="font-inter text-sm text-champagne/60 leading-relaxed">
                {"Our mission is to provide every client with personalized, expert beauty services using the finest products, delivered in an environment of warmth, luxury, and professionalism."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="What We Stand For" title="Our Core Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card glass-card-hover rounded-lg p-8 text-center"
              >
                <div className="font-playfair text-5xl text-gold-500/20 font-700 mb-4">0{i + 1}</div>
                <h3 className="font-playfair text-xl text-champagne mb-3">{title}</h3>
                <p className="font-inter text-xs text-champagne/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Meet the Experts"
            title="Our Master Stylists"
            subtitle="Internationally trained, locally passionate. Meet the artists behind every transformation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, specialty, img, exp }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group glass-card glass-card-hover rounded-lg overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 glass-card rounded px-3 py-1">
                    <span className="font-inter text-xs text-gold-500">{exp} Experience</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-lg text-champagne">{name}</h3>
                  <p className="font-inter text-xs text-gold-500 mt-1">{role}</p>
                  <p className="font-inter text-xs text-champagne/40 mt-1">{specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Begin Your Journey</span>
            <div className="divider-gold" />
            <h2 className="font-playfair text-4xl gold-text font-700 mt-6 mb-6">
              Experience the AURA Difference
            </h2>
            <p className="font-inter text-sm text-champagne/60 mb-10 leading-relaxed">
              {"Come discover why Pune's most discerning clients choose AURA for their beauty needs. We promise an experience that exceeds every expectation."}
            </p>
            <Link to="/book" className="btn-gold">
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

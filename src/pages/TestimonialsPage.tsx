import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    location: 'Koregaon Park, Pune',
    text: "The bridal makeup was absolutely stunning. I felt like royalty on my wedding day. The team at AURA took the time to understand exactly what I wanted and delivered beyond my expectations. Every guest complimented my look!",
    rating: 5,
    service: 'HD Bridal Makeup',
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    date: 'November 2024',
  },
  {
    name: 'Rahul Mehta',
    role: 'IT Professional',
    location: 'Viman Nagar, Pune',
    text: "Best luxury salon experience in Pune, hands down. The ambience feels like a five-star spa and the staff is incredibly professional. My keratin treatment lasted 5 months and the results were phenomenal.",
    rating: 5,
    service: 'Keratin Treatment',
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    date: 'October 2024',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Fashion Blogger',
    location: 'Baner, Pune',
    text: "The Hydra Facial left my skin glowing for weeks. AURA is my absolute go-to for all things beauty in Pune. The products they use are top-notch and the therapists are highly skilled. Truly premium experience!",
    rating: 5,
    service: 'Hydra Facial',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    date: 'October 2024',
  },
  {
    name: 'Ananya Desai',
    role: 'Entrepreneur',
    location: 'Kalyani Nagar, Pune',
    text: "I had my pre-bridal package done here and it was the best decision. The team is so warm, professional, and talented. The salon itself is breathtakingly beautiful. I felt pampered from start to finish!",
    rating: 5,
    service: 'Pre-Bridal Package',
    img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    date: 'September 2024',
  },
  {
    name: 'Vikram Joshi',
    role: 'Business Owner',
    location: 'Aundh, Pune',
    text: "As a man, I was nervous about visiting a luxury salon but the grooming experience at AURA was exceptional. My beard styling and haircut were perfect. The attention to detail is unmatched. Highly recommend!",
    rating: 5,
    service: "Men's Grooming Package",
    img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    date: 'September 2024',
  },
  {
    name: 'Meera Iyer',
    role: 'Doctor',
    location: 'Deccan, Pune',
    text: "The Gold Facial here is absolutely divine. My skin has never looked better. The therapist was knowledgeable and the whole experience was incredibly relaxing. AURA has ruined all other salons for me!",
    rating: 5,
    service: 'Gold Facial',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    date: 'August 2024',
  },
  {
    name: 'Rohan Kapoor',
    role: 'Architect',
    location: 'Wakad, Pune',
    text: "Came in for a global hair color and left absolutely blown away. The colorist perfectly matched my desired shade and the result was stunning. The salon ambience is like nothing else in Pune. Will be back!",
    rating: 5,
    service: 'Global Hair Color',
    img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    date: 'August 2024',
  },
  {
    name: 'Kavya Nair',
    role: 'Marketing Manager',
    location: 'Kothrud, Pune',
    text: "I got the airbrush bridal makeup for my wedding and received SO many compliments. The makeup lasted all day and night without any touch-ups. The team is incredibly talented and professional. AURA is truly the best!",
    rating: 5,
    service: 'Airbrush Bridal Makeup',
    img: 'https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    date: 'July 2024',
  },
  {
    name: 'Arjun Singhania',
    role: 'Finance Professional',
    location: 'Magarpatta, Pune',
    text: "The Platinum membership is worth every rupee. Priority booking, the monthly hair spa, and VIP lounge access make every visit feel special. AURA has become my monthly ritual and I look forward to it every time.",
    rating: 5,
    service: 'Platinum Membership',
    img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
    date: 'July 2024',
  },
]

const ratingStats = [
  { label: '5 Stars', count: 892, pct: 94 },
  { label: '4 Stars', count: 48, pct: 5 },
  { label: '3 Stars', count: 10, pct: 1 },
  { label: '2 Stars', count: 2, pct: 0 },
  { label: '1 Star', count: 1, pct: 0 },
]

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('All')
  const services = ['All', ...Array.from(new Set(reviews.map((r) => r.service)))]

  const filtered = filter === 'All' ? reviews : reviews.filter((r) => r.service === filter)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Testimonials"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Client Stories</span>
            <div className="divider-gold" />
            <h1 className="font-playfair text-5xl md:text-6xl gold-text font-700 mt-6 mb-4">
              Testimonials
            </h1>
            <p className="font-inter text-sm text-champagne/60 leading-relaxed">
              {"Real stories from real clients who experienced the AURA difference."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Overall Rating */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <div className="font-playfair text-8xl gold-text font-700">4.9</div>
              <div className="flex justify-center gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <div className="font-inter text-sm text-champagne/50 mt-3 tracking-wider">
                Based on 953 Google Reviews
              </div>
              <div className="mt-6 glass-card rounded-lg p-4 inline-block">
                <div className="font-inter text-xs text-champagne/50 tracking-wider">
                  ⭐ Rated #1 Luxury Salon in Pune
                </div>
              </div>
            </motion.div>

            {/* Rating Bars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3"
            >
              {ratingStats.map(({ label, count, pct }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="font-inter text-xs text-champagne/50 w-14">{label}</span>
                  <div className="flex-1 h-2 bg-charcoal-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full"
                    />
                  </div>
                  <span className="font-inter text-xs text-champagne/30 w-8">{count}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-charcoal-900 border-b border-gold/10 sticky top-16 z-30 bg-charcoal-900/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {services.slice(0, 6).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-sm font-inter text-xs font-600 tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  filter === s
                    ? 'bg-gold-500 text-charcoal-900'
                    : 'border border-gold/20 text-champagne/60 hover:border-gold/50 hover:text-champagne'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ name, role, location, text, rating, service, img, date }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-lg p-7 relative group hover:border-gold/30 transition-all duration-300"
              >
                <Quote size={32} className="text-gold-500/10 absolute top-5 right-5" />
                
                <div className="flex items-center gap-3 mb-5">
                  <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover border border-gold/20" />
                  <div>
                    <div className="font-inter text-sm font-600 text-champagne">{name}</div>
                    <div className="font-inter text-xs text-gold-500">{role}</div>
                    <div className="font-inter text-xs text-champagne/30 mt-0.5">{location}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} size={13} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>

                <p className="font-inter text-sm text-champagne/65 leading-relaxed mb-5 italic">
                  {`"${text}"`}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                  <span className="font-inter text-xs text-gold-500/70">{service}</span>
                  <span className="font-inter text-xs text-champagne/30">{date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Join Our Happy Clients</span>
            <div className="divider-gold" />
            <h2 className="font-playfair text-4xl gold-text font-700 mt-6 mb-6">
              Create Your Own Story
            </h2>
            <p className="font-inter text-sm text-champagne/60 mb-10">
              {"Experience the luxury that thousands of Pune's most discerning clients trust."}
            </p>
            <Link to="/book" className="btn-gold">
              Book Your Experience
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

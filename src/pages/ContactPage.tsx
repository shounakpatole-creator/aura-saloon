import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube } from 'lucide-react'
import toast from 'react-hot-toast'

const faqs = [
  { q: 'Do I need to book in advance?', a: 'We highly recommend booking in advance, especially for bridal services and weekends. Walk-ins are welcome based on availability.' },
  { q: 'What payment methods do you accept?', a: 'We accept cash, all major credit/debit cards, UPI (GPay, PhonePe, Paytm), and net banking.' },
  { q: 'Is parking available?', a: 'Yes, we have dedicated parking space for our clients in Koregaon Park. Valet parking is available for special occasions.' },
  { q: 'Do you offer home services?', a: 'Yes, we offer premium home bridal services. Please call or WhatsApp us for home service inquiries and pricing.' },
  { q: 'What is your cancellation policy?', a: 'We request 24-hour advance notice for cancellations. Late cancellations may incur a small fee for bridal packages.' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((p) => ({ ...p, [e.target.name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    toast.success("Message sent! We'll get back to you within 24 hours.")
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Contact AURA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/85" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Get in Touch</span>
            <div className="divider-gold" />
            <h1 className="font-playfair text-5xl md:text-6xl gold-text font-700 mt-6 mb-4">
              Contact Us
            </h1>
            <p className="font-inter text-sm text-champagne/60 leading-relaxed">
              {"We'd love to hear from you. Reach out for appointments, inquiries, or just to say hello."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-lg p-8"
              >
                <h3 className="font-playfair text-xl text-champagne mb-6">Visit Us</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-inter text-sm font-600 text-champagne mb-1">Address</div>
                      <div className="font-inter text-sm text-champagne/50 leading-relaxed">
                        AURA Luxe Salon & Spa<br />
                        Koregaon Park, Pune,<br />
                        Maharashtra 411001
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-inter text-sm font-600 text-champagne mb-1">Phone</div>
                      <a href="tel:+919876543210" className="font-inter text-sm text-champagne/50 hover:text-gold-400 transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-inter text-sm font-600 text-champagne mb-1">Email</div>
                      <a href="mailto:hello@auraluxe.in" className="font-inter text-sm text-champagne/50 hover:text-gold-400 transition-colors">
                        hello@auraluxe.in
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-inter text-sm font-600 text-champagne mb-1">Hours</div>
                      <div className="font-inter text-sm text-champagne/50">
                        Monday – Sunday<br />
                        9:00 AM – 9:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="glass-card rounded-lg p-8"
              >
                <h3 className="font-playfair text-xl text-champagne mb-5">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { Icon: Instagram, label: 'Instagram', handle: '@auraluxepune' },
                    { Icon: Facebook, label: 'Facebook', handle: 'AURA Luxe Salon' },
                    { Icon: Youtube, label: 'YouTube', handle: 'AURA Luxe' },
                  ].map(({ Icon, label, handle }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-champagne/50 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full text-center block"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Form + Map */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-lg p-8"
              >
                <h3 className="font-playfair text-xl text-champagne mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-name" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                        Full Name <span className="text-gold-500">*</span>
                      </label>
                      <input id="c-name" name="name" type="text" value={form.name} onChange={handleChange}
                        placeholder="Your name" className="input-luxury"
                        aria-describedby={errors.name ? 'cname-error' : undefined} />
                      {errors.name && <p id="cname-error" className="font-inter text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                        Phone Number
                      </label>
                      <input id="c-phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210" className="input-luxury" />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="c-email" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                        Email Address <span className="text-gold-500">*</span>
                      </label>
                      <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com" className="input-luxury"
                        aria-describedby={errors.email ? 'cemail-error' : undefined} />
                      {errors.email && <p id="cemail-error" className="font-inter text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="c-message" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                        Message <span className="text-gold-500">*</span>
                      </label>
                      <textarea id="c-message" name="message" rows={5} value={form.message} onChange={handleChange}
                        placeholder="How can we help you?" className="input-luxury resize-none"
                        aria-describedby={errors.message ? 'cmessage-error' : undefined} />
                      {errors.message && <p id="cmessage-error" className="font-inter text-xs text-red-400 mt-1">{errors.message}</p>}
                    </div>
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-gold flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? (
                      <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Sending...</>
                    ) : (
                      <><Send size={14} /> Send Message</>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="glass-card rounded-lg overflow-hidden border border-gold/15"
              >
                <div className="p-5 border-b border-gold/10">
                  <h3 className="font-playfair text-lg text-champagne flex items-center gap-2">
                    <MapPin size={16} className="text-gold-500" />
                    Find Us in Koregaon Park
                  </h3>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.47!2d73.8929!3d18.5362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f4b5e9a63%3A0x5c2e1e3e4e5f6a7b!2sKoregaon+Park%2C+Pune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="320"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AURA Luxe Salon location map"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Have Questions?</span>
            <div className="divider-gold" />
            <h2 className="font-playfair text-4xl gold-text font-700 mt-6">
              Frequently Asked
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-inter text-sm font-600 text-champagne pr-4">{q}</span>
                  <span className={`text-gold-500 transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0v16M0 8h16" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="font-inter text-sm text-champagne/60 leading-relaxed">{a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

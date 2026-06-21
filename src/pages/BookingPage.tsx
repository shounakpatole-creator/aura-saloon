import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Calendar, Clock, User, Phone, Mail, MessageSquare, ChevronDown } from 'lucide-react'
import toast from 'react-hot-toast'

const services = [
  "Men's Haircut – ₹699",
  "Women's Haircut – ₹999",
  'Beard Styling – ₹399',
  'Hair Spa – ₹1,999',
  'Keratin Treatment – ₹5,999',
  'Smoothening – ₹6,999',
  'Hair Coloring – ₹2,499+',
  'Global Hair Color – ₹4,999+',
  'Cleanup – ₹999',
  'Fruit Facial – ₹1,499',
  'Gold Facial – ₹2,499',
  'Hydra Facial – ₹3,999',
  'Anti-Aging Facial – ₹4,999',
  'De-Tan Treatment – ₹1,299',
  'Manicure – ₹899',
  'Pedicure – ₹1,099',
  'Gel Polish – ₹799',
  'Nail Extensions – ₹2,499',
  'Threading – ₹99',
  'Waxing – ₹499+',
  'Body Polishing – ₹2,999',
  'Pre-Bridal Package – ₹9,999',
  'Bridal Makeup – ₹14,999',
  'HD Bridal Makeup – ₹24,999',
  'Airbrush Makeup – ₹29,999',
  'Groom Package – ₹5,999',
]

const stylists = [
  'No Preference',
  'Riya Kapoor – Creative Director',
  'Arjun Desai – Senior Hair Stylist',
  'Priyanka Nair – Skin & Beauty Expert',
  'Vikram Joshi – Grooming Specialist',
]

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
  '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
]

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  stylist: string
  date: string
  time: string
  notes: string
}

interface Errors {
  [key: string]: string
}

export default function BookingPage() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', service: '', stylist: '', date: '', time: '', notes: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.service) e.service = 'Please select a service'
    if (!form.date) e.date = 'Please select a date'
    if (!form.time) e.time = 'Please select a time slot'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

const handleSubmit = async (e: React.FormEvent) => {

  e.preventDefault()

  if (!validate()) {
    toast.error('Please fill in all required fields correctly.')
    return
  }

  setLoading(true)

  try {

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwluwzo2YCpaRienG-Nn5ONTAucHziQyNcxWg3JQGLmuzI2p-D12Ppk4qaKCvFg_dh5vA/exec',
      {
        method: 'POST',

        body: JSON.stringify(form),
       
        mode: 'no-cors'
      }
    )

    
    setSubmitted(true)

    toast.success('Appointment booked successfully!')

  } catch (error) {

    console.error(error)

    toast.error('Something went wrong.')

  } finally {

    setLoading(false)

  }

}

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Book appointment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/85" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Reserve Your Moment</span>
            <div className="divider-gold" />
            <h1 className="font-playfair text-5xl md:text-6xl gold-text font-700 mt-6 mb-4">
              Book Appointment
            </h1>
            <p className="font-inter text-sm text-champagne/60 leading-relaxed">
              {"Reserve your luxury experience at AURA. Our team will confirm within 2 hours."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-lg p-16 text-center border border-gold/30"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle size={64} className="text-gold-500 mx-auto mb-6" />
                </motion.div>
                <h2 className="font-playfair text-4xl gold-text font-700 mb-4">
                  Appointment Confirmed!
                </h2>
                <p className="font-inter text-sm text-champagne/60 mb-4 leading-relaxed max-w-lg mx-auto">
                  {"Thank you, "}
                  <span className="text-champagne">{form.name}</span>
                  {"! Your appointment has been received. We'll send a confirmation to "}
                  <span className="text-champagne">{form.email}</span>
                  {" and WhatsApp you at "}
                  <span className="text-champagne">{form.phone}</span>
                  {" within 2 hours."}
                </p>
                <div className="glass-card rounded-lg p-6 inline-block text-left mt-6 mb-8">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-champagne/40">Service:</span> <span className="text-champagne ml-2">{form.service.split(' – ')[0]}</span></div>
                    <div><span className="text-champagne/40">Date:</span> <span className="text-champagne ml-2">{form.date}</span></div>
                    <div><span className="text-champagne/40">Time:</span> <span className="text-champagne ml-2">{form.time}</span></div>
                    {form.stylist && form.stylist !== 'No Preference' && (
                      <div><span className="text-champagne/40">Stylist:</span> <span className="text-champagne ml-2">{form.stylist.split(' – ')[0]}</span></div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20AURA%20Luxe%20Salon!%20I%20just%20booked%20an%20appointment%20for%20${encodeURIComponent(form.service.split(' – ')[0])}%20on%20${form.date}%20at%20${form.time}.%20My%20name%20is%20${encodeURIComponent(form.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    Confirm via WhatsApp
                  </a>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', stylist: '', date: '', time: '', notes: '' }) }} className="btn-outline-gold">
                    Book Another
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Info Panel */}
                  <div className="lg:col-span-1">
                    <div className="glass-card rounded-lg p-8 sticky top-28">
                      <h3 className="font-playfair text-xl text-champagne mb-6">Booking Info</h3>
                      <div className="space-y-5">
                        {[
                          { icon: Clock, title: 'Hours', desc: 'Mon – Sun: 9 AM – 9 PM' },
                          { icon: Phone, title: 'Call Us', desc: '+91 98765 43210' },
                          { icon: MessageSquare, title: 'WhatsApp', desc: 'Quick booking via chat' },
                          { icon: Calendar, title: 'Confirmation', desc: 'Within 2 hours of booking' },
                        ].map(({ icon: Icon, title, desc }) => (
                          <div key={title} className="flex gap-3">
                            <Icon size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-inter text-xs font-600 text-champagne">{title}</div>
                              <div className="font-inter text-xs text-champagne/50 mt-0.5">{desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-6 border-t border-gold/10">
                        <a
                          href="https://wa.me/919876543210?text=Hello%20AURA%20Luxe%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gold w-full text-center block"
                        >
                          WhatsApp Booking
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      <div className="glass-card rounded-lg p-8">
                        <h3 className="font-playfair text-xl text-champagne mb-6 flex items-center gap-2">
                          <User size={18} className="text-gold-500" /> Personal Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                              Full Name <span className="text-gold-500">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Priya Sharma"
                              className="input-luxury"
                              aria-describedby={errors.name ? 'name-error' : undefined}
                            />
                            {errors.name && <p id="name-error" className="font-inter text-xs text-red-400 mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label htmlFor="phone" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                              Phone Number <span className="text-gold-500">*</span>
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="98765 43210"
                              className="input-luxury"
                              aria-describedby={errors.phone ? 'phone-error' : undefined}
                            />
                            {errors.phone && <p id="phone-error" className="font-inter text-xs text-red-400 mt-1">{errors.phone}</p>}
                          </div>
                          <div className="md:col-span-2">
                            <label htmlFor="email" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                              Email Address <span className="text-gold-500">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="priya@example.com"
                              className="input-luxury"
                              aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            {errors.email && <p id="email-error" className="font-inter text-xs text-red-400 mt-1">{errors.email}</p>}
                          </div>
                        </div>
                      </div>

                      <div className="glass-card rounded-lg p-8">
                        <h3 className="font-playfair text-xl text-champagne mb-6 flex items-center gap-2">
                          <Calendar size={18} className="text-gold-500" /> Appointment Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="md:col-span-2">
                            <label htmlFor="service" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                              Select Service <span className="text-gold-500">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="service"
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                className="input-luxury appearance-none pr-10"
                                aria-describedby={errors.service ? 'service-error' : undefined}
                              >
                                <option value="">Choose a service...</option>
                                {services.map((s) => (
                                  <option key={s} value={s} className="bg-charcoal-700">{s}</option>
                                ))}
                              </select>
                              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-champagne/40 pointer-events-none" />
                            </div>
                            {errors.service && <p id="service-error" className="font-inter text-xs text-red-400 mt-1">{errors.service}</p>}
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="stylist" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                              Preferred Stylist
                            </label>
                            <div className="relative">
                              <select
                                id="stylist"
                                name="stylist"
                                value={form.stylist}
                                onChange={handleChange}
                                className="input-luxury appearance-none pr-10"
                              >
                                <option value="">Select stylist (optional)...</option>
                                {stylists.map((s) => (
                                  <option key={s} value={s} className="bg-charcoal-700">{s}</option>
                                ))}
                              </select>
                              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-champagne/40 pointer-events-none" />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="date" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                              Preferred Date <span className="text-gold-500">*</span>
                            </label>
                            <input
                              id="date"
                              name="date"
                              type="date"
                              min={today}
                              value={form.date}
                              onChange={handleChange}
                              className="input-luxury"
                              aria-describedby={errors.date ? 'date-error' : undefined}
                            />
                            {errors.date && <p id="date-error" className="font-inter text-xs text-red-400 mt-1">{errors.date}</p>}
                          </div>

                          <div>
                            <label htmlFor="time" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                              Preferred Time <span className="text-gold-500">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="time"
                                name="time"
                                value={form.time}
                                onChange={handleChange}
                                className="input-luxury appearance-none pr-10"
                                aria-describedby={errors.time ? 'time-error' : undefined}
                              >
                                <option value="">Select time slot...</option>
                                {timeSlots.map((t) => (
                                  <option key={t} value={t} className="bg-charcoal-700">{t}</option>
                                ))}
                              </select>
                              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-champagne/40 pointer-events-none" />
                            </div>
                            {errors.time && <p id="time-error" className="font-inter text-xs text-red-400 mt-1">{errors.time}</p>}
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="notes" className="block font-inter text-xs text-champagne/60 mb-2 tracking-wider">
                              Special Requests / Notes
                            </label>
                            <textarea
                              id="notes"
                              name="notes"
                              rows={4}
                              value={form.notes}
                              onChange={handleChange}
                              placeholder="Any special requests, allergies, or notes for our team..."
                              className="input-luxury resize-none"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-gold w-full flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Confirming Appointment...
                          </>
                        ) : (
                          'Confirm Appointment'
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

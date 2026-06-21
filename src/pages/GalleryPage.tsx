import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const categories = ['All', 'Hair', 'Bridal', 'Skin', 'Nails', 'Interiors']

const galleryItems = [
  { id: 1, src: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Bridal', title: 'Bridal Glam', span: 'row-span-2' },
  { id: 2, src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Hair', title: 'Hair Color' },
  { id: 3, src: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Skin', title: 'Skin Glow' },
  { id: 4, src: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Interiors', title: 'Salon Ambience', span: 'col-span-2' },
  { id: 5, src: 'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Nails', title: 'Nail Art' },
  { id: 6, src: 'https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Interiors', title: 'VIP Suite' },
  { id: 7, src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Hair', title: 'Blowout Style', span: 'row-span-2' },
  { id: 8, src: 'https://images.pexels.com/photos/3993466/pexels-photo-3993466.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Hair', title: 'Hair Transformation' },
  { id: 9, src: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Hair', title: "Men's Grooming" },
  { id: 10, src: 'https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Skin', title: 'Facial Treatment', span: 'col-span-2' },
  { id: 11, src: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Interiors', title: 'Styling Station' },
  { id: 12, src: 'https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=800&q=80', cat: 'Bridal', title: 'Bridal Look' },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null)

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.cat === activeFilter)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">Visual Portfolio</span>
            <div className="divider-gold" />
            <h1 className="font-playfair text-5xl md:text-6xl gold-text font-700 mt-6 mb-4">
              Our Gallery
            </h1>
            <p className="font-inter text-sm text-champagne/60 leading-relaxed">
              {"A curated showcase of transformations, artistry, and the luxurious world of AURA."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-charcoal-800 sticky top-16 z-30 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-sm font-inter text-xs font-600 tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gold-500 text-charcoal-900'
                    : 'border border-gold/20 text-champagne/60 hover:border-gold/50 hover:text-champagne'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
            >
              {filtered.map(({ id, src, cat, title, span }, i) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className={`relative overflow-hidden rounded-lg group cursor-pointer ${span || ''}`}
                  onClick={() => setLightbox(filtered[i])}
                >
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/50 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={28} className="text-gold-400 mb-2" />
                    <span className="font-inter text-xs text-champagne tracking-wider">{title}</span>
                    <span className="font-inter text-xs text-gold-500/70 mt-1">{cat}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-inter text-champagne/40">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal-900/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-champagne/60 hover:text-gold-400 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>
              <img
                src={lightbox.src.replace('w=800', 'w=1200')}
                alt={lightbox.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 flex items-center justify-between px-2">
                <span className="font-playfair text-lg text-champagne">{lightbox.title}</span>
                <span className="section-label">{lightbox.cat}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Before & After */}
      <section className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Transformations"
            title="Before & After"
            subtitle="Witness the magic of our expert stylists through real client transformations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                before: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
                after: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
                service: 'Keratin Treatment',
              },
              {
                before: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
                after: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
                service: 'Bridal Makeover',
              },
            ].map(({ before, after, service }, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="glass-card rounded-lg overflow-hidden"
              >
                <div className="grid grid-cols-2 h-64">
                  <div className="relative overflow-hidden">
                    <img src={before} alt="Before" className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3 bg-charcoal-900/80 rounded px-3 py-1">
                      <span className="font-inter text-xs text-champagne/70 tracking-wider">BEFORE</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={after} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 right-3 bg-gold-500/90 rounded px-3 py-1">
                      <span className="font-inter text-xs text-charcoal-900 font-600 tracking-wider">AFTER</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <span className="font-playfair text-base text-champagne">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

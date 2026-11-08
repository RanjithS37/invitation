import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'

type GalleryItem = {
  id: string
  src: string
  alt: string
}

type GalleryGridProps = {
  items: readonly GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            layout
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(item)}
            className="group relative overflow-hidden rounded-[2rem] border border-[#eadfc7] bg-white/50 text-left shadow-[0_24px_60px_-32px_rgba(64,46,28,0.45)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1413]/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white opacity-0 transition group-hover:opacity-100">
              <span className="text-sm uppercase tracking-[0.2em]">Moments</span>
              <ArrowRight size={18} />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1715]/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.24 }}
              className="relative max-h-[84vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#f7f1ea]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close image"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-[#2d251f] shadow-lg"
              >
                <X size={18} />
              </button>
              <img src={selected.src} alt={selected.alt} className="max-h-[84vh] w-full object-contain" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

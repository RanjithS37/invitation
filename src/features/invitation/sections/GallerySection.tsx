import { motion } from 'framer-motion'

import { GalleryGrid } from '../../gallery/GalleryGrid'
import { galleryItems } from '../../../data/event.data'
import { Container } from '../../../components/common/Container'
import { SectionHeading } from '../../../components/common/SectionHeading'

export function GallerySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Moments"
          title="A glimpse into our story"
          description="Cherished moments, soft laughter, and beautiful memories that remind us how blessed we are."
        />

        <GalleryGrid items={galleryItems} />
      </Container>
    </motion.section>
  )
}

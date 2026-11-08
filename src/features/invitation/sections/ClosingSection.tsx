import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

import { Button } from '../../../components/common/Button'
import { Container } from '../../../components/common/Container'

export function ClosingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(202,166,103,0.18),_transparent_58%)]" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] border border-[#e7d7b8] bg-[#f8f3ee] px-5 py-12 text-center shadow-[0_30px_100px_-60px_rgba(60,42,28,0.7)] sm:px-8"
        >
          <div className="mb-5 flex justify-center text-[#b8924b]">
            <Heart className="h-8 w-8 fill-[#b8924b]" />
          </div>
          <p className="font-display text-4xl leading-none text-[#2d251f] sm:text-6xl">Sharing our happiness with you!</p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#554e4a] sm:text-lg">
            Thank you for being part of our story. Your love, blessings, and presence will make this celebration even more beautiful.
            <br />
            உங்கள் அன்பும் ஆசீர்வாதமும் எங்கள் இதயங்களை நிறைவு செய்கின்றன. நன்றி.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#home" variant="primary">
              Back to top
            </Button>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  )
}

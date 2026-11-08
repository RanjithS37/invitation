import { motion } from 'framer-motion'

import { Button } from '../../../components/common/Button'
import { Container } from '../../../components/common/Container'
import { SectionHeading } from '../../../components/common/SectionHeading'
import { celebrationMoments } from '../../../data/event.data'

const celebrationPhoto = new URL('../../../assets/pic/photoshoot_2.png', import.meta.url).href

export function CelebrationSection() {
  return (
    <motion.section
      id="celebrate"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Celebration"
          title="A love story beginning with joy"
          description={
            <>
              <span>With gratitude in our hearts, we invite you to celebrate our marriage on 10th February 2027 and our reception on 12th February 2027.</span>
              <br />
              <span>எங்கள் திருமண விழாவையும் வரவேற்பையும் உங்கள் அன்பும் ஆசீர்வாதமும் நிறைந்த நாளாகக் கொண்டாட அழைக்கிறோம்.</span>
            </>
          }
          align="center"
        />

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="overflow-hidden rounded-[2.2rem] border border-[#eadcc0] bg-[#fbf7f1] p-3 shadow-[0_30px_80px_-40px_rgba(60,34,22,0.5)]"
          >
            <img
              src={celebrationPhoto}
              alt="Couple portrait"
              className="h-[560px] w-full rounded-[1.7rem] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="space-y-6"
          >
            {celebrationMoments.map((moment) => (
              <div key={moment} className="rounded-[1.6rem] border border-[#eadcc0] bg-[#fffdfb] p-5 shadow-[0_20px_40px_-30px_rgba(42,31,28,0.4)]">
                <p className="text-lg leading-8 text-[#554d4a]">{moment}</p>
              </div>
            ))}

            <div className="pt-2">
              <Button href="#countdown" variant="secondary">
                View Countdown
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}

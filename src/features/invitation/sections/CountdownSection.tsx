import { motion } from 'framer-motion'
import { Clock3 } from 'lucide-react'

import { eventConfig } from '../../../config/event.config'
import { Container } from '../../../components/common/Container'
import { SectionHeading } from '../../../components/common/SectionHeading'
import { useCountdown } from '../../countdown/useCountdown'

const countdownItems = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
] as const

export function CountdownSection() {
  const { timeLeft, isComplete } = useCountdown(eventConfig.date)

  return (
    <motion.section
      id="countdown"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-[#f4eadc] py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Countdown"
          title={isComplete ? 'The celebration is here' : 'Counting down to our day'}
          description="We are thrilled to celebrate our marriage and welcome you to our reception with love and blessings."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-[#e8d7b8] bg-white/75 p-6 shadow-[0_26px_70px_-36px_rgba(64,46,28,0.6)] backdrop-blur-sm sm:p-10"
        >
          <div className="mb-8 flex items-center justify-center gap-3 text-[#b8924b]">
            <Clock3 className="h-5 w-5" />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.32em]">Marriage date</span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {countdownItems.map(({ key, label }) => (
              <div key={key} className="rounded-[1.8rem] border border-[#e8dcc4] bg-[#faf6f1] p-4 text-center shadow-inner sm:p-6">
                <div className="font-display text-4xl text-[#2d251f] sm:text-5xl">
                  {timeLeft[key as keyof typeof timeLeft]}
                </div>
                <div className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#6d5a52]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.section>
  )
}

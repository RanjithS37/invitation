import { motion } from 'framer-motion'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'

import { eventConfig } from '../../../config/event.config'
import { Button } from '../../../components/common/Button'
import { Container } from '../../../components/common/Container'
import { SectionHeading } from '../../../components/common/SectionHeading'

const celebrationEvents = [eventConfig.marriage, eventConfig.reception] as const

export function EventDetailsSection() {
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
          eyebrow="Wedding Details"
          title="Marriage and reception celebrations"
          description="We warmly invite you to celebrate our marriage on 10th February 2027 and our reception on 12th February 2027."
        />

        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          {celebrationEvents.map(({ label, dateLabel, timeLabel, venue }) => (
            <div
              key={label}
              className="flex min-h-[240px] flex-col justify-between rounded-[1.8rem] border border-[#eadfc7] bg-[#fffaf6] p-6 shadow-[0_20px_60px_-40px_rgba(61,43,27,0.5)]"
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4eadb] text-[#b8924b]">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#b8924b]">{label}</p>
                <h3 className="mt-3 font-display text-4xl text-[#2b221d]">{dateLabel}</h3>
              </div>

              <div className="mt-6 space-y-4 text-[#2f261f]">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-4 w-4 text-[#b8924b]" />
                  <span>{timeLabel}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-[#b8924b]" />
                  <span>{venue.name}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={venue.googleMapsUrl} variant="primary" className="!w-full sm:!w-auto">
                  Get Directions
                </Button>
                <Button href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventConfig.couple.names + ' ' + label)}&details=${encodeURIComponent('Join us for the ' + label.toLowerCase() + ' celebration of Preetha and Vijayaprathap.')}&location=${encodeURIComponent(venue.address)}&dates=${encodeURIComponent(label === 'Marriage' ? '20270210T090000Z/20270210T120000Z' : '20270212T180000Z/20270212T220000Z')}`} variant="secondary" className="!w-full sm:!w-auto">
                  Add to Calendar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  )
}

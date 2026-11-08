import { motion } from 'framer-motion'

import { Container } from '../../../components/common/Container'
import { SectionHeading } from '../../../components/common/SectionHeading'
import { eventConfig } from '../../../config/event.config'
import { LocationCard } from '../../location/LocationCard'

export function VenueSection() {
  return (
    <motion.section
      id="venue"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-[#f4eadc] py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Location"
          title="Wedding venues"
          description="We look forward to welcoming you for our marriage and reception celebrations."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <LocationCard event={eventConfig.marriage} />
          <LocationCard event={eventConfig.reception} />
        </div>
      </Container>
    </motion.section>
  )
}

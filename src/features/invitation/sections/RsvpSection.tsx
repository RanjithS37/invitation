import { motion } from 'framer-motion'

import { Container } from '../../../components/common/Container'
import { SectionHeading } from '../../../components/common/SectionHeading'
import { RsvpForm } from '../../rsvp/RsvpForm'

export function RsvpSection() {
  return (
    <motion.section
      id="rsvp"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="RSVP"
          title="We hope you can join us"
          description={
            <>
              <span>Your presence would mean the world to us as we celebrate love, family, and a beautiful beginning.</span>
              <br />
              <span>உங்கள் அன்பும் ஆசீர்வாதமும் எங்கள் இந்த சிறப்பான தருணத்தை இன்னும் மகிழ்ச்சியாக்கும்.</span>
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-[2rem] border border-[#eadfc7] bg-[linear-gradient(135deg,#f0e4d2_0%,#fffaf5_100%)] p-6 shadow-[0_26px_70px_-46px_rgba(64,46,28,0.7)] sm:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#b8924b]">Invitation</p>
            <h3 className="mt-4 font-display text-4xl leading-tight text-[#2c221d]">
              Your blessings and presence make our day complete.
            </h3>
            <p className="mt-4 text-lg leading-8 text-[#544d49]">
              We are so grateful for the love and support of our family and friends, and we would be delighted to celebrate this milestone with you.
            </p>
          </div>

          <div className="w-full">
            <RsvpForm />
          </div>
        </div>
      </Container>
    </motion.section>
  )
}

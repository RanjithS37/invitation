import { motion } from 'framer-motion'
import { ArrowDown, CalendarDays, MapPin } from 'lucide-react'

import { eventConfig } from '../../../config/event.config'
import { Button } from '../../../components/common/Button'
import { Container } from '../../../components/common/Container'

const heroPhoto = new URL('../../../assets/pic/photoshoot_1.png', import.meta.url).href

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f1e8] pb-16 pt-8 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-20 h-60 w-60 rounded-full bg-[#f0e0b7]/30 blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-5%] h-72 w-72 rounded-full bg-[#9cae8b]/15 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="text-left">
            <span className="mb-4 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.4em] text-[#b8924b]">
              The Beginning Of Forever
            </span>

            <div className="mb-5 flex items-center justify-start gap-3 text-[#a2804b] sm:gap-4">
              <span className="h-px w-10 bg-[#c8b18c] sm:w-12" />
              <span className="font-display text-[clamp(2rem,2.4vw,3rem)] tracking-[0.18em]">P</span>
              <span className="font-display text-[clamp(2rem,2.4vw,3rem)] tracking-[0.08em] text-[#a87d43]">&</span>
              <span className="font-display text-[clamp(2rem,2.4vw,3rem)] tracking-[0.18em]">V</span>
              <span className="h-px w-10 bg-[#c8b18c] sm:w-12" />
            </div>

            <div className="max-w-[30rem]">
              <h1 className="font-display leading-[0.9] text-[#2b221d]">
                <span className="block text-[clamp(2.5rem,4vw,4.5rem)] tracking-[-0.04em]">Preetha</span>
                <span className="my-1 block text-[clamp(2rem,2.4vw,3rem)] leading-none text-[#a87d43]">&</span>
                <span className="block text-[clamp(2.5rem,4vw,4.5rem)] tracking-[-0.04em]">Vijayaprathap</span>
              </h1>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2 text-[#544a45]">
                <CalendarDays className="h-4 w-4 text-[#b8924b]" />
                <span className="text-xs uppercase tracking-[0.18em] sm:text-sm">10 February 2027</span>
              </div>
              <div className="flex items-center gap-2 text-[#544a45]">
                <MapPin className="h-4 w-4 text-[#b8924b]" />
                <span className="text-xs uppercase tracking-[0.18em] sm:text-sm">Thiruvanthipuram & Chennai</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#celebrate" variant="primary">
                Open Invitation
              </Button>
              <Button href="#venue" variant="secondary">
                View Venue
              </Button>
            </div>

            <a href="#celebrate" className="mt-10 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#5a4d46] sm:text-xs">
              Scroll to explore
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(191,149,96,0.35),_transparent_58%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-[#eadcc0] bg-[#f8f3ed] p-3 shadow-[0_35px_80px_-40px_rgba(35,24,19,0.55)]">
              <img
                src={heroPhoto}
                alt="Couple portrait"
                className="h-[430px] w-full rounded-[1.8rem] object-cover sm:h-[500px] lg:h-[560px]"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.4rem] border border-white/40 bg-white/55 p-4 backdrop-blur-sm">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#9a7d52]">Together forever</p>
                <p className="mt-2 font-display text-[clamp(1.8rem,2vw,2.6rem)] text-[#2a231d]">{eventConfig.couple.names}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { LoadingScreen } from './components/common/LoadingScreen'
import { PageLayout } from './components/layout/PageLayout'
import { CelebrationSection } from './features/invitation/sections/CelebrationSection'
import { ClosingSection } from './features/invitation/sections/ClosingSection'
import { CountdownSection } from './features/invitation/sections/CountdownSection'
import { EventDetailsSection } from './features/invitation/sections/EventDetailsSection'
import { GallerySection } from './features/invitation/sections/GallerySection'
import { HeroSection } from './features/invitation/sections/HeroSection'
import { RsvpSection } from './features/invitation/sections/RsvpSection'
import { RsvpForm } from './features/rsvp/RsvpForm'

function App() {
  const isAdminView = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('admin') === '1793912'
  const [isLoading, setIsLoading] = useState(true)
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (isAdminView) {
      setIsLoading(false)
      return
    }

    const timer = window.setTimeout(() => setIsLoading(false), 800)
    return () => window.clearTimeout(timer)
  }, [isAdminView])

  useEffect(() => {
    if (!isOpening) return
    const timer = window.setTimeout(() => {
      setIsInvitationOpen(true)
    }, shouldReduceMotion ? 0 : 900)
    return () => window.clearTimeout(timer)
  }, [isOpening, shouldReduceMotion])

  const handleOpenInvitation = () => {
    if (isOpening || isInvitationOpen) return
    setIsOpening(true)
  }

  if (isAdminView) {
    return <RsvpForm />
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <AnimatePresence>
        {!isInvitationOpen ? (
          <motion.div
            key="invitation-entry"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(251,247,242,0.8),_rgba(241,233,225,0.92)_22%,_rgba(228,219,211,1)_100%)] px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12, transition: { duration: 0.45, ease: 'easeInOut' } }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative flex items-center justify-center [perspective:1800px]"
            >
              <motion.div
                animate={
                  isOpening
                    ? {
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1.02,
                        y: -6,
                      }
                    : {
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        y: 0,
                      }
                }
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[540px] w-[min(90vw,680px)] [transform-style:preserve-3d]"
              >
                <div className="absolute inset-x-10 bottom-8 top-16 rounded-[2.8rem] border border-[#d7b981]/30 bg-[linear-gradient(135deg,rgba(120,86,59,0.18),rgba(255,255,255,0.05),rgba(115,72,42,0.12))] shadow-[0_80px_140px_-60px_rgba(52,39,30,0.65)]" />

                <motion.div
                  animate={
                    isOpening
                      ? {
                          y: 18,
                          scale: 1.02,
                          opacity: 1,
                        }
                      : {
                          y: 0,
                          scale: 1,
                          opacity: 1,
                        }
                  }
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-10 bottom-8 top-14 rounded-[2.8rem] border border-[#e9d8bb]/40 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),rgba(247,240,231,0.12),rgba(192,169,138,0.12))]"
                />

                <div className="absolute -left-10 top-20 h-[310px] w-[72%] rotate-[-14deg] rounded-[2rem] border border-[#e5dac4] bg-[linear-gradient(135deg,#f9f7f5,#f4f0ec)] shadow-[0_28px_60px_-42px_rgba(54,45,39,0.7)]" />
                <div className="absolute -right-8 top-14 h-[260px] w-[58%] rotate-[10deg] rounded-[2rem] border border-[#e8d7b6] bg-[linear-gradient(135deg,#f9f5f1,#f1ece4)] shadow-[0_32px_60px_-42px_rgba(54,45,39,0.7)]" />

                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={
                    isOpening
                      ? {
                          rotateX: 180,
                          y: 10,
                        }
                      : {
                          rotateX: 0,
                          y: 0,
                        }
                  }
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: isOpening ? 0.1 : 0 }}
                  style={{ transformOrigin: '50% 0%', transformStyle: 'preserve-3d' }}
                  className="absolute inset-x-10 top-10 h-[430px] overflow-hidden rounded-[2.35rem] border border-[#d4b77a]/40 bg-[linear-gradient(180deg,#f5efe9_0%,#f5f0ea_100%)] shadow-[0_38px_80px_-48px_rgba(66,52,42,0.7)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(214,180,119,0.08),transparent_28%,transparent_72%,rgba(214,180,119,0.06))]" />
                  <div className="absolute inset-x-0 top-0 h-5 bg-[linear-gradient(90deg,rgba(214,180,119,0.72),rgba(255,255,255,0.15),rgba(214,180,119,0.72))]" />
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(180deg,transparent,rgba(118,84,52,0.05))]" />
                  <div className="absolute left-1/2 top-14 h-24 w-24 -translate-x-1/2 rounded-full border border-[#d0ad67]/50 bg-[radial-gradient(circle,_rgba(255,255,255,0.9),_rgba(247,239,224,0.9)_40%,_rgba(219,189,134,0.52)_100%)] shadow-[0_24px_40px_-25px_rgba(171,126,62,0.7)]" />
                  <div className="absolute left-1/2 top-20 -translate-x-1/2 text-center">
                    <div className="font-display text-[2.3rem] tracking-[0.22em] text-[#2e221d]">P</div>
                    <div className="-mt-2 font-display text-[2.3rem] tracking-[0.12em] text-[#b68b48]">&</div>
                    <div className="-mt-2 font-display text-[2.3rem] tracking-[0.22em] text-[#2e221d]">V</div>
                  </div>
                  <div className="absolute inset-x-0 bottom-16 text-center">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.42em] text-[#ae8550]">With love and blessings</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={
                    isOpening
                      ? {
                          opacity: 1,
                          y: -24,
                          scale: 1,
                        }
                      : {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }
                  }
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: isOpening ? 0.2 : 0 }}
                  className="absolute inset-x-10 bottom-8 rounded-[2rem] border border-[#dcc59a]/40 bg-[linear-gradient(135deg,rgba(247,242,235,0.92),rgba(255,255,255,0.98))] p-6 text-center shadow-[0_45px_90px_-42px_rgba(39,29,25,0.8)]"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#d3b078] bg-[radial-gradient(circle,_rgba(255,255,255,0.85),_rgba(218,187,132,0.24)_50%,_rgba(125,84,40,0.18))] text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#7a552c]">
                    PV
                  </div>
                  <p className="text-[0.64rem] font-medium uppercase tracking-[0.38em] text-[#a67a3d]">A celebration of love</p>
                  <p className="mt-5 text-sm leading-7 text-[#544d49] sm:text-base">
                    எங்கள் திருமண விழாவையும் வரவேற்பையும்<br />
                    உங்கள் அன்பும் ஆசீர்வாதமும் கொண்டாட ஆசை.
                  </p>
                  <p className="mt-5 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-[#8d6c47]">Click to open the invitation</p>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOpenInvitation}
                    className="mt-5 inline-flex items-center justify-center rounded-full border border-[#d0a867] bg-[linear-gradient(135deg,#e8c98a_0%,#c9954d_35%,#a76d38_100%)] px-7 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-[#1d120f] shadow-[0_18px_35px_-22px_rgba(170,118,52,0.9)]"
                  >
                    Open Invitation
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {isInvitationOpen ? (
        <PageLayout>
          <HeroSection />
          <CelebrationSection />
          <CountdownSection />
          <EventDetailsSection />
          <GallerySection />
          <RsvpSection />
          <ClosingSection />
        </PageLayout>
      ) : null}
    </>
  )
}

export default App

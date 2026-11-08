import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(191,147,83,0.24),_rgba(12,9,8,0.96)_46%,_rgba(7,5,5,1)_100%)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative flex flex-col items-center gap-6"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#d8b66d]" />
          <span className="h-3 w-3 rounded-full bg-[#f0d79a]" />
          <span className="h-3 w-3 rounded-full bg-[#8f9a77]" />
        </div>

        <div className="relative flex items-center justify-center overflow-hidden rounded-full border border-[#d7b36d]/60 bg-[#1d120f]/80 px-8 py-5 shadow-[0_0_45px_rgba(216,182,109,0.2)] backdrop-blur-sm">
          <motion.div
            animate={{ x: ['-15%', '15%', '-15%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f3dba0] to-transparent"
          />
          <span className="font-display text-4xl tracking-[0.22em] text-[#f8efe5] sm:text-5xl">P<span className="text-[#d8b66d]">&</span>V</span>
        </div>
      </motion.div>
    </div>
  )
}

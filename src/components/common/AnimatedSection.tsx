import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

import { cn } from '../../lib/utils'

type AnimatedSectionProps = {
  id?: string
  className?: string
  children: ReactNode
  delay?: number
}

export function AnimatedSection({ id, className, children, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  )
}

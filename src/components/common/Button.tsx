import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '../../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  className,
  href,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#f8f1e7] disabled:cursor-not-allowed disabled:opacity-60'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'border border-[#b8924b] bg-[#b8924b] text-[#fffaf3] shadow-[0_20px_40px_-24px_rgba(184,146,75,0.9)] hover:-translate-y-0.5 hover:bg-[#a77d36]',
    secondary:
      'border border-[#d9c7a2] bg-white/75 text-[#453d38] backdrop-blur-sm hover:-translate-y-0.5 hover:border-[#b8924b] hover:text-[#2a221b]',
    ghost:
      'border border-transparent bg-transparent text-[#4b3d32] hover:border-[#d9c7a2] hover:bg-white/60',
  }

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto mb-10 flex max-w-3xl flex-col ${alignment}`}>
      <span className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#b8924b]">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl text-[#2b221d] sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#5d4d46] sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

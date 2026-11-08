import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[#e7ddce] bg-[#f5eee3]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
        <p className="font-display text-2xl tracking-[0.18em] text-[#2f261f]">
          PREETHA <span className="text-[#b8924b]">&</span> VIJAYAPRATHAP
        </p>
        <div className="flex items-center gap-2 text-sm text-[#5a4d46]">
          <span>Sharing our happiness with you</span>
          <Heart className="h-4 w-4 fill-[#b8924b] text-[#b8924b]" />
        </div>
      </div>
    </footer>
  )
}

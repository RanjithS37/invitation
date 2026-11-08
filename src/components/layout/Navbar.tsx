import { Menu } from 'lucide-react'

import { navigationItems } from '../../config/navigation.config'
import { Button } from '../common/Button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e9dfd0] bg-[#f8f1e7]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-display text-2xl tracking-[0.24em] text-[#2f251f]">
          P<span className="text-[#b8924b]">&</span>V
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium tracking-[0.14em] text-[#5a4f49] uppercase transition hover:text-[#2c221d]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <Button href="#rsvp" variant="secondary" className="!px-4 !py-2 !text-[0.58rem]">
            RSVP
          </Button>
        </div>

        <div className="hidden md:block">
          <Button href="#rsvp" variant="secondary" className="!px-4 !py-2 !text-[0.58rem]">
            <span className="flex items-center gap-2">
              <Menu size={14} />
              RSVP
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

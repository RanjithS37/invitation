import type { ReactNode } from 'react'

import { Footer } from './Footer'
import { Navbar } from './Navbar'

type PageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#2d251f] antialiased">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

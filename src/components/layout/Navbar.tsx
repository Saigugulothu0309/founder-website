'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Ventures',   href: '#ventures' },
  { label: 'Research',   href: '#research' },
  { label: 'Impact',     href: '#impact' },
  { label: 'Timeline',   href: '#timeline' },
  { label: 'Blog',       href: '#blog' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [mounted, setMounted]       = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass border-b border-[var(--border)] py-3' : 'py-5'
      )}>
        <div className="container-xl flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-display text-lg font-semibold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            <span className="text-[var(--accent)]">∅</span> Founder
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full glass hover:bg-[var(--surface-elevated)] transition-all text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <button onClick={() => scrollTo('#contact')}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[var(--text-secondary)]">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 glass-dark pt-20 px-6 flex flex-col gap-4 md:hidden">
          {navLinks.map(link => (
            <button key={link.href} onClick={() => scrollTo(link.href)}
              className="text-left text-xl font-display text-[var(--text-primary)] py-3 border-b border-[var(--border)]">
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#contact')}
            className="mt-4 w-full py-3 rounded-full bg-[var(--accent)] text-white font-medium">
            Get in Touch
          </button>
        </div>
      )}
    </>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const roles = ['Founder', 'Researcher', 'Inventor', 'Builder', 'Venture Designer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible]     = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      {/* Glow orbs */}
      <div className="orb w-[600px] h-[600px] bg-blue-600/10 top-1/4 -left-64 animate-pulse-slow" />
      <div className="orb w-[400px] h-[400px] bg-violet-600/8 bottom-1/4 -right-32 animate-pulse-slow animation-delay-700" />
      <div className="orb w-[300px] h-[300px] bg-cyan-500/6 top-1/3 right-1/3" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Content */}
      <div className="container-xl relative z-10 text-center">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-animated mb-12
          text-xs font-mono text-[var(--text-secondary)] animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for research collaborations & strategic partnerships
        </div>

        {/* Role switcher */}
        <p className="text-sm font-mono tracking-[0.25em] uppercase text-[var(--accent)] mb-6 animate-fade-in animation-delay-100">
          <span className={`inline-block transition-all duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            {roles[roleIndex]}
          </span>
        </p>

        {/* Main headline */}
        <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)] mb-6
          animate-fade-up animation-delay-200 max-w-5xl mx-auto">
          Building technology that solves{' '}
          <em className="text-gradient-accent not-italic">real human problems.</em>
        </h1>

        {/* Subheadline */}
        <p className="text-[var(--text-secondary)] text-lg md:text-xl mb-10 max-w-2xl mx-auto
          animate-fade-up animation-delay-300 leading-relaxed">
          AI &nbsp;·&nbsp; Accessibility &nbsp;·&nbsp; Computer Vision &nbsp;·&nbsp; Research &nbsp;·&nbsp; Ventures
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
          <button onClick={() => scrollTo('#ventures')}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--accent)] text-white font-medium
              hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
            Explore Ventures
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => scrollTo('#research')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full glass font-medium
              text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-300">
            View Research
          </button>
          <button onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-medium
              text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            Get In Touch →
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-3xl mx-auto animate-fade-up animation-delay-500">
          {[
            { n: '10+', label: 'Research Publications' },
            { n: '5',   label: 'Active Ventures' },
            { n: '12',  label: 'Countries Reached' },
            { n: '50K+',label: 'Users Impacted' },
          ].map(stat => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center">
              <div className="text-display text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1">
                {stat.n}
              </div>
              <div className="text-xs text-[var(--text-muted)] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => scrollTo('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--text-muted)]
          animate-bounce hover:text-[var(--accent)] transition-colors">
        <ChevronDown size={24} />
      </button>
    </section>
  )
}

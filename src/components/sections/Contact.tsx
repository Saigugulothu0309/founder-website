'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

const inquiryTypes = [
  { value: 'investor',       label: '💼 Investor',     desc: 'Funding & equity conversations' },
  { value: 'partner',        label: '🤝 Partner',      desc: 'Strategic alliances & integrations' },
  { value: 'professor',      label: '🎓 Professor',    desc: 'Research collaborations' },
  { value: 'media',          label: '📰 Media',        desc: 'Press & speaking requests' },
  { value: 'collaboration',  label: '🚀 Collaborate',  desc: 'Build something together' },
  { value: 'general',        label: '💬 General',      desc: 'Everything else' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [type, setType]   = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm]   = useState({ name: '', email: '', company: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!type) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type }),
      })
      if (res.ok) { setStatus('success') } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  const input = (name: keyof typeof form, placeholder: string, type = 'text', multiline = false) => {
    const base = 'w-full px-4 py-3 rounded-xl glass border border-[var(--border)] focus:border-[var(--accent)] focus:outline-none transition-colors text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm bg-transparent'
    return multiline
      ? <textarea name={name} rows={4} value={form[name]} onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
          placeholder={placeholder} className={`${base} resize-none`} />
      : <input type={type} name={name} value={form[name]} onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
          placeholder={placeholder} className={base} />
  }

  if (status === 'success') {
    return (
      <section id="contact" className="section bg-[var(--bg-secondary)]">
        <div className="container-xl text-center">
          <CheckCircle size={64} className="text-emerald-400 mx-auto mb-6" />
          <h2 className="text-display text-4xl mb-4">Message received.</h2>
          <p className="text-[var(--text-secondary)] text-lg">I'll respond within 24 hours. Looking forward to connecting.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section bg-[var(--bg-secondary)]">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Whether you're an investor, researcher, partner, or collaborator — I'd love to connect."
        />

        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Inquiry type */}
              <div>
                <label className="block text-xs font-mono font-medium text-[var(--text-muted)] mb-3 uppercase tracking-widest">
                  What brings you here?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {inquiryTypes.map(t => (
                    <button type="button" key={t.value} onClick={() => setType(t.value)}
                      className={`p-3 rounded-xl text-left transition-all duration-200 border
                        ${type === t.value
                          ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--text-primary)]'
                          : 'glass text-[var(--text-secondary)] hover:border-[var(--accent)]/50'}`}>
                      <div className="text-sm font-medium">{t.label}</div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {input('name', 'Your name')}
                {input('email', 'Email address', 'email')}
              </div>
              {input('company', 'Company / Institution (optional)')}
              {input('subject', 'Subject')}
              {input('message', 'Tell me what you\'re working on, what you need, or just say hi...', 'text', true)}

              <button type="submit" disabled={!type || status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[var(--accent)] text-white font-medium
                  hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-glow-sm hover:shadow-glow">
                {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'error' && (
                <p className="text-center text-sm text-red-400">Something went wrong. Please email me directly.</p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

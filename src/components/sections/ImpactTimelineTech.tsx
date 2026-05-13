import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

// ─── Technologies ──────────────────────────────────────────────────
const technologies = [
  { name: 'Computer Vision', desc: 'Real-time object detection, pose estimation, gesture recognition across mobile and edge devices.', icon: '👁', level: 95 },
  { name: 'Edge AI', desc: 'Deploying neural networks on ARM, NVIDIA Jetson, and browser WASM for sub-20ms inference.', icon: '⚡', level: 90 },
  { name: 'Real-Time Systems', desc: 'WebRTC, streaming inference pipelines, and latency-optimized architectures.', icon: '🔁', level: 85 },
  { name: 'Human-Computer Interaction', desc: 'Designing interfaces that adapt to the user, not the other way around.', icon: '🤝', level: 88 },
  { name: 'Accessibility Engineering', desc: 'WCAG compliance, assistive technology APIs, universal design principles.', icon: '♿', level: 92 },
  { name: 'NLP & Speech AI', desc: 'Multilingual models, speech synthesis, and contextual language understanding.', icon: '🗣', level: 80 },
]

export function Technologies() {
  return (
    <section id="technologies" className="section bg-[var(--bg-secondary)]">
      <div className="container-xl">
        <SectionHeader eyebrow="Technologies" title="Core technical domains" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 80}>
              <div className="glass rounded-2xl p-6 h-full hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">{t.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{t.desc}</p>
                <div className="h-1 rounded-full bg-[var(--border)] overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-violet-500 transition-all duration-1000"
                    style={{ width: `${t.level}%` }} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Impact ────────────────────────────────────────────────────────
const metrics = [
  { value: '50,000+', label: 'Users Impacted', desc: 'Across all products and pilots', icon: '👥' },
  { value: '12',      label: 'Countries',       desc: 'Products deployed globally',   icon: '🌍' },
  { value: '6',       label: 'Pilots Running',  desc: 'Active product pilots',         icon: '🚀' },
  { value: '18',      label: 'Research Citations', desc: 'Peer-reviewed impact',       icon: '📚' },
  { value: '3',       label: 'Grants & Awards', desc: 'Including MEXT scholarship',   icon: '🏆' },
  { value: '2',       label: 'Patents Pending', desc: 'Core technology protection',   icon: '⚙️' },
]

export function Impact() {
  return (
    <section id="impact" className="section">
      <div className="container-xl">
        <SectionHeader eyebrow="Impact" title="Measurable outcomes, real people" subtitle="Every metric represents a human being who communicates, works, or learns differently because of this technology." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 80}>
              <div className="glass rounded-2xl p-8 text-center hover:border-[var(--accent)] transition-all duration-300">
                <div className="text-4xl mb-3">{m.icon}</div>
                <div className="text-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">{m.value}</div>
                <div className="font-medium text-[var(--text-primary)] mb-1">{m.label}</div>
                <div className="text-xs text-[var(--text-muted)]">{m.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Timeline ──────────────────────────────────────────────────────
const events = [
  { year: '2018', title: 'Started Computer Science', desc: 'Began undergraduate studies, specializing in AI and systems programming.', category: 'education', icon: '🎓' },
  { year: '2020', title: 'First Research Publication', desc: 'Published first paper on lightweight neural architectures at a major workshop.', category: 'research', icon: '📄' },
  { year: '2021', title: 'MEXT Scholarship — Japan', desc: 'Awarded Japanese Ministry of Education scholarship for graduate research in AI accessibility.', category: 'award', icon: '🏆' },
  { year: '2022', title: 'Founded EdgeVision (Stealth)', desc: 'Started building edge AI infrastructure for real-time computer vision applications.', category: 'startup', icon: '🚀' },
  { year: '2023', title: 'ACM CHI Publication', desc: 'Research on gesture recognition HCI accepted at ACM CHI — one of the top venues in the field.', category: 'research', icon: '📚' },
  { year: '2023', title: 'First 1,000 Users', desc: 'Reached 1,000 active users across products spanning 5 countries.', category: 'milestone', icon: '🌍' },
  { year: '2024', title: 'DualTalk Prototype Launch', desc: 'Launched DualTalk prototype — real-time sign language to speech translation for deaf-hearing communication.', category: 'startup', icon: '🤝' },
  { year: '2024', title: 'Patent Filing', desc: 'Filed patents covering core DualTalk architecture and translation pipeline.', category: 'milestone', icon: '⚙️' },
  { year: '2025', title: 'Global Expansion', desc: 'Scaling ventures across Asia, Europe, and the Middle East. Seeking strategic partners and co-founders.', category: 'milestone', icon: '🌐' },
]

const categoryColor: Record<string, string> = {
  education: 'bg-blue-500',
  research:  'bg-violet-500',
  startup:   'bg-emerald-500',
  award:     'bg-yellow-500',
  milestone: 'bg-brand-500',
}

export function Timeline() {
  return (
    <section id="timeline" className="section bg-[var(--bg-secondary)]">
      <div className="container-xl">
        <SectionHeader eyebrow="Timeline" title="The journey so far" />
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] -translate-x-px" />

          <div className="space-y-8">
            {events.map((e, i) => (
              <AnimatedSection key={e.title} delay={i * 60}>
                <div className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[var(--bg)] z-10"
                    style={{ background: categoryColor[e.category]?.replace('bg-', '') || '#1a56ff', top: '0.5rem' }} />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="glass rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">{e.icon}</span>
                        <span className="text-xs font-mono font-bold text-[var(--accent)]">{e.year}</span>
                      </div>
                      <h3 className="font-display font-semibold text-[var(--text-primary)] mb-1">{e.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

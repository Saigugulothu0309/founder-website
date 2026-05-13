import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { ExternalLink } from 'lucide-react'
import type { Venture } from '@/types'

const ventures: Venture[] = [
  {
    id: '1', slug: 'dualtalk', name: 'DualTalk', order: 1, featured: true,
    tagline: 'Real-time sign language ↔ speech translation.',
    description: 'DualTalk is a communication bridge between deaf and hearing individuals. It translates sign language gestures into text and speech, and converts spoken language back into sign — enabling natural conversation without a human interpreter.',
    status: 'active', stage: 'prototype', category: 'Accessibility AI',
    tags: ['Computer Vision', 'NLP', 'Real-Time', 'Accessibility'],
    techStack: ['PyTorch', 'MediaPipe', 'Next.js', 'WebRTC'],
    metrics: { users: '500+', countries: '3', raised: 'Pre-seed' },
    problem: 'Over 70 million deaf people globally rely on interpreters for daily communication.',
    solution: 'Real-time AI translation that works on any smartphone, no hardware needed.',
  },
  {
    id: '2', slug: 'edgevision', name: 'EdgeVision', order: 2, featured: false,
    tagline: 'Computer vision at the edge, without the cloud.',
    description: 'Edge-deployed vision AI for industrial inspection, retail analytics, and smart city infrastructure. Runs entirely on-device with sub-20ms latency.',
    status: 'stealth', stage: 'mvp', category: 'Edge AI',
    tags: ['Edge AI', 'ONNX', 'TensorRT', 'IoT'],
    techStack: ['TensorRT', 'ONNX', 'Rust', 'CUDA'],
    metrics: { countries: '2', raised: 'Bootstrapped' },
  },
  {
    id: '3', slug: 'future-venture-1', name: 'Project Meridian', order: 3, featured: false,
    tagline: 'Multimodal AI for low-resource language preservation.',
    description: 'Using AI to document, translate, and revitalize endangered languages through speech, text, and visual storytelling.',
    status: 'future', stage: 'idea', category: 'AI · Linguistics',
    tags: ['NLP', 'Speech AI', 'Culture', 'Research'],
    techStack: [],
  },
  {
    id: '4', slug: 'future-venture-2', name: 'NeuralNav', order: 4, featured: false,
    tagline: 'Brain-computer interfaces for motor-impaired users.',
    description: 'Non-invasive BCI technology that enables people with motor impairments to control devices through intent, not movement.',
    status: 'future', stage: 'idea', category: 'BCI · Accessibility',
    tags: ['BCI', 'Signal Processing', 'HCI', 'Medical'],
    techStack: [],
  },
]

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:   { label: 'Active',   cls: 'status-active' },
  stealth:  { label: 'Stealth',  cls: 'status-stealth' },
  future:   { label: 'Future',   cls: 'status-future' },
  acquired: { label: 'Acquired', cls: 'status-acquired' },
  sunset:   { label: 'Sunset',   cls: 'status-sunset' },
}

export default function Ventures() {
  return (
    <section id="ventures" className="section bg-[var(--bg-secondary)]">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Ventures"
          title="Products & startups I'm building"
          subtitle="From prototype to global scale — each venture is mission-driven and technology-led."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {ventures.map((v, i) => (
            <AnimatedSection key={v.id} delay={i * 100}>
              <div className="venture-card h-full">
                {/* Card header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">{v.name}</h3>
                        <span className={`status-badge ${statusConfig[v.status]?.cls}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {statusConfig[v.status]?.label}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[var(--accent)]">{v.category}</p>
                    </div>
                    {v.url && (
                      <a href={v.url} target="_blank" rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mt-1">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-5">{v.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {v.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md glass text-xs text-[var(--text-muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                {v.metrics && (
                  <div className="border-t border-[var(--border)] px-8 py-5 flex gap-6">
                    {v.metrics.users && (
                      <div>
                        <div className="text-sm font-semibold text-[var(--text-primary)]">{v.metrics.users}</div>
                        <div className="text-xs text-[var(--text-muted)]">Users</div>
                      </div>
                    )}
                    {v.metrics.countries && (
                      <div>
                        <div className="text-sm font-semibold text-[var(--text-primary)]">{v.metrics.countries}</div>
                        <div className="text-xs text-[var(--text-muted)]">Countries</div>
                      </div>
                    )}
                    {v.metrics.raised && (
                      <div>
                        <div className="text-sm font-semibold text-[var(--text-primary)]">{v.metrics.raised}</div>
                        <div className="text-xs text-[var(--text-muted)]">Stage</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { FileText, FlaskConical, Lightbulb, ExternalLink } from 'lucide-react'

const research = [
  {
    type: 'paper', year: 2024,
    title: 'Real-Time Sign Language Recognition Using Sparse Transformer Networks',
    abstract: 'We propose a sparse attention mechanism for skeleton-based sign language recognition achieving 94.3% accuracy at 30fps on mobile hardware.',
    journal: 'IEEE Transactions on Neural Networks',
    tags: ['Computer Vision', 'Transformers', 'Accessibility'],
    citations: 18,
    doi: '#',
  },
  {
    type: 'paper', year: 2023,
    title: 'Edge-Deployed Gesture Recognition for Low-Latency HCI Applications',
    abstract: 'A novel pipeline for deploying gesture recognition models on ARM processors with sub-20ms end-to-end latency.',
    journal: 'ACM CHI 2023',
    tags: ['Edge AI', 'HCI', 'Mobile'],
    citations: 34,
    doi: '#',
  },
  {
    type: 'project', year: 2024,
    title: 'MEXT Research: Multimodal Communication Interfaces for Disability Inclusion',
    abstract: 'Japan Ministry of Education funded research on designing AI-powered interfaces that reduce communication barriers for people with disabilities.',
    journal: 'MEXT Applicantship Research',
    tags: ['MEXT', 'Accessibility', 'Multimodal AI'],
    citations: 0,
  },
  {
    type: 'patent', year: 2024,
    title: 'Method and System for Real-Time Bidirectional Sign Language Translation',
    abstract: 'Patent covering the core architecture of DualTalk — including the gesture capture pipeline, translation engine, and speech synthesis module.',
    journal: 'Patent Pending — JP2024-XXXXXX',
    tags: ['Patent', 'Sign Language', 'AI'],
    citations: 0,
  },
  {
    type: 'experiment', year: 2023,
    title: 'Skin-Tone Invariant Hand Pose Estimation in Unconstrained Environments',
    abstract: 'An empirical study on bias in hand pose estimation models across diverse skin tones, with proposed mitigation strategies.',
    journal: 'Preprint — arXiv:2312.XXXXX',
    tags: ['Fairness', 'Computer Vision', 'Bias'],
    citations: 7,
    arxiv: '#',
  },
  {
    type: 'paper', year: 2022,
    title: 'Lightweight Neural Architecture Search for On-Device Inference',
    abstract: 'Automated neural architecture search constrained to mobile hardware budgets — achieving ImageNet-comparable performance under 5MB.',
    journal: 'NeurIPS Workshop 2022',
    tags: ['NAS', 'Edge AI', 'Efficiency'],
    citations: 22,
    doi: '#',
  },
]

const typeIcon: Record<string, React.ReactNode> = {
  paper:      <FileText size={14} />,
  patent:     <Lightbulb size={14} />,
  experiment: <FlaskConical size={14} />,
  project:    <FileText size={14} />,
}

const typeColor: Record<string, string> = {
  paper:      'text-blue-400 bg-blue-400/10',
  patent:     'text-yellow-400 bg-yellow-400/10',
  experiment: 'text-emerald-400 bg-emerald-400/10',
  project:    'text-violet-400 bg-violet-400/10',
}

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Research"
          title="Publications, patents & experiments"
          subtitle="Peer-reviewed work across computer vision, accessibility AI, and edge systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {research.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 80}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col hover:border-[var(--accent)] transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <span className={`status-badge ${typeColor[r.type]} text-xs`}>
                    {typeIcon[r.type]}
                    {r.type.charAt(0).toUpperCase() + r.type.slice(1)}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">{r.year}</span>
                </div>

                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-3 leading-snug flex-1">
                  {r.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">{r.abstract}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {r.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs glass text-[var(--text-muted)]">{tag}</span>
                  ))}
                </div>

                <div className="border-t border-[var(--border)] pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">{r.journal}</p>
                    {r.citations > 0 && (
                      <p className="text-xs text-[var(--accent)] mt-0.5">{r.citations} citations</p>
                    )}
                  </div>
                  {(r.doi || r.arxiv) && (
                    <a href={r.doi || r.arxiv} target="_blank" rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

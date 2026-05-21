import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

const pillars = [
  { icon: '🧠', title: 'AI & Machine Learning', desc: 'Building intelligent systems that understand human context, not just data patterns.' },
  { icon: '♿', title: 'Accessibility Tech', desc: 'Removing communication and interaction barriers for millions of people worldwide.' },
  { icon: '👁',  title: 'Computer Vision', desc: 'Teaching machines to see and interpret the world in real-time at the edge.' },
  { icon: '🔬', title: 'Applied Research', desc: 'From MEXT-funded labs to real-world deployment — research that ships.' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <AnimatedSection direction="left">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--accent)] mb-6">About</p>
            <h2 className="text-display text-4xl md:text-5xl mb-8 leading-tight">
              I build at the intersection of
              <em className="text-gradient-accent not-italic"> human need and technical possibility.</em>
            </h2>
            <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed">
              <p>
                I'm a founder, researcher, and inventor focused on one question: <strong className="text-[var(--text-primary)]">how can technology remove the barriers that divide people?</strong>
              </p>
              <p>
                My work spans AI accessibility tools, computer vision systems, edge AI deployments, and human-computer interaction research. I've built products used across 12+ countries, published in peer-reviewed journals, and founded multiple ventures from prototype to market.
              </p>
              <p>
                Currently exploring the frontier of real-time sign language translation, multimodal AI interfaces, and assistive technologies that don't require the user to adapt — the technology does.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {['AI Research', 'Computer Vision', 'HCI', 'Venture Building', 'MEXT Applicant'].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full glass text-xs font-medium text-[var(--text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100} direction="up">
                <div className="glass rounded-2xl p-6 hover:border-[var(--accent)] transition-all duration-300 group">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

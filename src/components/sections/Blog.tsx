import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    category: 'Startup', readingTime: 6,
    title: 'Why we built DualTalk: a lesson in building for someone else\'s reality',
    excerpt: 'The moment I realized our prototype solved the wrong problem — and what we did about it.',
    publishedAt: 'May 2025',
  },
  {
    category: 'Research', readingTime: 9,
    title: 'The hidden bias problem in gesture recognition AI',
    excerpt: 'Most sign language AI models fail on darker skin tones. Here\'s why, and what the field needs to fix it.',
    publishedAt: 'March 2025',
  },
  {
    category: 'Technology', readingTime: 7,
    title: 'Running vision models at 30fps on a $35 device',
    excerpt: 'A deep dive into quantization, pruning, and architecture choices that make edge AI viable.',
    publishedAt: 'January 2025',
  },
  {
    category: 'Venture Building', readingTime: 5,
    title: 'Finding your first 10 users when you have no network',
    excerpt: 'The unconventional outreach strategies that got DualTalk\'s first real users — without any marketing budget.',
    publishedAt: 'November 2024',
  },
]

const categoryColor: Record<string, string> = {
  'Startup':         'text-emerald-400 bg-emerald-400/10',
  'Research':        'text-violet-400 bg-violet-400/10',
  'Technology':      'text-blue-400 bg-blue-400/10',
  'Venture Building':'text-orange-400 bg-orange-400/10',
}

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Blog · Insights"
          title="Thought leadership & lessons learned"
          subtitle="Writing on startups, research, accessibility, and building technology with purpose."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 80}>
              <article className="glass rounded-2xl p-7 h-full flex flex-col hover:border-[var(--accent)] transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`status-badge text-xs ${categoryColor[post.category]}`}>{post.category}</span>
                  <span className="text-xs text-[var(--text-muted)]">{post.readingTime} min read</span>
                  <span className="text-xs text-[var(--text-muted)] ml-auto">{post.publishedAt}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-3 leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-[var(--accent)] font-medium group-hover:gap-3 transition-all">
                  Read article <ArrowRight size={14} />
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

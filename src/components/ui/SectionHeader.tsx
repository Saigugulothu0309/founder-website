import AnimatedSection from './AnimatedSection'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <AnimatedSection className={cn('mb-16', centered && 'text-center', className)}>
      {eyebrow && (
        <p className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className={cn('text-display text-3xl md:text-5xl mb-4', centered && 'mx-auto max-w-3xl')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-[var(--text-secondary)] text-lg leading-relaxed', centered && 'mx-auto max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}

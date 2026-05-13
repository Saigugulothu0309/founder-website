'use client'

import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimatedSection({
  children, className, delay = 0, direction = 'up'
}: AnimatedSectionProps) {
  const { ref, inView } = useInView()

  const initial = {
    up:    'opacity-0 translate-y-8',
    left:  'opacity-0 -translate-x-8',
    right: 'opacity-0 translate-x-8',
    none:  'opacity-0',
  }[direction]

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-y-0 translate-x-0' : initial,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

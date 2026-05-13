export interface Venture {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  status: 'active' | 'stealth' | 'acquired' | 'sunset' | 'future'
  stage: 'idea' | 'prototype' | 'mvp' | 'growth' | 'scale'
  category: string
  tags: string[]
  url?: string
  logo?: string
  coverImage?: string
  featured: boolean
  order: number
  metrics?: { users?: string; countries?: string; raised?: string }
  partners?: string[]
  techStack?: string[]
  problem?: string
  solution?: string
  impact?: string
  founded?: string
}

export interface Research {
  id: string
  slug: string
  title: string
  abstract: string
  type: 'paper' | 'patent' | 'experiment' | 'project'
  status: 'draft' | 'published' | 'under-review'
  authors: string[]
  tags: string[]
  journal?: string
  doi?: string
  arxiv?: string
  pdfUrl?: string
  coverImage?: string
  featured: boolean
  citations: number
  year: number
  institution?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  coverImage?: string
  featured: boolean
  published: boolean
  readingTime: number
  views: number
  publishedAt?: string
}

export interface TimelineEvent {
  id: string
  year: string
  month?: string
  title: string
  description: string
  category: 'education' | 'startup' | 'research' | 'award' | 'milestone'
  icon?: string
  featured: boolean
  order: number
}

export interface ImpactMetric {
  id: string
  label: string
  value: string
  suffix?: string
  description?: string
  category: string
  order: number
}

export interface ContactInquiry {
  name: string
  email: string
  type: string
  subject: string
  message: string
  company?: string
  website?: string
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

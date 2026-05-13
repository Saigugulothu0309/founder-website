import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { parseJsonField } from '@/lib/utils'

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }],
      select: { id: true, slug: true, title: true, excerpt: true, category: true, tags: true, coverImage: true, readingTime: true, views: true, publishedAt: true, featured: true }
    })
    return NextResponse.json(posts.map(p => ({ ...p, tags: parseJsonField(p.tags, []) })))
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

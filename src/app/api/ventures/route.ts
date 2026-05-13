import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { parseJsonField } from '@/lib/utils'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const status   = searchParams.get('status')
    const featured = searchParams.get('featured')

    const where: Record<string, unknown> = {}
    if (status)   where.status = status
    if (featured) where.featured = featured === 'true'

    const ventures = await prisma.venture.findMany({ where, orderBy: { order: 'asc' } })

    const result = ventures.map(v => ({
      ...v,
      tags:      parseJsonField(v.tags, []),
      metrics:   parseJsonField(v.metrics, {}),
      partners:  parseJsonField(v.partners, []),
      techStack: parseJsonField(v.techStack, []),
    }))

    return NextResponse.json(result)
  } catch (error) {
    console.error('Ventures API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Admin: create a venture (protect with secret header)
export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret')
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const venture = await prisma.venture.create({
      data: {
        ...body,
        tags:      JSON.stringify(body.tags || []),
        metrics:   JSON.stringify(body.metrics || {}),
        partners:  JSON.stringify(body.partners || []),
        techStack: JSON.stringify(body.techStack || []),
      }
    })
    return NextResponse.json(venture, { status: 201 })
  } catch (error) {
    console.error('Create venture error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

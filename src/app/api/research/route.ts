import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { parseJsonField } from '@/lib/utils'

export async function GET() {
  try {
    const items = await prisma.research.findMany({
      where: { status: 'published' },
      orderBy: [{ featured: 'desc' }, { year: 'desc' }]
    })
    return NextResponse.json(items.map(r => ({
      ...r,
      authors: parseJsonField(r.authors, []),
      tags:    parseJsonField(r.tags, []),
    })))
  } catch (error) {
    console.error('Research API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret')
  if (secret !== process.env.ADMIN_SECRET) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await req.json()
    const item = await prisma.research.create({
      data: {
        ...body,
        authors: JSON.stringify(body.authors || []),
        tags:    JSON.stringify(body.tags || []),
      }
    })
    return NextResponse.json(item, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

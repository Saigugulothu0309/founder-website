import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'

const schema = z.object({
  name:    z.string().min(1).max(100),
  email:   z.string().email(),
  type:    z.string().min(1),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(5000),
  company: z.string().max(100).optional(),
  website: z.string().url().optional().or(z.literal('')),
})

export async function POST(req: NextRequest) {
  try {
    const body   = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 })
    }

    const data = parsed.data

    // Save to database
    await prisma.contactInquiry.create({
      data: {
        name:    data.name,
        email:   data.email,
        type:    data.type,
        subject: data.subject,
        message: data.message,
        company: data.company,
        website: data.website || undefined,
        status:  'new',
      }
    })

    // Optional: send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'notifications@yourdomain.com',
          to:   process.env.CONTACT_EMAIL || '',
          subject: `[${data.type.toUpperCase()}] ${data.subject} — from ${data.name}`,
          html: `
            <h2>New ${data.type} inquiry</h2>
            <p><strong>From:</strong> ${data.name} (${data.email})</p>
            ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
            <p><strong>Subject:</strong> ${data.subject}</p>
            <hr />
            <p>${data.message.replace(/\n/g, '<br/>')}</p>
          `,
        })
      } catch (emailError) {
        console.error('Email send failed (non-fatal):', emailError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

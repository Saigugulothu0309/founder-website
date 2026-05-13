import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Impact metrics
  await prisma.impactMetric.createMany({
    skipDuplicates: true,
    data: [
      { id: '1', label: 'Users Impacted',     value: '50,000+', category: 'users',    order: 1 },
      { id: '2', label: 'Countries',           value: '12',      category: 'countries',order: 2 },
      { id: '3', label: 'Active Pilots',       value: '6',       category: 'users',    order: 3 },
      { id: '4', label: 'Research Citations',  value: '18',      category: 'research', order: 4 },
      { id: '5', label: 'Grants & Awards',     value: '3',       category: 'funding',  order: 5 },
      { id: '6', label: 'Patents Pending',     value: '2',       category: 'research', order: 6 },
    ]
  })

  // Sample blog post
  await prisma.blogPost.upsert({
    where: { slug: 'why-we-built-dualtalk' },
    create: {
      slug: 'why-we-built-dualtalk',
      title: "Why we built DualTalk: a lesson in building for someone else's reality",
      excerpt: "The moment I realized our prototype solved the wrong problem — and what we did about it.",
      content: "Full markdown content goes here...",
      category: 'Startup',
      tags: JSON.stringify(['accessibility', 'startup', 'DualTalk', 'lessons']),
      published: true,
      featured: true,
      readingTime: 6,
      publishedAt: new Date('2025-05-01'),
    },
    update: {}
  })

  console.log('✅ Seed complete.')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())

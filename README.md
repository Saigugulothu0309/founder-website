# Founder Website — Full-Stack Platform

A world-class, investor-ready founder website built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env with your values

# 3. Initialize database
npx prisma db push
npx prisma generate

# 4. (Optional) Seed with sample data
npx ts-node --project tsconfig.json prisma/seed.ts

# 5. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, theme, SEO
│   ├── page.tsx            # Main homepage
│   └── api/
│       ├── contact/        # POST /api/contact
│       ├── ventures/       # GET|POST /api/ventures
│       ├── research/       # GET|POST /api/research
│       └── blog/           # GET /api/blog
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav, dark/light toggle, mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # Full-screen hero with role switcher + stats
│   │   ├── About.tsx       # Founder story + 4 pillars
│   │   ├── Ventures.tsx    # Venture cards with status badges
│   │   ├── Research.tsx    # Papers, patents, experiments
│   │   ├── ImpactTimelineTech.tsx  # Technologies + Impact metrics + Timeline
│   │   ├── Blog.tsx        # Builder Notes posts
│   │   └── Contact.tsx     # Multi-type inquiry form
│   └── ui/
│       ├── AnimatedSection.tsx  # Scroll-triggered reveal
│       └── SectionHeader.tsx   # Reusable section headers
├── hooks/
│   └── useInView.ts        # Intersection observer hook
├── lib/
│   ├── prisma.ts           # DB client singleton
│   └── utils.ts            # cn(), formatNumber(), etc.
├── styles/
│   └── globals.css         # Design tokens, glassmorphism, animations
└── types/
    └── index.ts            # All TypeScript interfaces
prisma/
├── schema.prisma           # Full data model
└── seed.ts                 # Sample data seeder
```

---

## 🗄️ Data Models (Prisma)

| Model           | Purpose                                   |
|-----------------|-------------------------------------------|
| `Venture`       | Startups, products, future ventures       |
| `Research`      | Papers, patents, experiments, projects    |
| `BlogPost`      | Builder Notes articles               |
| `TimelineEvent` | Career and milestone timeline             |
| `ImpactMetric`  | Live metrics (users, countries, etc.)     |
| `ContactInquiry`| All contact form submissions              |
| `Collaboration` | Partners, professors, advisors            |

---

## 🔌 API Endpoints

| Method | Endpoint         | Description                            |
|--------|------------------|----------------------------------------|
| GET    | /api/ventures    | List all ventures (filterable)         |
| POST   | /api/ventures    | Create venture (admin secret required) |
| GET    | /api/research    | List published research                |
| POST   | /api/research    | Add research (admin secret required)   |
| GET    | /api/blog        | List published blog posts              |
| POST   | /api/contact     | Submit contact inquiry                 |

### Admin Authentication
Protected POST endpoints require header: `x-admin-secret: YOUR_ADMIN_SECRET`

---

## 🌍 Multi-language Support

Languages pre-configured in `next.config.js`:
`en`, `ja`, `zh`, `ar`, `es`, `fr`, `de`, `hi`

To add translations, create locale files in `/public/locales/{lang}/`

---

## 🎨 Design System

### Colors
- **Accent**: `--accent` (#1a56ff dark / #4d7fff light)
- **Surfaces**: `--bg`, `--bg-secondary`, `--surface`, `--surface-elevated`
- **Text**: `--text-primary`, `--text-secondary`, `--text-muted`

### Typography
- **Display**: Playfair Display (headings, hero)
- **Body**: DM Sans (body text)
- **Mono**: JetBrains Mono (code, labels)

### Components
- `.glass` — Glassmorphism card/container
- `.venture-card` — Hover-animated venture card
- `.status-badge` — Colored status pill
- `.text-gradient-accent` — Animated gradient text
- `.orb` — Atmospheric glow element
- `.noise` — Subtle noise texture overlay

---

## ⚙️ Environment Variables

```env
DATABASE_URL="file:./dev.db"          # SQLite (swap for Postgres in prod)
RESEND_API_KEY="re_..."               # Email notifications
CONTACT_EMAIL="you@domain.com"        # Where contact emails go
NEXT_PUBLIC_GA_ID="G-..."             # Google Analytics
NEXT_PUBLIC_SITE_URL="https://..."    # Your domain
NEXT_PUBLIC_FOUNDER_NAME="Your Name"
ADMIN_SECRET="your-secret"           # Protects admin API routes
```

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Production Database
For production, replace SQLite with PostgreSQL:
```env
DATABASE_URL="postgresql://user:pass@host/dbname?sslmode=require"
```
Update `prisma/schema.prisma` provider to `postgresql`.

---

## 📋 Customization Checklist

- [ ] Replace founder name in `.env` → `NEXT_PUBLIC_FOUNDER_NAME`
- [ ] Update hero stats in `Hero.tsx`
- [ ] Add your real ventures in `Ventures.tsx` (or via `/api/ventures` + DB)
- [ ] Add your research papers in `Research.tsx`
- [ ] Update timeline events in `ImpactTimelineTech.tsx`
- [ ] Add social links in `Footer.tsx`
- [ ] Connect a CMS (Notion, Contentful, Sanity) to blog API
- [ ] Configure Resend for email notifications
- [ ] Set up GA4 analytics

---

## 🔮 Future Extensions

- **CMS Integration**: Connect Notion or Contentful to blog posts
- **Admin Dashboard**: `/admin` route for managing all content
- **Newsletter**: Integrate ConvertKit or Mailchimp
- **Venture pages**: Individual `/ventures/[slug]` detail pages  
- **Research pages**: `/research/[slug]` with full paper viewer
- **Auth**: Add NextAuth for admin panel access
- **Search**: Full-text search across ventures + research + blog

---

Built with ♥ for founders who build with purpose.

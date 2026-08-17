# Bynext AI — Production Website

Production-ready company website for **Bynext AI**, built with Next.js (App
Router), JavaScript, Tailwind CSS and lucide-react icons.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/                  # Routes (App Router)
│   ├── page.js           # Homepage
│   ├── about/
│   ├── services/
│   │   └── [slug]/       # Dynamic service detail pages
│   ├── internship/
│   │   └── [slug]/       # Dynamic internship detail pages
│   ├── projects/
│   ├── contact/
│   ├── sitemap.js
│   ├── robots.js
│   └── not-found.js
├── components/
│   ├── layout/            # Navbar, Footer, Logo
│   ├── home/               # Homepage sections
│   ├── services/            # Service detail template
│   ├── internship/           # Internship card + detail template
│   ├── projects/               # Project card + filterable grid
│   ├── contact/                 # Contact form
│   └── ui/                       # Reusable primitives
├── data/                   # Content lives here (services, internships,
│                             projects, technologies, process, site info)
└── lib/                    # SEO helper utilities
```

## Why dynamic [slug] routes for Services & Internship

Rather than hand-duplicating 4 service pages and 7 internship pages, each
group uses a single data-driven template (ServiceDetail.jsx /
InternshipDetail.jsx) plus generateStaticParams. This produces the exact
same static URLs requested (e.g. /services/web-development,
/internship/mern-stack) while keeping the codebase maintainable — add a new
service or internship track by editing src/data/services.js or
src/data/internships.js, no new page files required.

## Content & Data

All repeated content (services, internships, projects, technologies, process
steps, industries, nav/footer links) lives in src/data/*.js. Update content
there rather than editing components.

Note: src/data/projects.js contains clearly-labeled sample/illustrative
projects, not real client work — swap in real projects when available.

## Contact Form

src/components/contact/ContactForm.jsx includes full client-side
validation and loading/success/error states. It is not connected to a
backend yet — the submitContactForm() function at the bottom of that
file is the single place to wire in a real API route or email service
(e.g. Resend, SendGrid, or a custom /api/contact route). See
.env.example for where to add related environment variables.

## SEO

- Every page has unique title, description, canonical URL, Open Graph and
  Twitter metadata (see src/lib/seo.js).
- JSON-LD structured data: Organization + WebSite (root layout),
  BreadcrumbList (every interior page), Service (service detail pages).
- sitemap.xml and robots.txt are generated via Next.js conventions
  (src/app/sitemap.js, src/app/robots.js).
- Canonical production domain: https://bynextai.com.

## Brand System

- 60% white (#FFFFFF), 30% blue (#2563EB / #1D4ED8), 10% dark navy
  (#0B1026 / #111827) — see CSS variables in src/app/globals.css.
- Font: Inter, self-hosted via @fontsource/inter (avoids a runtime
  dependency on Google Fonts).

## Known Follow-ups

- Connect the contact form to a real backend/email service.
- Replace sample project data in src/data/projects.js with real projects
  once available.
- Replace placeholder social links in src/data/site.js with real URLs.
- Add real internship durations once announced (currently "To Be
  Announced" everywhere, per requirements).

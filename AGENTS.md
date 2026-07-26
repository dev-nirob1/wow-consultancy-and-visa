# AGENTS.md — Wow Consultancy and Visa

Project context and conventions for continuing this Next.js + Tailwind CSS v4 website. Read this fully before making changes.

## Project Overview

**Agency:** Wow Consultancy and Visa — student visa consultancy specializing in study-abroad guidance (primary focus: South Korea).

**Stack:**

- Next.js (App Router)
- JavaScript only — **not TypeScript**
- Tailwind CSS v4
- `react-icons` (specifically `react-icons/fa6`) for all icons

## Code Style Conventions (strict — always follow)

1. **Component definition:** Arrow function components with `export default ComponentName` at the bottom.

   ```jsx
   const ComponentName = () => { ... };
   export default ComponentName;
   ```

   Never use `export default function ComponentName() {}`.

2. **Props:** Always destructure in the function signature. Never pass props by spreading (`{...item}`) — always pass each prop explicitly by name.

   ```jsx
   // Correct
   <Card title={item.title} description={item.description} />

   // Wrong
   <Card {...item} />
   ```

3. **Navigation:** Always use Next.js `Link` for internal routes. Never use plain `<a>` tags for internal navigation (external links, e.g. official university websites, correctly use `<a target="_blank">`).

4. **Section spacing:** Every top-level `<section>` wrapper uses `py-16`. Do not use `py-20`, `lg:py-28`, or other variants — `py-16` is the fixed standard site-wide.

5. **Border radius:** `rounded-2xl` is the site-wide standard for cards, images, icon badges, and buttons-in-cards. Keep this consistent — do not mix in `rounded-xl` or `rounded-lg` for equivalent elements.

6. **No unnecessary classNames:** No `w-full` on block elements, no `bg-white` if it's already inherited, no fixed heights where `aspect-*` ratios will do.

7. **Data rendering:** Prefer array-of-objects + a single `.map()` with a reusable card/item component, rather than hardcoding repeated JSX blocks — but only when data is genuinely repeating/list-like. Don't over-abstract one-off content.

8. **Headings/paragraphs:** Global responsive type scale is already defined in `globals.css` for `h1`–`h6` and `p`. Do not add manual `text-*` size classes to headings/paragraphs unless intentionally overriding (e.g. white text on dark backgrounds, or a deliberately larger pull-quote).

9. **Image `fill` usage:** Always pair `fill` with an accurate `sizes` prop.

10. **File organization pattern in use:**
    ```
    components/
      common/       → SectionHeader, and other shared layout primitives
      widget/       → reusable cards (BenefitCard, TestimonialCard, TeamMemberCard, etc.)
      sections/     → full page sections (Hero, Services, CtaSection, etc.)
    ```

## Design System

**Colors** (registered in `globals.css` via `@theme inline`):

```css
--color-primary: #0001fc;
--color-black: #000000;
--color-white: #ffffff;
--color-light: #f5f7fa; /* background */
--color-dark: #1f2937; /* body text */
```

**Fonts:**

- Body: **Inter** (`--font-sans`)
- Headings: **Plus Jakarta Sans** (`--font-heading`)
- Loaded via `next/font/google` in `layout.js`, wired through `@theme inline` in `globals.css`.

**Container** (custom `@utility container` in `globals.css`):

- 90% width on mobile, no extra horizontal padding
- Uses Tailwind's default breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) mapped to max-widths of 540px/720px/960px/1180px/1320px respectively

**Headings:** Responsive scale already defined globally (h1–h6), using `font-heading`, color `black` by default (override with `text-white` etc. on dark backgrounds as needed).

**Recurring visual patterns:**

- Icon badges: `w-12 h-12` (or `w-14 h-14`) `flex items-center justify-center rounded-2xl bg-primary/10 text-primary`
- Cards: `bg-white rounded-2xl border border-dark/10 p-6` (or `p-8`), `hover:shadow-xl transition-shadow duration-300`
- Checkmark list items: small circular `bg-primary/10 text-primary` badge with `FaCheck`
- Gallery/image hover: `group-hover:scale-110` zoom + dark gradient overlay + caption

## Components Built So Far

**Global:**

- `Navbar` — single nav-links array/loop for both desktop and mobile (no duplicated lists), transparent-to-white on scroll, full-screen mobile drawer, active link underline indicator
- `Footer` — dark background, logo + description + socials, quick links, support links, contact info, bottom copyright bar
- `SectionHeader` (common) — props: `subTitle`, `title`, `highlight` (gradient-highlighted substring of title), `description`, `align`, `className` (no built-in margin — caller controls spacing via `className`)
- `CtaSection` — reused across multiple pages as-is

**Homepage sections:**

- `Hero` — organic blob-shaped image, highlight checklist, two CTAs
- `Benefits` (Why Study in Korea) — 6 benefit cards, 3-column grid
- `Services` (homepage version) — interactive left-list/right-preview toggle, click to switch active service
- `Process` (Study Process) — vertical alternating timeline (left/right), number-in-circle-on-the-line, icon-in-card
- `PartnerUniversities` — infinite CSS marquee, logos duplicated for seamless loop, grayscale-to-color hover
- `WhyChooseUs` — image collage/overlay stat card + icon-list of reasons
- `Testimonials` — custom lightweight slider (no library), real sliding track via `translateX`, prev/next buttons only, responsive 1-per-view mobile / 2-per-view desktop
- `Faq` — single-open accordion, `+`/`-` icon toggle, smooth height animation via CSS grid trick
- `CallToAction` — same as CtaSection

**Services page:**

- `ServicesOverview` — image + checklist intro section
- `AllServices` — zigzag alternating image/content rows, one per service (5 services)

**About page:**

- `WhoWeAre` — image collage (2 overlapping images) + story text + editorial-style Mission/Vision (border-left accent, no icons/cards)
- `FounderSpotlight` — editorial photo + large pull-quote + bio + signature-style name
- `Team` — circular photos with grayscale-to-color hover, decorative ring, accent underline
- `SuccessJourney` — gallery with category filter tabs (currently: "Visa Success", "Our Activities"), simple grid (not masonry), always-visible caption overlay

**Contact page:**

- `ContactInfoBlock` (widget) + `ContactForm` (widget) — full page at `app/contact/page.jsx`, includes Google Maps iframe embed below the two-column layout

**Universities page:**

- `UniversityCard` (widget) — list page at `app/universities/page.jsx`, 12 static universities, cards link to `/universities/[slug]`
- University **details page** — `app/universities/[slug]/page.jsx`, currently a **single-file component with hardcoded data for one sample university** (Seoul National University) — NOT yet wired to dynamic `params.slug` lookup. Contains 7 sections: Overview, Quick Facts, Programs Offered, Admission Requirements, Tuition & Scholarship, Campus Life gallery, Application Process (horizontal/vertical steps).

## Known Gaps / TODO

1. **Study in Korea page** — not started at all. Navbar currently links to `/study-in-korea` which will 404. Client decided to leave this until after the demo.
2. **Page hero banners** — Services, About, Universities, (and Study in Korea when built) all currently jump straight into their first section with no breadcrumb-style page header/banner. Planned to be added post-demo.
3. **University details page dynamic wiring** — needs a real data source (JSON file, CMS, or API) keyed by slug, plus `generateStaticParams` if using static generation.
4. **Contact form backend** — currently only does `console.log(formData)` on submit with a simulated `setTimeout`. Needs a real submission handler (API route, Resend, EmailJS, etc.).
5. **Placeholder images everywhere** — logo, team photos, gallery photos, university logos/covers, testimonial photos, hero images all use placeholder paths that don't exist yet. Replace before/soon after demo.
6. **Placeholder copy** — founder name/quote/bio, some testimonials, and university sample data are illustrative placeholders, not real content.
7. **Stats section** — discussed adding a compact stats bar (e.g. "500+ students," "98% visa success") right after the Hero on the homepage. Decision deferred — not yet built.
8. **404 page / loading states** — not yet created.
9. **Hydration warning fix** — `suppressHydrationWarning` added to `<body>` in `layout.js` to silence a harmless browser-extension-caused mismatch (e.g. ColorZilla injecting `cz-shortcut-listen`). Not an app bug.

## Notes for Continuing in Another Tool

- Keep referring back to the **Code Style Conventions** section above for every new component — the person (Nirob) is strict about consistency (`py-16`, `rounded-xl`, no prop spreading, `Link` usage, no unnecessary classes).
- When building new sections, check whether a similar pattern already exists above before inventing a new visual style — reuse `SectionHeader`, existing card patterns, hover treatments, etc.
- Ask before assuming layout direction on ambiguous requests — Nirob has been iterating heavily on visual style preferences (has rejected generic icon-card layouts multiple times in favor of more editorial/premium treatments).

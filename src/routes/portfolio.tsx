import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Briefcase, HeartPulse, Mail, TrendingUp } from "lucide-react";

const BASE_URL = "https://partners-6100.lovable.app";

const title = "Engagement Portfolio & Case Studies | 6100 Partners";
const description =
  "Representative 6100 Partners engagements: private equity value creation, healthcare services turnarounds, and fractional and interim COO leadership for complex, multi-state organizations.";

export const Route = createFileRoute("/portfolio")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "private equity value creation case study, healthcare turnaround consulting, interim COO engagements, fractional COO portfolio, portfolio operations advisory, operational diligence, P&L optimization",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/portfolio` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/portfolio` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          description,
          url: `${BASE_URL}/portfolio`,
          isPartOf: { "@type": "WebSite", name: "6100 Partners, LLC", url: BASE_URL },
          about: {
            "@type": "ProfessionalService",
            name: "6100 Partners, LLC",
            url: BASE_URL,
            email: "brandon.oliver@6100partners.com",
            founder: {
              "@type": "Person",
              name: "Brandon Oliver",
              honorificSuffix: "MBA",
              jobTitle: "Founder & Executive Advisor",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nashville",
              addressRegion: "TN",
              addressCountry: "US",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: `${BASE_URL}/portfolio` },
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

const practiceAreas = [
  {
    icon: TrendingUp,
    title: "Private equity value creation",
    copy: "Hold-period operating partnership for sponsors and portfolio company leadership — from operational diligence and 100-day planning through execution of the value creation plan.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare turnarounds",
    copy: "Stabilization and transformation of healthcare services and HealthTech operations — restoring P&L discipline, clinical operating rhythms, and scalable systems.",
  },
  {
    icon: Briefcase,
    title: "Interim COO leadership",
    copy: "Fractional and interim chief operating officer mandates for organizations in transition — stepping in with full operating accountability and a clear path to permanent leadership.",
  },
];

const caseStudies = [
  {
    category: "Private Equity Value Creation",
    title: "Acquisition integration — national health & wellness platform",
    situation:
      "A publicly traded healthcare services platform acquired a national direct-to-consumer nutrition and wellness brand and needed an Integration Management Office to convert the deal thesis into captured value.",
    approach:
      "Led the IMO and cross-functional workstreams across the combined organization, aligning integration priorities to revenue synergy targets and operating metrics.",
    outcome:
      "Identified $50M in revenue synergies and built the governance to capture post-deal value across the combined platform.",
  },
  {
    category: "Private Equity Value Creation",
    title: "Enterprise divestiture & turnaround — healthcare services platform",
    situation:
      "The enterprise needed to divest its Population Health business — 1,700 employees and $100M in contracted spend — while simultaneously restructuring the remaining platform.",
    approach:
      "Directed Day One readiness and governance through a 14-month Transition Services Agreement; drove $45–50M in restructuring and turnaround initiatives while enforcing cost discipline.",
    outcome:
      "Cut transition costs by $10M while maintaining TSA compliance, captured $25M in turnaround savings, and surfaced an additional $30–40M opportunity.",
  },
  {
    category: "Healthcare Turnaround",
    title: "Operating turnaround — Medicaid value-based care",
    situation:
      "A multi-state Medicaid field operations company serving roughly 7,500 lives faced negative EBITDA, 27% workforce turnover, and an operating model unprepared for Medicaid reform.",
    approach:
      "As COO, restructured markets, redesigned the operating model end to end, standardized KPIs, SOPs, and executive cadence, and enforced disciplined cost controls.",
    outcome:
      "Turned negative EBITDA positive within 7 months, delivered 5%+ month-over-month organic revenue growth, cut turnover from 27% to 3–5%, and executed two strategic divestitures in 6 months.",
  },
  {
    category: "Healthcare Turnaround",
    title: "Growth & margin expansion — value-based care organization",
    situation:
      "A value-based care organization with 17 health plan contracts and 18,000+ longitudinal-care members needed operating leverage across clinical operations, call center, product, and quality.",
    approach:
      "As COO with full P&L accountability, led 250+ employees and 200+ clinicians; redesigned workflows, strengthened revenue integrity, and scaled technology-enabled care delivery.",
    outcome:
      "Grew revenue 36% from 2020 to 2023, expanded operating infrastructure from $50M to $80M, lifted longitudinal-care margins 10% year over year, and turned the Risk Analytics and In-Home Assessment lines profitable in 2022.",
  },
  {
    category: "Interim COO Leadership",
    title: "Interim COO — clinical product division",
    situation:
      "Clinical product lines needed seasoned operational leadership and tighter operating leverage during a period of organizational change.",
    approach:
      "Stepped in as interim COO alongside the SVP, Innovation Performance mandate — taking direct operational leadership across clinical product lines and service quality.",
    outcome:
      "Stabilized operations and improved operating leverage across the product lines while permanent leadership structures were established.",
  },
  {
    category: "Interim COO Leadership",
    title: "Fractional operating leadership — 6100 Partners advisory clients",
    situation:
      "Growth-stage and value-based care organizations — including a maternal health Series B company and a Medicaid startup backed by a leading healthcare venture fund — needed executive operating capacity without permanent overhead.",
    approach:
      "Delivered fractional COO leadership: built playbooks, SOPs, and SLAs for consolidated call center and nursing operations, launched a CCaaS platform, and designed engagement operations and data-enrichment strategy.",
    outcome:
      "Reduced average handle time 20% and no-answer rates 10% for the maternal health company; lifted member engagement above 50% for the Medicaid startup; architected a joint venture between two healthcare technology platforms powering a national health plan's 60-day value-based care initiative.",
  },
];

const thesisPillars = [
  "Clarity of strategy — the org must know what it is optimizing for, and why",
  "Transparency of metrics — what gets measured runs the business, not slide decks",
  "Leadership accountability — authority and responsibility travel together or not at all",
  "Mission-margin alignment — sustainable care delivery requires both; you don't get to choose one",
];

const thesisProof = [
  { figure: "18,000+", detail: "Patients under longitudinal in-home primary care — full P&L, 3 lines of business, 17 health plan contracts" },
  { figure: "3 States", detail: "Operational restructuring — converted negative EBITDA to positive within 18 months" },
  { figure: "$250M+", detail: "Enterprise vendor spend managed — governance structure built from scratch" },
  { figure: "20–30K", detail: "Annual in-home prospective risk assessments executed across multi-state operations" },
  { figure: "$45–50M", detail: "Turnaround and restructure of a population health business" },
];

function PortfolioPage() {
  return (
    <main id="top" className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="6100 Partners home">
            <span className="flex size-9 items-center justify-center border border-primary text-[11px] font-bold text-primary">6100</span>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">Partners</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
        </div>
      </header>

      <section className="border-b border-border bg-ink py-24 text-primary-foreground lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <p className="text-xs font-semibold uppercase text-bronze-soft">Engagement portfolio</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight lg:text-6xl">
            Operating engagements, measured by outcomes.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-primary-foreground/65">
            Two decades of private equity value creation, healthcare turnarounds, and
            interim operating leadership — with real figures from real engagements.
            Advisory clients are described without names where confidentiality applies.
          </p>
          <div className="mt-10">
            <a
              href="mailto:brandon.oliver@6100partners.com?subject=Portfolio%20inquiry"
              className="inline-flex h-12 items-center justify-center gap-2 bg-bronze px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-bronze/90"
            >
              <Mail className="size-4" /> Request references
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase text-bronze">Engagement categories</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-primary lg:text-5xl">
              Three arenas of operating impact.
            </h2>
          </div>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {practiceAreas.map((item) => (
              <div key={item.title} className="bg-background p-8">
                <item.icon className="size-5 text-bronze" />
                <h3 className="mt-8 text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase text-bronze">Case studies</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-primary lg:text-5xl">
              Representative engagements.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
            Each profile follows the same arc: the situation, the operating approach,
            and the measured outcome — drawn from Brandon Oliver's operating record
            across publicly traded healthcare platforms, Medicaid value-based care,
            multi-state clinical services organizations, and 6100 Partners advisory
            engagements.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {caseStudies.map((study) => (
              <article key={study.title} className="bg-background p-8 lg:p-10">
                <p className="text-[11px] font-semibold uppercase text-bronze">{study.category}</p>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-primary">{study.title}</h3>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase text-foreground">Situation</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">{study.situation}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase text-foreground">Approach</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">{study.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase text-foreground">Outcome</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">{study.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase text-bronze">Operating thesis</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-primary lg:text-5xl">
              Platforms fail at the execution layer — not the strategy layer.
            </h2>
            <p className="mt-8 text-base leading-7 text-muted-foreground">
              The thesis is sound. The infrastructure isn't built to carry it. 6100 Partners
              closes that gap — coming in at moments of performance inflection, where margin
              compression, operating complexity, or post-close chaos require someone who has
              done it before and won't slow down to get up to speed.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            <div className="bg-background p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-primary">Where we operate</h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
                <li>PE-backed platforms in the 24–48 month value creation window</li>
                <li>Multi-state value-based care, Medicaid, and MA operating environments</li>
                <li>In-home care, population health, and risk-bearing care delivery models</li>
                <li>Turnaround situations where EBITDA trajectory needs to change fast</li>
                <li>Growth-stage platforms that need operating infrastructure to match their equity story and drive margin expansion</li>
              </ul>
            </div>
            <div className="bg-background p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-primary">How we work — four non-negotiables</h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
                {thesisPillars.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-lg font-semibold text-primary">Proof of execution</h3>
            <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
              {thesisProof.map((item) => (
                <div key={item.figure} className="bg-background p-6">
                  <p className="text-2xl font-semibold text-bronze">{item.figure}</p>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ink py-24 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="max-w-2xl text-3xl font-medium leading-tight lg:text-4xl">
            Discuss how these patterns apply to your organization.
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:brandon.oliver@6100partners.com?subject=Consultation%20request"
              className="inline-flex h-12 items-center justify-center gap-2 bg-bronze px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-bronze/90"
            >
              <Mail className="size-4" /> Request a consultation
            </a>
            <Link
              to="/"
              className="inline-flex h-12 items-center justify-center gap-2 border border-primary-foreground/25 px-6 text-sm text-primary-foreground/80 transition-colors hover:border-bronze hover:text-bronze-soft"
            >
              Explore the firm <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary-foreground/10 bg-ink text-primary-foreground">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="6100 Partners home">
              <span className="flex size-9 items-center justify-center border border-bronze text-[11px] font-bold text-bronze-soft">6100</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary-foreground">Partners</span>
            </Link>
            <p className="mt-5 text-xs text-primary-foreground/45">Nashville-based. National reach.</p>
          </div>
          <div className="text-left sm:text-right">
            <a href="mailto:brandon.oliver@6100partners.com" className="text-sm text-primary-foreground/70 hover:text-bronze-soft">
              brandon.oliver@6100partners.com
            </a>
            <p className="mt-3 text-xs text-primary-foreground/35">© 2026 6100 Partners, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

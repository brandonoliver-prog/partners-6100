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
    title: "Portfolio company scaling — healthcare services platform",
    situation:
      "A private equity-backed healthcare services platform needed to convert aggressive growth ambitions into an operating model that could absorb multi-state expansion without losing discipline.",
    approach:
      "Built the value creation plan alongside the sponsor and management team; installed scalable operating systems, leadership cadence, and performance management across the platform.",
    outcome:
      "A repeatable operating foundation supporting expansion, with clear accountability structures and reporting rigor aligned to the sponsor's hold-period objectives.",
  },
  {
    category: "Private Equity Value Creation",
    title: "Operational diligence & 100-day plan — sponsor acquisition",
    situation:
      "A sponsor evaluating a healthcare services acquisition required an operator's view of the target's true operational condition and post-close priorities.",
    approach:
      "Led operational diligence assessing systems, leadership, and scalability; translated findings into a concrete 100-day plan and first-year value creation roadmap.",
    outcome:
      "The sponsor entered ownership with a validated operating thesis and a sequenced execution plan, accelerating time-to-value in the critical first months.",
  },
  {
    category: "Healthcare Turnaround",
    title: "Operating turnaround — multi-site healthcare services provider",
    situation:
      "A multi-site provider faced deteriorating margins, inconsistent operating practices across locations, and leadership strain.",
    approach:
      "Diagnosed P&L drivers site by site; standardized operating rhythms, staffing models, and accountability; rebuilt the management cadence around a small set of decisive metrics.",
    outcome:
      "Stabilized operations and restored P&L discipline, positioning the organization for sustainable performance rather than episodic fixes.",
  },
  {
    category: "Healthcare Turnaround",
    title: "Transformation — value-based care operations",
    situation:
      "A healthcare organization transitioning toward value-based care models needed its operations re-architected to perform under new reimbursement and care delivery economics.",
    approach:
      "Redesigned operating processes, reporting, and cross-functional workflows to support value-based performance; aligned leadership incentives and execution cadence to the new model.",
    outcome:
      "An operating structure capable of managing value-based contracts with the rigor and speed the model demands.",
  },
  {
    category: "Interim COO Leadership",
    title: "Interim COO — HealthTech company in growth transition",
    situation:
      "A HealthTech company outgrew its early operating structure; the founders needed seasoned operating leadership during a pivotal scaling phase.",
    approach:
      "Stepped in as interim COO with full operating accountability; built the leadership team cadence, scalable systems, and execution discipline; defined the permanent COO profile.",
    outcome:
      "A stabilized, scalable operating rhythm and a clean transition path to permanent operating leadership.",
  },
  {
    category: "Interim COO Leadership",
    title: "Fractional COO — founder-led healthcare services firm",
    situation:
      "A founder-led services firm needed executive operating capacity without the cost of a full-time hire during a critical growth window.",
    approach:
      "Served as fractional COO — owning operating planning, management cadence, and execution priorities while coaching the internal team into greater accountability.",
    outcome:
      "Senior-level operating leadership delivered flexibly, with durable systems and habits that outlasted the engagement.",
  },
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
            interim operating leadership. The case studies below are representative
            engagement profiles — client identities are held in confidence, and detailed
            references are available upon request.
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
              and the outcome. Specific metrics and client details are shared directly
              during the consultation process.
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Building2, HeartPulse, Mail, MapPin, ShieldCheck } from "lucide-react";

const BASE_URL = "https://partners-6100.lovable.app";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Nashville%2C+TN";

const title = "Nashville Executive Advisory & Operations Consulting | 6100 Partners";
const description =
  "6100 Partners is a Nashville, Tennessee executive advisory firm serving healthcare, HealthTech, and private equity-backed organizations across Middle Tennessee and nationally.";

export const Route = createFileRoute("/nashville")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Nashville executive advisory, Nashville operations consulting, Nashville fractional COO, Nashville healthcare consulting, Tennessee private equity operations, Middle Tennessee HealthTech advisory, interim COO Nashville",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/nashville` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/nashville` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "6100 Partners, LLC",
          description,
          url: `${BASE_URL}/nashville`,
          image: `${BASE_URL}/favicon.svg`,
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
          areaServed: [
            { "@type": "City", name: "Nashville" },
            { "@type": "State", name: "Tennessee" },
            { "@type": "Country", name: "United States" },
          ],
          knowsAbout: [
            "Executive advisory in Nashville",
            "Fractional and interim COO services",
            "Healthcare and HealthTech operations",
            "Private equity value creation",
            "Operational turnarounds and P&L optimization",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Nashville", item: `${BASE_URL}/nashville` },
          ],
        }),
      },
    ],
  }),
  component: NashvillePage,
});

const localFocus = [
  {
    icon: HeartPulse,
    title: "Healthcare services hub",
    copy: "Nashville is home to one of the nation's densest healthcare ecosystems. 6100 Partners supports providers, payers, and HealthTech operators scaling care delivery across the region and beyond.",
  },
  {
    icon: Building2,
    title: "Private equity & sponsors",
    copy: "Hands-on operating support for Middle Tennessee portfolio companies — from diligence and 100-day planning through hold-period value creation.",
  },
  {
    icon: ShieldCheck,
    title: "Interim operating leadership",
    copy: "Fractional and interim COO leadership for Nashville-area organizations navigating growth, transition, or turnaround mandates.",
  },
];

function NashvillePage() {
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
          <p className="text-xs font-semibold uppercase text-bronze-soft">Nashville, Tennessee</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight lg:text-6xl">
            Executive advisory and operational leadership in Nashville.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-primary-foreground/65">
            Based in Nashville — the center of American healthcare services — 6100 Partners
            works with founders, boards, and private equity sponsors across Middle Tennessee
            and nationally to scale complex operations and accelerate enterprise value.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:brandon.oliver@6100partners.com?subject=Nashville%20consultation%20request"
              className="inline-flex h-12 items-center justify-center gap-2 bg-bronze px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-bronze/90"
            >
              <Mail className="size-4" /> Request a consultation
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 border border-primary-foreground/25 px-6 text-sm text-primary-foreground/80 transition-colors hover:border-bronze hover:text-bronze-soft"
            >
              <MapPin className="size-4" /> Find us in Nashville <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase text-bronze">Local presence, national reach</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-primary lg:text-5xl">
              Rooted in Nashville's operating community.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              With more than two decades across healthcare services, technology, and
              private equity-backed operating leadership, 6100 Partners brings
              Nashville-tested operational discipline to organizations wherever they operate.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {localFocus.map((item) => (
              <div key={item.title} className="bg-background p-8">
                <item.icon className="size-5 text-bronze" />
                <h3 className="mt-8 text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase text-bronze">Service area</p>
            <h2 className="mt-5 text-3xl font-medium leading-tight text-primary lg:text-4xl">
              Serving Middle Tennessee and beyond.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-muted-foreground">
              Engagements span the greater Nashville region — including Franklin, Brentwood,
              and the broader Middle Tennessee corridor — as well as multi-state and national
              mandates for healthcare services, HealthTech, and private equity-backed
              organizations.
            </p>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              To discuss an engagement, email{" "}
              <a href="mailto:brandon.oliver@6100partners.com" className="border-b border-bronze text-primary hover:text-bronze">
                brandon.oliver@6100partners.com
              </a>{" "}
              or return to the{" "}
              <Link to="/" className="border-b border-bronze text-primary hover:text-bronze">
                homepage
              </Link>
              .
            </p>
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

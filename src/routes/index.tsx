import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  Globe2,
  HeartPulse,
  Layers3,
  Mail,
  Menu,
  ShieldCheck,
  Target,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/leadership-architecture.jpg";

const description =
  "6100 Partners provides executive advisory and operational leadership for healthcare, HealthTech, and private equity-backed organizations.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "6100 Partners | Executive Advisory & Operations" },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "executive advisory, operational leadership, fractional COO, interim COO, private equity value creation, healthcare operations, HealthTech scaling, operational turnaround, P&L optimization",
      },
      { property: "og:title", content: "6100 Partners | Executive Advisory & Operations" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "6100 Partners | Executive Advisory & Operations" },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "6100 Partners, LLC",
          description,
          url: "https://partners-6100.lovable.app/",
          founder: {
            "@type": "Person",
            name: "Brandon Oliver",
            honorificSuffix: "MBA",
            jobTitle: "Founder & Executive Advisor",
          },
          areaServed: "United States",
          address: { "@type": "PostalAddress", addressLocality: "Nashville", addressRegion: "TN" },
          email: "brandon.oliver@6100partners.com",
          knowsAbout: [
            "Executive advisory",
            "Operational leadership",
            "Fractional and interim COO services",
            "Private equity value creation",
            "Healthcare and HealthTech operations",
            "Operational turnarounds and P&L optimization",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Advisory & Operating Services",
            itemListElement: [
              "Private Equity Value Creation & Portfolio Support",
              "Fractional & Interim Operational Leadership (COO)",
              "Healthcare Services & HealthTech Growth",
              "Turnaround & Operating Efficiency",
            ].map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "6100 Partners",
          url: "https://partners-6100.lovable.app/",
        }),
      },
    ],
  }),
  component: Index,
});

const practices = [
  {
    number: "01",
    title: "Private Equity Value Creation",
    summary:
      "Translate investment theses into measurable operating plans, with focused support from diligence through the hold period.",
    points: ["Operational diligence", "100-day planning", "Portfolio company support"],
    icon: Building2,
  },
  {
    number: "02",
    title: "Fractional & Interim COO",
    summary:
      "Embed experienced operating leadership when the mandate is urgent, the environment is complex, or the team is in transition.",
    points: ["Executive operating cadence", "Leadership alignment", "Board-level reporting"],
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Healthcare & HealthTech Growth",
    summary:
      "Scale service delivery and technology-enabled operations across markets, teams, and evolving reimbursement models.",
    points: ["Multi-state operations", "Value-based care models", "Technology enablement"],
    icon: HeartPulse,
  },
  {
    number: "04",
    title: "Turnaround & Efficiency",
    summary:
      "Stabilize performance, sharpen accountability, and restore operating leverage through disciplined execution.",
    points: ["P&L optimization", "Cost structure redesign", "Transformation governance"],
    icon: BarChart3,
  },
];

const engagements = [
  "Private Equity / Portfolio Company",
  "Fractional or Interim COO",
  "Healthcare / HealthTech Growth",
  "Turnaround / Transformation",
  "Board or Founder Advisory",
  "Other",
];

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="6100 Partners home">
      <span
        className={`flex size-9 items-center justify-center border text-[11px] font-bold ${inverse ? "border-bronze text-bronze-soft" : "border-primary text-primary"}`}
      >
        61
      </span>
      <span className={`text-[15px] font-semibold ${inverse ? "text-primary-foreground" : "text-foreground"}`}>
        6100 <span className="font-normal text-bronze">Partners</span>
      </span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [engagement, setEngagement] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const organization = String(form.get("organization") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !engagement || !message) {
      setError("Please complete the required fields before continuing.");
      return;
    }

    setError("");
    const subject = encodeURIComponent(`Consultation request — ${organization || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "Not provided"}\nEngagement: ${engagement}\n\nContext:\n${message}`,
    );
    window.location.href = `mailto:brandon.oliver@6100partners.com?subject=${subject}&body=${body}`;
  }

  return (
    <main id="top" className="overflow-x-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-primary-foreground/15">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
          <BrandMark inverse />
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
            {[
              ["Approach", "#approach"],
              ["Practice Areas", "#practices"],
              ["Leadership", "#leadership"],
              ["Impact", "#impact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-xs font-medium text-primary-foreground/75 transition-colors hover:text-bronze-soft">
                {label}
              </a>
            ))}
            <Link to="/portfolio" className="text-xs font-medium text-primary-foreground/75 transition-colors hover:text-bronze-soft">
              Portfolio
            </Link>
          </nav>
          <div className="hidden lg:block">
            <Button asChild className="h-11 rounded-none bg-bronze px-5 text-primary-foreground shadow-none hover:bg-bronze/90">
              <a href="#contact">Request consultation <ArrowUpRight /></a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-primary-foreground/15 bg-ink px-6 py-6 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-5">
              {["Approach", "Practice Areas", "Leadership", "Impact", "Contact"].map((label) => {
                const href = `#${label.toLowerCase().replace(" areas", "s")}`;
                return <a key={label} href={href} onClick={() => setMenuOpen(false)} className="text-sm text-primary-foreground">{label}</a>;
              })}
              <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="text-sm text-primary-foreground">Portfolio</Link>
            </div>
          </nav>
        )}
      </header>

      <section className="relative flex min-h-[760px] items-end bg-ink pt-32 text-primary-foreground lg:min-h-[820px]">
        <img src={heroImage} alt="Contemporary business campus illuminated at dusk" width={1920} height={1088} className="absolute inset-0 size-full object-cover object-center" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="relative mx-auto grid w-full max-w-[1440px] gap-12 px-6 pb-16 lg:grid-cols-[1fr_330px] lg:px-12 lg:pb-20">
          <div className="max-w-4xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-bronze-soft">
              <span className="h-px w-10 bg-bronze" /> Executive advisory & operational leadership
            </p>
            <h1 className="max-w-[920px] text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-[82px]">
              Operating clarity for moments that <span className="font-editorial font-normal italic text-bronze-soft">define value.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/75 lg:text-lg lg:leading-8">
              6100 Partners works alongside private equity sponsors, boards, and founders to scale complex operations, strengthen performance, and accelerate enterprise value.
            </p>
            <Button asChild size="lg" className="mt-9 h-13 rounded-none bg-bronze px-7 text-primary-foreground shadow-none hover:bg-bronze/90">
              <a href="#contact">Request consultation <ArrowRight /></a>
            </Button>
          </div>
          <div className="self-end border-l border-primary-foreground/25 pl-6">
            <p className="text-[11px] font-semibold uppercase text-bronze-soft">Focused expertise</p>
            <p className="mt-3 text-sm leading-6 text-primary-foreground/75">Healthcare services · HealthTech · Private equity · Multi-state operations</p>
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 border-b border-border py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase text-bronze">The mandate</p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Experienced partnership at the intersection of strategy, operations, and accountability.</p>
          </div>
          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight text-primary sm:text-4xl lg:text-5xl">
              Strategy creates direction. <span className="font-editorial font-normal italic text-bronze">Operating discipline</span> creates value.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <p className="text-base leading-7 text-muted-foreground">We step into high-stakes situations with the judgment to identify what matters, the structure to align teams, and the operating cadence to turn priorities into results.</p>
              <p className="text-base leading-7 text-muted-foreground">From pre-close diligence to transformation and scale, each engagement is built around the realities of the business—not a generic consulting playbook.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="practices" className="scroll-mt-20 bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-6 border-b border-border pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase text-bronze">Core practice areas</p>
              <h2 className="mt-4 text-4xl font-medium text-primary lg:text-5xl">Leadership where it counts.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">Targeted support for complex operating environments, pivotal transitions, and ambitious value-creation plans.</p>
          </div>
          <div className="grid md:grid-cols-2">
            {practices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <article key={practice.number} className={`group border-border py-10 md:p-10 ${index % 2 === 0 ? "md:border-r" : ""} ${index < 2 ? "border-b" : ""}`}>
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-bronze">{practice.number}</span>
                    <Icon className="size-5 text-primary transition-transform group-hover:-translate-y-1" aria-hidden="true" />
                  </div>
                  <h3 className="mt-10 text-2xl font-medium text-primary">{practice.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">{practice.summary}</p>
                  <ul className="mt-7 space-y-3">
                    {practice.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm text-foreground"><Check className="size-3.5 text-bronze" />{point}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-20 bg-primary py-24 text-primary-foreground lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div className="relative min-h-[360px] overflow-hidden border border-primary-foreground/15">
            <img src={heroImage} alt="Modern operational headquarters at dusk" width={1920} height={1088} loading="lazy" className="absolute inset-0 size-full object-cover object-right" />
            <div className="absolute inset-0 bg-primary/45" />
            <div className="absolute inset-x-0 bottom-0 border-t border-primary-foreground/20 bg-primary/80 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase text-bronze-soft">Nashville based</p>
              <p className="mt-2 text-sm text-primary-foreground/70">Serving organizations nationwide</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase text-bronze-soft">Founder & Executive Advisor</p>
            <h2 className="mt-5 text-4xl font-medium lg:text-6xl">Brandon Oliver, <span className="font-editorial font-normal italic text-bronze-soft">MBA</span></h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-primary-foreground/78">Brandon brings more than 20 years of experience across healthcare services, technology, and private equity-backed operating leadership.</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/65">His work centers on translating strategy into operating reality—building accountable leadership teams, scalable systems, disciplined performance management, and durable execution in complex growth and transformation environments.</p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-primary-foreground/20 pt-8">
              <div><p className="text-3xl font-medium text-bronze-soft">20+</p><p className="mt-2 text-xs uppercase text-primary-foreground/55">Years of leadership</p></div>
              <div><p className="text-3xl font-medium text-bronze-soft">National</p><p className="mt-2 text-xs uppercase text-primary-foreground/55">Operating reach</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-bronze">Operating pillars</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight text-primary lg:text-5xl">Built for decisive execution.</h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {[
                [Layers3, "Scalable systems", "Design the structures, processes, and operating rhythms that allow growth without eroding quality or control."],
                [Target, "P&L rigor", "Make economics visible, assign clear ownership, and connect operating decisions directly to financial performance."],
                [Zap, "Execution speed", "Convert priorities into sequenced action, remove decision bottlenecks, and sustain momentum through accountable leadership."],
              ].map(([Icon, title, copy]) => {
                const PillarIcon = Icon as typeof Layers3;
                return <div key={String(title)} className="grid gap-5 py-8 sm:grid-cols-[48px_180px_1fr] sm:items-start"><PillarIcon className="size-5 text-bronze" /><h3 className="font-semibold text-primary">{String(title)}</h3><p className="text-sm leading-6 text-muted-foreground">{String(copy)}</p></div>;
              })}
            </div>
          </div>
          <div className="mt-20 grid gap-px bg-border sm:grid-cols-3">
            {[
              [Globe2, "Scale across markets", "Build repeatable operating models for multi-state growth."],
              [BarChart3, "Improve economics", "Create durable visibility, accountability, and margin discipline."],
              [ChevronRight, "Move with conviction", "Align stakeholders around clear priorities and action."],
            ].map(([Icon, title, copy]) => {
              const ItemIcon = Icon as typeof Globe2;
              return <div key={String(title)} className="bg-background p-8"><ItemIcon className="size-5 text-bronze" /><h3 className="mt-8 text-lg font-semibold text-primary">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p></div>;
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-ink py-24 text-primary-foreground lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase text-bronze-soft">Start a conversation</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight lg:text-5xl">Bring the operating challenge into focus.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-primary-foreground/65">Share a little context about the mandate. Your email application will open with the details prepared for review.</p>
            <a href="mailto:brandon.oliver@6100partners.com?subject=Schedule%20a%20conversation" className="mt-10 inline-flex items-center gap-3 border-b border-bronze pb-2 text-sm text-bronze-soft transition-colors hover:text-primary-foreground">
              <Mail className="size-4" /> Schedule by email <ArrowUpRight className="size-4" />
            </a>
          </div>
          <form onSubmit={handleSubmit} className="border-t border-primary-foreground/20 pt-8" noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-xs font-medium text-primary-foreground/75">Name *<Input name="name" autoComplete="name" className="mt-2 h-12 rounded-none border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/35 focus-visible:ring-bronze" placeholder="Your name" /></label>
              <label className="text-xs font-medium text-primary-foreground/75">Email *<Input name="email" type="email" autoComplete="email" className="mt-2 h-12 rounded-none border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/35 focus-visible:ring-bronze" placeholder="you@company.com" /></label>
              <label className="text-xs font-medium text-primary-foreground/75">Organization<Input name="organization" autoComplete="organization" className="mt-2 h-12 rounded-none border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/35 focus-visible:ring-bronze" placeholder="Company or fund" /></label>
              <label className="text-xs font-medium text-primary-foreground/75">Engagement type *
                <Select value={engagement} onValueChange={setEngagement}>
                  <SelectTrigger className="mt-2 h-12 rounded-none border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground focus:ring-bronze"><SelectValue placeholder="Select an area" /></SelectTrigger>
                  <SelectContent>{engagements.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
                </Select>
              </label>
            </div>
            <label className="mt-6 block text-xs font-medium text-primary-foreground/75">How can we help? *<Textarea name="message" className="mt-2 min-h-36 resize-y rounded-none border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/35 focus-visible:ring-bronze" placeholder="Briefly describe the business context, priorities, and timing." /></label>
            {error && <p role="alert" className="mt-4 text-sm text-bronze-soft">{error}</p>}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-primary-foreground/45">Your information is sent through your email application.</p>
              <Button type="submit" className="h-12 rounded-none bg-bronze px-6 text-primary-foreground shadow-none hover:bg-bronze/90">Prepare request <ArrowUpRight /></Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-primary-foreground/10 bg-ink text-primary-foreground">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-12">
          <div><BrandMark inverse /><p className="mt-5 text-xs text-primary-foreground/45">Nashville-based. National reach.</p><Link to="/nashville" className="mt-3 inline-block text-xs text-primary-foreground/55 underline-offset-4 hover:text-bronze-soft hover:underline">Nashville services</Link><Link to="/portfolio" className="mt-3 ml-5 inline-block text-xs text-primary-foreground/55 underline-offset-4 hover:text-bronze-soft hover:underline">Portfolio &amp; case studies</Link></div>
          <div className="text-left sm:text-right"><a href="mailto:brandon.oliver@6100partners.com" className="text-sm text-primary-foreground/70 hover:text-bronze-soft">brandon.oliver@6100partners.com</a><p className="mt-3 text-xs text-primary-foreground/35">© 2026 6100 Partners, LLC. All rights reserved.</p></div>
        </div>
      </footer>
    </main>
  );
}
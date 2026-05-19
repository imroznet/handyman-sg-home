import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock, BadgeCheck, Star, ArrowRight } from "lucide-react";
import { services } from "@/components/site/services";
import { ContactForm } from "@/components/site/ContactForm";
import { HeroSlider } from "@/components/site/HeroSlider";

export const Route = createFileRoute("/")({
head: () => ({
  meta: [
    {
      title: "Handyman SG — Trusted Handyman Services in Singapore",
    },
    {
      name: "description",
      content:
        "Book trusted handyman services in Singapore: electrical, plumbing, painting, TV mounting, doors & carpentry. Same-day response.",
    },
  ],

  links: [
    {
      rel: "canonical",
      href: "https://handymansg.com/",
    },
  ],
}),
  component: HomePage,
});

const reasons = [
  { icon: ShieldCheck, title: "Licensed & Insured", text: "All our technicians are background-checked and fully insured." },
  { icon: Clock, title: "Same-Day Service", text: "Need it fixed today? We respond within 30 minutes." },
  { icon: BadgeCheck, title: "Upfront Pricing", text: "Transparent quotes — no hidden fees, ever." },
  { icon: Star, title: "5-Star Rated", text: "Trusted by 2,000+ happy homeowners across Singapore." },
];

const testimonials = [
  { name: "Sarah L.", role: "Tampines", text: "Booked in the morning, fixed by lunch. Super professional and tidy. Highly recommend!" },
  { name: "Marcus T.", role: "Bukit Timah", text: "Mounted my 75\" TV with hidden wiring. Looks flawless. Will definitely use again." },
  { name: "Priya R.", role: "Punggol", text: "Honest pricing and they actually showed up on time. Rare in Singapore — these guys deliver." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
          <div className="animate-fade-in flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
              <BadgeCheck className="h-3.5 w-3.5" /> Singapore's #1 Rated Handyman
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Home repairs, <span className="text-brand">done right.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Fast, friendly handyman services across Singapore. From a leaky tap to a full TV install — book a trusted pro in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+6583122991" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href="https://wa.me/6583122991" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]">
                WhatsApp Us
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand">
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div><span className="text-2xl font-bold text-foreground">2,000+</span><div>Jobs done</div></div>
              <div><span className="text-2xl font-bold text-foreground">4.9★</span><div>Avg rating</div></div>
              <div><span className="text-2xl font-bold text-foreground">30min</span><div>Response</div></div>
            </div>
          </div>
          <div className="relative">
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-3 text-muted-foreground">Everything your home needs — one trusted team.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.slug} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-soft)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-brand-soft/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why choose Handyman SG</h2>
            <p className="mt-3 text-muted-foreground">Premium service. Honest pricing. Real craftsmanship.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="rounded-2xl bg-card p-6 text-center shadow-[var(--shadow-card)]">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What our customers say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-brand-soft/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get a free quote</h2>
            <p className="mt-3 text-muted-foreground">
              Tell us about your job. We'll get back to you within 30 minutes with a fair, upfront price.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand" /> +65 8312 2991</div>
              <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-brand" /> Mon–Sun, 8am – 10pm</div>
              <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-brand" /> Licensed & insured technicians</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

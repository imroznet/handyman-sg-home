import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/components/site/services";
import { Check, Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Handyman Services in Singapore — Electrical, Plumbing & More" },
      { name: "description", content: "Electrical, plumbing, painting, TV mounting, door repair and carpentry services in Singapore. Licensed, insured, same-day available." },
      { property: "og:title", content: "Handyman Services in Singapore — Electrical, Plumbing & More" },
      { property: "og:description", content: "Electrical, plumbing, painting, TV mounting, door repair and carpentry services in Singapore." },
      { property: "og:url", content: "https://handymansg.com/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://handymansg.com/services" }],
  }),
  component: ServicesPage,
});


function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-brand-soft/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Skilled handymen for every job — big or small. All work guaranteed.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.slug} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-brand/40">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> Licensed technicians</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> Same-day availability</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> 90-day workmanship warranty</li>
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-3xl bg-brand p-10 text-center text-brand-foreground shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-bold sm:text-3xl">Need help with something else?</h3>
            <p className="mx-auto mt-2 max-w-xl opacity-90">If you can break it, we can probably fix it. Give us a shout.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="tel:+6583122991" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-brand hover:scale-[1.03] transition-transform">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, Award, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Handyman SG — Singapore's Trusted Handyman Team" },
      { name: "description", content: "Handyman SG is Singapore's trusted handyman team — licensed, insured, and built on craftsmanship. 2,000+ jobs across HDB, condo, and landed homes." },
      { property: "og:title", content: "About Handyman SG — Singapore's Trusted Handyman Team" },
      { property: "og:description", content: "Licensed, insured, and built on craftsmanship. 2,000+ jobs across Singapore." },
      { property: "og:url", content: "https://handymansg.com/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://handymansg.com/about" }],
  }),
  component: AboutPage,
});


const values = [
  { icon: ShieldCheck, title: "Trust First", text: "Background-checked, insured technicians you can welcome into your home." },
  { icon: Award, title: "Craftsmanship", text: "We treat every job — big or small — like it's our own home." },
  { icon: Heart, title: "Customer Care", text: "Friendly, on-time, and tidy. We leave your space cleaner than we found it." },
  { icon: Users, title: "Local Team", text: "Singaporean team that understands HDB, condo, and landed homes." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-brand-soft/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About Handyman SG</h1>
          <p className="mt-4 text-muted-foreground">
            We started Handyman SG with one simple goal: make home repairs in Singapore stress-free.
            No no-shows, no inflated quotes, no shoddy work — just trusted craftsmen who treat your home with respect.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Built on craftsmanship and trust</h2>
              <p className="mt-4 text-muted-foreground">
                Since 2018, our team of licensed electricians, plumbers, painters, and carpenters has completed
                over 2,000 jobs across Singapore. From quick fixes to full renovations, we bring the same care to every project.
              </p>
              <p className="mt-4 text-muted-foreground">
                We're proud to be rated 4.9★ by our customers — and we work hard to keep it that way.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

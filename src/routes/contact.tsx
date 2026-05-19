import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Handyman SG" },
      {
        name: "description",
        content:
          "Get in touch with Handyman SG for a free quote. Call, WhatsApp, or fill out our form.",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://handymansg.com/contact",
      },
    ],
  }),

  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-brand-soft/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Get in touch</h1>
          <p className="mt-4 text-muted-foreground">We respond within 30 minutes during operating hours.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <a href="tel:+6583122991" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-brand/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-brand-foreground"><Phone className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">Call us</h3>
                <p className="text-sm text-muted-foreground">+65 8312 2991</p>
              </div>
            </a>
            <a href="https://wa.me/6583122991" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-brand/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-whatsapp text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg>
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat instantly with our team</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand"><Mail className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">mim.gim.mg@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand"><Clock className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">Operating hours</h3>
                <p className="text-sm text-muted-foreground">Mon–Sun, 8am – 10pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand"><MapPin className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">Service area</h3>
                <p className="text-sm text-muted-foreground">All of Singapore</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

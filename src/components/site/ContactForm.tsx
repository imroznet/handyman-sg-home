import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>
        <div>
          <label className="text-sm font-medium">Phone</label>
          <input required type="tel" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Email</label>
          <input required type="email" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Service Needed</label>
          <select className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
            <option>Electrical</option>
            <option>Plumbing</option>
            <option>Painting</option>
            <option>TV Mounting</option>
            <option>Door Repair</option>
            <option>Carpentry</option>
            <option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Describe the job</label>
          <textarea rows={4} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
      >
        {sent ? <><CheckCircle2 className="h-4 w-4" /> Request Sent</> : <><Send className="h-4 w-4" /> Get a Free Quote</>}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">We typically reply within 30 minutes.</p>
    </form>
  );
}

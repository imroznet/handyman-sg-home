import { Link } from "@tanstack/react-router";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-soft/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">Handyman<span className="text-brand">SG</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Singapore's trusted handyman service. Fast, reliable, and affordable repairs for your home and office.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-brand">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand">Services</Link></li>
              <li><Link to="/about" className="hover:text-brand">About</Link></li>
              <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /> +65 8888 8888</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /> hello@handymansg.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" /> Singapore</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Handyman SG. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

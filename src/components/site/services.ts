import { Zap, Droplets, Paintbrush, Tv, DoorOpen, Hammer } from "lucide-react";

export const services = [
  {
    slug: "electrical",
    icon: Zap,
    title: "Electrical",
    blurb: "Lighting, switches, power points, and rewiring by licensed electricians.",
  },
  {
    slug: "plumbing",
    icon: Droplets,
    title: "Plumbing",
    blurb: "Leaks, taps, toilets, and water heaters fixed fast — no mess left behind.",
  },
  {
    slug: "painting",
    icon: Paintbrush,
    title: "Painting",
    blurb: "Interior repaints, touch-ups, and accent walls with a flawless finish.",
  },
  {
    slug: "tv-mounting",
    icon: Tv,
    title: "TV Mounting",
    blurb: "Safe, level wall mounting with concealed cabling for any TV size.",
  },
  {
    slug: "door-repair",
    icon: DoorOpen,
    title: "Door Repair",
    blurb: "Hinges, locks, alignment, and full door replacements done same day.",
  },
  {
    slug: "carpentry",
    icon: Hammer,
    title: "Carpentry",
    blurb: "Custom shelves, cabinets, and furniture assembly built to last.",
  },
] as const;

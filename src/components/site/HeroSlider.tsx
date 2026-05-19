import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Auto-load every image/video in src/assets/works/.
// Drop new files into that folder and they'll appear here automatically.
const imageModules = import.meta.glob("@/assets/works/*.{jpg,jpeg,png,webp,avif,gif}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const videoModules = import.meta.glob("@/assets/works/*.{mp4,webm,mov}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

type Slide =
  | { kind: "image"; src: string; key: string }
  | { kind: "video"; src: string; key: string };

const slides: Slide[] = [
  ...Object.entries(imageModules).map(([path, src]) => ({
    kind: "image" as const,
    src,
    key: path,
  })),
  ...Object.entries(videoModules).map(([path, src]) => ({
    kind: "video" as const,
    src,
    key: path,
  })),
].sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));

const AUTO_MS = 4000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
  }, []);

  useEffect(() => {
    if (total <= 1 || paused || reducedMotion.current) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  if (total === 0) {
    return (
      <div className="relative aspect-[4/3] w-full rounded-3xl bg-brand-soft" />
    );
  }

  const go = (n: number) => setIndex(((n % total) + total) % total);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Our recent work"
    >
      <div className="absolute -inset-4 rounded-3xl bg-brand/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] aspect-[4/3]">
        {slides.map((s, i) => (
          <div
            key={s.key}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            {s.kind === "image" ? (
              <img
                src={s.src}
                alt={`Handyman SG work sample ${i + 1}`}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ) : (
              <video
                src={s.src}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                autoPlay={i === index}
                preload="metadata"
              />
            )}
          </div>
        ))}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 shadow-md backdrop-blur transition-opacity hover:bg-background focus:opacity-100 group-hover:opacity-100 md:opacity-0 md:hover:opacity-100"
              style={{ opacity: undefined }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur transition-opacity hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

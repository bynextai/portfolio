import Container from "@/components/ui/Container";
import Image from "next/image";

export default function PageHero({ eyebrow, title, description, image = "/projects/insight-analytics-platform.png", imageAlt }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Full Bleed Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt || title || "Hero Background"}
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25 filter contrast-125 saturate-150"
            priority
          />
          {/* Layered Gradient Overlay for Text Readability & Aesthetics */}
          <div className="absolute inset-0 " />
          <div className="absolute inset-0" />
        </div>
      )}

      {/* Decorative Glow Accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />

      {/* Hero Text Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200 backdrop-blur-md">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight drop-shadow-sm">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl font-normal drop-shadow-sm">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

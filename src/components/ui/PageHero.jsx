import Container from "@/components/ui/Container";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-white/5 bg-brand-navy py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

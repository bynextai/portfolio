import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { services } from "@/data/services";

export default function ServicesPreview({ showHeading = true }) {
  return (
    <section className="bg-slate-50/60 py-20 sm:py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            title="Our Technology Services"
            description="From your first idea to a production-ready product, we build technology designed to perform."
          />
        )}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-blue/15 hover:border-brand-blue/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Icon name={service.icon} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.shortDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {service.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-1.5 text-xs text-slate-500">
                    <Icon name="Check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue"
              >
                {service.ctaLabel}
                <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

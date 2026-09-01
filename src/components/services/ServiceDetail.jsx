import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { services } from "@/data/services";

export default function ServiceDetail({ service }) {
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-16 sm:py-20 lg:py-24">
        {/* Background Image */}
        {service.image && (
          <div className="absolute inset-0 z-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="100vw"
              className="object-cover object-center opacity-25 filter contrast-125 saturate-150"
              priority
            />
            <div className="absolute inset-0 " />
            <div className="absolute inset-0" />
          </div>
        )}

        {/* Glow Accents */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/20 text-brand-blue backdrop-blur-md border border-white/10">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
              {service.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact">Start Your Project</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-navy">What&rsquo;s Included</h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-100 p-4 text-sm text-slate-700"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <aside>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                <h3 className="text-sm font-semibold text-brand-navy">
                  Other Services
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {otherServices.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-white hover:text-brand-blue"
                      >
                        {item.title}
                        <Icon name="ArrowRight" className="h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your {service.title} Project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Tell us about your goals and our team will help shape a practical
            plan to build it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="dark">
              Start Your Project
            </Button>
            <Button href="/services" variant="outlineWhite" icon={false}>
              Back to Services
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

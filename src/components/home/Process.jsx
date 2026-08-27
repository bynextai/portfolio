import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section className="bg-slate-50/60 py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="How We Build Your Solution"
        />

        <div className="relative mt-14">
          <div
            className="absolute left-1/2 top-6 hidden h-px w-full max-w-5xl -translate-x-1/2 bg-brand-blue/20 lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-8 lg:grid-cols-6 lg:gap-4">
            {processSteps.map((step, index) => (
              <li key={step.number} className="relative flex gap-4 lg:flex-col lg:gap-0 lg:text-center">
                {index < processSteps.length - 1 && (
                  <span
                    className="absolute left-6 top-6 -bottom-8 w-0.5 -translate-x-1/2 bg-brand-blue/20 lg:hidden"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-blue ring-4 ring-brand-blue/10 lg:mx-auto">
                  {step.number}
                </div>
                <div className="lg:mt-4">
                  <h3 className="text-sm font-semibold text-brand-navy">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

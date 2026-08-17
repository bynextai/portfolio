import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { industries } from "@/data/process";

export default function Industries() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Solutions Across Industries"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-slate-100 px-4 py-6 text-center transition-colors hover:border-brand-blue/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Icon name={industry.icon} />
              </span>
              <span className="text-sm font-medium text-brand-navy">{industry.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

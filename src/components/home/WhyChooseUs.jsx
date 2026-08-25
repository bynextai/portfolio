import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { whyChooseUs } from "@/data/process";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Why Businesses Choose Bynext AI"
          description="Reliable engineering, modern technology and long-term partnership built into every project we deliver."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-100 p-6 transition-colors hover:border-brand-blue/30"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

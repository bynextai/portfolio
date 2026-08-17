import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { trustHighlights } from "@/data/process";

export default function TrustHighlights() {
  return (
    <section className="border-y border-slate-100 bg-white py-12 sm:py-14">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-slate-100 p-5 transition-colors hover:border-brand-blue/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-brand-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

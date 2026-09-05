import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const cards = [
  {
    title: "Mission",
    description:
      "We build intelligent technology that solves real business problems. Bynext AI helps organizations automate workflows, improve productivity, and turn ideas into scalable digital solutions.",
  },
  {
    title: "Vision",
    description:
      "We envision a world where AI is accessible to every business—helping teams work smarter, innovate faster, and create meaningful impact.",
  },
  {
    title: "Approach",
    description: "Understand → Design → Build → Test → Deploy → Improve",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            title="Technology That Moves Your Business Forward"
            description="Bynext AI is a technology company focused on building reliable, scalable and user-focused digital solutions. From websites and mobile applications to custom software and AI-powered platforms, we help businesses turn ideas into practical technology."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-100 bg-slate-50/60 p-5"
              >
                <h3 className="text-sm font-semibold text-brand-blue">{card.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Button href="/about" variant="secondary">
            Learn More About Us
          </Button>
        </div>
      </Container>
    </section>
  );
}

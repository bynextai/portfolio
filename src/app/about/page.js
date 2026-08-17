import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Bynext AI | Our Mission, Vision & Approach",
  description:
    "Learn about Bynext AI, a technology company building reliable, scalable and user-focused web, mobile, software and AI solutions.",
  path: "/about",
});

const cards = [
  {
    title: "Mission",
    description: "Build reliable technology that solves real-world problems.",
  },
  {
    title: "Vision",
    description: "Become a trusted technology partner for businesses and innovators.",
  },
  {
    title: "Approach",
    description: "Understand → Design → Build → Test → Deploy → Improve",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Bynext AI"
        title="Technology That Moves Your Business Forward"
        description="Bynext AI is a technology company focused on building reliable, scalable and user-focused digital solutions. From websites and mobile applications to custom software and AI-powered platforms, we help businesses turn ideas into practical technology."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6"
              >
                <h2 className="text-sm font-semibold text-brand-blue">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">What We Believe</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Good technology should be simple to use and dependable to run.
                We focus on building products that hold up under real usage —
                clean architecture, thoughtful design and code that a team can
                maintain long after launch.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">How We Work</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Every engagement starts with understanding the business
                problem, not the technology. From there we plan, design and
                build in transparent, incremental steps, so you always know
                where a project stands.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}

import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import JobCard from "@/components/careers/JobCard";
import { careerBenefits, openPositions } from "@/data/careers";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers | Join the Bynext AI Team",
  description:
    "Explore career opportunities at Bynext AI. Join our passionate team of developers, designers, and AI specialists building modern digital solutions.",
  path: "/careers",
});

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
]);

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        title="Build the Future of Technology with Us"
        description="Join a high-energy team of software engineers, AI specialists, and digital creators building state-of-the-art applications for modern businesses."
        image="/projects/smartassist-ai-chatbot.png"
      />

      {/* Why Work With Us */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            title="Why Join Bynext AI?"
            subtitle="We empower talent to build ambitious products, learn cutting-edge tools, and grow professionally."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {careerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-colors transition-shadow hover:border-brand-blue/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Icon name={benefit.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="bg-slate-50/60 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Current Opportunities
              </span>
              <h2 className="mt-2 text-3xl font-bold text-brand-navy sm:text-4xl">
                Open Positions
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-500">
              Explore our active job openings below. If you don't see a role that fits, feel free to send an open application!
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {openPositions.map((position) => (
              <JobCard key={position.id} position={position} />
            ))}
          </div>
        </Container>
      </section>

      {/* General Application CTA */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-brand-navy to-brand-blue-dark px-6 py-14 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Don't See the Right Fit?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 sm:text-base">
              Send your CV directly to our hiring team at{" "}
              <a href="mailto:bibhupbaliarsingh@gmail.com,raytophankumar@gmail.com" className="text-white font-semibold underline">
                bibhupbaliarsingh@gmail.com
              </a>{" "}
              and{" "}
              <a href="mailto:bibhupbaliarsingh@gmail.com,raytophankumar@gmail.com" className="text-white font-semibold underline">
                raytophankumar@gmail.com
              </a>
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="mailto:bibhupbaliarsingh@gmail.com,raytophankumar@gmail.com" variant="outlineWhite">
                Email Resume Directly
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

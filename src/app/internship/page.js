import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import InternshipCard from "@/components/internship/InternshipCard";
import { internships } from "@/data/internships";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Internship Programs | Bynext AI",
  description:
    "Launch your tech career with Bynext AI internships in MERN stack, Python full stack, web development, DevOps, AI, Power BI and SQL.",
  path: "/internship",
});

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Internship", path: "/internship" },
]);

export default function InternshipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title="Launch Your Tech Career with Bynext AI"
        description="Gain practical industry experience by working on real-world projects with modern technologies."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internships.map((internship) => (
              <InternshipCard key={internship.slug} internship={internship} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50/60 py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-brand-navy to-brand-blue-dark px-6 py-14 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Learn. Build. Experience. Grow.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
              Every Bynext AI internship is project-based. Duration is
              announced per cohort.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact" variant="outlineWhite">
                Apply Now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

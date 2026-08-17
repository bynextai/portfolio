import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import InternshipCard from "@/components/internship/InternshipCard";
import { internships } from "@/data/internships";

export default function InternshipPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Internship"
          title="Launch Your Tech Career with Bynext AI"
          description="Gain practical industry experience by working on real-world projects with modern technologies."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {internships.slice(0, 6).map((internship) => (
            <InternshipCard key={internship.slug} internship={internship} />
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-navy to-brand-blue-dark px-6 py-12 text-center sm:px-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Learn. Build. Experience. Grow.
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
            Join Bynext AI and gain hands-on experience building real-world
            products with modern technologies.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/internship" variant="outlineWhite">
              Apply Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import CTA from "@/components/home/CTA";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects | Bynext AI",
  description:
    "Explore sample web, mobile, software and AI projects representative of the kind of work Bynext AI delivers.",
  path: "/projects",
});

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
]);

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Our Work"
        title="Ideas Into Digital Products"
        description="A look at the kind of solutions Bynext AI builds across web, mobile, software and AI. Sample projects shown below illustrate our range of work."
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ProjectsGrid />
        </Container>
      </section>
      <CTA />
    </>
  );
}

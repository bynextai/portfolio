import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-slate-50/60 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Ideas Into Digital Products"
          description="A glimpse of the kind of solutions we build across web, mobile, software and AI."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}

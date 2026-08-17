import PageHero from "@/components/ui/PageHero";
import CTA from "@/components/home/CTA";
import ServicesPreview from "@/components/home/ServicesPreview";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Services | Web, Mobile, Software & AI Development",
  description:
    "Explore Bynext AI's technology services: web development, mobile applications, software applications and AI-powered applications.",
  path: "/services",
});

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="What We Do"
        title="Our Technology Services"
        description="From your first idea to a production-ready product, we build technology designed to perform."
      />
      <ServicesPreview showHeading={false} />
      <CTA />
    </>
  );
}

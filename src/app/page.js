import Hero from "@/components/home/Hero";
import TrustHighlights from "@/components/home/TrustHighlights";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Technologies from "@/components/home/Technologies";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import InternshipPreview from "@/components/home/InternshipPreview";
import CTA from "@/components/home/CTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bynext AI | Web, Mobile, Software & AI Solutions",
  description:
    "Bynext AI builds modern web applications, mobile apps, custom software and AI-powered solutions for businesses.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <Technologies />
      <Process />
      <Industries />
      <ProjectsPreview />
      <InternshipPreview />
      <CTA />
    </>
  );
}

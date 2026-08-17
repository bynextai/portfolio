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
import { site } from "@/data/site";

export const metadata = {
  title: { absolute: "Bynext AI | Web, Mobile, Software & AI Solutions" },
  description:
    "Bynext AI builds modern web applications, mobile apps, custom software and AI-powered solutions for businesses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bynext AI | Web, Mobile, Software & AI Solutions",
    description:
      "Bynext AI builds modern web applications, mobile apps, custom software and AI-powered solutions for businesses.",
    url: site.url,
  },
};

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

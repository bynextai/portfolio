import { notFound } from "next/navigation";
import { internships, getInternshipBySlug } from "@/data/internships";
import InternshipDetail from "@/components/internship/InternshipDetail";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return internships.map((internship) => ({ slug: internship.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const internship = getInternshipBySlug(slug);
  if (!internship) return {};

  return buildMetadata({
    title: `${internship.title} Internship | Bynext AI`,
    description: `${internship.overview} Apply for the ${internship.title} internship at Bynext AI.`,
    path: `/internship/${internship.slug}`,
  });
}

export default async function InternshipDetailPage({ params }) {
  const { slug } = await params;
  const internship = getInternshipBySlug(slug);

  if (!internship) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Internship", path: "/internship" },
    { name: internship.title, path: `/internship/${internship.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <InternshipDetail internship={internship} />
    </>
  );
}

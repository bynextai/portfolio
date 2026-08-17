import { site } from "@/data/site";
import { services } from "@/data/services";
import { internships } from "@/data/internships";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/services", "/internship", "/projects", "/contact"];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const internshipRoutes = internships.map(
    (internship) => `/internship/${internship.slug}`
  );

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...internshipRoutes];

  return allRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

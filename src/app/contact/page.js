import { Phone, Mail, Globe } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/data/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Bynext AI | Start Your Project",
  description:
    "Get in touch with Bynext AI to discuss your web, mobile, software or AI application project.",
  path: "/contact",
});

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title="Let's Build Something Great Together"
        description="Reach out and let's discuss how Bynext AI can bring your project to life."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-brand-navy">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                We usually respond within one business day.
              </p>

              <dl className="mt-8 flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold text-brand-navy">Phone</dt>
                    <dd className="mt-1 flex flex-col gap-0.5 text-sm text-slate-600">
                      {site.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone}`} className="hover:text-brand-blue">
                          {phone}
                        </a>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold text-brand-navy">Email</dt>
                    <dd className="mt-1 flex flex-col gap-0.5 text-sm text-slate-600">
                      {site.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="break-all hover:text-brand-blue"
                        >
                          {email}
                        </a>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Globe className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold text-brand-navy">Website</dt>
                    <dd className="mt-1 text-sm text-slate-600">{site.domain}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description: `Read the Terms and Conditions for ${site.name}. Understand the rules, terms, and guidelines governing our services and website.`,
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "August 30, 2026";

  return (
    <>
      <PageHero
        eyebrow="Legal Information"
        title="Terms & Conditions"
        description={`Last updated on ${lastUpdated}. Please read these terms carefully before using our services.`}
      />

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10 text-slate-700 leading-relaxed">
            {/* Overview Box */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-brand-navy">Welcome to {site.name}</h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website located at{" "}
                <a href={site.url} className="text-brand-blue font-medium hover:underline">
                  {site.domain}
                </a>
                , alongside all software, web applications, mobile applications, AI solutions, and internship programs provided by{" "}
                <span className="font-semibold text-brand-navy">{site.name}</span>. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">1. Acceptance of Terms</h2>
              <p>
                By visiting our website or engaging our development and consulting services, you confirm that you are at least 18 years old (or possess legal parental/guardian consent) and agree to comply with all applicable laws and regulations. If you do not agree with any part of these Terms, you must discontinue using our services immediately.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">2. Services Offered</h2>
              <p>
                {site.name} specializes in digital technology solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Web Application Design & Development</li>
                <li>Mobile Application Development (iOS & Android)</li>
                <li>Custom Enterprise Software Engineering</li>
                <li>Artificial Intelligence & Machine Learning Integration</li>
                <li>Professional Internship & Developer Skill Training Programs</li>
              </ul>
              <p className="text-sm text-slate-500">
                Specific deliverables, project scope, timelines, and payment structures for client development projects are governed by individual Master Service Agreements (MSA) or Statements of Work (SOW).
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">3. Intellectual Property Rights</h2>
              <div className="space-y-3">
                <p>
                  Unless otherwise indicated in a signed client service contract:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    <strong className="text-brand-navy">Website Content:</strong> All content, trademarks, logos, graphics, text, icons, images, and codebase on this website are the exclusive property of {site.name} and protected by copyright and intellectual property laws.
                  </li>
                  <li>
                    <strong className="text-brand-navy">Client Projects:</strong> Proprietary custom software and deliverables developed for clients will be transferred upon full settlement of agreed contract fees according to the project agreement.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">4. User Responsibilities & Acceptable Use</h2>
              <p>When using our website or digital services, you agree that you will NOT:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Use the service for any illegal purpose or in violation of local or international laws.</li>
                <li>Attempt to gain unauthorized access to servers, code repositories, or connected network systems.</li>
                <li>Transmit any viruses, malware, trojans, or destructive computer code.</li>
                <li>Scrape, reverse engineer, or decompile any software or code supplied by {site.name}.</li>
                <li>Provide false, misleading, or fraudulent information on contact or application forms.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">5. Internship & Training Programs</h2>
              <p>
                Participation in {site.name} internship programs (MERN Stack, Python Full Stack, DevOps, AI, Power BI, SQL, etc.) is subject to acceptance, program rules, and completion criteria. Interns are required to follow ethical guidelines, preserve project confidentiality, and adhere to intellectual property rules regarding training codebases.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">6. Service Fees & Payment Terms</h2>
              <p>
                Fees for client development projects are detailed in respective project proposals or SOWs. Payments must be remitted strictly according to agreed milestone schedules. Overdue payments may incur project suspension or delay in deliverable handovers.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, {site.name}, its directors, employees, or partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, use, or goodwill) arising out of or related to your use of our website, software, or services.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">8. Disclaimer of Warranties</h2>
              <p>
                This website and its contents are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. {site.name} does not warrant that the website will be uninterrupted, error-free, or entirely secure at all times.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">9. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to our website or services at our sole discretion, without prior notice, if you breach these Terms or engage in conduct detrimental to {site.name} or third parties.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">10. Governing Law & Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any legal action or dispute arising under these Terms shall be subject to the exclusive jurisdiction of courts in Odisha, India.
              </p>
            </div>

            {/* Section 11 Contact */}
            <div className="rounded-2xl border border-brand-blue/20 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-brand-navy">11. Questions & Contact</h2>
              <p className="mt-2 text-slate-600">
                If you have any questions or clarifications regarding these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-sm sm:text-base text-slate-700 font-medium">
                <p>Company: <span className="text-brand-navy font-semibold">{site.name}</span></p>
                <p>
                  Email:{" "}
                  {site.emails.map((email, idx) => (
                    <span key={email}>
                      <a href={`mailto:${email}`} className="text-brand-blue hover:underline">
                        {email}
                      </a>
                      {idx < site.emails.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p>Phone: {site.phones.join(" / ")}</p>
                <p>Website: <a href={site.url} className="text-brand-blue hover:underline">{site.domain}</a></p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

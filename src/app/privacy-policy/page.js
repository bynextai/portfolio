import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: `Read the Privacy Policy for ${site.name}. Understand how we collect, use, and safeguard your personal information.`,
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 30, 2026";

  return (
    <>
      <PageHero
        eyebrow="Legal Information"
        title="Privacy Policy"
        description={`Last updated on ${lastUpdated}. Learn how Bynext AI respects and protects your privacy.`}
      />

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10 text-slate-700 leading-relaxed">
            {/* Overview Box */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-brand-navy">Overview</h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                At <span className="font-semibold text-brand-navy">{site.name}</span> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), accessible from{" "}
                <a href={site.url} className="text-brand-blue font-medium hover:underline">
                  {site.domain}
                </a>
                , we prioritize your privacy. This Privacy Policy outlines the types of information we collect, how it is used, and the steps we take to protect your personal details when you interact with our website, software, or services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">1. Information We Collect</h2>
              <p>
                We may collect personal details and technical data when you visit our website, fill out inquiry forms, apply for internships, or communicate with our team.
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-brand-blue/30">
                <div>
                  <h3 className="font-semibold text-brand-navy">A. Personal Identification Information</h3>
                  <p className="text-sm text-slate-600 sm:text-base">
                    Name, email address, phone number, organization name, and any specific details you share when contacting us for web development, mobile apps, custom software, or internship programs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">B. Technical & Usage Data</h3>
                  <p className="text-sm text-slate-600 sm:text-base">
                    IP address, browser type, operating system, device details, referring URL, pages visited, time spent on pages, and standard server log data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">C. Communications</h3>
                  <p className="text-sm text-slate-600 sm:text-base">
                    Messages, feedback, application submissions, and customer support inquiries sent via email or contact forms.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">2. How We Use Your Information</h2>
              <p>We use the collected information for legitimate business purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Providing, operating, and maintaining our website and software services.</li>
                <li>Responding to user inquiries, project proposals, and consultation requests.</li>
                <li>Processing internship applications and career submissions.</li>
                <li>Improving website functionality, user experience, and overall performance.</li>
                <li>Sending relevant service updates, project notices, and security alerts.</li>
                <li>Preventing fraud, maintaining cybersecurity, and ensuring legal compliance.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">3. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies, web beacons, and similar tracking technologies to enhance user navigation and analyze traffic trends. Cookies are small data files stored on your device. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may disclose data only under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  <strong className="text-brand-navy">Trusted Service Providers:</strong> With hosting providers, analytical services, or communication tools operating under strict confidentiality agreements.
                </li>
                <li>
                  <strong className="text-brand-navy">Legal Requirements:</strong> If required by law, subpoena, court order, or regulatory authority to comply with legal processes.
                </li>
                <li>
                  <strong className="text-brand-navy">Business Protection:</strong> To enforce our terms, safeguard rights, safety, property, or defend against legal claims.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">5. Data Security</h2>
              <p>
                We implement industry-standard administrative, technical, and physical security measures to safeguard your personal data against unauthorized access, disclosure, alteration, or destruction. However, please be aware that no internet transmission or electronic storage system is 100% secure.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">6. Your Data Protection Rights</h2>
              <p>Depending on your jurisdiction, you have rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>The right to access, update, or request deletion of your personal data.</li>
                <li>The right to withdraw consent at any time where processing relies on consent.</li>
                <li>The right to object to or restrict certain data processing activities.</li>
              </ul>
              <p className="text-sm text-slate-500">
                To exercise any of these rights, please contact us at{" "}
                <a href={`mailto:${site.emails[0]}`} className="text-brand-blue underline">
                  {site.emails[0]}
                </a>
                .
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">7. Third-Party Links</h2>
              <p>
                Our website may contain links to external third-party websites or services (e.g., social media platforms). We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Section 9 Contact */}
            <div className="rounded-2xl border border-brand-blue/20 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-brand-navy">9. Contact Us</h2>
              <p className="mt-2 text-slate-600">
                If you have questions, concerns, or requests regarding this Privacy Policy, please get in touch with us:
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

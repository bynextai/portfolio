import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import Logo from "./Logo";
import Container from "@/components/ui/Container";
import { site, footerLinks } from "@/data/site";

const socialIcons = [
  { icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
  { icon: GithubIcon, href: site.social.github, label: "GitHub" },
  { icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: site.social.facebook, label: "Facebook" },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5 lg:gap-10">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Building reliable digital solutions for the modern world.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialIcons.map(({ icon: SocialIcon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-blue hover:text-white"
                >
                  <SocialIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Internships" links={footerLinks.internships} />

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    {phone}
                  </a>
                </li>
              ))}
              {site.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 break-all transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Bynext AI. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

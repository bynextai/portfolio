import { CheckCircle2, Clock, FolderKanban } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { site } from "@/data/site";

const faqs = [
  {
    question: "Do I need prior experience to apply?",
    answer:
      "Most tracks are designed for beginners to intermediate learners. Each detail page lists who the track is best suited for.",
  },
  {
    question: "Is the internship remote or in-person?",
    answer:
      "Format details are shared with applicants directly during the selection process.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes. Every track is project-based, so you build practical, portfolio-ready work rather than only following tutorials.",
  },
  {
    question: "Is placement guaranteed after the internship?",
    answer:
      "No. Bynext AI does not guarantee placement. The internship is focused on hands-on learning and practical experience.",
  },
];

export default function InternshipDetail({ internship }) {
  return (
    <>
      <section className="border-b border-white/5 bg-brand-navy py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/20 text-brand-blue">
              <Icon name={internship.icon} className="h-6 w-6" />
            </span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {internship.title}
            </h1>
            <p className="mt-3 text-sm font-medium text-brand-blue/90 sm:text-base">
              {internship.stack}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {internship.overview}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <Clock className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                Duration: {internship.duration || "3 - 6 Months"}
              </span>
              <span className="flex items-center gap-1.5">
                <FolderKanban className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                Project-based track
              </span>
            </div>
            <div className="mt-8">
              <Button href="/contact">Apply for Internship</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-navy">
                What You Will Learn
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {internship.learn.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-100 p-4 text-sm text-slate-700"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-brand-navy">Projects</h2>
              <p className="mt-2 text-sm text-slate-500">
                Sample project types interns work on during this track.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {internship.projects.map((project) => (
                  <li
                    key={project}
                    className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-sm font-medium text-brand-navy"
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="flex flex-col gap-6">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                <h3 className="text-sm font-semibold text-brand-navy">Technologies</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {internship.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                <h3 className="text-sm font-semibold text-brand-navy">Who Can Apply</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Students and early-career developers interested in{" "}
                  {internship.title.toLowerCase()}, with a willingness to
                  learn through practical, project-based work.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                <h3 className="text-sm font-semibold text-brand-navy">
                  Learning Outcomes
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {internship.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-blue"
                        aria-hidden="true"
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50/60 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-brand-navy">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-100 bg-white p-5"
              >
                <h3 className="text-sm font-semibold text-brand-navy">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Apply for {internship.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Reach out with your interest and background, and our team will
            get back to you with next steps.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="dark">
              Apply for Internship
            </Button>
            <Button href={`mailto:${site.emails[0]}`} variant="outlineWhite" icon={false}>
              Email Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

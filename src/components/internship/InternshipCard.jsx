import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Icon from "@/components/ui/Icon";

export default function InternshipCard({ internship }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/70 transition-transform transition-shadow transition-colors duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-blue/15 hover:border-brand-blue/30">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
          <Icon name={internship.icon} />
        </span>
        <h3 className="text-base font-semibold text-brand-navy">{internship.title}</h3>
      </div>
      <p className="mt-1.5 text-sm text-slate-500">{internship.stack}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium">
          {internship.level || "Beginner"}
        </span>
        <span className="flex items-center gap-1 font-semibold text-brand-navy">
          <Icon name="Clock" className="h-3.5 w-3.5 text-brand-blue" />
          Duration: {internship.duration || "3 - 6 Months"}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-brand-blue">
        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
        Real practical project
      </div>

      <Link
        href={`/internship/${internship.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue"
      >
        Apply for Internship
        <Icon name="ArrowRight" className="h-4 w-4" />
      </Link>
    </div>
  );
}

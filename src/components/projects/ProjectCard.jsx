import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-blue/15 hover:border-brand-blue/30">
      <div
        className={`relative flex h-40 items-end bg-gradient-to-br p-4 ${project.accent}`}
      >
        <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-brand-navy">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>
  );
}

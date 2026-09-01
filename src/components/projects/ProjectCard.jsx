"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, onViewProject }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onViewProject) {
      onViewProject(project);
    }
  };

  return (
    <div
      id={project.id}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/70 transition-transform transition-shadow transition-colors duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-blue/15 hover:border-brand-blue/30"
    >
      <div className={`relative flex h-52 w-full items-end justify-between overflow-hidden bg-gradient-to-br ${project.accent} p-4`}>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />
        <span className="relative z-20 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>
        <button
          type="button"
          onClick={handleClick}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-hover text-left cursor-pointer"
        >
          View Project Details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}

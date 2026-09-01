"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
              {project.category}
            </span>
            <span className="text-xs font-medium text-slate-400">
              Sample Showcase Project
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview modal"
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {/* Visual Banner / Screenshot */}
          <div className={`relative h-64 sm:h-72 w-full overflow-hidden rounded-xl bg-gradient-to-br ${project.accent}`}>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
                Project Overview
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
                  Key Capabilities & Highlights
                </h3>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Deliverables */}
            {project.deliverables && (
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Core Deliverables
                </h4>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  {project.deliverables}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-slate-100 bg-slate-50/50 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/20 hover:bg-brand-blue-hover transition-colors"
          >
            Request Similar Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

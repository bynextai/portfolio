"use client";

import { useState } from "react";
import { Briefcase, MapPin, CheckCircle2, X, Send } from "lucide-react";
import Button from "@/components/ui/Button";

export default function JobCard({ position }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-colors transition-shadow duration-300 hover:border-brand-blue/40 hover:shadow-lg">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
            {position.department}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {position.type}
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            {position.experience}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-brand-navy sm:text-2xl">
          {position.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-slate-400" />
            {position.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4 text-slate-400" />
            {position.department}
          </span>
        </div>

        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
          {position.description}
        </p>

        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Key Responsibilities
          </h4>
          <ul className="mt-2.5 space-y-2">
            {position.responsibilities.map((resp) => (
              <li key={resp} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-blue" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Requirements
          </h4>
          <ul className="mt-2.5 space-y-2">
            {position.requirements.map((req) => (
              <li key={req} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue/60 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">Full-time Opportunity</span>
        <Button onClick={() => setIsOpen(true)} className="!px-5 !py-2.5 text-xs">
          Apply Now
        </Button>
      </div>

      {/* Application Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => {
                setIsOpen(false);
                setSubmitted(false);
              }}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <>
                <div className="pr-8">
                  <span className="text-xs font-semibold text-brand-blue">
                    Job Application
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-brand-navy sm:text-xl">
                    Apply for {position.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Fill in your details below and our team will get in touch with you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor={`job-name-${position.id || position.title}`} className="block text-xs font-medium text-slate-700">
                      Full Name *
                    </label>
                    <input
                      id={`job-name-${position.id || position.title}`}
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      aria-label="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`job-email-${position.id || position.title}`} className="block text-xs font-medium text-slate-700">
                        Email Address *
                      </label>
                      <input
                        id={`job-email-${position.id || position.title}`}
                        type="email"
                        required
                        placeholder="you@example.com"
                        aria-label="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor={`job-phone-${position.id || position.title}`} className="block text-xs font-medium text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        id={`job-phone-${position.id || position.title}`}
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        aria-label="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`job-portfolio-${position.id || position.title}`} className="block text-xs font-medium text-slate-700">
                        Portfolio / GitHub / LinkedIn
                      </label>
                      <input
                        id={`job-portfolio-${position.id || position.title}`}
                        type="url"
                        placeholder="https://..."
                        aria-label="Portfolio, GitHub or LinkedIn link"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor={`job-exp-${position.id || position.title}`} className="block text-xs font-medium text-slate-700">
                        Years of Experience
                      </label>
                      <input
                        id={`job-exp-${position.id || position.title}`}
                        type="text"
                        placeholder="e.g. 2 Years"
                        aria-label="Years of Experience"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={`job-msg-${position.id || position.title}`} className="block text-xs font-medium text-slate-700">
                      Short Introduction / Cover Note
                    </label>
                    <textarea
                      id={`job-msg-${position.id || position.title}`}
                      rows={3}
                      placeholder="Tell us briefly about your skills and why you'd like to join Bynext AI..."
                      aria-label="Short Introduction or Cover Note"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <Button type="submit" className="!px-5 !py-2 text-xs">
                      <Send className="mr-1.5 h-3.5 w-3.5 inline" /> Submit Application
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-brand-navy">
                  Application Submitted!
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Thank you for applying for <span className="font-semibold">{position.title}</span>. Our recruitment team will review your application and get in touch with you soon!
                </p>
                <div className="mt-6">
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      setSubmitted(false);
                    }}
                    className="!px-6 !py-2.5 text-xs"
                  >
                    Done
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

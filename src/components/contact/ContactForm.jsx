"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Web Development",
  "Mobile Application",
  "Software Application",
  "AI Application",
  "Other",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  details: "",
};

function validate(form) {
  const errors = {};

  if (!form.fullName.trim()) errors.fullName = "Full name is required.";

  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (form.phone.trim() && !/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!form.service) errors.service = "Please select a service.";

  if (!form.details.trim()) {
    errors.details = "Tell us a little about your project.";
  } else if (form.details.trim().length < 20) {
    errors.details = "Please add a bit more detail (at least 20 characters).";
  }

  return errors;
}

function Field({ label, htmlFor, error, children, optional = false }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-brand-navy">
        {label} {optional && <span className="text-slate-400">(optional)</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-brand-navy placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");

    try {
      // NOTE: No backend is connected yet. This abstraction (submitContactForm)
      // is the single place to wire in an API route or email service later.
      await submitContactForm(form);
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-brand-navy">Message sent</h3>
        <p className="max-w-sm text-sm text-slate-600">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
        <Button
          type="button"
          variant="secondary"
          icon={false}
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong sending your message. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName" error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="John Doe"
          />
        </Field>
        <Field label="Email Address" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone Number" htmlFor="phone" error={errors.phone} optional>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+91 00000 00000"
          />
        </Field>
        <Field label="Company Name" htmlFor="company" optional>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your company"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Service Required" htmlFor="service" error={errors.service}>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project Budget" htmlFor="budget" optional>
          <input
            id="budget"
            name="budget"
            type="text"
            value={form.budget}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g. $2,000 - $5,000"
          />
        </Field>
      </div>

      <Field label="Project Details" htmlFor="details" error={errors.details}>
        <textarea
          id="details"
          name="details"
          rows={5}
          value={form.details}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Tell us about what you want to build..."
        />
      </Field>

      <Button
        type="submit"
        icon={false}
        disabled={status === "loading"}
        className="w-full sm:w-auto disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>Send Message &rarr;</>
        )}
      </Button>
    </form>
  );
}

// Abstraction point for a future API route or email service (e.g. /api/contact).
async function submitContactForm(payload) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (!payload.email) {
    throw new Error("Missing email");
  }
  return { ok: true };
}

"use client";

import { useState } from "react";
import { useLang } from "@/utils/i18n/LanguageContext";

interface LeadPayload {
  company_name: string;
  work_email: string;
  use_case: string;
  additional_context?: string;
}

export default function ContactForm() {
  const { t } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: LeadPayload = {
      company_name: formData.get("company") as string,
      work_email: formData.get("email") as string,
      use_case: formData.get("useCase") as string,
      additional_context: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit demo request.");
      }

      setIsSubmitted(true);
      setEmailSent(data.emailSent !== false); // default to true if missing
      form.reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : t.contact.errorFallback;
      console.error("API submit error:", err);
      setErrorMsg(message || t.contact.errorFallback);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="contact-heading"
            className="text-3xl font-semibold tracking-tight text-foreground mb-3"
          >
            {t.contact.heading}
          </h2>
          <p className="text-sm text-muted">{t.contact.subheading}</p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t.contact.successHeading}
              </h3>
              <p className="text-sm text-muted">
                {emailSent ? t.contact.successBody : t.contact.successBodyFallback}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="company" className="text-sm font-medium text-foreground/90">
                    {t.contact.labelCompany}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder={t.contact.placeholderCompany}
                    className="w-full bg-black/40 border border-white/[0.12] rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted/40 transition-colors focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/90">
                    {t.contact.labelEmail}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.contact.placeholderEmail}
                    className="w-full bg-black/40 border border-white/[0.12] rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted/40 transition-colors focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="useCase" className="text-sm font-medium text-foreground/90">
                  {t.contact.labelUseCase}
                </label>
                <div className="relative">
                  <select
                    id="useCase"
                    name="useCase"
                    required
                    defaultValue=""
                    className="w-full bg-black/40 border border-white/[0.12] rounded-md px-4 py-2.5 text-sm text-foreground appearance-none transition-colors focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60"
                  >
                    <option value="" disabled className="text-muted/40">
                      {t.contact.placeholderSelect}
                    </option>
                    {t.contact.useCases.map((uc) => (
                      <option key={uc.value} value={uc.value}>
                        {uc.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted/60">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/90">
                  {t.contact.labelMessage}{" "}
                  <span className="text-muted/50 font-normal">{t.contact.labelMessageOptional}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder={t.contact.placeholderMessage}
                  className="w-full bg-black/40 border border-white/[0.12] rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted/40 transition-colors focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 resize-none"
                />
              </div>

              <div className="pt-2">
                {errorMsg && (
                  <div className="mb-4 p-3 rounded-md bg-red-500/10 border border-red-500/20 flex items-start gap-2.5 text-red-400">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-[13px] leading-snug">{errorMsg}</span>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm py-3 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary/70 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    t.contact.submit
                  )}
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-muted/60 font-mono">
                  <svg width="10" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="11" width="14" height="11" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t.contact.secureNote}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

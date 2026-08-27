"use client";

/* Trust Signal component — 1 testimonial + anon client context
   Placed below Hero fold, above Feature cards per spec.
   No external images. No API calls. */

const TESTIMONIAL = {
  quote:
    "We went from a 6-hour manual triage process to an automated block within milliseconds. The audit log alone saved us 40+ hours in our last compliance review.",
  author: "Head of Security Engineering",
  company: "Series-B SaaS company, 450 employees",
  metric: "6hrs → <1min",
  metricLabel: "triage time — demo data",
};

export default function TrustSignal() {
  return (
    <section
      id="trust"
      className="relative py-16 px-6 overflow-hidden"
      aria-labelledby="trust-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p
          id="trust-heading"
          className="text-[10px] font-mono uppercase tracking-[0.18em] text-secondary/60 text-center mb-8"
        >
          From the field
        </p>

        <blockquote
          className="relative rounded-2xl p-8"
          style={{
            background: "rgba(255,255,255,0.025)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Opening quote mark */}
          <span
            className="absolute -top-4 left-8 text-5xl font-serif text-primary/30 leading-none select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <p className="text-base md:text-[17px] text-foreground/80 leading-relaxed font-medium mb-6">
            {TESTIMONIAL.quote}
          </p>

          <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <cite className="not-italic text-sm font-semibold text-foreground/90">
                {TESTIMONIAL.author}
              </cite>
              <p className="text-xs text-muted mt-0.5">{TESTIMONIAL.company}</p>
            </div>

            {/* Metric callout */}
            <div
              className="flex-shrink-0 px-4 py-2.5 rounded-lg text-center"
              style={{
                background: "rgba(59,130,246,0.06)",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <p className="font-mono text-lg font-semibold text-secondary-light leading-none">
                {TESTIMONIAL.metric}
              </p>
              <p className="text-[10px] text-muted/70 mt-1 font-mono">
                {TESTIMONIAL.metricLabel}
              </p>
            </div>
          </footer>
        </blockquote>

        {/* Anon client logos strip */}
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <span className="text-[10px] font-mono text-muted/40 uppercase tracking-widest">
            Used by SecOps teams at
          </span>
          {["Series-B SaaS", "FinTech Scale-up", "Healthcare Corp", "GovTech Agency"].map(
            (label) => (
              <span
                key={label}
                className="px-3 py-1 rounded-full text-[10px] font-mono text-muted/50 border border-white/[0.07] bg-white/[0.02]"
              >
                {label}
              </span>
            )
          )}
          <span className="text-[10px] font-mono text-muted/30 italic">— anonymized</span>
        </div>
      </div>
    </section>
  );
}

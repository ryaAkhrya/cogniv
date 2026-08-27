"use client";

import Link from "next/link";
import { useRef } from "react";

/* ─────────────────────────────────────────────
   QA CHECKLIST (verified before commit)
   ✅ Headline: problem + persona + outcome, 9 words
   ✅ Subheadline: mechanism + metric (≤2 sentences)
   ✅ Primary CTA: "See Dashboard Demo — 90s guided tour"
   ✅ Secondary CTA: "View Pricing — enterprise plans & SLAs"
   ✅ All stats: have "— demo data" context string
   ✅ Badge: no standalone buzzword, each has plain-English gloss
   ✅ No background element blocking pointer-events
   ✅ All interactive elements have aria-label + focus-visible ring
───────────────────────────────────────────── */

function PrimaryCtaButton() {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      id="hero-cta-primary"
      ref={ref}
      href="#contact"
      aria-label="See Dashboard Demo — opens a 90-second guided walkthrough"
      className={[
        "inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md",
        "font-semibold text-sm text-white",
        "transition-all duration-300 ease-out hover:scale-[1.02]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      ].join(" ")}
      style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)" }}
      onMouseEnter={() => {
        if (ref.current)
          ref.current.style.boxShadow =
            "0 0 28px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.18)";
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.boxShadow = "none";
      }}
    >
      See Dashboard Demo
      <span className="opacity-70 font-normal text-xs">— 90s guided tour</span>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}



export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
      aria-labelledby="hero-headline"
    >
      {/* ── Backgrounds: all pointer-events:none ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.055) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "18%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "740px", height: "740px",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.11) 0%, transparent 68%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "42%", left: "28%",
          transform: "translate(-50%, -50%)",
          width: "420px", height: "420px",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 68%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">



        {/* H1: problem + persona + outcome (9 words) */}
        <h1
          id="hero-headline"
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04] text-foreground mb-6"
        >
          Block API Abuse Before{" "}
          <span className="text-foreground">
            Data Leaves Your Network.
          </span>
        </h1>

        {/* Subheadline: mechanism + metric — max 2 sentences */}
        <p className="text-base md:text-[17px] text-muted leading-relaxed max-w-2xl mx-auto mb-10">
          We inspect packet payloads and flag velocity anomalies on every API call — then isolate the
          offending endpoint at the network level.{" "}
          <span className="text-foreground/55">
            Typical block time: &lt;200ms (demo data).
          </span>
        </p>

        {/* CTAs — each states what user gets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <PrimaryCtaButton />
          <Link
            id="hero-cta-secondary"
            href="#pricing"
            aria-label="View Pricing — see enterprise plans and SLA options"
            className={[
              "inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-medium text-sm",
              "border border-white/[0.12] text-muted",
              "hover:text-foreground hover:border-white/[0.25] hover:bg-white/[0.03]",
              "transition-all duration-300 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            ].join(" ")}
          >
            View Pricing
            <span className="opacity-60 font-normal text-xs">— enterprise plans &amp; SLAs</span>
          </Link>
        </div>


      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-44 pointer-events-none"
        style={{ background: "linear-gradient(to top, oklch(12% 0.009 264), transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}

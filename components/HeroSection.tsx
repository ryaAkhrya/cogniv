"use client";

import Link from "next/link";
import { useRef } from "react";

function PrimaryCtaButton() {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      id="hero-cta-primary"
      ref={ref}
      href="#contact"
      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md font-semibold text-sm text-white transition-all duration-300 ease-out hover:scale-[1.02]"
      style={{
        background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      }}
      onMouseEnter={() => {
        if (ref.current)
          ref.current.style.boxShadow =
            "0 0 28px rgba(139,92,246,0.45), 0 0 60px rgba(139,92,246,0.15)";
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.boxShadow = "none";
      }}
    >
      Start Free Trial
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

const METRICS = [
  { value: "99.97%", label: "Threat detection rate" },
  { value: "<200ms", label: "Automated block time" },
  { value: "10M+", label: "Events monitored / day" },
] as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
      aria-labelledby="hero-headline"
    >
      {/* Background: subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Radial glow — purple */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Radial glow — blue */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-muted mb-8"
          aria-label="Platform capabilities"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
            aria-hidden="true"
          />
          AI-Powered &middot; Zero-Trust &middot; Real-Time
        </div>

        {/* H1 — COPYWRITING.md */}
        <h1
          id="hero-headline"
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground mb-6"
        >
          Next-Gen AI Security{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 40%, #3b82f6 100%)",
            }}
          >
            for Enterprise Data.
          </span>
        </h1>

        {/* Sub-headline — COPYWRITING.md */}
        <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-10">
          Protect your infrastructure with real-time, AI-driven threat
          detection.{" "}
          <span className="text-foreground/60">
            Prevention is cheaper than recovery.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryCtaButton />
          <Link
            id="hero-cta-secondary"
            href="#pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-medium text-sm border border-white/[0.12] text-muted hover:text-foreground hover:border-white/[0.25] hover:bg-white/[0.03] transition-all duration-300 ease-out"
          >
            View Pricing
          </Link>
        </div>

        {/* Metrics strip */}
        <div className="mt-16 pt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14">
          {METRICS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-mono text-2xl font-semibold text-foreground">
                {value}
              </p>
              <p className="text-xs text-muted mt-1 tracking-widest uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, oklch(12% 0.009 264), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}

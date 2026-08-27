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
      See Dashboard Demo
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
          Block Unauthorized Access to{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 40%, #3b82f6 100%)",
            }}
          >
            Enterprise APIs in &lt;200ms.
          </span>
        </h1>

        {/* Sub-headline — COPYWRITING.md */}
        <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-10">
          Our system analyzes packet payloads and user behavior in real-time,
          automatically isolating compromised endpoints before data exfiltration occurs.
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

        {/* Visual Storytelling Flow Diagram */}
        <div className="mt-16 mb-8 w-full max-w-3xl mx-auto hidden sm:flex items-center justify-center gap-4 text-xs font-mono text-muted select-none">
          {/* Node 1 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/[0.1] flex items-center justify-center">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 15h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z"/><path d="M9 19v-4"/></svg>
            </div>
            <span>Incoming Traffic</span>
          </div>

          <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#8b5cf6] animate-pulse"></div>
          </div>

          {/* Node 2 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-primary/[0.08] border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <span className="text-primary-light">Cogniv Engine</span>
          </div>

          <div className="h-px w-12 bg-gradient-to-r from-primary/50 via-secondary/50 to-transparent relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_#3b82f6] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Node 3 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-secondary/[0.08] border border-secondary/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <span className="text-secondary-light">Threat Dropped</span>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="mt-8 pt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14">
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

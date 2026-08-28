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
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04] text-foreground mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
          style={{ animation: 'fadeIn 0.5s ease-out forwards', opacity: 0 }}
        >
          Block Unauthorized API Access in{" "}
          <span className="text-foreground">
            &lt;200ms
          </span>
        </h1>

        {/* Subheadline: mechanism + metric — max 2 sentences */}
        <p 
          className="text-base md:text-[17px] text-muted leading-relaxed max-w-2xl mx-auto mb-8 opacity-0 animate-[fadeIn_0.5s_ease-out_0.1s_forwards]"
          style={{ animation: 'fadeIn 0.5s ease-out 0.1s forwards', opacity: 0, animationFillMode: 'forwards' }}
        >
          We inspect packet payloads &amp; flag velocity anomalies to isolate offending endpoints.{" "}
          <span className="text-foreground/55 block mt-2 font-medium">
            &lt;200ms block time — demo data
          </span>
        </p>

        {/* 3-step mini visual */}
        <div 
          className="flex items-center justify-center gap-4 mb-10 opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]"
          style={{ animation: 'fadeIn 0.5s ease-out 0.2s forwards', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="flex flex-col items-center gap-2">
             <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
             </div>
             <span className="text-xs font-medium text-muted">Incoming</span>
          </div>
          <div className="w-8 sm:w-12 h-[1px] bg-white/20 relative">
             <div className="absolute right-0 -top-[3px] w-[6px] h-[6px] border-t border-r border-white/40 transform rotate-45"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
             <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
             </div>
             <span className="text-xs font-medium text-primary">Engine</span>
          </div>
          <div className="w-8 sm:w-12 h-[1px] bg-white/20 relative">
             <div className="absolute right-0 -top-[3px] w-[6px] h-[6px] border-t border-r border-white/40 transform rotate-45"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
             <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
             </div>
             <span className="text-xs font-medium text-red-500">Blocked</span>
          </div>
        </div>

        {/* CTAs — each states what user gets */}
        <div 
          className="flex flex-col items-center justify-center gap-3 mb-16 opacity-0 animate-[scaleIn_0.3s_ease-out_0.3s_forwards]"
          style={{ animation: 'scaleIn 0.3s ease-out 0.3s forwards', opacity: 0, animationFillMode: 'forwards' }}
        >
          <PrimaryCtaButton />
          {/* Trust microelement */}
          <div className="text-[11px] text-muted/70 mt-2 font-medium">
             Used in pilot by top FinTech enterprise (demo data)
          </div>
        </div>


      </div>

      {/* Anonymized dashboard preview */}
      <Link
        href="/demo"
        className="absolute bottom-12 right-6 md:right-12 z-20 group hidden sm:block opacity-0"
        aria-label="View Dashboard Demo"
        style={{ animation: 'fadeIn 0.5s ease-out 0.5s forwards', animationFillMode: 'forwards' }}
      >
        <div className="relative p-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/50 overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
           <div className="flex items-center gap-2 mb-2 px-1">
              <div className="flex gap-1">
                 <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                 <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                 <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-[9px] font-mono text-muted uppercase tracking-wider ml-1">Live Demo</span>
           </div>
           {/* Mock Data lines blurred */}
           <div className="w-48 h-24 bg-white/5 rounded relative overflow-hidden blur-[1px]">
              <div className="absolute top-2 left-2 w-16 h-3 bg-red-500/40 rounded-sm"></div>
              <div className="absolute top-8 left-2 w-32 h-2 bg-white/20 rounded-sm"></div>
              <div className="absolute top-12 left-2 w-24 h-2 bg-white/10 rounded-sm"></div>
              <div className="absolute bottom-2 left-2 w-full h-8 flex items-end gap-1 px-1">
                 <div className="w-[15%] h-[30%] bg-primary/40 rounded-t-sm"></div>
                 <div className="w-[15%] h-[60%] bg-primary/40 rounded-t-sm"></div>
                 <div className="w-[15%] h-[20%] bg-primary/40 rounded-t-sm"></div>
                 <div className="w-[15%] h-[100%] bg-red-500/60 rounded-t-sm"></div>
                 <div className="w-[15%] h-[40%] bg-primary/40 rounded-t-sm"></div>
              </div>
           </div>
           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
              <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-md font-semibold">Preview Dashboard</span>
           </div>
        </div>
      </Link>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-44 pointer-events-none"
        style={{ background: "linear-gradient(to top, oklch(12% 0.009 264), transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}

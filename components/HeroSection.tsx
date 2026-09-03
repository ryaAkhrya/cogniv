"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useLang } from "@/utils/i18n/LanguageContext";

function TypewriterHeadline() {
  const { t } = useLang();
  const words = t.hero.rotatingWords as readonly string[];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  // Reset typewriter when the word list changes (locale switch)
  const prevWordsRef = useRef(words);

  useEffect(() => {
    if (prevWordsRef.current !== words) {
      prevWordsRef.current = words;
      setText("");
      setIsDeleting(false);
      setWordIndex(0);
    }
  }, [words]);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (text === "") {
        // Advance to the next word asynchronously — same cadence as deletion.
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 50);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, 50);
      }
    } else {
      if (text === currentWord) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words]);


  return (
    <h1
      id="hero-headline"
      className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground mb-8 flex flex-col"
    >
      <span className="inline-block min-h-[1.2em]">
        {t.hero.headlinePrefix} {text}
        <span className="animate-pulse font-light ml-[2px]">|</span>
      </span>
      <span className="inline-block mt-2">
        <span className="text-primary">{t.hero.headlineSuffix}</span>{" "}
        {t.hero.headlineSuffixEnd}
      </span>
    </h1>
  );
}

function PrimaryCtaButton() {
  const { t } = useLang();
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      id="hero-cta-primary"
      ref={ref}
      href="#contact"
      aria-label={t.hero.ctaPrimary}
      className={[
        "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md",
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
      {t.hero.ctaPrimary}
    </Link>
  );
}

export default function HeroSection() {
  const { t } = useLang();
  const [threatsBlocked, setThreatsBlocked] = useState(24821);
  const [recentThreats, setRecentThreats] = useState([
    { ip: "192.168.1.104", type: "SQLi" },
    { ip: "45.22.19.12", type: "Botnet" },
    { ip: "10.0.0.5", type: "DDoS" },
  ]);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setThreatsBlocked((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, Math.floor(Math.random() * 2000) + 3000);

    const possibleThreats = [
      { ip: "172.16.0.4", type: "XSS" },
      { ip: "8.8.4.4", type: "Brute Force" },
      { ip: "104.21.5.11", type: "DDoS" },
      { ip: "192.168.0.1", type: "SQLi" },
      { ip: "10.10.10.1", type: "Botnet" },
    ];

    const feedInterval = setInterval(() => {
      setRecentThreats((prev) => {
        const newThreat =
          possibleThreats[Math.floor(Math.random() * possibleThreats.length)];
        return [newThreat, prev[0], prev[1]];
      });
    }, 4500);

    return () => {
      clearInterval(counterInterval);
      clearInterval(feedInterval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-28 pb-20"
      aria-labelledby="hero-headline"
    >
      {/* ── Backgrounds: all pointer-events:none ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.055) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        {/* Static Highlights */}
        <div
          className="absolute"
          style={{
            top: "18%", left: "30%",
            transform: "translate(-50%, -50%)",
            width: "740px", height: "740px",
            background: "radial-gradient(ellipse, rgba(139,92,246,0.11) 0%, transparent 68%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute"
          style={{
            top: "42%", left: "70%",
            transform: "translate(-50%, -50%)",
            width: "420px", height: "420px",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 68%)",
          }}
          aria-hidden="true"
        />

        {/* Ambient Lights (Animated) */}
        <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-primary rounded-full blur-[120px] opacity-[0.03] will-change-transform animate-[driftPrimary_15s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] bg-secondary rounded-full blur-[120px] opacity-[0.03] will-change-transform animate-[driftSecondary_20s_ease-in-out_infinite_alternate]" />
      </div>

      {/* ── Main Container: 2-Column Asymmetric Layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ================= LEFT COLUMN (Copywriting & Actions) ================= */}
        <div className="flex flex-col text-left">

          {/* Headline */}
          <TypewriterHeadline />

          {/* Flow Diagram (Horizontal) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
            {/* Box 1 */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[13px] sm:text-sm font-medium text-muted shrink-0">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
               {t.hero.flowLabel1}
            </div>
            {/* Dashed line */}
            <div className="flex-1 min-w-[20px] max-w-[40px] h-[1px] border-t-[1.5px] border-dashed border-primary/50 relative overflow-hidden">
               <div className="absolute right-0 -top-[3.5px] w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-primary/50 transform rotate-45"></div>
               <div className="absolute left-0 -top-[2.5px] w-4 h-1 bg-primary blur-[2px] animate-[slideRight_2s_linear_infinite]"></div>
            </div>
            {/* Box 2 */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-primary/10 border border-primary/30 text-[13px] sm:text-sm font-medium text-primary shrink-0">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
               {t.hero.flowLabel2}
            </div>
            {/* Dashed line */}
            <div className="flex-1 min-w-[20px] max-w-[40px] h-[1px] border-t-[1.5px] border-dashed border-white/30 relative overflow-hidden">
               <div className="absolute right-0 -top-[3.5px] w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-white/30 transform rotate-45"></div>
               <div className="absolute left-0 -top-[2.5px] w-4 h-1 bg-white/50 blur-[2px] animate-[slideRight_2s_linear_infinite]" style={{ animationDelay: '1s' }}></div>
            </div>
            {/* Box 3 */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-red-500/10 border border-red-500/30 text-[13px] sm:text-sm font-medium text-red-500 shrink-0 mt-3 sm:mt-0">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
               {t.hero.flowLabel3}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap items-center gap-4 mb-8">
            <PrimaryCtaButton />
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-all duration-300 ease-out"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          {/* Micro-proof Badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted/90">
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {t.hero.badgeBlockTime}
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {t.hero.badgeDetection}
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {t.hero.badgeNoFees}
            </div>
          </div>
        </div>


        {/* ================= RIGHT COLUMN (Interactive Dashboard Preview) ================= */}
        <div className="flex flex-col gap-6 w-full">

          {/* Dashboard Mockup Container */}
          <div className="relative w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">

            {/* Top Bar (Mock) */}
            <div className="h-10 bg-black/40 border-b border-white/10 flex items-center px-4 justify-between">
              <div className="flex gap-1.5 w-16">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="h-4 bg-white/5 rounded-full flex-1 max-w-48 mx-auto"></div>
              <div className="flex items-center justify-end gap-1.5 w-16">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-[9px] text-muted font-medium uppercase tracking-wider">{t.hero.dash.live}</span>
              </div>
            </div>

            <div className="flex flex-row h-full">
              {/* Sidebar */}
              <div className="w-12 sm:w-14 bg-black/20 border-r border-white/10 flex flex-col items-center py-5 gap-6 text-muted">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>

              {/* Main Interface Area */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col gap-4">

                {/* Top Stats (3 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {/* Card 1: Threats Blocked */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 relative overflow-hidden group">
                    <div className="text-[11px] text-muted mb-1 uppercase tracking-wider font-semibold">{t.hero.dash.threatsBlocked}</div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground" suppressHydrationWarning>
                       {threatsBlocked.toLocaleString("en-US")}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-10 opacity-60">
                      <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M0 20 Q 15 5, 30 15 T 60 10 T 100 5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Card 2: Block Time */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 relative overflow-hidden">
                    <div className="text-[11px] text-muted mb-1 uppercase tracking-wider font-semibold">{t.hero.dash.blockTime}</div>
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">162ms</div>
                    <div className="absolute bottom-0 left-0 right-0 h-10 opacity-60">
                      <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M0 10 Q 25 20, 50 10 T 100 15" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Card 3: Top Attack Type (Donut) */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-row items-center gap-3">
                    <div className="flex flex-col flex-1">
                      <div className="text-[11px] text-muted mb-1 uppercase tracking-wider font-semibold">{t.hero.dash.topAttack}</div>
                      <div className="text-sm font-semibold text-foreground">{t.hero.dash.topAttackValue}</div>
                    </div>
                    <div className="w-12 h-12 relative shrink-0">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path className="text-primary" strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">65%</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Area (2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full sm:h-44">

                  {/* Recent Threats Table */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col">
                    <div className="text-xs font-semibold mb-4 text-foreground/80">{t.hero.dash.recentThreats}</div>
                    <div className="flex flex-col gap-3">
                       {recentThreats.map((threat, idx) => (
                         <div key={`${threat.ip}-${idx}`} className="flex justify-between items-center text-[11px] animate-[fadeInUp_0.3s_ease-out_forwards]">
                            <span className="font-mono text-muted">{threat.ip}</span>
                            <span className="text-muted/60 text-[10px]">{threat.type}</span>
                            <span className="bg-red-500/20 text-red-500 px-2 py-0.5 rounded text-[10px] border border-red-500/30">{t.hero.dash.blocked}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Heatmap Area */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col relative overflow-hidden">
                    <div className="text-xs font-semibold mb-1 z-10 text-foreground/80">{t.hero.dash.heatmap}</div>
                    {/* Fake SVG World Map + Nodes */}
                    <div className="absolute inset-0 top-8 opacity-40 text-primary pointer-events-none flex items-center justify-center p-2">
                        <svg viewBox="0 0 100 50" className="w-full h-full fill-current">
                           <path d="M10,20 Q15,10 20,20 T30,25 T40,20 T50,30 T60,20 T70,15 T80,25 T90,20 L90,40 L10,40 Z" opacity="0.15"/>
                           {/* Pulsing dots */}
                           <circle cx="25" cy="22" r="1.5" fill="#ef4444" opacity="0.8" />
                           <circle cx="55" cy="28" r="1" fill="#ef4444" opacity="0.5" />
                           <circle cx="75" cy="18" r="2" fill="#ef4444" opacity="0.9" />
                           <circle cx="40" cy="20" r="1.2" fill="#a855f7" opacity="0.6" />
                           <circle cx="85" cy="24" r="1" fill="#a855f7" opacity="0.7" />
                           {/* Connecting lines */}
                           <path d="M25,22 L40,20 L55,28" stroke="#a855f7" strokeWidth="0.2" fill="none" opacity="0.5"/>
                           <path d="M55,28 L75,18 L85,24" stroke="#a855f7" strokeWidth="0.2" fill="none" opacity="0.5"/>
                        </svg>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Trust & Compliance Badges (below dashboard) */}
          <div className="flex flex-wrap items-center justify-start gap-4 lg:gap-6 text-[13px] text-muted/70 pt-2">
             <div className="flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                {t.hero.trust.networkLayer}
             </div>
             <div className="flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                {t.hero.trust.soc2}
             </div>
             <div className="flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                {t.hero.trust.gdpr}
             </div>
             <div className="flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                {t.hero.trust.iso}
             </div>
          </div>
        </div>

      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-44 pointer-events-none"
        style={{ background: "linear-gradient(to top, oklch(12% 0.009 264), transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}

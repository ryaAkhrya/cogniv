"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLang } from "@/utils/i18n/LanguageContext";
import type { Locale } from "@/utils/i18n/dictionary";

function CognivLogo() {
  return (
    <div className="flex items-center gap-2.5 group">
      <svg
        width="26"
        height="30"
        viewBox="0 0 26 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
      >
        {/* Shield outline */}
        <path
          d="M13 1L1 6V15C1 21.627 6.373 27.5 13 29.5C19.627 27.5 25 21.627 25 15V6L13 1Z"
          stroke="url(#logo-gradient)"
          strokeWidth="1.25"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Center glowing node */}
        <circle cx="13" cy="15" r="2.25" fill="url(#node-fill)" />
        {/* Radial connection lines */}
        <line x1="13" y1="9" x2="13" y2="12.5" stroke="rgba(139,92,246,0.35)" strokeWidth="0.75" strokeLinecap="round" />
        <line x1="13" y1="17.5" x2="13" y2="21" stroke="rgba(139,92,246,0.35)" strokeWidth="0.75" strokeLinecap="round" />
        <line x1="7" y1="15" x2="10.5" y2="15" stroke="rgba(59,130,246,0.35)" strokeWidth="0.75" strokeLinecap="round" />
        <line x1="15.5" y1="15" x2="19" y2="15" stroke="rgba(59,130,246,0.35)" strokeWidth="0.75" strokeLinecap="round" />
        {/* Outer nodes */}
        <circle cx="13" cy="8.5" r="0.9" fill="rgba(139,92,246,0.55)" />
        <circle cx="13" cy="21.5" r="0.9" fill="rgba(139,92,246,0.55)" />
        <circle cx="6.5" cy="15" r="0.9" fill="rgba(59,130,246,0.55)" />
        <circle cx="19.5" cy="15" r="0.9" fill="rgba(59,130,246,0.55)" />
        <defs>
          <linearGradient id="logo-gradient" x1="1" y1="1" x2="25" y2="29.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <radialGradient id="node-fill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </radialGradient>
        </defs>
      </svg>
      <span className="font-heading font-semibold text-[17px] tracking-tight text-foreground">
        Cogniv
      </span>
    </div>
  );
}

const LOCALES: Locale[] = ["en", "id"];

export default function Navbar() {
  const { t, locale, setLocale } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-to-top handler. Prevents default navigation when already on '/'
  // and smoothly scrolls to the top, respecting prefers-reduced-motion.
  const handleBrandClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (window.location.pathname === "/") {
        e.preventDefault();
        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      }
    },
    []
  );

  const navLinks = [
    { href: "#features", label: t.nav.features },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-white/[0.03] backdrop-blur-md border-b border-white/[0.08] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <div className="flex flex-1 justify-start">
          <Link
            href="/"
            onClick={handleBrandClick}
            aria-label={t.nav.backToHome}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            style={{ textDecoration: "none" }}
          >
            <CognivLogo />
          </Link>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center justify-center gap-8 list-none m-0 p-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative text-sm font-medium text-muted hover:text-foreground transition-all duration-300 ease-out group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA, Language Switcher & Mobile Toggle */}
        <div className="flex flex-1 justify-end items-center gap-3">
          {/* Language switcher — desktop */}
          <div className="hidden md:flex items-center gap-0.5" aria-label={t.nav.langSwitch}>
            {LOCALES.map((l, i) => (
              <button
                key={l}
                type="button"
                onClick={() => setLocale(l)}
                aria-pressed={locale === l}
                className={[
                  "px-2.5 py-1 text-[12px] font-mono font-medium uppercase tracking-wider transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm",
                  locale === l
                    ? "text-foreground"
                    : "text-muted hover:text-foreground/70",
                  i < LOCALES.length - 1 ? "border-r border-white/[0.12]" : "",
                ].join(" ")}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            href="#contact"
            id="nav-cta"
            aria-label={`${t.nav.cta} ${t.nav.ctaSub}`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:shadow-neon-purple transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t.nav.cta}
            <span className="opacity-60 font-normal text-[11px]">{t.nav.ctaSub}</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-md text-muted hover:text-foreground hover:bg-white/[0.05] transition-all duration-300 ease-out"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-white/[0.03] backdrop-blur-md">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-medium text-muted hover:text-foreground transition-all duration-300 ease-out"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-white/[0.06] mt-2">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                aria-label={`${t.nav.cta} ${t.nav.ctaSub}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t.nav.cta}
              </Link>
            </li>
            {/* Language switcher — mobile */}
            <li className="pt-3 border-t border-white/[0.06] mt-1 flex items-center gap-2">
              <span className="text-[10px] font-mono text-muted/50 uppercase tracking-wider">
                {t.nav.langSwitch}:
              </span>
              <div className="flex items-center gap-0.5" aria-label={t.nav.langSwitch}>
                {LOCALES.map((l, i) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLocale(l);
                      setMobileOpen(false);
                    }}
                    aria-pressed={locale === l}
                    className={[
                      "px-2.5 py-1 text-[12px] font-mono font-medium uppercase tracking-wider transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm",
                      locale === l
                        ? "text-foreground"
                        : "text-muted hover:text-foreground/70",
                      i < LOCALES.length - 1 ? "border-r border-white/[0.12]" : "",
                    ].join(" ")}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

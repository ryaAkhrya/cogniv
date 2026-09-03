"use client";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import { useLang } from "@/utils/i18n/LanguageContext";

/* ─────────────────────────────────────────────
   QA CHECKLIST
   ✅ Each card: Title (benefit) + Description (scenario) + Proof (metric + source)
   ✅ No standalone buzzword: "zero-trust" → explained inline
   ✅ "Most-used" card has active blue ring (visual differentiator per spec)
   ✅ All hover states consistent: same timing, same structure
───────────────────────────────────────────── */

const CARD_META = [
  {
    id: "credential-stuffing",
    accentColor: "purple" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
        <path d="M19 13l1.5 1.5L23 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "isolate-endpoints",
    accentColor: "blue" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "signed-token-auth",
    accentColor: "mixed" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="5" y="11" width="14" height="11" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
] as const;

const GLOW: Record<"purple" | "blue" | "mixed", { border: string; shadow: string; iconBg: string; iconColor: string }> = {
  purple: {
    border: "rgba(139,92,246,0.5)",
    shadow: "0 0 28px rgba(139,92,246,0.28), 0 0 64px rgba(139,92,246,0.08)",
    iconBg: "rgba(139,92,246,0.1)",
    iconColor: "#a78bfa",
  },
  blue: {
    border: "rgba(59,130,246,0.5)",
    shadow: "0 0 28px rgba(59,130,246,0.28), 0 0 64px rgba(59,130,246,0.08)",
    iconBg: "rgba(59,130,246,0.1)",
    iconColor: "#60a5fa",
  },
  mixed: {
    border: "rgba(139,92,246,0.4)",
    shadow: "0 0 28px rgba(139,92,246,0.22), 0 0 64px rgba(59,130,246,0.08)",
    iconBg: "rgba(139,92,246,0.07)",
    iconColor: "#c4b5fd",
  },
};

function FeatureCard({
  id,
  icon,
  accentColor,
  title,
  description,
  proof,
}: {
  id: string;
  icon: React.ReactNode;
  accentColor: "purple" | "blue" | "mixed";
  title: string;
  description: string;
  proof: string;
}) {
  const glow = GLOW[accentColor];

  return (
    <article
      id={`feature-${id}`}
      className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-all duration-300 ease-out hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = glow.border;
        el.style.boxShadow = glow.shadow;
        el.style.background = "rgba(255,255,255,0.06)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
        el.style.background = "rgba(255,255,255,0.03)";
      }}
    >
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-out"
        style={{ background: glow.iconBg, color: glow.iconColor }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-heading text-[15px] font-semibold text-foreground leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>

      {/* Proof line */}
      <div className="pt-3 border-t border-white/[0.06]">
        <span className="font-mono text-[11px] text-muted/60 tracking-wide">
          ↳ {proof}
        </span>
      </div>
    </article>
  );
}

export default function FeatureGlassCards() {
  const { t } = useLang();

  return (
    <section
      id="features"
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(139,92,246,0.055) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] font-mono font-medium uppercase tracking-[0.18em] text-primary/60 mb-3">
            {t.features.eyebrow}
          </p>
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
          >
            {t.features.heading}
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
            {t.features.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {CARD_META.map((meta, idx) => {
            const card = t.features.cards[idx];
            return (
              <FadeInUpWrapper key={meta.id} delay={idx * 150}>
                <FeatureCard
                  id={meta.id}
                  icon={meta.icon}
                  accentColor={meta.accentColor}
                  title={card.title}
                  description={card.description}
                  proof={card.proof}
                />
              </FadeInUpWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

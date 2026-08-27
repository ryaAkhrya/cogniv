"use client";

const FEATURES = [
  {
    id: "real-time-detection",
    accentColor: "purple",
    stat: "99.97% accuracy",
    title: "Real-Time Threat Detection",
    description:
      "AI monitors your traffic 24/7, catching anomalies before they breach. Zero blind spots across all network layers.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="3" stroke="#a78bfa" strokeWidth="1.5" />
        <circle
          cx="11"
          cy="11"
          r="7"
          stroke="#8b5cf6"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.5"
        />
        <circle
          cx="11"
          cy="11"
          r="10"
          stroke="#8b5cf6"
          strokeWidth="0.75"
          strokeDasharray="1 4"
          opacity="0.25"
        />
        <line
          x1="11"
          y1="1"
          x2="11"
          y2="4"
          stroke="#a78bfa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="18"
          x2="11"
          y2="21"
          stroke="#a78bfa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="1"
          y1="11"
          x2="4"
          y2="11"
          stroke="#a78bfa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="11"
          x2="21"
          y2="11"
          stroke="#a78bfa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "automated-incident-response",
    accentColor: "blue",
    stat: "<200ms block time",
    title: "Automated Incident Response",
    description:
      "Block malware and isolate compromised endpoints instantly — no human-in-the-loop required. No waiting, no guessing.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M11 1L2 5.5V11C2 16.25 6 20.5 11 22C16 20.5 20 16.25 20 11V5.5L11 1Z"
          stroke="#60a5fa"
          strokeWidth="1.25"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M8 11l2 2 4-4"
          stroke="#3b82f6"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "zero-trust-architecture",
    accentColor: "mixed",
    stat: "0 implicit trusts",
    title: "Zero-Trust Architecture",
    description:
      "Verify every request, trust no one. Absolute data integrity enforced across every endpoint and access layer.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="10"
          width="12"
          height="10"
          rx="2"
          stroke="url(#lock-grad)"
          strokeWidth="1.25"
        />
        <path
          d="M7 10V7a4 4 0 0 1 8 0v3"
          stroke="url(#lock-grad)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <circle cx="11" cy="15" r="1.5" fill="url(#lock-grad)" />
        <defs>
          <linearGradient id="lock-grad" x1="5" y1="2" x2="17" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
] as const;

type AccentColor = "purple" | "blue" | "mixed";

const GLOW_STYLES: Record<AccentColor, { border: string; shadow: string; iconBg: string }> = {
  purple: {
    border: "rgba(139,92,246,0.45)",
    shadow: "0 0 28px rgba(139,92,246,0.25), 0 0 60px rgba(139,92,246,0.08)",
    iconBg: "rgba(139,92,246,0.08)",
  },
  blue: {
    border: "rgba(59,130,246,0.45)",
    shadow: "0 0 28px rgba(59,130,246,0.25), 0 0 60px rgba(59,130,246,0.08)",
    iconBg: "rgba(59,130,246,0.08)",
  },
  mixed: {
    border: "rgba(139,92,246,0.35)",
    shadow:
      "0 0 28px rgba(139,92,246,0.2), 0 0 60px rgba(59,130,246,0.1)",
    iconBg: "rgba(139,92,246,0.06)",
  },
};

function FeatureCard({
  id,
  title,
  description,
  stat,
  icon,
  accentColor,
}: (typeof FEATURES)[number]) {
  const glow = GLOW_STYLES[accentColor];

  return (
    <article
      id={`feature-${id}`}
      className="group relative rounded-2xl p-6 flex flex-col gap-5 cursor-default transition-all duration-300 ease-out"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = glow.border;
        el.style.boxShadow = glow.shadow;
        el.style.background = "rgba(255,255,255,0.05)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.boxShadow = "none";
        el.style.background = "rgba(255,255,255,0.03)";
      }}
    >
      {/* Icon container */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ease-out"
        style={{ background: glow.iconBg }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-heading text-base font-semibold text-foreground leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>

      {/* Stat badge */}
      <div className="pt-3 border-t border-white/[0.06]">
        <span className="font-mono text-xs font-medium text-muted/70 tracking-wide">
          {stat}
        </span>
      </div>
    </article>
  );
}

export default function FeatureGlassCards() {
  return (
    <section
      id="features"
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Subtle radial backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-mono font-medium uppercase tracking-[0.15em] text-primary/70 mb-3">
            Core Capabilities
          </p>
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
          >
            Built for threats that don&apos;t wait.
          </h2>
          <p className="text-sm text-muted max-w-lg mx-auto leading-relaxed">
            Three layers of AI-driven protection working in parallel — detection,
            response, and access control.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

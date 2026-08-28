"use client";

import { useState } from "react";
import Link from "next/link";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

type PricingTier = {
  name: string;
  description: string;
  monthlyPrice?: number;
  yearlyPrice?: number; // per month billed annually
  features: string[];
  ctaText: string;
  ctaHref: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
};

const TIERS: PricingTier[] = [
  {
    name: "Growth",
    description: "For startups needing foundational API security.",
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      "Up to 10M API requests/mo",
      "Standard threat signatures",
      "7-day audit log retention",
      "Email support",
    ],
    ctaText: "Start Free Trial",
    ctaHref: "#contact",
  },
  {
    name: "Scale",
    description: "Advanced protection for high-traffic environments.",
    monthlyPrice: 999,
    yearlyPrice: 799,
    features: [
      "Up to 50M API requests/mo",
      "Behavioral anomaly detection",
      "30-day audit log retention",
      "Priority Slack support",
    ],
    ctaText: "Start Free Trial",
    ctaHref: "#contact",
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "Custom deployments with dedicated compliance support.",
    // No price for enterprise per spec
    features: [
      "Unlimited API requests",
      "Custom detection rulesets",
      "1-year audit log retention",
      "Dedicated Technical Account Manager",
      "Custom SLA (99.99% uptime)",
    ],
    ctaText: "Contact Sales",
    ctaHref: "#contact",
    isEnterprise: true,
  },
];

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] font-mono font-medium uppercase tracking-[0.18em] text-primary/60 mb-3">
            Predictable Pricing
          </p>
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
          >
            Security that scales with your traffic.
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
            Transparent tiers based on request volume. No hidden overage fees.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={`text-sm font-medium transition-colors ${
              !isYearly ? "text-foreground" : "text-muted"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle annual billing"
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-white/[0.1]"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform duration-300 ease-in-out ${
                isYearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              isYearly ? "text-foreground" : "text-muted"
            }`}
          >
            Yearly <span className="text-[10px] text-secondary ml-1">— Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier, idx) => (
            <FadeInUpWrapper key={tier.name} delay={idx * 150} className={tier.isPopular ? "md:z-10" : "z-0"}>
              <div
                className={[
                  "relative rounded-2xl p-8 flex flex-col transition-all duration-300 ease-out group h-full",
                  tier.isPopular 
                    ? "border border-transparent bg-gradient-to-b from-primary/10 to-transparent bg-origin-border -translate-y-2 shadow-[0_8px_40px_-12px_rgba(139,92,246,0.25)] ring-1 ring-primary/40 scale-[1.02] hover:-translate-y-3 hover:shadow-[0_16px_50px_-12px_rgba(139,92,246,0.35)] hover:ring-primary/60" 
                    : "border border-white/[0.05] bg-white/[0.01] hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.03] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)]",
                ].join(" ")}
              >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted h-10">{tier.description}</p>
              </div>

              <div className="mb-6 h-16">
                {tier.isEnterprise ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">Custom</span>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1 relative overflow-hidden h-10">
                       <span className="text-4xl font-bold text-foreground transition-transform duration-300 transform">
                          ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                       </span>
                       <span className="text-sm text-muted">/mo</span>
                    </div>
                    {isYearly && (
                      <span className="text-[11px] text-muted/70 mt-1 block h-4">
                         Billed annually (${(tier.yearlyPrice || 0) * 12}/yr)
                      </span>
                    )}
                    {!isYearly && <span className="block h-4"></span>}
                  </div>
                )}
              </div>

              <div className="mb-8 flex-grow">
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-primary shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-muted/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={tier.ctaHref}
                className={[
                  "w-full py-3 rounded-md text-sm font-semibold text-center transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  tier.isEnterprise
                    ? "bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary/70"
                    : tier.isPopular
                    ? "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/70"
                    : "bg-white/[0.05] text-foreground hover:bg-white/[0.1] border border-white/[0.1] focus-visible:ring-white/30",
                ].join(" ")}
              >
                {tier.ctaText}
              </Link>
            </div>
            </FadeInUpWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

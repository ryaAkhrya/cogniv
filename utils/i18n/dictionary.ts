export type Locale = "en" | "id";

const baseDictionary = {
  en: {
    locale: "en" as Locale,

    // ── Navbar ────────────────────────────────────────────────────────────────
    nav: {
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Request a Demo",
      ctaSub: "— free 30-min session",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      backToHome: "Cogniv — back to homepage",
      langSwitch: "Switch language",
    },

    // ── Hero ──────────────────────────────────────────────────────────────────
    hero: {
      headlinePrefix: "Block",
      headlineSuffix: "Before Data Leaves",
      headlineSuffixEnd: "Your Network.",
      rotatingWords: ["API Abuse", "Credential Stuffing", "Data Exfiltration", "Token Hijacking"],
      flowLabel1: "Incoming API Traffic",
      flowLabel2: "Cogniv Engine",
      flowLabel3: "Threat Dropped",
      ctaPrimary: "See Dashboard Demo",
      ctaSecondary: "View Pricing",
      badgeBlockTime: "Typical block time <200ms",
      badgeDetection: "99.97% detection rate",
      badgeNoFees: "No hidden fees",
      dash: {
        threatsBlocked: "Threats Blocked",
        blockTime: "Block Time",
        topAttack: "Top Attack",
        topAttackValue: "Volumetric DDoS",
        recentThreats: "Recent Threats",
        blocked: "Blocked",
        live: "Live",
        heatmap: "Traffic Anomaly Heatmap",
      },
      trust: {
        networkLayer: "Works at the network layer",
        soc2: "SOC 2 Type II",
        gdpr: "GDPR Ready",
        iso: "ISO 27001 Aligned",
      },
    },

    // ── Features ──────────────────────────────────────────────────────────────
    features: {
      eyebrow: "Core Capabilities",
      heading: "Three layers that contain a breach — not just detect one.",
      subheading:
        "Detection, quarantine, and access control running in parallel — each layer reports to a single audit log.",
      cards: [
        {
          title: "Stop Credential Stuffing in Under 5 Minutes",
          description:
            "Detects automated login attacks using device fingerprinting and per-IP velocity limits, then drops the session before the token exchange completes.",
          proof: "Blocked 14M attempts during PoC (Mar–Apr 2026) — demo data",
        },
        {
          title: "Isolate Compromised Endpoints Instantly",
          description:
            "When abnormal outbound traffic is detected — e.g., a node sending data to an unknown external IP — it is quarantined at the network layer to prevent lateral movement.",
          proof: "<200ms quarantine time — demo data",
        },
        {
          title: "Enforce Signed Tokens on Every Internal Request",
          description:
            "Every microservice call inside the VPC must carry a cryptographically signed token — zero-trust means verifying every request, even internal ones, not just the perimeter.",
          proof: "0 unauthorized internal access events — demo data",
        },
      ],
    },

    // ── Pricing ───────────────────────────────────────────────────────────────
    pricing: {
      eyebrow: "Predictable Pricing",
      heading: "Security that scales with your traffic.",
      subheading: "Transparent tiers based on request volume. No hidden overage fees.",
      monthly: "Monthly",
      yearly: "Yearly",
      yearlySave: "— Save 20%",
      billedAnnually: (total: number) => `Billed annually ($${total}/yr)`,
      custom: "Custom",
      perMonth: "/mo",
      tiers: [
        {
          name: "Growth",
          description: "For startups needing foundational API security.",
          features: [
            "Up to 10M API requests/mo",
            "Standard threat signatures",
            "7-day audit log retention",
            "Email support",
          ],
          ctaText: "Start Free Trial",
        },
        {
          name: "Scale",
          description: "Advanced protection for high-traffic environments.",
          features: [
            "Up to 50M API requests/mo",
            "Behavioral anomaly detection",
            "30-day audit log retention",
            "Priority Slack support",
          ],
          ctaText: "Start Free Trial",
        },
        {
          name: "Enterprise",
          description: "Custom deployments with dedicated compliance support.",
          features: [
            "Unlimited API requests",
            "Custom detection rulesets",
            "1-year audit log retention",
            "Dedicated Technical Account Manager",
            "Custom SLA (99.99% uptime)",
          ],
          ctaText: "Contact Sales",
        },
      ],
    },

    // ── Contact Form ──────────────────────────────────────────────────────────
    contact: {
      heading: "Talk to Our Security Engineers",
      subheading:
        "See how Cogniv fits your architecture. Get a custom demo tailored to your tech stack.",
      labelCompany: "Company Name",
      labelEmail: "Work Email",
      labelUseCase: "Primary Use Case",
      labelMessage: "Additional Context",
      labelMessageOptional: "(Optional)",
      placeholderCompany: "Acme Corp",
      placeholderEmail: "name@company.com",
      placeholderSelect: "Select an option...",
      placeholderMessage:
        "Tell us about your current infrastructure or specific challenges...",
      useCases: [
        { value: "api-protection", label: "API Protection & Rate Limiting" },
        { value: "network-quarantine", label: "Automated Network Quarantine" },
        { value: "compliance-audit", label: "Compliance & Audit Logging" },
        { value: "other", label: "Other / General Inquiry" },
      ],
      submit: "Request Demo",
      submitting: "Sending...",
      successHeading: "Request Received",
      successBody:
        "Your demo request has been recorded. Check your work email for confirmation.",
      successBodyFallback:
        "Your demo request has been recorded successfully.",
      errorFallback: "Failed to submit your request. Please try again later.",
      secureNote: "No credit card required. Secure SSL connection.",
    },

    // ── Footer ────────────────────────────────────────────────────────────────
    footer: {
      tagline: "Digital Safety First. AI-Powered Security.",
      copyright: (year: number) => `© ${year} Cogniv. All rights reserved.`,
    },
  },

  id: {
    locale: "id" as Locale,

    // ── Navbar ────────────────────────────────────────────────────────────────
    nav: {
      features: "Fitur",
      pricing: "Harga",
      contact: "Kontak",
      cta: "Minta Demo",
      ctaSub: "— sesi gratis 30 menit",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      backToHome: "Cogniv — kembali ke halaman utama",
      langSwitch: "Ganti bahasa",
    },

    // ── Hero ──────────────────────────────────────────────────────────────────
    hero: {
      headlinePrefix: "Blokir",
      headlineSuffix: "Sebelum Data Keluar dari",
      headlineSuffixEnd: "Jaringan Anda.",
      rotatingWords: [
        "Penyalahgunaan API",
        "Credential Stuffing",
        "Eksfiltrasi Data",
        "Pembajakan Token",
      ],
      flowLabel1: "Traffic API Masuk",
      flowLabel2: "Cogniv Engine",
      flowLabel3: "Ancaman Diblokir",
      ctaPrimary: "Lihat Demo Dashboard",
      ctaSecondary: "Lihat Harga",
      badgeBlockTime: "Rata-rata waktu blokir <200ms",
      badgeDetection: "Tingkat deteksi 99,97%",
      badgeNoFees: "Tanpa biaya tersembunyi",
      dash: {
        threatsBlocked: "Ancaman Diblokir",
        blockTime: "Waktu Blokir",
        topAttack: "Serangan Utama",
        topAttackValue: "DDoS Volumetrik",
        recentThreats: "Ancaman Terbaru",
        blocked: "Diblokir",
        live: "Langsung",
        heatmap: "Peta Anomali Traffic",
      },
      trust: {
        networkLayer: "Bekerja di lapisan jaringan",
        soc2: "SOC 2 Type II",
        gdpr: "Siap GDPR",
        iso: "Selaras ISO 27001",
      },
    },

    // ── Features ──────────────────────────────────────────────────────────────
    features: {
      eyebrow: "Kemampuan Inti",
      heading: "Tiga lapisan untuk menghentikan pelanggaran — bukan sekadar mendeteksinya.",
      subheading:
        "Deteksi, karantina, dan kontrol akses berjalan paralel — setiap lapisan melapor ke satu log audit terpusat.",
      cards: [
        {
          title: "Hentikan Credential Stuffing dalam 5 Menit",
          description:
            "Mendeteksi serangan login otomatis menggunakan sidik jari perangkat dan batas kecepatan per-IP, lalu menghentikan sesi sebelum pertukaran token selesai.",
          proof: "Memblokir 14 juta percobaan selama PoC (Mar–Apr 2026) — data demo",
        },
        {
          title: "Isolasi Endpoint yang Terkompromi Secara Instan",
          description:
            "Saat terdeteksi traffic keluar yang tidak wajar — misalnya node yang mengirim data ke IP eksternal tak dikenal — node tersebut dikarantina di lapisan jaringan untuk mencegah pergerakan lateral.",
          proof: "<200ms waktu karantina — data demo",
        },
        {
          title: "Terapkan Token Bertanda Tangan di Setiap Permintaan Internal",
          description:
            "Setiap panggilan microservice di dalam VPC harus membawa token yang ditandatangani secara kriptografis — zero-trust berarti memverifikasi setiap permintaan, bahkan yang internal.",
          proof: "0 akses internal yang tidak sah — data demo",
        },
      ],
    },

    // ── Pricing ───────────────────────────────────────────────────────────────
    pricing: {
      eyebrow: "Harga Transparan",
      heading: "Keamanan yang berkembang sesuai traffic Anda.",
      subheading: "Paket harga berdasarkan volume permintaan. Tanpa biaya overuse tersembunyi.",
      monthly: "Bulanan",
      yearly: "Tahunan",
      yearlySave: "— Hemat 20%",
      billedAnnually: (total: number) => `Ditagih tahunan ($${total}/thn)`,
      custom: "Kustom",
      perMonth: "/bln",
      tiers: [
        {
          name: "Growth",
          description: "Untuk startup yang membutuhkan keamanan API dasar.",
          features: [
            "Hingga 10 juta permintaan API/bln",
            "Tanda tangan ancaman standar",
            "Retensi log audit 7 hari",
            "Dukungan email",
          ],
          ctaText: "Mulai Uji Coba Gratis",
        },
        {
          name: "Scale",
          description: "Perlindungan lanjutan untuk lingkungan traffic tinggi.",
          features: [
            "Hingga 50 juta permintaan API/bln",
            "Deteksi anomali perilaku",
            "Retensi log audit 30 hari",
            "Dukungan Slack prioritas",
          ],
          ctaText: "Mulai Uji Coba Gratis",
        },
        {
          name: "Enterprise",
          description: "Deployment kustom dengan dukungan kepatuhan dedikasi.",
          features: [
            "Permintaan API tak terbatas",
            "Ruleset deteksi kustom",
            "Retensi log audit 1 tahun",
            "Technical Account Manager Dedikasi",
            "SLA Kustom (uptime 99,99%)",
          ],
          ctaText: "Hubungi Tim Sales",
        },
      ],
    },

    // ── Contact Form ──────────────────────────────────────────────────────────
    contact: {
      heading: "Bicara dengan Engineer Keamanan Kami",
      subheading:
        "Lihat bagaimana Cogniv cocok dengan arsitektur Anda. Dapatkan demo kustom yang disesuaikan dengan tech stack Anda.",
      labelCompany: "Nama Perusahaan",
      labelEmail: "Email Kerja",
      labelUseCase: "Kebutuhan Utama",
      labelMessage: "Konteks Tambahan",
      labelMessageOptional: "(Opsional)",
      placeholderCompany: "PT Contoh Corp",
      placeholderEmail: "nama@perusahaan.com",
      placeholderSelect: "Pilih opsi...",
      placeholderMessage:
        "Ceritakan tentang infrastruktur Anda saat ini atau tantangan spesifik yang dihadapi...",
      useCases: [
        { value: "api-protection", label: "Proteksi API & Rate Limiting" },
        { value: "network-quarantine", label: "Karantina Jaringan Otomatis" },
        { value: "compliance-audit", label: "Kepatuhan & Pencatatan Audit" },
        { value: "other", label: "Lainnya / Pertanyaan Umum" },
      ],
      submit: "Minta Demo",
      submitting: "Mengirim...",
      successHeading: "Permintaan Diterima",
      successBody:
        "Permintaan demo Anda telah tercatat. Periksa email kerja Anda untuk konfirmasi.",
      successBodyFallback:
        "Permintaan demo Anda telah berhasil tercatat.",
      errorFallback: "Gagal mengirim permintaan Anda. Silakan coba lagi nanti.",
      secureNote: "Tanpa kartu kredit. Koneksi SSL aman.",
    },

    // ── Footer ────────────────────────────────────────────────────────────────
    footer: {
      tagline: "Keamanan Digital Pertama. Didukung Kecerdasan Buatan.",
      copyright: (year: number) => `© ${year} Cogniv. Semua hak dilindungi.`,
    },
  },
};

export type Dictionary = typeof baseDictionary.en;

export const dictionary: Record<Locale, Dictionary> = baseDictionary;

# Cogniv

A modern cybersecurity SaaS landing page focused on threat protection, security visibility, and lead generation.

Cogniv is a portfolio project built to demonstrate a production-ready marketing website with responsive UI, bilingual support, persistent user preferences, and Supabase-powered lead capture.

## Features

- Responsive cybersecurity SaaS landing page
- English & Indonesian localization
- Persistent language preference
- Interactive cybersecurity dashboard visualization
- Animated threat/typewriter presentation
- Pricing section with billing toggle
- Contact / lead capture form
- Supabase integration for lead storage
- Reduced-motion accessibility support
- Responsive navigation
- Custom Cogniv branding and favicon
- Dark cybersecurity-focused interface

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Supabase
- ESLint
- Vercel

## Architecture

The project uses the Next.js App Router with reusable React components.

Main structure:

```text
app/
├── layout.tsx
├── page.tsx
├── globals.css
└── icon.svg

components/
├── Navbar.tsx
├── HeroSection.tsx
├── FeatureGlassCards.tsx
├── PricingToggle.tsx
├── ContactForm.tsx
├── Footer.tsx
└── FadeInUpWrapper.tsx

utils/
├── i18n/
│   ├── dictionary.ts
│   └── LanguageContext.tsx
└── supabase/
    └── client.ts
Localization

Cogniv supports:

English (default)
Indonesian

The selected language is persisted locally so the user's preference remains available after refreshing the page.

Supabase

Supabase is used for lead capture through the contact form.

Required environment variables:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

Never commit .env.local or private Supabase credentials to the repository.

Getting Started

Clone the repository:

git clone <YOUR_REPOSITORY_URL>
cd cogniv

Install dependencies:

npm install

Create .env.local and configure the required Supabase environment variables.

Start the development server:

npm run dev

Then open http://localhost:3000.

Quality Checks
npx tsc --noEmit
npm run lint
npm run build
Deployment

The project is designed to be deployed on Vercel.

Remember to configure the same environment variables used locally in the Vercel project settings.

Project Status

Cogniv is a portfolio project demonstrating frontend architecture, responsive SaaS UI, localization, accessibility considerations, and Supabase integration.

The cybersecurity dashboard and threat-monitoring visuals are interface demonstrations and do not represent a real threat-detection engine.

License

This project is intended for portfolio and demonstration purposes.

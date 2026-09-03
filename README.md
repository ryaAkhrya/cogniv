# Cogniv

A modern cybersecurity SaaS portfolio project featuring a production-style lead acquisition flow, bilingual interface, Supabase integration, and transactional email confirmation.

### Live Demo

**https://cogniv-xi.vercel.app/**

> Cogniv is a portfolio/demo project. The cybersecurity dashboard and threat-related visuals are presentation UI and do not perform real threat detection or security enforcement.

IMPORTANT:
- Do NOT modify application code.
- Modify README.md only.
- Do NOT exaggerate Cogniv as a real cybersecurity engine.
- Cogniv is a portfolio/demo cybersecurity SaaS website, not an actual threat-detection or security platform.
- Keep the README professional, concise, and suitable for a GitHub portfolio.
- Do not use excessive badges, emojis, marketing fluff, or AI-generated sounding language.
- Do not expose API keys, environment values, Supabase credentials, or other secrets.
- Do not run lint, TypeScript, or build.
- Do not commit or push.

Current architecture/features that README should accurately document:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Responsive cybersecurity SaaS interface
- English / Indonesian localization
- Persistent language preference
- Interactive cybersecurity dashboard visualization/mockup
- Pricing section with billing toggle
- Request Demo lead form
- Server-side POST /api/demo-request endpoint
- Server-side payload validation
- Supabase lead storage
- Supabase Row Level Security (RLS)
- Resend transactional email confirmation
- Verified Cogniv sending domain
- Confirmation email sent to the submitted Work Email
- Graceful handling when email delivery fails after lead storage
- Reduced-motion accessibility support
- Responsive navigation
- Custom Cogniv branding/favicon
- Vercel deployment

The Request Demo architecture is:

Browser ContactForm
→ POST /api/demo-request
→ server-side validation
→ Supabase lead insert
→ Resend confirmation email
→ success response

Important failure behavior:
- If Supabase insert fails, submission fails and no email is sent.
- If Supabase succeeds but Resend fails, the lead remains stored and the request is still considered successful.
- RESEND_API_KEY is server-only.

Update the README structure to something approximately like:

# Cogniv

Short project description.

Clearly state that Cogniv is a portfolio project demonstrating a production-style SaaS marketing website and lead acquisition workflow.

## Features

Include the actual current features.

## Request Demo Flow

Briefly explain the server-side lead + email architecture.

Use a simple text/code flow such as:

Contact Form
    ↓
POST /api/demo-request
    ↓
Server Validation
    ↓
Supabase
    ↓
Resend Confirmation Email

Do not make this diagram unnecessarily complicated.

## Tech Stack

Document:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- Resend
- Vercel

## Environment Variables

Document ONLY variable names, never values:

NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
RESEND_API_KEY

Explain that `.env.local` must not be committed.

Do not document RESEND_TO_EMAIL if it is only used by the temporary test endpoint; instead mention the temporary test endpoint separately if necessary.

## Local Development

Include concise setup:

npm install

create .env.local

npm run dev

Do not include real credentials.

## Security Notes

Briefly mention:
- Supabase RLS
- server-side Resend API key
- server-side validation
- no sensitive environment values returned to client
- client does not directly send transactional email

Do not claim the application itself provides actual cybersecurity protection.

## Project Scope

Explicitly clarify:

The cybersecurity dashboard and threat-related visuals are presentation/demo UI. Cogniv does not currently perform real threat detection, traffic inspection, malware analysis, or automated security enforcement.

This is important so the portfolio remains technically honest.

## Deployment

Mention Vercel deployment and required production environment variables.

If the README currently contains still-accurate useful information, preserve it rather than rewriting blindly.

Remove or rewrite outdated statements implying that Request Demo is only a direct client-side Supabase insert.

After editing, report:
1. Sections updated
2. Outdated information removed
3. New architecture documentation added
4. Confirm README.md was the only file modified

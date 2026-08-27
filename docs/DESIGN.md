# 🎨 DESIGN.md - Design System & Token Guidelines

## 1. CSS Variables (`globals.css`)
Gunakan pendekatan variable untuk integrasi Tailwind dan mempermudah theming.
- `--background`: `240 10% 3.9%` (Deep Space Black `#050505`)
- `--foreground`: `0 0% 98%` (Slate 50)
- `--primary`: `262 83% 58%` (Neon Purple `#8b5cf6`)
- `--secondary`: `217 91% 60%` (Electric Blue `#3b82f6`)
- `--surface`: `240 10% 5%` (Card Background)
- `--border`: `0 0% 100% / 0.1`

## 2. Tailwind Configuration (`tailwind.config.ts`)
Wajib extend theme di config, jangan hardcode hex di class HTML.
- **Colors**: Hubungkan CSS variables di atas ke `colors` object.
- **Box Shadow (Neon)**: 
  - `neon-purple`: `0 0 20px rgba(139,92,246,0.3)`
  - `neon-blue`: `0 0 20px rgba(59,130,246,0.3)`
- **Background Blur**: Extend `backdropBlur` dengan nilai `xs: 2px` jika default kurang halus.

## 3. Typography Scale & Implementation
- **Heading (Space Grotesk)**:
  - H1: `text-5xl font-bold tracking-tight` (Hero title)
  - H2: `text-3xl font-semibold tracking-tight` (Section title)
- **Body (Inter)**:
  - P: `text-base text-slate-400 leading-relaxed`
- **Code/Tech Data (JetBrains Mono)**:
  - Gunakan untuk angka pricing, IP address, atau log AI: `font-mono text-sm`

## 4. Component Tokens (Strict Rules)
- **Border Radius**: 
  - Buttons & Inputs: `rounded-md` (Lebih tajam, techy feel).
  - Glass Cards: `rounded-xl` atau `rounded-2xl` (Lebih organik).
- **Glassmorphism Recipe**: 
  - Class baku: `bg-white/[0.03] backdrop-blur-md border border-white/[0.08]`. 
  - *Dilarang* pakai opacity di atas `0.05` untuk background agar tidak terlihat kotor.
- **Hover Transitions**: Wajib gunakan `transition-all duration-300 ease-out` untuk semua elemen interaktif.
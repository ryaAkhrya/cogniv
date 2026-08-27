# Architecture & Design System

## 1. Styling Strategy (Sleek & Futuristic)
- **Glassmorphism**: Menggunakan utilitas Tailwind `bg-white/5 backdrop-blur-lg border border-white/10`.
- **Neon Glow**: Menambahkan custom shadow di `tailwind.config.ts` untuk efek glow pada tombol dan ikon. Contoh: `shadow-[0_0_15px_rgba(139,92,246,0.5)]`.
- **Dark Theme Dominant**: Background color utama menggunakan `#050505` atau `#09090b` agar efek neon lebih pop-out.

## 2. Component Structure
- `HeroSection.tsx`: Menampilkan CTA utama dan efek background grid/glow.
- `FeatureGlassCards.tsx`: Mapping data fitur ke dalam layout grid 3 kolom dengan efek hover state.
- `PricingToggle.tsx`: State management (useState) untuk switch harga Monthly/Yearly.
- `ContactForm.tsx`: Form terintegrasi dengan Supabase API untuk menangkap leads B2B.

## 3. Database Flow (Supabase)
- User mengisi `email`, `name`, dan `company` di form kontak.
- Trigger Supabase client untuk insert data ke tabel `leads`.
- Tampilkan form success/error state (mengacu pada RULES.md) tanpa me-refresh halaman.

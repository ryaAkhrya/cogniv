# 🧪 TESTING.md - Post-Coding QA Checklist

Kalo lu ngerasa kodingan udah beres, JANGAN langsung deploy atau pamer dulu. Klien benci banget sama web yang keliatan bagus tapi pas dipencet error. Wajib lu lewatin checklist QA (Quality Assurance) ini:

## 1. 🗄️ Database & Form (Supabase)
- [ ] **Validation Test**: Kosongin semua isi form contact, terus klik submit. Pastiin muncul error message (jangan malah ke-submit atau reload page).
- [ ] **Success Flow**: Isi form dengan data beneran, klik submit. Pastiin muncul loading state, terus success message.
- [ ] **Data Check**: Buka dashboard Supabase. Pastiin data yang lu submit barusan beneran masuk ke tabel `leads`.
- [ ] **RLS Check**: Coba bikin script iseng buat nge-fetch (baca) data dari tabel `leads` lewat front-end. Kalo settingan RLS lu bener, ini harusnya di-block (Error 401/403).

## 2. 📱 UI, UX & Responsiveness
- [ ] **Mobile Layout**: Inspect element (F12), ganti ke tampilan HP (iPhone/Pixel). Pastiin ga ada **Horizontal Scroll** (layar geser ke samping).
- [ ] **Dark Mode Toggle**: Klik switch dark/light mode berulang kali. Pastiin semua teks tetep kebaca (kontras aman) dan efek glow/glassmorphism-nya ga aneh di light mode.
- [ ] **Pricing Math**: Klik toggle Monthly/Yearly di section pricing. Pastiin angkanya berubah akurat dan animasinya mulus.
- [ ] **Hover & Tab**: Hover semua tombol/link. Terus coba pencet tombol `Tab` di keyboard, pastiin navigasi keyboardnya berurutan (buat accessibility).

## 3. 🚀 Build & Production Test
Jangan cuma ngetest di `npm run dev`! Vercel itu ketat, error dikit waktu build bakal gagal deploy.
- [ ] Matiin server dev lu.
- [ ] Jalanin command: `npm run build`. 
- [ ] Pastiin ga ada error TypeScript (Strict mode) atau warning ESLint yang merah-merah.
- [ ] Kalo build sukses, jalanin `npm run start` buat ngetest versi production-nya di local. Cek lagi form sama halamannya.

## 4. 📈 SEO & Meta
- [ ] Buka tab network/elements, pastiin tag `<title>`, `<meta description>`, dan `og:image` udah kerender dengan bener.
- [ ] Tes skor Lighthouse di Chrome dev tools (targetin hijau semua > 90).

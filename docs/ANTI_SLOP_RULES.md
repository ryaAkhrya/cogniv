# 🛑 ANTI-AI SLOP & SUPABASE RULES

File ini dibikin khusus biar kodingan lu nggak kelihatan kayak sampah *AI-generated* (AI Slop). Klien B2B bakal *ilfeel* kalau lihat *codebase* atau web yang kerasa "mesin" banget. Wajib patuhi aturan ini!

## 1. 🐘 Aturan Main Supabase
- **Wajib RLS (Row Level Security)**: Jangan pernah biarin tabel lu telanjang tanpa RLS. *Landing page* cuma butuh hak `INSERT` buat publik. Hak `SELECT`, `UPDATE`, `DELETE` HARUS dikunci buat *authenticated users* aja. (Udah di-setup di `setup.sql`).
- **Handle Error Kek Manusia**: Jangan cuma nulis `console.log(error)`. Kasih UI *feedback* yang bener ke *user*. Kalau email gagal ke-kirim, munculin notif merah: *"Gagal mengirim pesan. Silakan coba lagi."*
- **Strict Types**: Jangan pake tipe data `any`. Bikin interface TypeScript buat Supabase response.

## 2. 🤮 Anti-AI Copywriting (No Slop!)
Haram hukumnya pake kata-kata *cringe* bawaan AI di *landing page* lu. Coret kata-kata ini dari kamus lu:
- ❌ "Unleash the power of..."
- ❌ "Elevate your business..."
- ❌ "Revolutionize your workflow..."
- ✅ **Ganti dengan**: Fakta, metrik, dan *actionable words*. Contoh: *"Block 99% of unauthorized access in real-time."*

## 3. 💻 Clean Code & Strict Types
- **No Dead Code**: Hapus semua komentar bawaan AI kayak `// Here we declare the state` atau `// This function handles the click`. Kalo kodenya udah jelas, nggak usah di-komen.
- **Component Naming**: Jangan bikin komponen dengan nama generik kayak `Box.tsx` atau `Wrapper.tsx`. Kasih nama yang jelas: `PricingToggle.tsx`, `FeatureGlassCard.tsx`.
- **Loading State Mesti Proporsional**: Jangan biarin *button* mati tanpa animasi pas lagi *submit* ke Supabase. Kasih *spinner* atau teks *"Sending..."* biar *user* tahu sistem lagi kerja.

## 4. 🎨 UI/UX Realism
- Jangan pake gambar *placeholder* (kayak via.placeholder.com). Mending lu bikin kotak kosong pake CSS yang rapi.
- *Hover states* harus konsisten. Kalau tombol A pas di-hover warnanya terang, tombol B juga harus gitu. Jangan belang-belang.

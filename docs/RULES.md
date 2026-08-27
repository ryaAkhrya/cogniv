# 🚀 Vibe-Coding & Web Dev Checklist

## 🎨 1. UI / UX & Features Additions
- [ ] Dark mode toggle
- [ ] Simple cookie banner
- [ ] Site search
- [ ] Back to top button
- [ ] Mobile menu (Responsive)
- [ ] Loading animations
- [ ] Hover states (Button, links, cards)
- [ ] Scroll progress bars
- [ ] Copy button (buat elemen teks/kode)
- [ ] Print stylesheet
- [ ] Sticky headers
- [ ] Skip to content (Accessibility)
- [ ] Password visibility toggle
- [ ] UTM tracking setup
- [ ] Form success state & messages
- [ ] Form error state & messages
- [ ] Confirmation modals
- [ ] Last updated date di footer/halaman

## 🚨 2. Anti "AI-Generated" Vibes (Hidden Giveaways)
- [ ] Pindah dari url `.vercel.app` ke custom domain
- [ ] Pastikan "View Source" gak kosong (Cek SSR/SSG di Next.js)
- [ ] Hapus default Vite + React icon/title (Ganti sesuai nama brand)
- [ ] Bikin Custom 404 Page (Jangan pake default Next.js/Browser)
- [ ] Jangan ada Placeholder Text (Hapus *Lorem Ipsum*)
- [ ] Hapus semua navigasi/link yang nggak kepake (Unused Nav)

## 🔍 3. SEO, Meta, & Accessibility
- [ ] Fix page titles (Jangan ada title yang sama di beda halaman)
- [ ] Add unique meta description tiap halaman
- [ ] Add `og:image` buat preview share di sosmed
- [ ] Add Structured Data (Schema markup)
- [ ] Pastikan cuma ada SATU `H1` tiap halaman
- [ ] Tambahin Canonical Tag
- [ ] Tambahin `llms.txt`
- [ ] Cek `robots.txt` (Jangan sampe nge-block AI/Search Engine)
- [ ] Add Favicon yang bener (resolusi bagus)
- [ ] Generate `sitemap.xml`
- [ ] Add `lang` attribution di tag `<html>`
- [ ] Cek missing `alt` text di semua image

## 🛠️ 4. Bugs, Fixes, & Optimizations
- [ ] Fix & cegah Horizontal Scroll / Mobile Overflow
- [ ] Cari dan perbaiki Broken Links & Broken Buttons
- [ ] Fix Footer links (Pastikan ngarah ke halaman yang bener)
- [ ] Update Copyright Year (Pake tahun dinamis, misal pake Date JS)
- [ ] Compress Images (Pake format .webp dan optimasi size)
- [ ] Bikin Logo, Nomor Telepon, dan Email jadi *clickable*
- [ ] Remove Source Maps di Production
- [ ] Clear semua Console Errors
- [ ] Optimasi JS Bundles (Jangan terlalu gede/massive)
- [ ] 100% Mobile Optimized!


## 🐘 Supabase & Database AI Workflow
- **Auto-Generate SQL Scripts:** JIKA ada fitur baru yang membutuhkan penyimpanan data (misalnya: *contact form*, *waitlist*, atau *user data*), KAMU (AI) WAJIB membuat dan memberikan kode `.sql` secara utuh untuk dieksekusi di SQL Editor Supabase.
- **Strict RLS Policy:** Setiap *script* SQL yang kamu buat WAJIB menyertakan `ENABLE ROW LEVEL SECURITY`. Jangan pernah biarkan tabel tanpa RLS.
- **Provide Access Policies:** Selalu buatkan *policy* akses yang spesifik dan aman. Contoh: `Allow public inserts` untuk form publik, dan batasi hak `SELECT`, `UPDATE`, `DELETE` hanya untuk *authenticated users*.
- **No Assumption:** Jangan pernah berasumsi tabel sudah siap. Selalu berikan *query* `CREATE TABLE IF NOT EXISTS` lengkap dengan tipe data yang *strict* (seperti `UUID`, `TIMESTAMP WITH TIME ZONE`).
# Geazy — Platform Kesehatan Anak Digital

Geazy adalah platform digital untuk memantau tumbuh kembang anak Indonesia. Dibangun untuk orang tua, tenaga medis, dan admin, Geazy menggabungkan empat pilar utama: pemantauan pertumbuhan berbasis standar WHO, pencatatan gizi harian, edukasi kesehatan, dan konsultasi dokter secara real-time.

## Fitur Utama

### G-Growth Tracker
Catat berat badan, tinggi badan, LiLA, dan lingkar kepala secara berkala. Status gizi dihitung otomatis menggunakan metode LMS z-score dari standar WHO (0–60 bulan).

### G-NutriLog
Pantau asupan gizi harian dari database 48 bahan makanan lokal Indonesia. Tampilan progress bar kalori, protein, lemak, dan karbohidrat dibandingkan target WHO berdasarkan usia anak.

### Geazy EduHub
Artikel edukasi gizi dan pola asuh yang dipersonalisasi berdasarkan usia anak aktif. Fitur bookmark, filter kategori, dan pencarian artikel.

### Geazy Connect
Konsultasi langsung dengan dokter spesialis anak via chat real-time berbasis Laravel Reverb (WebSocket). Pesan muncul instan tanpa refresh halaman.

---

## Tech Stack

| Layer | Teknologi |
|---|---|
| Backend | Laravel 13, PHP 8.3 |
| Auth | Laravel Fortify (role-based) |
| Frontend | React 19, TypeScript, Inertia.js v3 |
| Styling | Tailwind CSS v4 |
| Database | SQLite |
| Real-time | Laravel Reverb (WebSocket) |
| Build | Vite |

---

## Role Pengguna

| Role | Akses |
|---|---|
| `orang_tua` | Dashboard, profil anak, growth tracker, nutrilog, eduhub, konsultasi |
| `mitra` (dokter) | Dashboard mitra, menerima & membalas konsultasi |
| `admin` | Verifikasi dokter, kelola artikel EduHub |

---

## Instalasi

### Prasyarat
- PHP 8.3+
- Composer
- Node.js 20+
- Laravel Herd atau server PHP lokal

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/username/geazy.git
cd geazy

# 2. Install dependensi PHP
composer install

# 3. Install dependensi Node.js
npm install

# 4. Salin file environment
cp .env.example .env
php artisan key:generate

# 5. Jalankan migrasi dan seeder
php artisan migrate --seed

# 6. Build asset frontend
npm run build
```

### Konfigurasi Reverb (Real-time Chat)

File `.env` sudah berisi konfigurasi Reverb setelah `reverb:install`. Pastikan variabel berikut ada:

```env
BROADCAST_CONNECTION=reverb

REVERB_APP_ID=your_app_id
REVERB_APP_KEY=your_app_key
REVERB_APP_SECRET=your_app_secret
REVERB_HOST="localhost"
REVERB_PORT=8080
REVERB_SCHEME=http

VITE_REVERB_APP_KEY="${REVERB_APP_KEY}"
VITE_REVERB_HOST="${REVERB_HOST}"
VITE_REVERB_PORT="${REVERB_PORT}"
VITE_REVERB_SCHEME="${REVERB_SCHEME}"
```

---

## Menjalankan Aplikasi

Butuh tiga proses yang berjalan bersamaan:

```bash
# Terminal 1 — Laravel dev server
php artisan serve

# Terminal 2 — Vite (hot reload)
npm run dev

# Terminal 3 — Reverb WebSocket server
php artisan reverb:start
```

Atau gunakan Laravel Herd untuk mengelola server PHP otomatis.

---

## Akun Default (Seeder)

| Role | Email | Password |
|---|---|---|
| Admin | `admin@geazy.test` | `password` |

Akun dokter dan orang tua dapat dibuat melalui halaman `/register`.

---

## Struktur Direktori Utama

```
app/
├── Http/Controllers/
│   ├── Admin/          # AdminDashboard, AdminDoctor, AdminArticle
│   ├── Mitra/          # MitraDashboard
│   ├── DashboardController.php
│   ├── ChildProfileController.php
│   ├── GrowthTrackerController.php
│   ├── NutritionLogController.php
│   ├── EduHubController.php
│   ├── ConsultationController.php
│   └── MessageController.php
├── Models/             # User, ChildProfile, GrowthRecord, Food, dll.
├── Services/
│   └── WhoGrowthService.php   # Kalkulasi z-score & target gizi WHO
resources/js/
├── pages/
│   ├── dashboard.tsx           # Dashboard orang tua
│   ├── anak/                   # Manajemen profil anak
│   ├── tracker/                # G-Growth Tracker
│   ├── nutrisi/                # G-NutriLog
│   ├── eduhub/                 # EduHub + bookmarks
│   ├── connect/                # Geazy Connect (chat)
│   ├── mitra/                  # Dashboard dokter
│   └── admin/                  # Panel admin
routes/
├── web.php                     # Semua route aplikasi
└── channels.php                # Channel otorisasi Reverb
database/seeders/
├── FoodSeeder.php              # 48 bahan makanan Indonesia
└── EduArticleSeeder.php        # 13 artikel edukasi
```

---

## Lisensi

MIT

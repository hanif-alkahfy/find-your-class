# Find Your Class

> Sebuah aplikasi web untuk membantu pencarian kelas atau ruangan

## 📋 Deskripsi

Find Your Class adalah aplikasi web yang dirancang untuk memudahkan pencarian informasi kelas atau ruangan. Aplikasi ini dibangun dengan arsitektur full-stack menggunakan Node.js untuk backend dan framework modern untuk frontend.

## 🚀 Fitur Utama

- 🔍 Pencarian kelas/ruangan
- 📍 Informasi lokasi detail
- 🕒 Jadwal dan ketersediaan
- 📱 Responsive design
- ⚡ Interface yang user-friendly

## 🛠️ Teknologi yang Digunakan

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Web framework

### Frontend
- **Framework Modern** - (React)
- **CSS Framework** - (Tailwind CSS)
- **Build Tool** - Vite

## 📦 Instalasi

### Prasyarat
- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn

### Clone Repository
```bash
git clone https://github.com/hanif-alkahfy/find-your-class.git
cd find-your-class
```

### Setup Backend
```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env file sesuai konfigurasi Anda

# Jalankan server
node server.js
```

### Setup Frontend
```bash
# Pindah ke direktori frontend (jika terpisah)
cd frontend  # atau sesuai struktur folder

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

## 🔧 Konfigurasi

### Environment Variables
Buat file `.env` di root directory dengan konfigurasi berikut:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=find_your_class
DB_USER=your_username
DB_PASS=your_password

# Server Configuration
PORT=3000
NODE_ENV=development

# API Keys (jika diperlukan)
API_KEY=your_api_key
```

### Database Setup
```sql
-- Contoh setup database (sesuaikan dengan schema yang digunakan)
CREATE DATABASE find_your_class;
-- Import schema atau migration files
```

## 🚦 Menjalankan Aplikasi

### Mode Development
```bash
# Backend
node server.js

# Frontend (terminal terpisah)
npm run dev
```

### Mode Production
```bash
# Build frontend
npm run build

# Start production server
npm start
```

## 📁 Struktur Project

```
find-your-class/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.js
│   ├── public/
│   └── package.json
├── database/
│   ├── migrations/
│   └── seeds/
├── docs/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Endpoints Utama

#### 1. Pencarian Kelas
```http
GET /api/classes/search?q={query}
```
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "className": "Lab Komputer 1",
      "building": "Gedung A",
      "floor": 2,
      "capacity": 30,
      "facilities": ["Proyektor", "AC", "WiFi"]
    }
  ]
}
```

#### 2. Detail Kelas
```http
GET /api/classes/{id}
```

#### 3. Jadwal Kelas
```http
GET /api/classes/{id}/schedule
```

## 🧪 Testing

```bash
# Jalankan unit tests
npm test

# Test coverage
npm run test:coverage

# Integration tests
npm run test:integration
```

## 📱 Screenshots

### Halaman Utama
![Homepage](screenshots/homepage.png)

### Hasil Pencarian
![Search Results](screenshots/search-results.png)

### Detail Kelas
![Class Detail](screenshots/class-detail.png)

## 🔧 Troubleshooting

### Masalah Umum

1. **Server tidak bisa start**
   - Pastikan port tidak sedang digunakan
   - Check environment variables
   - Verifikasi koneksi database

2. **Database connection error**
   - Check kredensial database
   - Pastikan database service berjalan
   - Verify network connectivity

3. **Frontend build error**
   - Clear node_modules dan reinstall
   - Check Node.js version compatibility
   - Update dependencies

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Guidelines Kontribusi
- Ikuti coding standards yang ada
- Tambahkan tests untuk fitur baru
- Update dokumentasi jika diperlukan
- Gunakan conventional commits

## 📜 License

Project ini dilisensikan di bawah [MIT License](LICENSE).

## 👥 Tim Pengembang

- **Hanif Alkahfy** - *Lead Developer* - [@hanif-alkahfy](https://github.com/hanif-alkahfy)

## 📞 Kontak

- **Email**: hanif.alkahfy@example.com
- **GitHub**: [@hanif-alkahfy](https://github.com/hanif-alkahfy)
- **Project Link**: [https://github.com/hanif-alkahfy/find-your-class](https://github.com/hanif-alkahfy/find-your-class)

## 🎯 Roadmap

- [ ] Implementasi autentikasi user
- [ ] Sistem booking ruangan
- [ ] Notifikasi real-time
- [ ] Mobile app (React Native)
- [ ] Integration dengan calendar apps
- [ ] Multi-language support

## 📈 Changelog

### v1.0.0 (2024-xx-xx)
- Initial release
- Basic search functionality
- Class information display
- Responsive design

---

## 🙏 Acknowledgments

- Terima kasih kepada semua kontributor
- Inspirasi dari berbagai aplikasi pencarian ruangan
- Community feedback dan suggestions

---

*Dokumentasi ini akan terus diupdate seiring dengan perkembangan project.*

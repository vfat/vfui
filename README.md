# VFUI - Vue UI Framework

VFUI adalah framework CSS dan JavaScript modern yang dirancang untuk membangun antarmuka pengguna (UI) yang konsisten, responsif, dan mudah dimelihara.

## 🎯 Tentang VFUI

VFUI menyediakan sistem CSS yang terstruktur dengan baik dan komponen JavaScript yang dapat digunakan kembali. Framework ini dibangun dengan prinsip modularitas, aksesibilitas, dan maintainability sebagai prioritas utama.

## 📦 Struktur Proyek

```
vfui/
├── css/                    # CSS Framework
│   ├── variables.css       # CSS custom properties & variables
│   ├── core.css            # CSS reset & base styles
│   ├── base.css            # Base typography & elements
│   ├── button.css          # Button component styles
│   ├── card.css            # Card component styles
│   ├── form.css            # Form component styles
│   ├── menu.css            # Menu component styles
│   ├── modules.css         # Modular utility styles
│   └── ...
├── js/                     # JavaScript Modules
│   ├── core.js             # Core UI module & API
│   ├── modules/
│   │   ├── accordion.js    # Accordion component
│   │   ├── dropdown.js     # Dropdown component
│   │   ├── modal.js        # Modal component
│   │   └── ...
│   └── ...
├── docs/                   # Dokumentasi & Contoh
│   ├── index.html          # Halaman utama dokumentasi
│   └── components/         # Contoh komponen
│       ├── button.html
│       ├── accordion.html
│       └── ...
└── README.md
```

## ✨ Fitur Utama

- **CSS Reset & Variables**: Sistem CSS yang bersih dengan custom properties untuk konsistensi
- **Komponen Terstruktur**: Button, Card, Form, Menu, dan komponen UI lainnya
- **Modular JavaScript**: Sistem modul JS dengan event delegation pattern
- **Dokumentasi Lengkap**: HTML documentation dengan contoh penggunaan
- **Spec-Driven Development**: Spesifikasi desain dan dokumentasi terperinci di folder `openspec/`

## 🚀 Mulai Menggunakan

### Import CSS
```html
<!-- Include CSS files -->
<link rel="stylesheet" href="vfui/css/variables.css">
<link rel="stylesheet" href="vfui/css/core.css">
<link rel="stylesheet" href="vfui/css/button.css">
<!-- Tambahkan CSS component lainnya sesuai kebutuhan -->
```

### Import JavaScript
```html
<!-- Include Core JS -->
<script src="vfui/js/core.js"></script>
<!-- Include module yang diperlukan -->
<script src="vfui/js/modules/accordion.js"></script>
<script src="vfui/js/modules/dropdown.js"></script>
<script src="vfui/js/modules/modal.js"></script>

<script>
  // Initialize semua modules
  UI.init();
  
  // Atau initialize module tertentu
  UI.init('accordion');
</script>
```

## 📚 Dokumentasi Lengkap

Lihat folder `docs/` untuk dokumentasi lengkap dan contoh penggunaan setiap komponen.

## 🏗️ Spesifikasi Desain

Spesifikasi teknis dan desain proyek tersedia di folder `openspec/`:
- `config.yaml` - Konfigurasi proyek
- `specs/` - Spesifikasi detail untuk setiap komponen

## 📝 Lisensi

Lihat file lisensi untuk informasi lebih lanjut.

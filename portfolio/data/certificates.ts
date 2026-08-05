// 1. TIPE DATA UNTUK SERTIFIKAT (TypeScript Interface)
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  category: "Internship" | "Pelatihan" | "Organisasi" | string; // Kategori Sertifikat
  credential: string;
  description: string;
}

// 2. DAFTAR DATA SERTIFIKAT
export const certificates: Certificate[] = [
  {
    id: 1,
    title: "PLN Indonesia Power",
    issuer: "PLN Group",
    year: "2025",
    image: "/certificates/PLN.jpg",
    category: "Internship", // 👈 Dikategorikan sebagai Internship
    credential: "#",
    description:
      "Bukti kelulusan program magang industri selama 4 bulan",
  },
  {
    id: 2,
    title: "Bappelitbangda",
    issuer: "Dinas Bappelitbangda",
    year: "2024",
    image: "/certificates/Bappeda.jpg",
    category: "Internship", // 👈 Dikategorikan sebagai Internship
    credential: "#",
    description:
      "Mencapai kelulusan program magang resmi di Bidang Penelitian dan Pengembangan Inovasi Bappelitbangda.",
  },
  {
    id: 3,
    title: "Himpunan Mahasiswa",
    issuer: "Universitas Nusa Putra",
    year: "2024",
    image: "/certificates/Himpunan.jpg",
    category: "Organisasi", // 👈 Dikategorikan sebagai Organisasi
    credential: "#",
    description:
      "Berperan dalam manajemen tim, penyusunan agenda kegiatan dan pengembangan minat anggota",
  },
  {
    id: 4,
    title: "Certiport Software Development",
    issuer: "Certiport",
    year: "2025",
    image: "/certificates/Software.jpg",
    category: "Pelatihan", // 👈 Dikategorikan sebagai Pelatihan
    credential: "#",
    description:
      "Sertifikasi yang mencakup dasar-dasar pengembangan perangkat lunak dan konsep pemrograman",
  },
  {
    id: 5,
    title: "Database Foundations",
    issuer: "Oracle Academy",
    year: "2025",
    image: "/certificates/Database.jpg",
    category: "Pelatihan", // 👈 Dikategorikan sebagai Pelatihan
    credential: "#",
    description:
      "Mencapai kelulusan program pelatihan Oracle Academy Database dengan SQL dan konsep basis data relasional.",
  },
  {
    id: 6,
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2025",
    image: "/certificates/Javascript.jpg",
    category: "Pelatihan", // 👈 Dikategorikan sebagai Pelatihan
    credential: "#",
    description:
      "Mempelajari dasar-dasar pemrograman JavaScript termasuk fungsi (functions), larik (arrays), objek (objects), dan DOM (Document Object Model).",
  },
  {
    id: 7,
    title: "MTCNA (MikroTik Certified Network Associate)",
    issuer: "MikroTik",
    year: "2026",
    image: "/certificates/Mikrotik.jpg",
    category: "Pelatihan", // 👈 Contoh kategori Pelatihan
    credential: "#",
    description:
      "Sertifikasi dalam dasar-dasar jaringan MikroTik, rute (routing), dinding api (firewall), dan konfigurasi nirkabel (wireless)",
  },
  {
    id: 8,
    title: "Public Speaking & Leadership",
    issuer: "The Epdc",
    year: "2025",
    image: "/certificates/Speaking.jpg",
    category: "Pelatihan", // 👈 Contoh kategori Pelatihan
    credential: "#",
    description:
      "Pelatihan berbicara di depan umum secara intensif untuk meningkatkan keterampilan komunikasi",
  },
  {
    id: 9,
    title: "TPA TKDA Bappenas",
    issuer: "Koperasi Bappenas",
    year: "2026",
    image: "/certificates/Bappenas.jpg",
    category: "Pelatihan", // 👈 Contoh kategori Pelatihan
    credential: "#",
    description:
      "Mencapai kelulusan program pelatihan TPA TKDA Bappenas.",
  },
  {
    id: 10,
    title: "Jepang N5 (JLPT)",
    issuer: "RSP Sensei",
    year: "2026",
    image: "/certificates/Sensei.jpg",
    category: "Pelatihan", // 👈 Contoh kategori Pelatihan
    credential: "#",
    description:
      "Mempelajari dasar-dasar bahasa Jepang tingkat pemula (N5) sesuai dengan standar JLPT.",
  },
];
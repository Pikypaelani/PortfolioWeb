import CertificateHeader from "@/components/certificates/CertificateHeader";
import CertificateGrid from "@/components/certificates/CertificateGrid";

export default function Certificates() {
  return (
    // 👈 Diubah agar sama seperti Experience.tsx (tanpa kelas warna background)
    <section id="certificates" className="relative py-28">
      <div className="container-custom">
        {/* Bagian Judul & Deskripsi */}
        <CertificateHeader />

        {/* Bagian Grid Kartu Sertifikat */}
        <CertificateGrid />
      </div>
    </section>
  );
}
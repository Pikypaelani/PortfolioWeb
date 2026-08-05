import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    // 👈 Diubah agar sama seperti Experience.tsx (tanpa kelas warna background)
    <section id="contact" className="relative py-28">
      <div className="container-custom">
        {/* Judul Section */}
        <ContactHeader />

        {/* Layout Grid 2 Kolom */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
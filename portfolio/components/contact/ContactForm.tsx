"use client";

import { useState, useEffect, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, Phone, Tag, MessageSquare, Clock } from "lucide-react";
import Button from "@/components/ui/Button";

// 🛡️ Daftar Domain Email Sementara / Palsu yang Diblokir
const DISPOSABLE_EMAIL_DOMAINS = [
  "tempmail.com",
  "10minutemail.com",
  "yopmail.com",
  "mailinator.com",
  "dispostable.com",
  "guerrillamail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  // State untuk menghitung jeda waktu (Cooldown Timer)
  const [cooldown, setCooldown] = useState(0);

  // State penyimpan data input formulir (ditambahkan 'phone')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    botcheck: false,
  });

  // ⏱️ Efek Timer untuk menghitung mundur jeda waktu 60 detik
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  // 🛡️ 1. Validasi Format Email (Regex Ketat)
  const validateEmailFormat = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  // 🛡️ 2. Validasi Format Nomor Telepon (Opsional - Angka, +, -, spasi, min 8 digit)
  const validatePhoneFormat = (phone: string) => {
    if (!phone.trim()) return true; // Boleh kosong karena opsional
    const phoneRegex = /^[0-9+\s()-]{8,20}$/;
    return phoneRegex.test(phone.trim());
  };

  // 🛡️ 3. Validasi Email Sementara/Palsu (Disposable Email)
  const isDisposableEmail = (email: string) => {
    const domain = email.split("@")[1]?.toLowerCase();
    return DISPOSABLE_EMAIL_DOMAINS.includes(domain);
  };

  // 🛡️ 4. Validasi Spam Link / URL Berlebihan
  const hasTooManyLinks = (text: string) => {
    const urlRegex = /https?:\/\/[^\s]+/g;
    const matches = text.match(urlRegex);
    return matches ? matches.length > 2 : false;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Cek Jeda Waktu Pengiriman
    if (cooldown > 0) {
      setErrorMessage(`Mohon tunggu ${cooldown} detik lagi sebelum mengirim pesan baru.`);
      return;
    }

    // Cek Format Email
    if (!validateEmailFormat(formData.email)) {
      setErrorMessage("Format email tidak valid! Masukkan alamat email yang benar (contoh: nama@domain.com).");
      return;
    }

    // Cek Format Nomor Telepon
    if (!validatePhoneFormat(formData.phone)) {
      setErrorMessage("Format nomor HP/WhatsApp tidak valid! Masukkan angka saja (contoh: 08123456789 atau +628123456789).");
      return;
    }

    // Cek Email Sementara/Palsu
    if (isDisposableEmail(formData.email)) {
      setErrorMessage("Penggunaan email sementara (disposable email) tidak diizinkan. Gunakan email pribadi/resmi Anda.");
      return;
    }

    // Cek Spam Link pada Pesan
    if (hasTooManyLinks(formData.message)) {
      setErrorMessage("Pesan Anda mengandung terlalu banyak tautan/link. Maksimal diizinkan 2 link.");
      return;
    }

    setIsSubmitting(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setErrorMessage("Access Key belum terpasang di berkas .env.local!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Tidak dicantumkan", // Mengirimkan nomor HP ke Web3Forms
          subject: formData.subject,
          message: formData.message,
          botcheck: formData.botcheck,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", botcheck: false });
        
        // Aktifkan Jeda Waktu 60 detik
        setCooldown(60);

        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        setErrorMessage("Gagal mengirim pesan. Silakan periksa kembali data Anda.");
      }
    } catch (error) {
      setErrorMessage("Terjadi masalah jaringan. Silakan coba beberapa saat lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 sm:p-8 shadow-xl backdrop-blur-md transition-all dark:border-slate-800/80 dark:bg-slate-900/80">
      {/* Efek Pendar Latar Belakang */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Header Formulir */}
      <div className="relative mb-6">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Send a Message
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Isi formulir di bawah ini dan saya akan merespons sesegera mungkin.
        </p>
      </div>

      {/* Notifikasi Pesan Berhasil Terkirim */}
      {isSubmitted && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300 mb-6 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-50/80 p-4 text-emerald-700 backdrop-blur-sm dark:border-emerald-500/20 dark:bg-emerald-950/40 dark:text-emerald-400">
          <CheckCircle size={20} className="shrink-0 text-emerald-500" />
          <span className="text-sm font-medium">
            Thank you! Your message has been sent successfully.
          </span>
        </div>
      )}

      {/* Notifikasi Peringatan Error */}
      {errorMessage && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300 mb-6 flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-50/80 p-4 text-rose-700 backdrop-blur-sm dark:border-rose-500/20 dark:bg-rose-950/40 dark:text-rose-400">
          <AlertCircle size={20} className="shrink-0 text-rose-500" />
          <span className="text-sm font-medium">{errorMessage}</span>
        </div>
      )}

      {/* Formulir */}
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
        {/* Input Honeypot Tersembunyi (Anti-Bot) */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          checked={formData.botcheck}
          onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
        />

        {/* Input Nama */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            <User size={14} className="text-blue-500" />
            Your Name
          </label>
          <input
            type="text"
            required
            maxLength={50}
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/40 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:bg-slate-900 dark:focus:ring-blue-400/10"
          />
        </div>

        {/* Input Email */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            <Mail size={14} className="text-blue-500" />
            Your Email
          </label>
          <input
            type="email"
            required
            maxLength={80}
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/40 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:bg-slate-900 dark:focus:ring-blue-400/10"
          />
        </div>

        {/* Input Nomor HP / WhatsApp (Opsional) */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            <Phone size={14} className="text-blue-500" />
            Phone / WhatsApp Number <span className="text-slate-400 lowercase font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            maxLength={20}
            placeholder="+62 812 3456 7890"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/40 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:bg-slate-900 dark:focus:ring-blue-400/10"
          />
        </div>

        {/* Input Subjek */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            <Tag size={14} className="text-blue-500" />
            Subject
          </label>
          <input
            type="text"
            required
            maxLength={100}
            placeholder="Project Discussion"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/40 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:bg-slate-900 dark:focus:ring-blue-400/10"
          />
        </div>

        {/* Input Pesan */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              <MessageSquare size={14} className="text-blue-500" />
              Message
            </label>
            <span className="text-[10px] text-slate-400">
              {formData.message.length}/1000
            </span>
          </div>
          <textarea
            required
            rows={4}
            maxLength={1000}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/40 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:bg-slate-900 dark:focus:ring-blue-400/10"
          />
        </div>

        {/* Tombol Kirim */}
        <Button
          type="submit"
          disabled={isSubmitting || cooldown > 0}
          className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/35 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          {isSubmitting ? (
            <>
              <span>Sending...</span>
              <Loader2 size={16} className="animate-spin" />
            </>
          ) : cooldown > 0 ? (
            <>
              <Clock size={16} className="animate-pulse" />
              <span>Wait {cooldown}s</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
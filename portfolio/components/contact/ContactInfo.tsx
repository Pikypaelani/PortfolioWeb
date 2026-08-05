"use client";

import { Mail, Phone, ExternalLink } from "lucide-react";

// ==========================================
// 1. KOMPONEN IKON SVG KUSTOM (MEDIA SOSIAL)
// ==========================================

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function TiktokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.05.82.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.33 6.33 0 009.33 22a6.33 6.33 0 006.33-6.33V9.05a8.16 8.16 0 004.93 1.62V7.22a4.83 4.83 0 01-1-.53z" />
    </svg>
  );
}

// ==========================================
// 2. DATA STRUKTUR KONTAK & MEDIA SOSIAL
// ==========================================

const CONTACT_DETAILS = [
  {
    id: "email",
    icon: Mail,
    title: "Email",
    value: "Send a Direct Email",
    href: "mailto:pikypaelani.dev@gmail.com",
  },
  {
    id: "phone",
    icon: Phone,
    title: "WhatsApp / Phone",
    value: "Chat via WhatsApp",
    href: "https://wa.me/6281912292200",
  },
];

const SOCIAL_LINKS = [
  {
    id: "github",
    name: "GitHub Profile",
    href: "https://github.com/Pikypaelani",
    icon: GithubIcon,
  },
  {
    id: "linkedin",
    name: "LinkedIn Profile",
    href: "https://linkedin.com/in/piky-paelani/",
    icon: LinkedinIcon,
  },
  {
    id: "tiktok",
    name: "TikTok Profile",
    href: "https://tiktok.com/@piky_paelani",
    icon: TiktokIcon,
  },
];

// ==========================================
// 3. KOMPONEN UTAMA
// ==========================================

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* 🔄 Perulangan Kartu Kontak (Email & WhatsApp Saja) */}
      {CONTACT_DETAILS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Bagian Ikon & Teks Informasi */}
            <div className="flex items-center gap-5 overflow-hidden">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/40 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                <Icon size={26} />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.title}
                </h4>
                <p className="mt-1 truncate text-base font-semibold text-slate-800 dark:text-white sm:text-lg">
                  {item.value}
                </p>
              </div>
            </div>

            {/* Indikator Panah saat Ditunjuk Kursor */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 opacity-80 transition-all duration-200 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:opacity-100 dark:bg-slate-800 dark:text-slate-500 dark:group-hover:bg-slate-800 dark:group-hover:text-blue-400">
              <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        );
      })}

      {/* 🔄 Perulangan Media Sosial */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Follow & Connect
        </h4>
        <div className="mt-4 flex gap-4">
          {SOCIAL_LINKS.map((social) => {
            const SocialIcon = social.icon;
            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:text-slate-300 dark:hover:bg-blue-600"
              >
                <SocialIcon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
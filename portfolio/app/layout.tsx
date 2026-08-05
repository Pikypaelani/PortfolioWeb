import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Piky Paelani | Portfolio",
  description:
    "Portfolio resmi Piky Paelani - Fresh Graduate Teknik Informatika, Web Developer & Backend Developer.",
  keywords: [
    "Piky Paelani",
    "Portfolio",
    "Web Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "Laravel",
    "PHP",
    "Fresh Graduate",
  ],
  authors: [{ name: "Piky Paelani" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="bg-white text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
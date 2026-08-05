export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Piky Paelani. All rights reserved.
      </div>
    </footer>
  );
}
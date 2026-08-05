export default function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white shadow-lg">
        PP
      </div>

      <div>
        <h2 className="font-bold text-slate-800 dark:text-white">
          Piky Paelani
        </h2>

        <p className="text-xs text-slate-500">
          Web Developer
        </p>
      </div>
    </a>
  );
}
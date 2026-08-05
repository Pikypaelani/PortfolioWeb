type Props = {
  title: string;
  subtitle: string;
  badge?: string; // Menambahkan lencana/badge kecil di atas judul (opsional)
};

export default function SectionTitle({ title, subtitle, badge }: Props) {
  return (
    <div className="mb-14 text-center">
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
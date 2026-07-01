const stats = [
  ["۵۰۰۰+", "بیمار راضی"],
  ["۱۰+", "سال تجربه"],
  ["۹۸٪", "رضایت بیماران"],
  ["۲۴/۷", "اورژانس دندان"],
];

export default function Stats() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {stats.map(([num, label]) => (
        <div key={label} className="rounded-[2rem] bg-slate-950 p-8 text-center text-white">
          <strong className="block text-4xl font-black">{num}</strong>
          <span className="mt-2 block text-slate-300">{label}</span>
        </div>
      ))}
    </section>
  );
}
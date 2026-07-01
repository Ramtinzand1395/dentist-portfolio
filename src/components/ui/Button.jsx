export default function Button({ children, href = "#", variant = "primary" }) {
  const classes =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-[0_18px_42px_rgba(37,99,235,.28)] hover:bg-blue-700"
      : "border border-slate-200 bg-white text-slate-950 hover:border-blue-200 hover:bg-blue-50";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 ${classes}`}
    >
      {children}
    </a>
  );
}
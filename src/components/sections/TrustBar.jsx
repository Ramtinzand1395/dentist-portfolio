import { CheckCircle2 } from "lucide-react";
import { trustItems } from "../../data/siteData";

export default function TrustBar() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
      <div className="grid gap-3 rounded-[2rem] border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur md:grid-cols-4">
        {trustItems.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-2 rounded-3xl px-4 py-4 text-center font-extrabold text-slate-700"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
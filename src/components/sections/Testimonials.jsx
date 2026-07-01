import { Star } from "lucide-react";
import { reviews } from "../../data/siteData";
import SectionHeader from "../ui/SectionHeader";

export default function Testimonials() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="نظر بیماران" title="اعتمادی که با لبخند برمی‌گردد" />

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-5 leading-8 text-slate-600">{review.text}</p>

              <div className="mt-6 flex items-center gap-3">
                <img src={review.img} alt={review.name} className="h-12 w-12 rounded-full object-cover" />
                <strong className="text-slate-950">{review.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
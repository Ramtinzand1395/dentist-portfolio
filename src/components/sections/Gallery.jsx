import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

import DentistImage from "../../assets/دندنان 2.jpg";
import DentistImage2 from "../../assets/نمونه 1.jpg";
import DentistImage3 from "../../assets/نمنه 2.webp";

export default function Gallery() {
  const [value, setValue] = useState(52);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow="قبل و بعد" title="طراحی لبخند با نتیجه طبیعی" />

      <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl md:h-[560px]">
          <img
            src={DentistImage}
            alt="قبل از درمان"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute top-5 right-5 rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">
            قبل
          </div>

          <div className="absolute bottom-5 right-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-black text-white">
            بعد
          </div>

          <input
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            type="range"
            min="15"
            max="85"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label="مقایسه تصویر قبل و بعد"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {[DentistImage2, DentistImage3].map((src) => (
            <img
              key={src}
              src={src}
              alt="نمونه درمان دندان‌پزشکی"
              className="h-64 w-full rounded-[2rem] object-cover shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

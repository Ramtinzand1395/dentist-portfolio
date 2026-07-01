import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/siteData";
import SectionHeader from "../ui/SectionHeader";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow="سوالات رایج" title="پاسخ‌های کوتاه قبل از رزرو" />

      <div className="divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white px-6">
        {faqs.map(([question, answer], index) => (
          <div key={question}>
            <button
              onClick={() => setOpen(open === index ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 py-6 text-right font-black text-slate-950"
            >
              {question}
              <ChevronDown className={`h-5 w-5 shrink-0 transition ${open === index ? "rotate-180" : ""}`} />
            </button>

            {open === index && <p className="pb-6 leading-8 text-slate-500">{answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
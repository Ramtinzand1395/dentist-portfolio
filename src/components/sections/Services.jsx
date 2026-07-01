import { motion } from "framer-motion";
import { services } from "../../data/siteData";
import SectionHeader from "../ui/SectionHeader";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="خدمات تخصصی"
        title="همه نیازهای دندان‌پزشکی در یک تجربه لوکس و آرام"
        desc="از مراقبت روزمره تا طراحی لبخند، هر خدمت با دقت، شفافیت و استاندارد بالا ارائه می‌شود."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, desc, icon: Icon }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.5 }}
            className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,.055)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,.12)]"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600">
              <Icon className="h-7 w-7" />
            </div>

            <h3 className="text-xl font-black text-slate-950">{title}</h3>
            <p className="mt-3 min-h-16 leading-8 text-slate-500">{desc}</p>

            <button className="mt-5 text-sm font-black text-blue-600 transition group-hover:-translate-x-1">
              بیشتر بدانید
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
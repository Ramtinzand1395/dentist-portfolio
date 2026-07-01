import { motion } from "framer-motion";
import { doctors } from "../../data/siteData";
import SectionHeader from "../ui/SectionHeader";


export default function Doctors() {
  return (
    <section id="doctors" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow="تیم درمان" title="با پزشکان ما آشنا شوید" />

      <div className="grid gap-6 md:grid-cols-3">
        {doctors.map((doctor, index) => (
          <motion.article
            key={doctor.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.07)] transition hover:-translate-y-1"
          >
            <img src={doctor.img} alt={doctor.name} className="h-80 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-black text-slate-950">{doctor.name}</h3>
              <p className="mt-2 font-bold text-blue-600">{doctor.specialty}</p>
              <p className="mt-2 text-slate-500">{doctor.exp}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { benefits } from "../../data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
            چرا ما؟
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
            درمانی دقیق، آرام و مناسب بیماران خاص‌پسند
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-500">
            از اولین مشاوره تا پیگیری بعد از درمان، هر مرحله برای اعتماد، راحتی و نتیجه
            قابل پیش‌بینی طراحی شده است.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map(({ title, desc, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-[1.75rem] border border-white bg-white/75 p-6 shadow-sm backdrop-blur-xl"
            >
              <Icon className="h-7 w-7 text-green-500" />
              <h3 className="mt-5 text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-2 leading-8 text-slate-500">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
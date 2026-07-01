import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {desc && <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">{desc}</p>}
    </motion.div>
  );
}
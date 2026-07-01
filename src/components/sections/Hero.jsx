import { motion } from "framer-motion";
import { Calendar, Phone, Star } from "lucide-react";
import Button from "../ui/Button";
import DentistImage from "../../assets/دندان پزشک.webp";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,.14),transparent_32rem)]" />

      <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[.92fr_1.08fr] lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-600 shadow-sm ring-1 ring-slate-200">
            کلینیک دندان‌پزشکی مدرن خانواده
          </span>

          <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
           لبخندی زیبا از اینجا شروع میشه
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-500 md:text-xl">
            لبخندی سالم، زیبا و مطمئن با تیمی باتجربه، تجهیزات دیجیتال و تجربه‌ای آرام
            برای درمان‌های عمومی، زیبایی، ایمپلنت و اورژانس دندان.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#appointment">
              رزرو نوبت
              <Calendar className="h-5 w-5" />
            </Button>

            <Button href="tel:+982122223333" variant="secondary">
              تماس بگیرید
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2.25rem] bg-slate-100 shadow-[0_30px_90px_rgba(15,23,42,.14)]">
            <img
              src={DentistImage}
              alt="دندان‌پزشک در حال درمان بیمار"
              className="h-[430px] w-full object-cover md:h-[650px]"
            />
          </div>

          <div className="absolute bottom-5 right-5 rounded-3xl border border-white/70 bg-white/75 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <strong className="mt-2 block text-2xl font-black text-slate-950">۴.۹ از ۵</strong>
            <span className="text-sm font-semibold text-slate-500">براساس نظر بیماران</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
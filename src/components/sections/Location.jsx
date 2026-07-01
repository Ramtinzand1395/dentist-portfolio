import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
      <iframe
        title="موقعیت کلینیک"
        src="https://maps.google.com/maps?q=Tehran&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="h-[420px] w-full rounded-[2rem] border-0 shadow-xl"
        loading="lazy"
      />

      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black text-slate-950">موقعیت و تماس</h2>

        <div className="mt-7 space-y-5 text-slate-600">
          <p className="flex items-center gap-3">
            <Clock className="shrink-0 text-blue-600" />
            شنبه تا پنجشنبه، ۹ تا ۲۱
          </p>

          <p className="flex items-center gap-3">
            <Phone className="shrink-0 text-blue-600" />
            ۰۲۱-۲۲۲۲۳۳۳۳
          </p>

          <p className="flex items-center gap-3">
            <Mail className="shrink-0 text-blue-600" />
            hello@dentalluxe.ir
          </p>

          <p className="flex items-center gap-3">
            <MapPin className="shrink-0 text-blue-600" />
            تهران، ولیعصر، بالاتر از پارک‌وی
          </p>
        </div>
      </div>
    </section>
  );
}
import { Calendar } from "lucide-react";

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
            رزرو نوبت
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
            برای شروع لبخند جدیدتان آماده‌اید؟
          </h2>

          <p className="mt-5 text-lg leading-9 text-slate-500">
            فرم را تکمیل کنید تا تیم پذیرش در کوتاه‌ترین زمان با شما تماس بگیرد.
          </p>
        </div>

        <form className="grid gap-4 rounded-[2rem] border border-white bg-white/80 p-5 shadow-2xl backdrop-blur-xl md:grid-cols-2">
          <input className="input" placeholder="نام و نام خانوادگی" required />
          <input className="input" placeholder="شماره تماس" required />
          <input className="input" type="email" placeholder="ایمیل" />
          <input className="input" type="date" />

          <select className="input md:col-span-2" defaultValue="">
            <option value="" disabled>
              نوع درمان
            </option>
            <option>معاینه عمومی</option>
            <option>ایمپلنت</option>
            <option>زیبایی و لمینت</option>
            <option>اورژانس</option>
          </select>

          <textarea
            className="input min-h-32 resize-y md:col-span-2"
            placeholder="پیام شما"
          />

          <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-700 md:col-span-2">
            ثبت نوبت من
            <Calendar className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
}

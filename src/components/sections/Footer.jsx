// import {  , Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#hero" className="flex items-center gap-2 text-lg font-black text-blue-600">
          {/* <ShieldCheck className="h-6 w-6" /> */}
          دنتال لوکس
        </a>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-500">
          <a href="#services">خدمات</a>
          <a href="#appointment">رزرو نوبت</a>
          <a href="#faq">سوالات</a>
          <a href="#">حریم خصوصی</a>
        </div>

        <div className="flex gap-3 text-blue-600">
          {/* <Instagram />
          <Facebook /> 
          <Mail /> */}
        </div>
      </div>
    </footer>
  );
}
import { Calendar, Menu, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-2 text-lg font-black text-blue-600">
          <ShieldCheck className="h-6 w-6" />
          دنتال لوکس
        </a>

        <div className="hidden items-center gap-8 text-sm font-bold text-slate-600 lg:flex">
          <a href="#services" className="hover:text-blue-600">خدمات</a>
          <a href="#doctors" className="hover:text-blue-600">پزشکان</a>
          <a href="#gallery" className="hover:text-blue-600">نمونه‌کار</a>
          <a href="#faq" className="hover:text-blue-600">سوالات</a>
          <a href="#contact" className="hover:text-blue-600">تماس</a>
        </div>

        <div className="hidden lg:block">
          <Button href="#appointment">
            رزرو نوبت
            <Calendar className="h-4 w-4" />
          </Button>
        </div>

        <button className="rounded-full border border-slate-200 p-3 lg:hidden" aria-label="باز کردن منو">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
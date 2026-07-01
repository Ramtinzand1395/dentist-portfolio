import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Doctors from "./components/sections/Doctors";
import Testimonials from "./components/sections/Testimonials";
import Gallery from "./components/sections/Gallery";
import Stats from "./components/sections/Stats";
import FAQ from "./components/sections/FAQ";
import Appointment from "./components/sections/Appointment";
import Location from "./components/sections/Location";
import Footer from "./components/sections/Footer";
import { Calendar } from "lucide-react";

export default function App() {
  return (
    <main dir="rtl" className="min-h-screen bg-white  text-slate-950">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Gallery />
      <Stats />
      <FAQ />
      <Appointment />
      <Location />
      <Footer />

      <a
        href="#appointment"
        className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(37,99,235,.35)] transition hover:-translate-y-1 hover:bg-blue-700"
      >
        <Calendar className="h-5 w-5" />
        رزرو نوبت
      </a>
    </main>
  );
}

import {
  Activity,
  Baby,
  BadgeDollarSign,
  Calendar,
  HeartPulse,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  WandSparkles,
  Zap,
} from "lucide-react";

import DentistImage from "../assets/doctor1.png";
import DentistImage2 from "../assets/doctor2.png";
import DentistImage3 from "../assets/doctor3.png";

export const services = [
  {
    title: "دندان‌پزشکی عمومی",
    desc: "چکاپ، جرم‌گیری و مراقبت کامل سلامت دهان.",
    icon: Smile,
  },
  {
    title: "ایمپلنت دندان",
    desc: "جایگزینی دقیق، ماندگار و طبیعی برای دندان ازدست‌رفته.",
    icon: Sparkles,
  },
  {
    title: "بلیچینگ دندان",
    desc: "سفیدسازی حرفه‌ای با نتیجه روشن و طبیعی.",
    icon: WandSparkles,
  },
  {
    title: "ارتودنسی",
    desc: "اصلاح نامرتبی دندان‌ها با روش‌های مدرن.",
    icon: Activity,
  },
  {
    title: "لمینت و ونیر",
    desc: "طراحی لبخند لوکس، هماهنگ و طبیعی.",
    icon: Star,
  },
  {
    title: "درمان ریشه",
    desc: "عصب‌کشی دقیق با تمرکز بر کاهش درد.",
    icon: Stethoscope,
  },
  {
    title: "اورژانس دندان",
    desc: "رسیدگی سریع به درد، شکستگی و عفونت.",
    icon: Zap,
  },
  {
    title: "دندان‌پزشکی کودکان",
    desc: "محیطی آرام، امن و صبورانه برای کودکان.",
    icon: Baby,
  },
];

export const trustItems = [
  "دندان‌پزشکان دارای مجوز",
  "۱۰+ سال تجربه",
  "تجهیزات مدرن",
  "نظرات ۵ ستاره",
];

export const benefits = [
  {
    title: "تجهیزات مدرن",
    desc: "اسکن دیجیتال، تصویربرداری دقیق و درمان‌های کم‌تهاجمی.",
    icon: Sparkles,
  },
  {
    title: "پزشکان باتجربه",
    desc: "تیم تخصصی در درمان‌های زیبایی، عمومی و ایمپلنت.",
    icon: ShieldCheck,
  },
  {
    title: "درمان بدون درد",
    desc: "تجربه‌ای آرام با کنترل درد و اضطراب بیمار.",
    icon: HeartPulse,
  },
  {
    title: "قیمت‌گذاری شفاف",
    desc: "طرح درمان روشن و قابل برنامه‌ریزی.",
    icon: BadgeDollarSign,
  },
  {
    title: "نوبت‌دهی منعطف",
    desc: "مناسب خانواده‌ها، افراد شاغل و شرایط اورژانسی.",
    icon: Calendar,
  },
  {
    title: "تیم خوش‌برخورد",
    desc: "همراهی صبورانه از اولین تماس تا پایان درمان.",
    icon: Users,
  },
];

export const doctors = [
  {
    name: "دکتر نیلوفر راد",
    specialty: "زیبایی و طراحی لبخند",
    exp: "۱۲ سال تجربه",
    img: DentistImage2,
  },
  {
    name: "دکتر آرمان کاویانی",
    specialty: "ایمپلنت و جراحی لثه",
    exp: "۱۴ سال تجربه",
    img: DentistImage,
  },
  {
    name: "دکتر سارا مهر",
    specialty: "ارتودنسی و کودکان",
    exp: "۱۰ سال تجربه",
    img: DentistImage3,
  },
];

export const reviews = [
  {
    name: "مریم احمدی",
    text: "از مشاوره تا درمان، همه‌چیز بسیار حرفه‌ای و آرام بود. نتیجه لمینت‌ها فوق‌العاده طبیعی شد.",
    img: "https://i.pravatar.cc/160?img=32",
  },
  {
    name: "رضا کریمی",
    text: "برای ایمپلنت مراجعه کردم. توضیحات پزشک کامل بود و فرآیند درمان بدون استرس پیش رفت.",
    img: "https://i.pravatar.cc/160?img=12",
  },
  {
    name: "الهام نوری",
    text: "برخورد تیم با کودک من عالی بود. فضای کلینیک تمیز، مدرن و بسیار قابل اعتماد است.",
    img: "https://i.pravatar.cc/160?img=47",
  },
];

export const faqs = [
  [
    "هر چند وقت یک‌بار باید چکاپ انجام دهم؟",
    "معمولاً هر ۶ ماه یک‌بار برای معاینه، جرم‌گیری و پیشگیری توصیه می‌شود.",
  ],
  [
    "آیا درمان ایمپلنت درد دارد؟",
    "با بی‌حسی مناسب و تکنیک‌های مدرن، درد درمان معمولاً بسیار کنترل‌شده است.",
  ],
  [
    "بلیچینگ برای دندان مضر است؟",
    "اگر توسط پزشک و با مواد استاندارد انجام شود، روشی ایمن و مؤثر است.",
  ],
  [
    "برای درد ناگهانی دندان چه کار کنم؟",
    "با کلینیک تماس بگیرید تا نوبت اورژانسی در سریع‌ترین زمان هماهنگ شود.",
  ],
];

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative flex items-center pt-32 pb-24 md:pb-32">
      {/* Background Image with Dark Overlay - Banjarmasin Waters */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/kuching.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Text Content - Left Aligned */}
        <div className="max-w-3xl text-left">
          <h2 className="text-primary-400 font-bold text-sm tracking-wider uppercase mb-5 border-l-4 border-primary-400 pl-3">
            Inovasi Perairan & Struktur
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Komitmen Kami untuk <br className="hidden md:block" />
            <span className="text-white">Infrastruktur Kalsel</span>
          </h1>
          <p className="text-lg text-slate-200 mb-10 font-medium leading-relaxed max-w-2xl">
            {companyData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/layanan" 
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold tracking-wide rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              MULAI PROYEK
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { servicesData } from "@/data/services";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceList({ limit }: { limit?: number }) {
  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="py-20 bg-slate-50 md:snap-start md:min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Layanan Kami</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Expert Services for Your Project</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">Kami menyediakan solusi teknis menyeluruh mulai dari analisis, perencanaan, hingga pendampingan di lapangan untuk menjamin keamanan konstruksi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => {
            // Dynamically get the icon component from lucide-react
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.FileQuestion;

            return (
              <div key={service.id} className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary-200 transition-all shadow-sm hover:shadow-xl group">
                <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href="/layanan" className="inline-flex items-center text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <Link 
              href="/layanan" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
            >
              Lihat Semua Layanan
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

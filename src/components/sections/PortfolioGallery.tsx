import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function PortfolioGallery({ limit }: { limit?: number }) {
  const displayPortfolio = limit ? portfolioData.slice(0, limit) : portfolioData;

  return (
    <section className="py-20 bg-white md:snap-start md:min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Portofolio Proyek</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Rekam Jejak Keberhasilan Kami</h3>
            <p className="text-slate-600">Berbagai proyek skala nasional yang telah kami selesaikan dengan menjunjung tinggi standar kualitas dan keamanan.</p>
          </div>
          {limit && (
            <Link href="/portofolio" className="hidden md:inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors">
              Lihat Semua Proyek <ArrowRight size={20} className="ml-2" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPortfolio.map((project) => (
            <div key={project.id} className="group rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.client}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{project.title}</h4>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{project.description}</p>
                <div className="flex items-center text-slate-500 text-sm pt-4 border-t border-slate-200 mt-auto">
                  <MapPin size={16} className="mr-2 text-primary-500" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center md:hidden">
            <Link href="/portofolio" className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors">
              Lihat Semua Proyek <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

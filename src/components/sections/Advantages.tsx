import { Clock, ShieldCheck, Award } from "lucide-react";
import { companyData } from "@/data/company";

export default function Advantages() {
  const advantages = [
    {
      title: "Proses Cepat & Efisien",
      description: "Manajemen proses terstruktur memastikan setiap tahapan berjalan tepat waktu sesuai target proyek Anda.",
      icon: <Clock size={36} className="text-primary-600 mb-4" />
    },
    {
      title: "Kepatuhan Standar (SNI/AISC)",
      description: "Seluruh desain dan analisa kami mengacu pada standar nasional dan internasional yang diakui dan terstandarisasi.",
      icon: <ShieldCheck size={36} className="text-primary-600 mb-4" />
    },
    {
      title: "Tim Tersertifikasi",
      description: "Didukung oleh para ahli teknik tersertifikasi dan berpengalaman lebih dari 15 tahun di industri konstruksi.",
      icon: <Award size={36} className="text-primary-600 mb-4" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Keunggulan Kami</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Mengapa Memilih Kalsel Civil?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-100/50 transition-all text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                {adv.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{adv.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{adv.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-8 md:pt-0">
              <p className="text-5xl font-black text-slate-900 mb-2">{companyData.stats.experienceYears}<span className="text-primary-500">+</span></p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Tahun Pengalaman</p>
            </div>
            <div className="pt-8 md:pt-0">
              <p className="text-5xl font-black text-slate-900 mb-2">{companyData.stats.completedProjects}<span className="text-primary-500">+</span></p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Proyek Selesai</p>
            </div>
            <div className="pt-8 md:pt-0">
              <p className="text-5xl font-black text-slate-900 mb-2">{companyData.stats.happyClients}<span className="text-primary-500">%</span></p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Klien Puas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { companyData } from "@/data/company";
import { teamData } from "@/data/team";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <div className="bg-primary-900 text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl rounded md:text-5xl font-extrabold mb-4">Tentang Kami</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg leading-relaxed">
            Mitra konsultan teknik kepercayaan Anda dengan komitmen pada standar keamanan dan kualitas internasional.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Sejarah & Perjalanan Kami</h2>
            <div className="prose text-slate-600 leading-relaxed space-y-4">
              <p>{companyData.history}</p>
              <p>Misi utama kami adalah menyediakan solusi teknik yang komprehensif, mengutamakan keselamatan publik, dan menerapkan teknologi inovatif dalam setiap proyek infrastruktur sipil.</p>
            </div>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary-600 mt-1 shrink-0" />
                <span className="text-slate-700 font-medium">Berdiri sejak 2008, lebih dari 15 tahun pengalaman.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary-600 mt-1 shrink-0" />
                <span className="text-slate-700 font-medium">Telah menyelesaikan ratusan proyek skala nasional.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary-600 mt-1 shrink-0" />
                <span className="text-slate-700 font-medium">Fokus pada zero-incident dan compliance standar teknis.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop')" }}
            ></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Tim Ahli Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Didukung oleh para engineer profesional dan berdedikasi tinggi.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
              <div 
                className="h-64 bg-slate-200 bg-cover bg-center"
                style={{ backgroundImage: `url('${member.image}')` }}
              ></div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold tracking-wider uppercase text-primary-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { companyData } from "@/data/company";
import { Building2, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded bg-primary-600 text-white">
                <Building2 size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                KALSEL <span className="text-primary-500">CIVIL</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              {companyData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Pranala Cepat</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/tentang-kami" className="text-sm hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/layanan" className="text-sm hover:text-white transition-colors">Layanan</Link></li>
              <li><Link href="/portofolio" className="text-sm hover:text-white transition-colors">Portofolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Layanan Utama</h3>
            <ul className="space-y-3">
              <li className="text-sm">Analisis Struktural</li>
              <li className="text-sm">Desain & Detailing Baja</li>
              <li className="text-sm">Inspeksi & QC</li>
              <li className="text-sm">Manajemen Proyek</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span className="text-sm">{companyData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span className="text-sm">{companyData.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span className="text-sm">{companyData.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {companyData.name}. Semua Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

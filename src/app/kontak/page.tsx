"use client";

import { useState } from "react";
import { companyData } from "@/data/company";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission since this is a static site without backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // Reset form or handle actual static form provider (like formspree) here
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="bg-primary-900 text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hubungi Kami</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Ada pertanyaan atau ingin berdiskusi mengenai proyek Anda? Tim kami siap membantu.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Informasi Kontak</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Alamat Kantor</h3>
                  <p className="text-slate-600">{companyData.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Telepon</h3>
                  <p className="text-slate-600">{companyData.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600">{companyData.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Jam Operasional</h3>
                  <p className="text-slate-600">{companyData.workingHours}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-2">Punya kebutuhan mendesak?</h3>
              <p className="text-sm text-slate-600 mb-4">Hubungi WhatsApp tim sales engineering kami untuk respons lebih cepat.</p>
              <a href={`https://wa.me/6281234567890`} target="_blank" rel="noreferrer" className="inline-flex px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors">
                Chat via WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h2>
            {success ? (
              <div className="p-6 bg-green-50 text-green-700 rounded-lg flex items-center gap-3 border border-green-100">
                <CheckCircleIcon />
                <div>
                  <h4 className="font-bold">Pesan Terkirim!</h4>
                  <p className="text-sm mt-1">Terima kasih, tim kami akan segera menghubungi Anda kembali.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap *</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                    <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">No. HP / WhatsApp</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="0812..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Pesan & Kebutuhan Proyek *</label>
                  <textarea required rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all resize-none" placeholder="Jelaskan detail proyek atau kebutuhan konsultasi Anda..."></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple success icon SVG
function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

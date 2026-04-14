import { faqData } from "@/data/faq";
import { AccordionItem } from "@/components/ui/Accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FAQ - Kalsel Civil Consultant',
  description: 'Pertanyaan yang sering diajukan (FAQ) mengenai pelayanan dan pengerjaan proyek di Kalsel Civil Consultant.',
};

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-500 mb-4 tracking-tight">Have Questions?</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Hubungi kami untuk mendapatkan jawaban cepat dan solusi terbaik<br className="hidden md:block" /> untuk kebutuhan perhitungan dan desain struktur infrastruktur Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mt-12 bg-gray-50 border border-gray-100 shadow-sm">
          {/* FAQ Accordion Left */}
          <div className="border-r border-gray-200">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[300px] lg:h-auto min-h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/mock_engineer.png')" }} 
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

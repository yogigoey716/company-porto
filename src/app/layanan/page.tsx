import ServiceList from "@/components/sections/ServiceList";

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-primary-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Layanan Utama</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Solusi teknik komprehensif mulai dari desain, analisis, hingga pengawasan.
          </p>
        </div>
      </div>

      {/* We reuse the ServiceList component but without limit so it shows all */}
      <ServiceList />
    </div>
  );
}

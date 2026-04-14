import PortfolioGallery from "@/components/sections/PortfolioGallery";

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-primary-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Portofolio Kami</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Rekam jejak dan bukti nyata dedikasi kami pada industri konstruksi.
          </p>
        </div>
      </div>

      <PortfolioGallery />
    </div>
  );
}

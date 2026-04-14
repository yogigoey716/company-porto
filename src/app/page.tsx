import Hero from "@/components/sections/Hero";
import Advantages from "@/components/sections/Advantages";
import ServiceList from "@/components/sections/ServiceList";
import PortfolioGallery from "@/components/sections/PortfolioGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <ServiceList limit={3} />
      <PortfolioGallery limit={3} />
    </>
  );
}

import Hero from "@/components/sections/Hero";
import Advantages from "@/components/sections/Advantages";
import ServiceList from "@/components/sections/ServiceList";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import SnapEnabler from "@/components/ui/SnapEnabler";

export default function Home() {
  return (
    <>
      <SnapEnabler />
      <Hero />
      <Advantages />
      <ServiceList limit={3} />
      <PortfolioGallery limit={3} />
    </>
  );
}

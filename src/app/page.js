// import Image from "next/image";

import AboutComponent from "@/components/AboutComponent";
import CatalogueSection from "@/components/CatalogueSection";
import CatalogueSwiperSection from "@/components/CatalogueSwiperSection";
import CompanySection from "@/components/CompanySection";
import CustomerSection from "@/components/CustomerSection";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      <CatalogueSection />
      <CatalogueSwiperSection />
      <CustomerSection />
    </>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     Interior Design <br/>
    //     The previous main
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     The previous footer
    //   </footer>
    // </div>
  );
}

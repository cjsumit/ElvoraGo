// import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import AISolutionsSection from "@/components/AISolutionsSection";
import StudentSection from "@/components/StudentSection";
import ConsultingSection from "@/components/ConsultingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <AISolutionsSection />
      <StudentSection />
      <ConsultingSection />
      <Footer />
    </div>
  );
};

export default Index;

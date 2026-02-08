import AboutSection from "@/components/(HomePageComponent)/AboutSection";
import BackgroundSection from "@/components/(HomePageComponent)/backgroundSection";
import FaqSection from "@/components/(HomePageComponent)/faqSection";
import HeroSection from "@/components/(HomePageComponent)/heroSection";
import HomeFooter from "@/components/(HomePageComponent)/homeFooter";
import IntroSection from "@/components/(HomePageComponent)/IntroSection";
import SpecialtiesSection from "@/components/(HomePageComponent)/specialtiesSection";
import SupportSection from "@/components/(HomePageComponent)/supportSection";
import OurOfficeSection from "@/components/(HomePageComponent)/ourOfficeSection";

export default function Home() {
  return (
    <div className="max-w-screen bg-[#fbf8f4]">
      <HeroSection />
      <IntroSection />
      <SpecialtiesSection/>
      <SupportSection/>
      <AboutSection/>
      <OurOfficeSection/>
      <FaqSection/>
      <BackgroundSection/>
      <HomeFooter/>
    </div>
  );
}

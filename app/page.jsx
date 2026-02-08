import AboutSection from "@/components/(HomePageComponent)/AboutSection";
import BackgroundSection from "@/components/(HomePageComponent)/backgroundSection";
import FaqSection from "@/components/(HomePageComponent)/faqSection";
import HeroSection from "@/components/(HomePageComponent)/heroSection";
import HomeFooter from "@/components/(HomePageComponent)/homeFooter";
import IntroSection from "@/components/(HomePageComponent)/IntroSection";
import SpecialtiesSection from "@/components/(HomePageComponent)/specialtiesSection";
import SupportSection from "@/components/(HomePageComponent)/supportSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <SpecialtiesSection/>
      <SupportSection/>
      <AboutSection/>
      <FaqSection/>
      <BackgroundSection/>
      <HomeFooter/>
    </div>
  );
}

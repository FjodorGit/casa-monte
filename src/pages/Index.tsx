import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import QuickFacts from "@/components/QuickFacts";
import IntroSection from "@/components/IntroSection";
import VillaSection from "@/components/VillaSection";
import SurroundingSection from "@/components/SurroundingSection";
import GuestGuide from "@/components/GuestGuide";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <div className="font-body">
    <SiteHeader />
    <HeroSection />
    <QuickFacts />
    <IntroSection />
    <VillaSection />
    <SurroundingSection />
    <GuestGuide />
    <SiteFooter />
  </div>
);

export default Index;

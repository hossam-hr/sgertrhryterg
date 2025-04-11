
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Navbar } from "@/components/Navbar";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const Index = () => {
  const { isRTL } = useContext(LanguageContext);
  
  return (
    <div className={`flex flex-col min-h-screen ${isRTL ? "rtl" : "ltr"}`}>
      <Navbar />
      <HeroGeometric 
        badge="Leading Tech in Kuwait"
        title1="Innovating" 
        title2="Kuwait's Digital Future" 
      />
    </div>
  );
};

export default Index;

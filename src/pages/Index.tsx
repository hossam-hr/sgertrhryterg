
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
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

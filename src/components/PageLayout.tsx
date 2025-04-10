
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#030303]">
      <Navbar />
      <AnimatedBackground>
        <div className="relative z-10 container mx-auto pt-32 pb-20 px-4">
          {children}
        </div>
      </AnimatedBackground>
    </div>
  );
};

export default PageLayout;

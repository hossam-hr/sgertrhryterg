
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Reusing the ElegantShape component for consistency
const NavShape = ({
  delay = 0,
  width = 150,
  height = 40,
  rotate = 0,
  gradient = "from-white/[0.08]",
  className,
}: {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: rotate - 5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate,
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "px-3 py-2 text-sm font-medium text-white/70 hover:text-white",
        "transition-colors duration-200 rounded-md",
        "hover:bg-white/[0.05]"
      )}
    >
      {children}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#030303]/60 backdrop-blur-md border-b border-white/[0.08]">
      <div className="relative overflow-hidden h-16">
        {/* Floating shapes in the navbar */}
        <NavShape
          delay={0.3}
          width={120}
          height={25}
          rotate={8}
          gradient="from-indigo-500/[0.15]"
          className="left-[5%] top-[20%]"
        />
        <NavShape
          delay={0.5}
          width={80}
          height={20}
          rotate={-12}
          gradient="from-rose-500/[0.15]"
          className="right-[15%] top-[60%]"
        />
        <NavShape
          delay={0.4}
          width={60}
          height={15}
          rotate={-5}
          gradient="from-cyan-500/[0.15]"
          className="left-[30%] top-[40%]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                  TechKuwait
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/privacy">Privacy</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

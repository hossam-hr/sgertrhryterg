
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
    <nav className="fixed w-full z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
    </nav>
  );
};

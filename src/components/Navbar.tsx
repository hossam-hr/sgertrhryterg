
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const { isRTL } = useContext(LanguageContext);
  
  return (
    <Link 
      to={to} 
      className={cn(
        "px-3 py-2 text-sm font-medium text-white/70 hover:text-white",
        "transition-colors duration-200 rounded-md",
        "hover:bg-white/[0.05]",
        isRTL ? "ml-4" : "mr-4"
      )}
    >
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const { isRTL, t } = useContext(LanguageContext);
  
  return (
    <nav className="fixed w-full z-50">
      <div className="relative h-16">
        {/* Static geometric shape background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className={cn(
              "absolute inset-0 rounded-b-3xl",
              "bg-gradient-to-r from-indigo-500/20 via-transparent to-rose-500/20",
              "backdrop-blur-md border-b-2 border-white/10",
              "shadow-[0_8px_32px_0_rgba(255,255,255,0.08)]"
            )}
          />
        </div>

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
              <div className={cn("flex items-baseline", isRTL ? "flex-row-reverse" : "")}>
                <NavLink to="/">{t('home')}</NavLink>
                <NavLink to="/services">{t('services')}</NavLink>
                <NavLink to="/about">{t('about')}</NavLink>
                <NavLink to="/contact">{t('contact')}</NavLink>
                <NavLink to="/privacy">{t('privacy')}</NavLink>
                <NavLink to="/agreement">{t('agreement')}</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

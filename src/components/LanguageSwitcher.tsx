
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { isRTL, toggleLanguage, t } = useContext(LanguageContext);
  
  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className={cn(
        "fixed bottom-8 z-50 p-3 rounded-full",
        "bg-gradient-to-r from-indigo-500/40 to-rose-500/40",
        "backdrop-blur-lg border-2 border-white/10",
        "shadow-[0_8px_32px_0_rgba(255,255,255,0.08)]",
        "flex items-center justify-center space-x-2",
        "hover:border-white/20 transition-all",
        isRTL ? "left-8" : "right-8"
      )}
      aria-label={isRTL ? t("switchToEnglish") : t("switchToArabic")}
    >
      <Globe className="h-5 w-5 text-white" />
      <span className="text-sm font-medium text-white mr-1">
        {isRTL ? "EN" : "عربي"}
      </span>
    </motion.button>
  );
};

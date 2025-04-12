
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define translations
const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    agreement: "Agreement",
    deleteData: "Request Data Deletion",
    submit: "Submit",
    email: "Email",
    reason: "Reason",
    fullName: "Full Name",
    switchToArabic: "Switch to Arabic",
    switchToEnglish: "Switch to English",
    requestSubmitted: "Your request has been submitted",
    termsAgreement: "Terms of Agreement",
    messageSent: "Message sent!",
    messageResponse: "We'll get back to you as soon as possible.",
    name: "Name",
    message: "Message",
    sendMessage: "Send Message",
    address: "Address",
    phone: "Phone",
    ourTeam: "Our Team",
    ourValues: "Our Values",
    ourExpertise: "Our Expertise",
    ourImpact: "Our Impact",
    aboutTechKuwait: "About TechKuwait",
    aboutCompanyIntro: "Pioneering innovation and technological excellence in the heart of Kuwait since 2010.",
    ourServices: "Our Services",
    servicesDescription: "We offer a comprehensive range of technology solutions to help your business thrive in the digital era.",
    contactUs: "Contact Us",
    contactDescription: "Ready to transform your digital journey? Let's connect and explore how we can help."
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    about: "عن الشركة",
    contact: "اتصل بنا",
    privacy: "الخصوصية",
    agreement: "شروط الاستخدام",
    deleteData: "طلب حذف البيانات",
    submit: "إرسال",
    email: "البريد الإلكتروني",
    reason: "السبب",
    fullName: "الاسم الكامل",
    switchToArabic: "تحويل للعربية",
    switchToEnglish: "تحويل للإنجليزية",
    requestSubmitted: "تم إرسال طلبك",
    termsAgreement: "شروط الاستخدام",
    messageSent: "تم إرسال الرسالة!",
    messageResponse: "سنرد عليك في أقرب وقت ممكن.",
    name: "الاسم",
    message: "الرسالة",
    sendMessage: "إرسال الرسالة",
    address: "العنوان",
    phone: "الهاتف",
    ourTeam: "فريقنا",
    ourValues: "قيمنا",
    ourExpertise: "خبرتنا",
    ourImpact: "تأثيرنا",
    aboutTechKuwait: "عن تك كويت",
    aboutCompanyIntro: "رائدة الابتكار والتميز التكنولوجي في قلب الكويت منذ عام 2010.",
    ourServices: "خدماتنا",
    servicesDescription: "نقدم مجموعة شاملة من الحلول التكنولوجية لمساعدة عملك على الازدهار في العصر الرقمي.",
    contactUs: "اتصل بنا",
    contactDescription: "جاهز لتحويل رحلتك الرقمية؟ لنتواصل ونستكشف كيف يمكننا المساعدة."
  }
};

interface LanguageContextType {
  language: string;
  isRTL: boolean;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  isRTL: false,
  toggleLanguage: () => {},
  t: (key: string) => key,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });
  
  const isRTL = language === "ar";
  
  useEffect(() => {
    // Save language preference
    localStorage.setItem("language", language);
    
    // Set document direction
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
    
    // Add/remove RTL class for global styling
    if (isRTL) {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [language, isRTL]);
  
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === "en" ? "ar" : "en");
  };
  
  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations["en"]] || key;
  };
  
  const contextValue = {
    language,
    isRTL,
    toggleLanguage,
    t,
  };
  
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

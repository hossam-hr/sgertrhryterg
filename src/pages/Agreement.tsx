
import { motion } from "framer-motion";
import PageLayout, { fadeUpVariants } from "@/components/PageLayout";
import { FileText } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const AgreementPage = () => {
  const { t, isRTL } = useContext(LanguageContext);

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/20 rounded-full mb-6">
            <FileText className="h-8 w-8 text-indigo-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {t("termsAgreement")}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            {isRTL 
              ? "الشروط والأحكام لاستخدام خدمات تك كويت. يرجى قراءة هذه البنود بعناية."
              : "Terms and conditions for using TechKuwait services. Please read these terms carefully."
            }
          </p>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className={cn("space-y-8 text-white/60", isRTL ? "text-right" : "text-left")}
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "1. قبول الشروط" : "1. Acceptance of Terms"}
            </h2>
            <p className="mb-4">
              {isRTL 
                ? "باستخدام موقع تك كويت، أنت توافق على الالتزام بهذه الشروط والأحكام وسياسة الخصوصية الخاصة بنا. إذا كنت لا توافق على أي من هذه الشروط، فيرجى عدم استخدام خدماتنا."
                : "By using TechKuwait website, you agree to be bound by these terms and conditions and our privacy policy. If you do not agree to any of these terms, please do not use our services."
              }
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "2. استخدام الخدمات" : "2. Use of Services"}
            </h2>
            <p className="mb-4">
              {isRTL 
                ? "تمنحك تك كويت ترخيصًا محدودًا وغير حصري وغير قابل للتحويل لاستخدام خدماتنا وفقًا لهذه الشروط. لا يجوز لك استخدام خدماتنا لأي أغراض غير قانونية."
                : "TechKuwait grants you a limited, non-exclusive, non-transferable license to use our services in accordance with these terms. You may not use our services for any illegal purposes."
              }
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "3. حسابات المستخدمين" : "3. User Accounts"}
            </h2>
            <p className="mb-4">
              {isRTL 
                ? "أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور. يجب أن تبلغنا فورًا بأي استخدام غير مصرح به لحسابك."
                : "You are responsible for maintaining the confidentiality of your account information and password. You must notify us immediately of any unauthorized use of your account."
              }
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "4. الملكية الفكرية" : "4. Intellectual Property"}
            </h2>
            <p>
              {isRTL 
                ? "جميع المحتويات على موقعنا، بما في ذلك على سبيل المثال لا الحصر، النصوص والرسومات والشعارات والصور، هي ملكية لشركة تك كويت أو مرخصيها وتخضع لحماية حقوق النشر والعلامات التجارية."
                : "All content on our site, including but not limited to text, graphics, logos, and images, is the property of TechKuwait or its licensors and is protected by copyright and trademark laws."
              }
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "5. إنهاء الخدمة" : "5. Termination"}
            </h2>
            <p>
              {isRTL 
                ? "يحق لشركة تك كويت إنهاء أو تعليق وصولك إلى الخدمات، بدون سابق إنذار، لأي سبب من الأسباب، بما في ذلك على سبيل المثال لا الحصر، انتهاك هذه الشروط."
                : "TechKuwait reserves the right to terminate or suspend your access to the services, without prior notice, for any reason whatsoever, including without limitation, breach of these terms."
              }
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/40">
              {isRTL 
                ? "آخر تحديث: 10 أبريل 2025"
                : "Last updated: April 10, 2025"
              }
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default AgreementPage;

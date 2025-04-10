import { motion } from "framer-motion";
import PageLayout, { fadeUpVariants } from "@/components/PageLayout";
import { Shield } from "lucide-react";
import { useContext, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const PrivacyPage = () => {
  const { t, isRTL } = useContext(LanguageContext);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reason: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Form submitted:", formData);
    toast.success(t("requestSubmitted"));
    setShowForm(false);
    setFormData({
      fullName: "",
      email: "",
      reason: ""
    });
  };

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
            <Shield className="h-8 w-8 text-indigo-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {t("privacy")}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            {isRTL 
              ? "في تك كويت، نأخذ خصوصيتك على محمل الجد. توضح هذه السياسة كيفية جمعنا واستخدامنا وحماية بياناتك."
              : "At TechKuwait, we take your privacy seriously. This policy outlines how we collect, use, and protect your data."
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
              {isRTL ? "1. المعلومات التي نجمعها" : "1. Information We Collect"}
            </h2>
            <p className="mb-4">
              {isRTL
                ? "نجمع المعلومات التي تقدمها لنا مباشرة، مثل عندما تنشئ حسابًا، أو تملأ نموذجًا، أو تتواصل معنا. قد يشمل ذلك:"
                : "We collect information that you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include:"
              }
            </p>
            <ul className={cn("list-disc pl-6 space-y-2", isRTL ? "pr-6 pl-0" : "")}>
              <li>{isRTL ? "معلومات الاتصال (الاسم، عنوان البريد الإلكتروني، رقم الهاتف)" : "Contact information (name, email address, phone number)"}</li>
              <li>{isRTL ? "بيانات اعتماد الحساب" : "Account credentials"}</li>
              <li>{isRTL ? "معلومات الدفع" : "Payment information"}</li>
              <li>{isRTL ? "المراسلات التي ترسلها إلينا" : "Communications you send to us"}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "2. كيف نستخدم معلوماتك" : "2. How We Use Your Information"}
            </h2>
            <p className="mb-4">
              {isRTL
                ? "نستخدم المعلومات التي نجمعها لأغراض مختلفة، بما في ذلك:"
                : "We use the information we collect for various purposes, including:"
              }
            </p>
            <ul className={cn("list-disc pl-6 space-y-2", isRTL ? "pr-6 pl-0" : "")}>
              <li>{isRTL ? "توفير خدماتنا وصيانتها" : "Providing and maintaining our services"}</li>
              <li>{isRTL ? "معالجة المعاملات" : "Processing transactions"}</li>
              <li>{isRTL ? "إرسال إشعارات فنية وتحديثات ورسائل دعم إليك" : "Sending you technical notices, updates, and support messages"}</li>
              <li>{isRTL ? "الرد على تعليقاتك وأسئلتك" : "Responding to your comments and questions"}</li>
              <li>{isRTL ? "تحسين خدماتنا" : "Improving our services"}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "3. أمن البيانات" : "3. Data Security"}
            </h2>
            <p>
              {isRTL
                ? "ننفيذ تدابير فنية وتنظيمية مناسبة لحماية أمن معلوماتك الشخصية. ومع ذلك، يرجى العلم بأنه لا توجد تدابير أمنية مثالية أو غير قابلة للاختراق، ولا يمكننا ضمان الأمن المطلق لبياناتك."
                : "We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the absolute security of your data."
              }
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "4. حقوقك" : "4. Your Rights"}
            </h2>
            <p className="mb-4">
              {isRTL
                ? "اعتمادًا على موقعك، قد تتمتع بحقوق معينة فيما يتعلق بمعلوماتك الشخصية، مثل:"
                : "Depending on your location, you may have certain rights regarding your personal information, such as:"
              }
            </p>
            <ul className={cn("list-disc pl-6 space-y-2", isRTL ? "pr-6 pl-0" : "")}>
              <li>{isRTL ? "الحق في الوصول إلى معلوماتك الشخصية" : "The right to access your personal information"}</li>
              <li>{isRTL ? "الحق في تصحيح المعلومات غير الدقيقة" : "The right to correct inaccurate information"}</li>
              <li>{isRTL ? "الحق في حذف معلوماتك" : "The right to delete your information"}</li>
              <li>{isRTL ? "الحق في تقييد أو الاعتراض على المعالجة" : "The right to restrict or object to processing"}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "5. تغييرات في هذه السياسة" : "5. Changes to This Policy"}
            </h2>
            <p>
              {isRTL
                ? "يجوز لنا تحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى. سنقوم بإعلامك بأي تغييرات جوهرية عن طريق نشر السياسة المحدثة على موقعنا أو بوسائل أخرى كما هو مطلوب بموجب القانون."
                : "We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website or by other means as required by law."
              }
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              {isRTL ? "6. اتصل بنا" : "6. Contact Us"}
            </h2>
            <p className="mb-4">
              {isRTL
                ? "إذا كانت لديك أي أسئلة أو مخاوف بشأن ممارسات الخصوصية لدينا أو هذه السياسة، يرجى الاتصال بنا على privacy@techkuwait.com أو من خلال معلومات الاتصال المقدمة على موقعنا."
                : "If you have any questions or concerns about our privacy practices or this policy, please contact us at privacy@techkuwait.com or through the contact information provided on our website."
              }
            </p>
            
            <div className="mt-8">
              <Button 
                onClick={() => setShowForm(!showForm)} 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10 hover:text-white"
              >
                {t("deleteData")}
              </Button>
              
              {showForm && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-medium text-white mb-4">{t("deleteData")}</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-white/70 mb-1">
                        {t("fullName")}
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                        {t("email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-white/70 mb-1">
                        {t("reason")}
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      {t("submit")}
                    </Button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/40">
              {isRTL ? "آخر تحديث: 10 أبريل 2025" : "Last updated: April 10, 2025"}
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPage;

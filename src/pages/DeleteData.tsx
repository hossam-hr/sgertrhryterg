
import { motion } from "framer-motion";
import PageLayout, { fadeUpVariants } from "@/components/PageLayout";
import { useContext, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const DeleteDataPage = () => {
  const { t, isRTL } = useContext(LanguageContext);
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
    setFormData({
      fullName: "",
      email: "",
      reason: ""
    });
  };

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto">
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
              {t("deleteData")}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            {isRTL
              ? "استخدم هذا النموذج لطلب حذف بياناتك الشخصية من أنظمتنا وفقًا لسياسة الخصوصية لدينا."
              : "Use this form to request deletion of your personal data from our systems in accordance with our privacy policy."
            }
          </p>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
        >
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
                rows={5}
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
      </div>
    </PageLayout>
  );
};

export default DeleteDataPage;

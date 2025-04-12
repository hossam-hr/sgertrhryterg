
import { motion } from "framer-motion";
import PageLayout, { fadeUpVariants } from "@/components/PageLayout";
import { Code, Database, Globe, Cpu, LineChart, Shield } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      custom={index + 1}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] transition-colors"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-indigo-500/20 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>
      <p className="text-white/50">{description}</p>
    </motion.div>
  );
};

const ServicesPage = () => {
  const { t, isRTL } = useContext(LanguageContext);
  
  const services = [
    {
      icon: <Code className="h-6 w-6 text-indigo-400" />,
      title: isRTL ? "تطوير البرمجيات المخصصة" : "Custom Software Development",
      description: isRTL 
        ? "حلول برمجية مخصصة مصممة خصيصًا لاحتياجات عملك، من تطبيقات المؤسسات إلى تطبيقات الجوال."
        : "Tailored software solutions designed specifically for your business needs, from enterprise applications to mobile apps."
    },
    {
      icon: <Globe className="h-6 w-6 text-rose-400" />,
      title: isRTL ? "تطوير الويب" : "Web Development",
      description: isRTL
        ? "مواقع ويب وتطبيقات ويب متجاوبة وحديثة مبنية بأحدث التقنيات لتحقيق أقصى أداء وتفاعل للمستخدم."
        : "Responsive, modern websites and web applications built with the latest technologies for maximum performance and user engagement."
    },
    {
      icon: <Database className="h-6 w-6 text-amber-400" />,
      title: isRTL ? "حلول سحابية" : "Cloud Solutions",
      description: isRTL
        ? "بنية تحتية سحابية قابلة للتوسع، وخدمات الترحيل، والإدارة لتحسين عمليات تكنولوجيا المعلومات وتقليل التكاليف."
        : "Scalable cloud infrastructure, migration services, and management to optimize your IT operations and reduce costs."
    },
    {
      icon: <Cpu className="h-6 w-6 text-cyan-400" />,
      title: isRTL ? "الذكاء الاصطناعي والتعلم الآلي" : "AI & Machine Learning",
      description: isRTL
        ? "حلول ذكاء اصطناعي متقدمة تساعد عملك على أتمتة العمليات، واكتساب رؤى جديدة، واتخاذ قرارات مستندة إلى البيانات."
        : "Advanced AI solutions that help your business automate processes, gain insights, and make data-driven decisions."
    },
    {
      icon: <LineChart className="h-6 w-6 text-green-400" />,
      title: isRTL ? "التحول الرقمي" : "Digital Transformation",
      description: isRTL
        ? "استراتيجيات التحول الرقمي الشاملة التي تساعد مؤسستك على التكيف والازدهار في العصر الرقمي."
        : "End-to-end digital transformation strategies that help your organization adapt and thrive in the digital age."
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: isRTL ? "الأمن السيبراني" : "Cybersecurity",
      description: isRTL
        ? "حلول أمنية شاملة لحماية عملك من التهديدات وضمان الامتثال للوائح."
        : "Comprehensive security solutions to protect your business from threats and ensure compliance with regulations."
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {isRTL ? "خدماتنا" : "Our Services"}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            {isRTL 
              ? "نقدم مجموعة شاملة من الحلول التكنولوجية لمساعدة عملك على الازدهار في العصر الرقمي."
              : "We offer a comprehensive range of technology solutions to help your business thrive in the digital era."
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;

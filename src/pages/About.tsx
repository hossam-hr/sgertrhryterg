
import { motion } from "framer-motion";
import PageLayout, { fadeUpVariants } from "@/components/PageLayout";
import { ShieldCheck, Users, Code, Zap } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const AboutPage = () => {
  const { isRTL } = useContext(LanguageContext);
  
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {isRTL ? "عن تك كويت" : "About TechKuwait"}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            {isRTL 
              ? "رائدة الابتكار والتميز التكنولوجي في قلب الكويت منذ عام 2010."
              : "Pioneering innovation and technological excellence in the heart of Kuwait since 2010."
            }
          </p>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-white/60 mb-6">
              {isRTL 
                ? "تك كويت هي شركة تكنولوجيا رائدة مقرها مدينة الكويت. نحن متخصصون في تطوير حلول برمجية مبتكرة، واستشارات تكنولوجيا المعلومات، وخدمات التحول الرقمي للشركات في جميع أنحاء الشرق الأوسط. فريقنا من المهندسين والمصممين الخبراء مكرس لدفع حدود ما هو ممكن بالتكنولوجيا."
                : "TechKuwait is a leading technology company based in Kuwait City. We specialize in developing innovative software solutions, IT consulting, and digital transformation services for businesses across the Middle East. Our team of expert engineers and designers is dedicated to pushing the boundaries of what's possible with technology."
              }
            </p>
            <p className="text-white/60">
              {isRTL 
                ? "تأسست برؤية لتسريع مستقبل الكويت الرقمي، لقد نمونا لنصبح أحد أكثر شركاء التكنولوجيا موثوقية في المنطقة. التزامنا بالتميز والابتكار ساعد مئات الشركات على تحويل عملياتها والوصول إلى آفاق جديدة في العصر الرقمي."
                : "Founded with a vision to accelerate Kuwait's digital future, we've grown to become one of the region's most trusted technology partners. Our commitment to excellence and innovation has helped hundreds of businesses transform their operations and reach new heights in the digital age."
              }
            </p>
          </div>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-500/20 rounded-lg mr-4">
                <Users className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-medium text-white">{isRTL ? "فريقنا" : "Our Team"}</h3>
            </div>
            <p className="text-white/50">
              {isRTL 
                ? "يجمع فريقنا المتنوع أفضل العقول في مجال التكنولوجيا، بخبرات تمتد لتشمل تطوير البرمجيات والتصميم والذكاء الاصطناعي والمزيد."
                : "Our diverse team brings together the brightest minds in technology, with expertise spanning software development, design, AI, and more."
              }
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-rose-500/20 rounded-lg mr-4">
                <ShieldCheck className="h-6 w-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-medium text-white">{isRTL ? "قيمنا" : "Our Values"}</h3>
            </div>
            <p className="text-white/50">
              {isRTL 
                ? "نؤمن بالنزاهة والابتكار ونجاح العملاء. هذه القيم الأساسية توجه كل قرار نتخذه وكل حل نبتكره."
                : "We believe in integrity, innovation, and client success. These core values guide every decision we make and every solution we create."
              }
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-amber-500/20 rounded-lg mr-4">
                <Code className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-medium text-white">{isRTL ? "خبرتنا" : "Our Expertise"}</h3>
            </div>
            <p className="text-white/50">
              {isRTL 
                ? "من تطوير البرمجيات المخصصة إلى الحلول السحابية والتحول الرقمي، تمتد خبرتنا التقنية لتشمل الطيف الكامل من خدمات تكنولوجيا المعلومات."
                : "From custom software development to cloud solutions and digital transformation, our technical expertise spans the full spectrum of IT services."
              }
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-cyan-500/20 rounded-lg mr-4">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white">{isRTL ? "تأثيرنا" : "Our Impact"}</h3>
            </div>
            <p className="text-white/50">
              {isRTL 
                ? "نحن فخورون بالمساهمة في النظام البيئي التكنولوجي المتنامي في الكويت، ومساعدة الشركات والمؤسسات على تبني الابتكار الرقمي."
                : "We're proud to contribute to Kuwait's growing tech ecosystem, helping businesses and organizations embrace digital innovation."
              }
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;


import { motion } from "framer-motion";
import PageLayout, { fadeUpVariants } from "@/components/PageLayout";
import { ShieldCheck, Users, Code, Zap } from "lucide-react";

const AboutPage = () => {
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
              About TechKuwait
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            Pioneering innovation and technological excellence in the heart of Kuwait since 2010.
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
              TechKuwait is a leading technology company based in Kuwait City. 
              We specialize in developing innovative software solutions, 
              IT consulting, and digital transformation services for businesses 
              across the Middle East. Our team of expert engineers and designers 
              is dedicated to pushing the boundaries of what's possible with technology.
            </p>
            <p className="text-white/60">
              Founded with a vision to accelerate Kuwait's digital future, 
              we've grown to become one of the region's most trusted technology partners. 
              Our commitment to excellence and innovation has helped hundreds of businesses 
              transform their operations and reach new heights in the digital age.
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
              <h3 className="text-xl font-medium text-white">Our Team</h3>
            </div>
            <p className="text-white/50">
              Our diverse team brings together the brightest minds in technology, 
              with expertise spanning software development, design, AI, and more.
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-rose-500/20 rounded-lg mr-4">
                <ShieldCheck className="h-6 w-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Our Values</h3>
            </div>
            <p className="text-white/50">
              We believe in integrity, innovation, and client success. 
              These core values guide every decision we make and every solution we create.
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-amber-500/20 rounded-lg mr-4">
                <Code className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Our Expertise</h3>
            </div>
            <p className="text-white/50">
              From custom software development to cloud solutions and digital 
              transformation, our technical expertise spans the full spectrum of IT services.
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-cyan-500/20 rounded-lg mr-4">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white">Our Impact</h3>
            </div>
            <p className="text-white/50">
              We're proud to contribute to Kuwait's growing tech ecosystem, 
              helping businesses and organizations embrace digital innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;

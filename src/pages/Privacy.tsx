
import { motion } from "framer-motion";
import PageLayout, { fadeUpVariants } from "@/components/PageLayout";
import { Shield } from "lucide-react";

const PrivacyPage = () => {
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
              Privacy Policy
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            At TechKuwait, we take your privacy seriously. This policy outlines how we collect, use, and protect your data.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-white/60"
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, such as when you create an account, 
              fill out a form, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communications you send to us</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Processing transactions</li>
              <li>Sending you technical notices, updates, and support messages</li>
              <li>Responding to your comments and questions</li>
              <li>Improving our services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect 
              the security of your personal information. However, please be aware that 
              no security measures are perfect or impenetrable, and we cannot guarantee 
              the absolute security of your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your information</li>
              <li>The right to restrict or object to processing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect changes in our 
              practices or for other operational, legal, or regulatory reasons. We will notify 
              you of any material changes by posting the updated policy on our website or by 
              other means as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
            <p>
              If you have any questions or concerns about our privacy practices or this policy, 
              please contact us at privacy@techkuwait.com or through the contact information 
              provided on our website.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/40">
              Last updated: April 10, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-10"
  >
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <div className="text-gray-300 leading-relaxed space-y-4">{children}</div>
  </motion.div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-3 ml-1">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00FF7F] shrink-0 shadow-[0_0_6px_rgba(0,255,127,0.6)]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - FastTrack Rides</title>
        <meta
          name="description"
          content="Privacy Policy for FastTrack Rides. Learn how we collect, use, and protect your personal data and location information."
        />
        <meta property="og:title" content="Privacy Policy - FastTrack Rides" />
        <meta property="og:description" content="Privacy Policy for FastTrack Rides. Learn how we collect, use, and protect your personal data and location information." />
        <meta property="og:url" content="https://fasttrackapp.biz/privacy" />
        <meta property="og:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - FastTrack Rides" />
        <meta name="twitter:description" content="Privacy Policy for FastTrack Rides. Learn how we collect, use, and protect your personal data." />
        <meta name="twitter:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <link rel="canonical" href="https://fasttrackapp.biz/privacy" />
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Header bar */}
        <div className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#00FF7F]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 h-16 flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-[#00FF7F] transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#00FF7F]/10 border border-[#00FF7F]/30 rounded-full px-4 py-1.5 mb-6">
              <Lock size={16} className="text-[#00FF7F]" />
              <span className="text-[#00FF7F] text-sm font-medium">Privacy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 neon-text-green">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Effective Date: February 6, 2026 &middot; Last Updated: February 6, 2026
            </p>
          </motion.div>

          {/* Content */}
          <div className="bg-[#1a1a1a]/60 backdrop-blur-md rounded-2xl border border-[#2a2a2a] p-6 sm:p-10"
            style={{ boxShadow: '0 0 30px rgba(0, 255, 127, 0.05)' }}
          >
            <Section title="Introduction">
              <p>
                FastTrack Rides, Inc. ("the Company," "we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us through the FastTrack Rides mobile application ("the App"). This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data.
              </p>
              <p>
                By downloading, accessing, or using the App, you consent to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use the App.
              </p>
            </Section>

            <Section title="Information We Collect" delay={0.05}>
              <p>We collect the following categories of information:</p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Account Information</h3>
              <BulletList items={[
                'Full name, email address, and password when you create an account.',
                'Profile information you choose to provide, such as a display name or avatar.',
              ]} />

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Location and GPS Data</h3>
              <BulletList items={[
                'Real-time GPS coordinates during active timing sessions and drive tracking.',
                'Speed, acceleration, distance, and route data derived from GPS signals.',
                'Location data is collected only while the App is actively in use for timing or tracking — we do not track your location in the background.',
              ]} />

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Vehicle Information</h3>
              <BulletList items={[
                'Vehicle details you add to your garage, such as make, model, year, and trim.',
              ]} />

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Performance Data</h3>
              <BulletList items={[
                'Acceleration times (e.g., 0–60 mph, 0–100 mph), quarter-mile and half-mile results, and other performance metrics recorded during timing sessions.',
                'Historical run data and personal bests.',
              ]} />

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Device and Usage Information</h3>
              <BulletList items={[
                'Device type, operating system version, and unique device identifiers.',
                'App usage patterns, feature interactions, and crash/error logs to help us improve the App.',
              ]} />
            </Section>

            <Section title="How We Use Your Information" delay={0.1}>
              <p>We use the information we collect to:</p>
              <BulletList items={[
                'Provide, operate, and maintain the App and its features, including timing, tracking, garage management, and leaderboards.',
                'Create and manage your account and authenticate your identity.',
                'Record and display your performance data, run history, and personal bests.',
                'Enable social features such as sharing runs and participating in leaderboards.',
                'Improve the App\'s accuracy, performance, and user experience.',
                'Send you important service-related communications (e.g., account verification, security alerts, and policy updates).',
                'Comply with legal obligations and enforce our Terms of Service.',
              ]} />
            </Section>

            <Section title="How We Share Your Information" delay={0.15}>
              <p>We do not sell your personal information. We may share your data in the following limited circumstances:</p>
              <BulletList items={[
                'With other users: If you participate in leaderboards or share runs, your display name, vehicle information, and performance data may be visible to other users you have added as friends.',
                'Service providers: We use third-party services (such as cloud hosting and analytics providers) that process data on our behalf to help operate and improve the App. These providers are contractually obligated to protect your data.',
                'Legal requirements: We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect the rights, safety, or property of FastTrack Rides, our users, or the public.',
                'Business transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.',
              ]} />
            </Section>

            <Section title="Data Storage and Security" delay={0.2}>
              <p>
                Your data is stored securely using industry-standard cloud infrastructure. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                While we strive to protect your data, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security, but we are committed to promptly addressing any security incidents.
              </p>
            </Section>

            <Section title="Data Retention" delay={0.25}>
              <p>
                We retain your personal information for as long as your account is active or as needed to provide you with the App's services. If you delete your account, we will remove your personal data within a reasonable timeframe, except where retention is required by law or for legitimate business purposes (such as resolving disputes or enforcing our Terms).
              </p>
              <p>
                Anonymized or aggregated data that cannot identify you may be retained indefinitely for analytics and product improvement.
              </p>
            </Section>

            <Section title="Your Rights and Choices" delay={0.3}>
              <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
              <BulletList items={[
                'Access: Request a copy of the personal data we hold about you.',
                'Correction: Request that we correct inaccurate or incomplete data.',
                'Deletion: Request that we delete your personal data, subject to legal obligations.',
                'Portability: Request a copy of your data in a portable format.',
                'Opt-out: You may disable location services for the App through your device settings at any time. Note that this will limit the App\'s core functionality.',
              ]} />
              <p>
                To exercise any of these rights, please contact us at the email address below. We will respond to your request within a reasonable timeframe and in accordance with applicable law.
              </p>
            </Section>

            <Section title="Children's Privacy" delay={0.35}>
              <p>
                The App is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a user under 18, we will take steps to delete that information promptly.
              </p>
            </Section>

            <Section title="Third-Party Links and Services" delay={0.4}>
              <p>
                The App may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </Section>

            <Section title="Changes to This Policy" delay={0.45}>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make changes, we will revise the "Last Updated" date at the top of this page. Continued use of the App after any changes constitutes your acceptance of the updated policy.
              </p>
            </Section>

            <Section title="Contact Information" delay={0.5}>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
              <div className="mt-2">
                <p>FastTrack Rides, Inc.</p>
                <a
                  href="mailto:support@fasttrackapp.biz"
                  className="inline-flex items-center gap-2 text-[#00FF7F] hover:text-[#00D9FF] transition-colors"
                >
                  <Mail size={16} />
                  support@fasttrackapp.biz
                </a>
              </div>
            </Section>
          </div>

          {/* Back link at bottom */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF7F] transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;

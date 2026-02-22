import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Shield } from 'lucide-react';
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

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - FastTrack Rides</title>
        <meta
          name="description"
          content="Terms of Service for FastTrack Rides, the precision GPS acceleration timer app for iOS. Read our terms for using the app responsibly."
        />
        <meta property="og:title" content="Terms of Service - FastTrack Rides" />
        <meta property="og:description" content="Terms of Service for FastTrack Rides, the precision GPS acceleration timer app for iOS." />
        <meta property="og:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <meta property="og:url" content="https://fasttrackapp.biz/terms" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service - FastTrack Rides" />
        <meta name="twitter:description" content="Terms of Service for FastTrack Rides, the precision GPS acceleration timer app for iOS." />
        <meta name="twitter:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <link rel="canonical" href="https://fasttrackapp.biz/terms" />
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
              <Shield size={16} className="text-[#00FF7F]" />
              <span className="text-[#00FF7F] text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 neon-text-green">
              Terms of Service
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
                Welcome to FastTrack Rides ("the App"), provided by FastTrack Rides, Inc. ("the Company," "we," "our," or "us"). The App is designed to measure and analyze vehicle performance metrics — including acceleration times (e.g., 0–60 mph, 0–100 mph), quarter-mile and half-mile times, and other driving performance data. It may also include drive tracking and historical performance features.
              </p>
              <p>
                By downloading, accessing, or using the App, you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not access or use the App.
              </p>
            </Section>

            <Section title="Eligibility" delay={0.05}>
              <p>
                You must be at least 18 years old (or the age of legal majority in your jurisdiction) and capable of entering into a binding contract to use the App. By using the App, you confirm that you meet these requirements.
              </p>
            </Section>

            <Section title="User Responsibilities" delay={0.1}>
              <p>
                You agree to use FastTrack Rides only for lawful and responsible purposes and in compliance with all applicable vehicle, traffic, and safety laws. Specifically:
              </p>
              <BulletList items={[
                'You must not operate the App in a way that distracts you or impairs your ability to drive safely.',
                'You should only conduct performance testing in controlled, safe, and legal environments such as closed tracks or private roads.',
                'You acknowledge that all driving and testing activities are undertaken at your own risk.',
                'Data and speed measurements provided by FastTrack Rides are for informational and entertainment purposes only and are not guaranteed to be precise for professional or legal use.',
                'You are solely responsible for ensuring that your vehicle is in a safe and appropriate condition for testing.',
                'Failure to follow applicable laws or safety guidelines may result in suspension or termination of your access to the App.',
              ]} />
            </Section>

            <Section title="Liability Disclaimer" delay={0.15}>
              <div className="bg-[#FF006E]/10 border border-[#FF006E]/30 rounded-xl p-4 mb-4">
                <p className="text-[#FF006E] font-semibold text-sm uppercase tracking-wide">
                  Important: Please read this section carefully.
                </p>
              </div>
              <p>
                To the fullest extent permitted by law, FastTrack Rides, Inc., its affiliates, officers, directors, employees, agents, and licensors will not be liable for any losses, damages, injuries, claims, or expenses — whether direct, indirect, incidental, consequential, or punitive — arising out of or in connection with:
              </p>
              <BulletList items={[
                'The use, misuse, or inability to use the App;',
                'Any accident, traffic violation, property damage, injury, or death occurring while using or as a result of using the App;',
                'Any reliance on or use of the App\'s data, including speed, acceleration, or performance metrics; or',
                'Errors, inaccuracies, or technical issues within the App.',
              ]} />
              <p>
                You acknowledge that performance testing inherently involves risk, including potential damage to property and personal injury. By using FastTrack Rides, you expressly agree to release, waive, and hold harmless the Company from any and all liability arising from or related to your use of the App.
              </p>
              <p>
                Some jurisdictions may not allow the exclusion or limitation of certain types of damages. In those cases, FastTrack Rides' liability will be limited to the maximum extent permitted by law.
              </p>
            </Section>

            <Section title="Indemnification" delay={0.2}>
              <p>
                You agree to indemnify and hold harmless FastTrack Rides, Inc., its affiliates, officers, employees, licensors, and agents from and against any and all losses, damages, claims, liabilities, expenses, or costs (including reasonable attorneys' fees) arising out of or related to:
              </p>
              <BulletList items={[
                'Your use or misuse of the App;',
                'Your violation of these Terms; or',
                'Your violation of any law, regulation, or third-party right.',
              ]} />
              <p>
                This obligation will survive the termination of these Terms and your use of the App.
              </p>
            </Section>

            <Section title="Intellectual Property" delay={0.25}>
              <p>
                All content, features, and intellectual property of FastTrack Rides — including but not limited to software, graphics, text, trademarks, and logos — are owned or licensed by FastTrack Rides, Inc. and protected under applicable intellectual property laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes. You may not modify, reproduce, distribute, reverse-engineer, or create derivative works without prior written consent from the Company.
              </p>
            </Section>

            <Section title="Privacy" delay={0.3}>
              <p>
                Your use of FastTrack Rides is governed by our Privacy Policy, which outlines how we collect, use, and safeguard personal data. By using the App, you consent to the data practices described in that policy.
              </p>
            </Section>

            <Section title="Service Availability and Changes" delay={0.35}>
              <p>
                FastTrack Rides reserves the right to modify, update, suspend, or discontinue the App (in whole or in part) at any time, with or without notice. The Company shall not be liable for any modification or discontinuation of the App or its features.
              </p>
            </Section>

            <Section title="Termination" delay={0.4}>
              <p>
                FastTrack Rides may suspend or terminate your access at its sole discretion, without prior notice, if you violate these Terms, misuse the App, or engage in conduct that could harm the Company or other users.
              </p>
              <p>
                Upon termination, all rights granted to you under these Terms will immediately end.
              </p>
            </Section>

            <Section title="Governing Law" delay={0.45}>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to conflict of law principles. You agree that any disputes or legal proceedings relating to these Terms shall be brought exclusively in the state or federal courts located in Palm Beach County, Florida.
              </p>
            </Section>

            <Section title="Updates to Terms" delay={0.5}>
              <p>
                FastTrack Rides may update these Terms from time to time. When updates occur, we will revise the "Last Updated" date above. Continued use of the App after such changes constitutes your acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="Contact Information" delay={0.55}>
              <p>FastTrack Rides, Inc.</p>
              <a
                href="mailto:support@fasttrackapp.biz"
                className="inline-flex items-center gap-2 text-[#00FF7F] hover:text-[#00D9FF] transition-colors"
              >
                <Mail size={16} />
                support@fasttrackapp.biz
              </a>
            </Section>

            {/* Acknowledgment banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-[#2a2a2a]"
            >
              <div className="bg-[#00FF7F]/5 border border-[#00FF7F]/20 rounded-xl p-6"
                style={{ boxShadow: '0 0 20px rgba(0, 255, 127, 0.08)' }}
              >
                <p className="text-sm text-gray-300 leading-relaxed">
                  By creating an account or using FastTrack Rides, you acknowledge that you have read and understood these Terms of Service, agree to be bound by them, are at least 18 years of age (or the age of legal majority in your jurisdiction), will use FastTrack Rides responsibly and in compliance with all applicable laws, understand and accept the risks associated with vehicle performance testing, and release FastTrack Rides, Inc. from all liability arising from your use of the App.
                </p>
              </div>
            </motion.div>
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

export default TermsOfServicePage;

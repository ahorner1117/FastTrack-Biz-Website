import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Car, Camera, Wrench, Trophy, FileText, LayoutGrid, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { trackEvent } from '@/lib/analytics';

const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-[#1a1a1a] backdrop-blur-md p-8 rounded-xl border-2 border-[#2a2a2a] hover:border-[#00FF7F] transition-all duration-300"
    style={{ boxShadow: '0 0 15px rgba(0, 255, 127, 0.1)' }}
  >
    <div className="text-[#00FF7F] mb-4 drop-shadow-[0_0_8px_rgba(0,255,127,0.6)]">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const MOD_CATEGORIES = [
  'Exhaust', 'Tune', 'Downpipes', 'Cold Air Intake', 'Intercooler',
  'Turbo/Supercharger', 'Headers', 'Suspension', 'Wheels & Tires',
  'Weight Reduction', 'Nitrous', 'Fuel System',
];

const CrossLinks = () => (
  <div className="py-12 border-t border-[#2a2a2a]">
    <p className="text-center text-gray-400 mb-6 text-sm font-medium uppercase tracking-widest">Explore More Features</p>
    <div className="flex flex-wrap justify-center gap-3">
      {[
        { to: '/timing', label: 'Precision Timing' },
        { to: '/community', label: 'Community' },
        { to: '/leaderboards', label: 'Leaderboards' },
      ].map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="px-5 py-2 rounded-full border border-[#00FF7F]/40 text-[#00FF7F] text-sm font-medium hover:bg-[#00FF7F]/10 hover:border-[#00FF7F] transition-all duration-200"
          onClick={() => trackEvent('cross_link_click', { source: 'garage_page', destination: to })}
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);

const GaragePage = () => {
  return (
    <>
      <Helmet>
        <title>Vehicle Garage &amp; Build Tracker | FastTrack</title>
        <meta name="description" content="Manage your vehicles, document every modification, and track performance history for each build in your FastTrack garage." />
        <meta property="og:title" content="Vehicle Garage & Build Tracker | FastTrack" />
        <meta property="og:description" content="Manage your vehicles, document every modification, and track performance history for each build in your FastTrack garage." />
        <meta property="og:url" content="https://fasttrackapp.biz/garage" />
        <meta property="og:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vehicle Garage & Build Tracker | FastTrack" />
        <meta name="twitter:description" content="Manage your vehicles, document every modification, and track performance history for each build in your FastTrack garage." />
        <meta name="twitter:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <link rel="canonical" href="https://fasttrackapp.biz/garage" />
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />

        <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-24 pb-16">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF7F] transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#00FF7F]/10 border border-[#00FF7F]/30 rounded-full px-4 py-1.5 mb-6">
              <Car size={14} className="text-[#00FF7F]" />
              <span className="text-[#00FF7F] text-xs font-semibold tracking-widest uppercase">Your Digital Garage</span>
            </div>
            <div className="flex justify-center mb-6">
              <Car size={72} className="text-[#00FF7F] drop-shadow-[0_0_20px_rgba(0,255,127,0.5)]" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 neon-text-green leading-tight">
              Build Your Collection.<br />Track Every Mod.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your build's history lives in FastTrack. Document every modification, correlate upgrades with time improvements, and maintain a complete record of each vehicle you own.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">Garage Features</h2>
            <p className="text-gray-400 text-center mb-10">Everything you need to manage your fleet and builds.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Car size={36} />, title: 'Vehicle Profiles', description: 'Store make, model, year, trim, and specs for every car in your collection.' },
              { icon: <Camera size={36} />, title: 'Photo Gallery', description: 'Attach photos to your vehicle profile and watch your build evolve over time.' },
              { icon: <Wrench size={36} />, title: 'Mod Tracker', description: 'Log every upgrade with date, notes, and category. Know exactly what state your build is in.' },
              { icon: <Trophy size={36} />, title: 'Performance Stats', description: 'View all personal bests and run history tied directly to each individual vehicle.' },
              { icon: <FileText size={36} />, title: 'Build Notes', description: 'Free-form notes for each vehicle — track maintenance, future plans, or dyno results.' },
              { icon: <LayoutGrid size={36} />, title: 'Multi-Vehicle', description: 'No limits on how many vehicles you add. Switch between them instantly during sessions.' },
            ].map((card, i) => (
              <FeatureCard key={i} delay={i * 0.08} {...card} />
            ))}
          </div>

          {/* Modification Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">12 Upgrade Categories</h2>
            <p className="text-gray-400 text-center mb-10">Organize every modification by type so your build history stays clear.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {MOD_CATEGORIES.map((cat, i) => (
                <span
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                    i % 2 === 0
                      ? 'border-[#00FF7F]/50 text-[#00FF7F] bg-[#00FF7F]/5'
                      : 'border-[#FF006E]/50 text-[#FF006E] bg-[#FF006E]/5'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Every Build Deserves a Record */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20 bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-10 text-center"
            style={{ boxShadow: '0 0 30px rgba(0, 255, 127, 0.05)' }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Every Build Deserves a Record</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              The best way to understand your car's progress is to track it systematically. When each mod is logged with a date and category, you can look back at your run history and see exactly which upgrade moved the needle — and by how much. FastTrack's garage turns your build into data.
            </p>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Add Your First Vehicle</h2>
            <p className="text-gray-400 mb-8">Download FastTrack and start building your digital garage today.</p>
            <a
              href="https://apps.apple.com/app/fasttrack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00FF7F] text-black font-bold px-10 py-4 rounded-xl text-lg hover:bg-[#00D9FF] transition-colors duration-300 shadow-[0_0_20px_rgba(0,255,127,0.4)]"
              onClick={() => trackEvent('cta_click', { source: 'garage_page' })}
            >
              <Download size={22} />
              Download on the App Store
            </a>
          </motion.div>

          <CrossLinks />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default GaragePage;

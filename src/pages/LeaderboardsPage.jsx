import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Crown, Globe, Users, Flag, TrendingUp, Car, Zap, Download } from 'lucide-react';
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

const MOCK_ROWS = [
  { rank: 1, rankColor: '#FFD700', username: 'SpeedDemon_88', vehicle: '2023 BMW M3 Competition', time: '3.41s' },
  { rank: 2, rankColor: '#C0C0C0', username: 'TurboMike', vehicle: '2022 Porsche 911 GT3', time: '3.47s' },
  { rank: 3, rankColor: '#CD7F32', username: 'NightRunner', vehicle: '2021 Tesla Model S Plaid', time: '3.52s' },
];

const CrossLinks = () => (
  <div className="py-12 border-t border-[#2a2a2a]">
    <p className="text-center text-gray-400 mb-6 text-sm font-medium uppercase tracking-widest">Explore More Features</p>
    <div className="flex flex-wrap justify-center gap-3">
      {[
        { to: '/timing', label: 'Precision Timing' },
        { to: '/garage', label: 'Vehicle Garage' },
        { to: '/community', label: 'Community' },
      ].map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="px-5 py-2 rounded-full border border-[#00FF7F]/40 text-[#00FF7F] text-sm font-medium hover:bg-[#00FF7F]/10 hover:border-[#00FF7F] transition-all duration-200"
          onClick={() => trackEvent('cross_link_click', { source: 'leaderboards_page', destination: to })}
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);

const LeaderboardsPage = () => {
  return (
    <>
      <Helmet>
        <title>Car Performance Leaderboards &amp; Rankings | FastTrack App</title>
        <meta name="description" content="Compete against car enthusiasts worldwide. See where your 0-60, quarter-mile, and half-mile runs rank on FastTrack's global leaderboards." />
        <meta property="og:title" content="Car Performance Leaderboards & Rankings | FastTrack App" />
        <meta property="og:description" content="Compete against car enthusiasts worldwide. See where your 0-60, quarter-mile, and half-mile runs rank on FastTrack's global leaderboards." />
        <meta property="og:url" content="https://fasttrackapp.biz/leaderboards" />
        <meta property="og:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Performance Leaderboards & Rankings | FastTrack App" />
        <meta name="twitter:description" content="Compete against car enthusiasts worldwide. See where your 0-60, quarter-mile, and half-mile runs rank on FastTrack's global leaderboards." />
        <meta name="twitter:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <link rel="canonical" href="https://fasttrackapp.biz/leaderboards" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Car Performance Leaderboards & Rankings",
            "description": "Compete against car enthusiasts worldwide on FastTrack's global leaderboards for 0-60, quarter-mile, and half-mile.",
            "url": "https://fasttrackapp.biz/leaderboards",
            "isPartOf": {
              "@type": "WebSite",
              "name": "FastTrack",
              "url": "https://fasttrackapp.biz"
            }
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://fasttrackapp.biz/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Leaderboards",
                "item": "https://fasttrackapp.biz/leaderboards"
              }
            ]
          }
        `}</script>
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
              <Crown size={14} className="text-[#00FF7F]" />
              <span className="text-[#00FF7F] text-xs font-semibold tracking-widest uppercase">Compete for the Top Spot</span>
            </div>
            <div className="flex justify-center mb-6">
              <Crown size={72} className="text-[#00FF7F] drop-shadow-[0_0_20px_rgba(0,255,127,0.5)]" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 neon-text-green leading-tight">
              Global Rankings.<br />Real Competition.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Every tenth of a second counts. FastTrack puts your best runs up against the world — or just your friends — so you always know where you stand.
            </p>
          </motion.div>

          {/* App Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-20"
          >
            <img
              src="/images/leaderboard.png"
              alt="FastTrack leaderboard rankings screen"
              className="h-[480px] sm:h-[580px] rounded-[2rem] border-2 border-[#2a2a2a]"
              style={{ boxShadow: '0 0 40px rgba(0, 255, 127, 0.15)' }}
            />
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">Leaderboard Features</h2>
            <p className="text-gray-400 text-center mb-10">Compete at every level, from your crew to the world.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Globe size={36} />, title: 'Global Board', description: 'Compete against every FastTrack user on earth. The fastest GPS-verified times rise to the top.' },
              { icon: <Users size={36} />, title: 'Friends Board', description: 'A separate leaderboard for just the people you follow — perfect for friendly rivalry within your crew.' },
              { icon: <Flag size={36} />, title: 'Four Categories', description: 'Rankings across 0-60 mph, 0-100 mph, quarter-mile, and half-mile — each category tracked separately.' },
              { icon: <TrendingUp size={36} />, title: 'Personal Rank', description: 'See your current rank in every category instantly, and track how your position changes over time.' },
              { icon: <Car size={36} />, title: 'Vehicle Credited', description: 'Every leaderboard entry shows the vehicle that ran the time, so comparisons are always in context.' },
              { icon: <Zap size={36} />, title: 'Live Updates', description: 'Rankings update in real time as new runs are submitted. Beat a time and move up immediately.' },
            ].map((card, i) => (
              <FeatureCard key={i} delay={i * 0.08} {...card} />
            ))}
          </div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">Four Leaderboard Categories</h2>
            <p className="text-gray-400 text-center mb-10">Each category has its own global and friends ranking.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: '0–60 mph', stat: '2.9s', sub: 'Fastest recorded' },
                { label: '0–100 mph', stat: '6.4s', sub: 'Fastest recorded' },
                { label: 'Quarter-Mile', stat: '9.8s', sub: 'Fastest recorded' },
                { label: 'Half-Mile', stat: '19.1s', sub: 'Fastest recorded' },
              ].map(({ label, stat, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6 text-center"
                >
                  <p className="text-gray-400 text-sm font-medium mb-3">{label}</p>
                  <p className="text-3xl font-black text-[#00FF7F] drop-shadow-[0_0_10px_rgba(0,255,127,0.4)] mb-1">{stat}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock Leaderboard UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">The Leaderboard</h2>
            <p className="text-gray-400 text-center mb-10">Top 3 — 0-60 mph — Global</p>
            <div
              className="bg-[#1a1a1a] rounded-2xl border-2 border-[#00FF7F]/30 overflow-hidden"
              style={{ boxShadow: '0 0 30px rgba(0, 255, 127, 0.1)' }}
            >
              {/* Table header */}
              <div className="grid grid-cols-[48px_1fr_1fr_80px] gap-4 px-6 py-3 bg-[#00FF7F]/5 border-b border-[#00FF7F]/10 text-xs font-semibold uppercase tracking-widest text-gray-500">
                <span>#</span>
                <span>Driver</span>
                <span>Vehicle</span>
                <span className="text-right">Time</span>
              </div>
              {MOCK_ROWS.map(({ rank, rankColor, username, vehicle, time }, i) => (
                <motion.div
                  key={rank}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="grid grid-cols-[48px_1fr_1fr_80px] gap-4 px-6 py-4 border-b border-[#2a2a2a] last:border-0 items-center"
                >
                  <span className="text-xl font-black" style={{ color: rankColor }}>{rank}</span>
                  <span className="text-white font-semibold text-sm truncate">{username}</span>
                  <span className="text-gray-400 text-sm truncate">{vehicle}</span>
                  <span className="text-[#00FF7F] font-black text-right drop-shadow-[0_0_6px_rgba(0,255,127,0.4)]">{time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Claim Your Spot on the Board</h2>
            <p className="text-gray-400 mb-8">Download FastTrack and post your first ranked run today.</p>
            <a
              href="https://apps.apple.com/app/fasttrack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00FF7F] text-black font-bold px-10 py-4 rounded-xl text-lg hover:bg-[#00D9FF] transition-colors duration-300 shadow-[0_0_20px_rgba(0,255,127,0.4)]"
              onClick={() => trackEvent('cta_click', { source: 'leaderboards_page' })}
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

export default LeaderboardsPage;

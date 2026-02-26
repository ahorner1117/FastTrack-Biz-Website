import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Gauge, Flag, Map, Zap, TrendingUp, Settings2, Download } from 'lucide-react';
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

const CrossLinks = () => (
  <div className="py-12 border-t border-[#2a2a2a]">
    <p className="text-center text-gray-400 mb-6 text-sm font-medium uppercase tracking-widest">Explore More Features</p>
    <div className="flex flex-wrap justify-center gap-3">
      {[
        { to: '/garage', label: 'Vehicle Garage' },
        { to: '/community', label: 'Community' },
        { to: '/leaderboards', label: 'Leaderboards' },
      ].map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="px-5 py-2 rounded-full border border-[#00FF7F]/40 text-[#00FF7F] text-sm font-medium hover:bg-[#00FF7F]/10 hover:border-[#00FF7F] transition-all duration-200"
          onClick={() => trackEvent('cross_link_click', { source: 'timing_page', destination: to })}
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);

const TimingPage = () => {
  return (
    <>
      <Helmet>
        <title>Precision GPS Timing | FastTrack</title>
        <meta name="description" content="Measure your 0-60, quarter-mile, and top speed with millisecond accuracy using FastTrack's GPS timing technology." />
        <meta property="og:title" content="Precision GPS Timing | FastTrack" />
        <meta property="og:description" content="Measure your 0-60, quarter-mile, and top speed with millisecond accuracy using FastTrack's GPS timing technology." />
        <meta property="og:url" content="https://fasttrackapp.biz/timing" />
        <meta property="og:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Precision GPS Timing | FastTrack" />
        <meta name="twitter:description" content="Measure your 0-60, quarter-mile, and top speed with millisecond accuracy using FastTrack's GPS timing technology." />
        <meta name="twitter:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <link rel="canonical" href="https://fasttrackapp.biz/timing" />
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
              <Gauge size={14} className="text-[#00FF7F]" />
              <span className="text-[#00FF7F] text-xs font-semibold tracking-widest uppercase">GPS Precision Timing</span>
            </div>
            <div className="flex justify-center mb-6">
              <Gauge size={72} className="text-[#00FF7F] drop-shadow-[0_0_20px_rgba(0,255,127,0.5)]" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 neon-text-green leading-tight">
              Measure Every Run.<br />Down to the Millisecond.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              FastTrack delivers professional-grade GPS timing accuracy rivaling dedicated hardware like Dragy and RaceBox — right from your iPhone. Expect ±0.05–0.1s precision on every run.
            </p>
          </motion.div>

          {/* App Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 sm:gap-8 mb-20"
          >
            <img
              src="/images/acceleration-timer.png"
              alt="FastTrack acceleration timer screen"
              className="h-[320px] sm:h-[520px] rounded-[2rem] border-2 border-[#2a2a2a]"
              style={{ boxShadow: '0 0 40px rgba(0, 255, 127, 0.15)' }}
            />
            <img
              src="/images/track-drive-timer.png"
              alt="FastTrack drive mode timer screen"
              className="h-[320px] sm:h-[520px] rounded-[2rem] border-2 border-[#2a2a2a]"
              style={{ boxShadow: '0 0 40px rgba(0, 255, 127, 0.15)' }}
            />
          </motion.div>

          {/* Timing Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">What You Can Time</h2>
            <p className="text-gray-400 text-center mb-10">Every standard acceleration metric, in one app.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Gauge size={36} />, title: '0–60 mph', description: 'The gold standard of performance measurement. Track your personal best with GPS precision.' },
              { icon: <Flag size={36} />, title: 'Quarter-Mile', description: 'Classic drag strip benchmark. Get trap speed and ET for every pass.' },
              { icon: <Map size={36} />, title: 'Half-Mile', description: 'See your car stretch its legs — where power and aero define the outcome.' },
              { icon: <Zap size={36} />, title: '0–100 mph', description: 'Tests where big power builds really shine — beyond the initial launch.' },
              { icon: <TrendingUp size={36} />, title: 'Top Speed', description: 'Log your highest recorded speed on every session automatically.' },
              { icon: <Settings2 size={36} />, title: 'Custom Milestones', description: 'Define your own start and end points for any speed range you care about.' },
            ].map((card, i) => (
              <FeatureCard key={i} delay={i * 0.08} {...card} />
            ))}
          </div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">How It Works</h2>
            <p className="text-gray-400 text-center mb-10">Three steps from cold start to accurate time.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'GPS Lock',
                  body: 'FastTrack acquires a high-accuracy GPS signal before your run. A strong lock means tighter results — the app shows you signal quality in real time.',
                },
                {
                  step: '02',
                  title: 'Launch Detection',
                  body: (
                    <>
                      The timer starts automatically when the app detects acceleration above a G-force threshold. <span className="text-[#FF006E] font-semibold">No button press required</span> — your launch triggers everything.
                    </>
                  ),
                },
                {
                  step: '03',
                  title: 'Auto-Stop',
                  body: 'Once you pass the target speed or distance milestone, the timer stops and your result is saved instantly to your run history.',
                },
              ].map(({ step, title, body }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-6"
                >
                  <div className="text-4xl font-black text-[#00FF7F]/20 mb-3">{step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Two Modes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">Two Timing Modes</h2>
            <p className="text-gray-400 text-center mb-10">Pick the right tool for your session.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] rounded-xl border-2 border-[#00FF7F]/40 p-8">
                <h3 className="text-2xl font-bold text-[#00FF7F] mb-3">Acceleration Mode</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built for back-road and track sessions. Launch, hit your milestone, done. Clean, focused, and distraction-free. Best for repeated runs where you're chasing a personal best.
                </p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl border-2 border-[#FF006E]/40 p-8">
                <h3 className="text-2xl font-bold text-[#FF006E] mb-3">Drive Mode</h3>
                <p className="text-gray-300 leading-relaxed">
                  Records your full drive in the background — capturing route, top speed, and performance events throughout. Great for spirited road trips or tracking an entire session.
                </p>
              </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Timing?</h2>
            <p className="text-gray-400 mb-8">Download FastTrack and time your first run today.</p>
            <a
              href="https://apps.apple.com/app/fasttrack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00FF7F] text-black font-bold px-10 py-4 rounded-xl text-lg hover:bg-[#00D9FF] transition-colors duration-300 shadow-[0_0_20px_rgba(0,255,127,0.4)]"
              onClick={() => trackEvent('cta_click', { source: 'timing_page' })}
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

export default TimingPage;

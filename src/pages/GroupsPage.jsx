import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, UsersRound, Car, PlusCircle, MessageSquare, MessageCircle, UserPlus, Shield, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExpandableFeatureCard from '@/components/ExpandableFeatureCard';
import { trackEvent } from '@/lib/analytics';

const CrossLinks = () => (
  <div className="py-12 border-t border-[#2a2a2a]">
    <p className="text-center text-gray-400 mb-6 text-sm font-medium uppercase tracking-widest">Explore More Features</p>
    <div className="flex flex-wrap justify-center gap-3">
      {[
        { to: '/timing', label: 'Precision Timing' },
        { to: '/garage', label: 'Vehicle Garage' },
        { to: '/community', label: 'Community' },
        { to: '/leaderboards', label: 'Leaderboards' },
      ].map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="px-5 py-2 rounded-full border border-[#00FF7F]/40 text-[#00FF7F] text-sm font-medium hover:bg-[#00FF7F]/10 hover:border-[#00FF7F] transition-all duration-200"
          onClick={() => trackEvent('cross_link_click', { source: 'groups_page', destination: to })}
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);

const GroupsPage = () => {
  return (
    <>
      <Helmet>
        <title>Vehicle Groups &amp; Forums | FastTrack App</title>
        <meta name="description" content="Join auto-generated vehicle communities, create custom groups for meetups and builds, and share verified GPS runs with threaded discussions on FastTrack." />
        <meta property="og:title" content="Vehicle Groups & Forums | FastTrack App" />
        <meta property="og:description" content="Join auto-generated vehicle communities, create custom groups for meetups and builds, and share verified GPS runs with threaded discussions on FastTrack." />
        <meta property="og:url" content="https://fasttrackapp.biz/groups" />
        <meta property="og:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vehicle Groups & Forums | FastTrack App" />
        <meta name="twitter:description" content="Join auto-generated vehicle communities, create custom groups for meetups and builds, and share verified GPS runs with threaded discussions on FastTrack." />
        <meta name="twitter:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <link rel="canonical" href="https://fasttrackapp.biz/groups" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Vehicle Groups & Forums",
            "description": "Join auto-generated vehicle communities, create custom groups for meetups and builds, and share verified GPS runs with threaded discussions on FastTrack.",
            "url": "https://fasttrackapp.biz/groups",
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
                "name": "Groups",
                "item": "https://fasttrackapp.biz/groups"
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
              <UsersRound size={14} className="text-[#00FF7F]" />
              <span className="text-[#00FF7F] text-xs font-semibold tracking-widest uppercase">Vehicle Groups & Forums</span>
            </div>
            <div className="flex justify-center mb-6">
              <UsersRound size={72} className="text-[#00FF7F] drop-shadow-[0_0_20px_rgba(0,255,127,0.5)]" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 neon-text-green leading-tight">
              Your Crew.<br />Your Conversations.<br />Your Rules.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              FastTrack Groups bring car enthusiasts together around shared vehicles, local meetups, and build projects. Every group has its own feed, threaded discussions, and real performance data.
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
              src="/images/groups.png"
              alt="FastTrack groups browse screen"
              className="h-[320px] sm:h-[520px] rounded-[2rem] border-2 border-[#2a2a2a]"
              style={{ boxShadow: '0 0 40px rgba(0, 255, 127, 0.15)' }}
            />
            <img
              src="/images/individual-group.png"
              alt="FastTrack individual group feed and discussions"
              className="h-[320px] sm:h-[520px] rounded-[2rem] border-2 border-[#2a2a2a]"
              style={{ boxShadow: '0 0 40px rgba(0, 255, 127, 0.15)' }}
            />
          </motion.div>

          {/* Feature Card Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">Groups Features</h2>
            <p className="text-gray-400 text-center mb-10">Everything you need to build and run your community.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Car size={36} />, title: 'Auto Groups', description: 'Every vehicle model gets its own community automatically.', expandedDescription: 'When you add a car to your garage, FastTrack creates a group for that make/model combo. Join Honda Civic owners, BMW M3 enthusiasts, or Tesla Model 3 fans \u2014 no setup needed. Share runs, compare mods, and connect with owners of the same car.' },
              { icon: <PlusCircle size={36} />, title: 'Custom Groups', description: 'Create groups for any purpose \u2014 meetups, build projects, or track day crews.', expandedDescription: 'Set a name, description, and visibility (public or private). Customize with an accent color, avatar, and cover image. Private groups require approval to join \u2014 perfect for close-knit crews.' },
              { icon: <MessageSquare size={36} />, title: 'Group Posts', description: 'Share runs, drives, photos, and videos in group threads.', expandedDescription: 'Attach up to 7 media items per post \u2014 photos and 15-second videos. Pin a verified GPS run (0-60, quarter-mile) or drive session with real performance data. Posts can be sorted by newest or most popular.', expandedImage: '/images/individual-group.png' },
              { icon: <MessageCircle size={36} />, title: 'Threaded Discussions', description: 'Real conversations, not flat comment walls.', expandedDescription: 'Nested replies with like counts, reply counts, and depth-based threading. Expand or collapse reply chains on demand. Reply to specific comments with quoted context.' },
              { icon: <UserPlus size={36} />, title: 'Invite Friends', description: 'Grow your group by inviting people you already know.', expandedDescription: 'Multi-select from your friends list and send batch invites. Friends get a push notification and can tap to join instantly. Already-members are filtered out automatically.' },
              { icon: <Shield size={36} />, title: 'Moderation Tools', description: 'Owners and moderators keep things running smoothly.', expandedDescription: 'Approve or reject join requests for private groups. Promote members to moderator. Delete any post or comment. Transfer ownership to another member. Full role hierarchy: owner, moderator, member.' },
            ].map((card, i) => (
              <ExpandableFeatureCard key={i} delay={i * 0.08} {...card} />
            ))}
          </div>

          {/* Two Group Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">Two Group Types</h2>
            <p className="text-gray-400 text-center mb-10">Automatic communities and custom-built ones.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] rounded-xl border-2 border-[#00FF7F]/40 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Car size={24} className="text-[#00FF7F]" />
                  <h3 className="text-xl font-bold text-[#00FF7F]">Auto Groups</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Created automatically when a new vehicle make/model is added to anyone's garage. Every car community exists by default — just add a car to your garage and you're in.
                </p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl border-2 border-[#FF006E]/40 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <PlusCircle size={24} className="text-[#FF006E]" />
                  <h3 className="text-xl font-bold text-[#FF006E]">Custom Groups</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  User-created for any purpose. Full control over name, description, visibility, branding, and membership. Build the community you want.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">What Will You Build?</h2>
            <p className="text-gray-400 text-center mb-10">Groups for every kind of car enthusiast.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Vehicle Communities',
                  body: 'Every make/model has a built-in group. Compare performance, share mods, and connect with owners of the same car.',
                },
                {
                  step: '02',
                  title: 'Local Meetups',
                  body: 'Create a group for your city or region. Coordinate track days, cruise nights, and car shows with people nearby.',
                },
                {
                  step: '03',
                  title: 'Build Projects',
                  body: 'Document a build from start to finish. Post before/after photos with real performance data showing each upgrade\'s impact.',
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

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Group</h2>
            <p className="text-gray-400 mb-8">Download FastTrack and join vehicle communities, local meetups, and build projects.</p>
            <a
              href="https://apps.apple.com/app/fasttrack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00FF7F] text-black font-bold px-10 py-4 rounded-xl text-lg hover:bg-[#00D9FF] transition-colors duration-300 shadow-[0_0_20px_rgba(0,255,127,0.4)]"
              onClick={() => trackEvent('cta_click', { source: 'groups_page' })}
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

export default GroupsPage;

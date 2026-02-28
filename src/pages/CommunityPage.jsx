import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Share2, Globe, UserPlus, Heart, Lock, Bell, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExpandableFeatureCard from '@/components/ExpandableFeatureCard';
import { trackEvent } from '@/lib/analytics';

const POST_STEPS = [
  { num: '1', label: 'Time your run' },
  { num: '2', label: 'Select your vehicle' },
  { num: '3', label: 'Add a photo' },
  { num: '4', label: 'Set visibility' },
  { num: '5', label: 'Share to feed' },
];

const CrossLinks = () => (
  <div className="py-12 border-t border-[#2a2a2a]">
    <p className="text-center text-gray-400 mb-6 text-sm font-medium uppercase tracking-widest">Explore More Features</p>
    <div className="flex flex-wrap justify-center gap-3">
      {[
        { to: '/timing', label: 'Precision Timing' },
        { to: '/garage', label: 'Vehicle Garage' },
        { to: '/leaderboards', label: 'Leaderboards' },
        { to: '/groups', label: 'Groups' },
      ].map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="px-5 py-2 rounded-full border border-[#00FF7F]/40 text-[#00FF7F] text-sm font-medium hover:bg-[#00FF7F]/10 hover:border-[#00FF7F] transition-all duration-200"
          onClick={() => trackEvent('cross_link_click', { source: 'community_page', destination: to })}
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);

const CommunityPage = () => {
  return (
    <>
      <Helmet>
        <title>Car Community &amp; Social Platform | FastTrack App</title>
        <meta name="description" content="Share your best runs, connect with fellow car enthusiasts, join vehicle groups, and build your crew on FastTrack's social platform." />
        <meta property="og:title" content="Car Community & Social Platform | FastTrack App" />
        <meta property="og:description" content="Share your best runs, connect with fellow car enthusiasts, join vehicle groups, and build your crew on FastTrack's social platform." />
        <meta property="og:url" content="https://fasttrackapp.biz/community" />
        <meta property="og:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Community & Social Platform | FastTrack App" />
        <meta name="twitter:description" content="Share your best runs, connect with fellow car enthusiasts, join vehicle groups, and build your crew on FastTrack's social platform." />
        <meta name="twitter:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <link rel="canonical" href="https://fasttrackapp.biz/community" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Car Community & Social Platform",
            "description": "Share your best runs, connect with fellow car enthusiasts, and build your crew on FastTrack's social platform.",
            "url": "https://fasttrackapp.biz/community",
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
                "name": "Community",
                "item": "https://fasttrackapp.biz/community"
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
              <Users size={14} className="text-[#00FF7F]" />
              <span className="text-[#00FF7F] text-xs font-semibold tracking-widest uppercase">The Enthusiast Community</span>
            </div>
            <div className="flex justify-center mb-6">
              <Users size={72} className="text-[#00FF7F] drop-shadow-[0_0_20px_rgba(0,255,127,0.5)]" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 neon-text-green leading-tight">
              Share Your Runs.<br />Connect With Your People.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              FastTrack's community is built around real performance data — not just photos. Every post is backed by a verified GPS run, so you know exactly what you're looking at.
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
              src="/images/explore-page-and-groups.png"
              alt="FastTrack community explore page and groups"
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
            <h2 className="text-3xl font-bold text-white text-center mb-2">Community Features</h2>
            <p className="text-gray-400 text-center mb-10">Everything you need to connect with fellow enthusiasts.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Share2 size={36} />, title: 'Post Runs', description: 'Share any completed run to your feed with your vehicle, time, and an optional photo.', expandedDescription: 'Share any completed acceleration run or drive session to the community feed. Posts include your vehicle, verified GPS time, and optional photos or videos (up to 7 media items, videos up to 15s).' },
              { icon: <Globe size={36} />, title: 'Public Feed', description: 'Browse runs from all public FastTrack users — discover impressive builds from around the world.', expandedDescription: 'Browse runs from all public FastTrack users. Discover impressive builds, see what\'s fast in your area, and find new people to follow. Posts sorted by newest or most popular.', expandedImage: '/images/explor.png' },
              { icon: <UserPlus size={36} />, title: 'Friend System', description: 'Add friends and see their runs in a dedicated friends feed separate from the public stream.', expandedDescription: 'Send and accept friend requests. See a dedicated friends-only feed separate from the public stream. Share posts directly to friends via DM (Instagram-style).', expandedImage: '/images/profile-page-1.png' },
              { icon: <Heart size={36} />, title: 'Likes & Comments', description: 'React to runs and leave comments. Build connections with people who share your passion.', expandedDescription: 'React to posts with likes and leave threaded comments. Reply to specific comments with nested threads. Like individual comments. Get notified when someone interacts with your content.' },
              { icon: <Lock size={36} />, title: 'Privacy Controls', description: 'Every post can be set to public or friends-only. You decide who sees your data.', expandedDescription: 'Every post can be public or friends-only. Your garage, profile, and run history visibility are under your control. Private group posts are only visible to members.' },
              { icon: <Bell size={36} />, title: 'Notifications', description: 'Get notified when friends post, when someone likes your run, or when you hit a new personal best.', expandedDescription: 'Push notifications for friend requests, post likes, comments, @mentions, and group invites. Tap any notification to jump directly to the relevant content. Mark all as read with one tap.' },
            ].map((card, i) => (
              <ExpandableFeatureCard key={i} delay={i * 0.08} {...card} />
            ))}
          </div>

          {/* The Post Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">The Post Flow</h2>
            <p className="text-gray-400 text-center mb-10">From run to feed in five steps.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {POST_STEPS.map(({ num, label }, i) => (
                <React.Fragment key={num}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00FF7F]/10 border-2 border-[#00FF7F]/50 flex items-center justify-center">
                      <span className="text-[#00FF7F] font-black text-lg">{num}</span>
                    </div>
                    <span className="text-white text-sm font-medium text-center max-w-[80px]">{label}</span>
                  </motion.div>
                  {i < POST_STEPS.length - 1 && (
                    <div className="hidden sm:flex items-center self-start mt-4">
                      <div className="w-8 h-0.5 bg-[#00FF7F]/20" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Friends vs Public */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">Friends vs Public</h2>
            <p className="text-gray-400 text-center mb-10">Control your audience for every post.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] rounded-xl border-2 border-[#00FF7F]/40 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={24} className="text-[#00FF7F]" />
                  <h3 className="text-xl font-bold text-[#00FF7F]">Public</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Your run appears in the global feed visible to all FastTrack users. Best for showing off a personal best, connecting with the wider community, or climbing the global leaderboards.
                </p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl border-2 border-[#FF006E]/40 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock size={24} className="text-[#FF006E]" />
                  <h3 className="text-xl font-bold text-[#FF006E]">Friends Only</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Visible only to the people you've added as friends. Great for sharing work-in-progress builds, keeping competition private within your crew, or just keeping a lower profile.
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
            <h2 className="text-3xl font-bold text-white mb-4">Join the Community</h2>
            <p className="text-gray-400 mb-8">Download FastTrack and share your first run today.</p>
            <a
              href="https://apps.apple.com/app/fasttrack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00FF7F] text-black font-bold px-10 py-4 rounded-xl text-lg hover:bg-[#00D9FF] transition-colors duration-300 shadow-[0_0_20px_rgba(0,255,127,0.4)]"
              onClick={() => trackEvent('cta_click', { source: 'community_page' })}
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

export default CommunityPage;

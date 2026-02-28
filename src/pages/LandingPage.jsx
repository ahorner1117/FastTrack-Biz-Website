import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import SupportSection from '@/components/SupportSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>FastTrack - GPS 0-60 Timer &amp; Quarter Mile App for iOS</title>
        <meta
          name="description"
          content="Track your 0-60 mph, quarter-mile, and half-mile times with GPS precision. Manage your vehicle garage, log mods, and compete on leaderboards."
        />
        <meta property="og:title" content="FastTrack - GPS 0-60 Timer & Quarter Mile App for iOS" />
        <meta property="og:description" content="Track your 0-60 mph, quarter-mile, and half-mile times with GPS precision. Manage your vehicle garage, log mods, and compete on leaderboards." />
        <meta property="og:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <meta property="og:url" content="https://fasttrackapp.biz/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FastTrack - GPS 0-60 Timer & Quarter Mile App for iOS" />
        <meta name="twitter:description" content="Track your 0-60 mph, quarter-mile, and half-mile times with GPS precision. Manage your vehicle garage, log mods, and compete on leaderboards." />
        <meta name="twitter:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <link rel="canonical" href="https://fasttrackapp.biz/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "FastTrack",
            "operatingSystem": "iOS",
            "applicationCategory": "SportsApplication",
            "description": "GPS acceleration timer for iOS. Track 0-60 mph, quarter-mile, and half-mile times with professional-grade precision.",
            "url": "https://fasttrackapp.biz",
            "image": "https://fasttrackapp.biz/images/fasttrack-icon.png",
            "author": {
              "@type": "Organization",
              "name": "FastTrack Rides, Inc.",
              "url": "https://fasttrackapp.biz"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "0-60 mph timing",
              "Quarter-mile timing",
              "Half-mile timing",
              "GPS launch detection",
              "Vehicle garage management",
              "Modification tracking",
              "Social community feed",
              "Global leaderboards"
            ]
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is FastTrack and how does it work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FastTrack is a GPS-based acceleration timer for iOS that measures your 0-60 mph, 0-100 mph, quarter-mile, and half-mile times using your iPhone's GPS and accelerometer. Just mount your phone, select your vehicle, and go — the app detects your launch automatically and records your time with no button press needed."
                }
              },
              {
                "@type": "Question",
                "name": "Is FastTrack free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. FastTrack is completely free to download and use. All timing modes, garage management, community features, leaderboards, and groups are included at no cost."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is FastTrack compared to a Dragy or RaceBox?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FastTrack uses iOS Motion Activity alongside GPS to deliver precise speed and movement data. Motion Activity provides real-time detection of acceleration and velocity changes, while GPS handles distance and position — together they produce reliable, repeatable results. Dedicated hardware like Dragy uses higher-frequency GPS receivers, so they can be slightly more precise in ideal conditions. For most street and track use, FastTrack gives you accurate times without carrying extra hardware."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need any extra hardware or accessories?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. FastTrack runs entirely on your iPhone's built-in GPS and accelerometer. A phone mount is recommended for safety, but no external devices, OBD adapters, or Bluetooth accessories are required."
                }
              },
              {
                "@type": "Question",
                "name": "Is FastTrack available on Android?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FastTrack is currently available on iOS only. An Android version is not available at this time."
                }
              },
              {
                "@type": "Question",
                "name": "Why does the app need location access?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FastTrack uses GPS to measure your speed and distance in real time. Location data is only collected during active timing or drive sessions — the app does not track your location in the background."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between Acceleration Mode and Drive Mode?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Acceleration Mode is for single timed runs like 0-60 or quarter-mile — it gives you a clean, focused result for each pull. Drive Mode records your entire drive in the background, logging your route on a map along with top speed and performance events throughout the session."
                }
              },
              {
                "@type": "Question",
                "name": "Can I track modifications and see how they affect my times?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The Garage lets you log modifications across 10 categories including engine, forced induction, suspension, drivetrain, and more. Each mod is timestamped, so you can compare your run history before and after upgrades to see exactly what difference they made."
                }
              },
              {
                "@type": "Question",
                "name": "How do leaderboards work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Leaderboards rank all FastTrack users by their best GPS-verified times across 0-60, 0-100, quarter-mile, and half-mile. Only runs recorded through the app count — no manual entries. You can also view a friends-only leaderboard to compete within your crew."
                }
              },
              {
                "@type": "Question",
                "name": "Who can see my runs and profile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You control your own visibility. Every post can be set to public or friends-only. Your garage, profile, and run history are private by default. Only friends you accept can see your friends-only content, and private group posts are visible only to group members."
                }
              },
              {
                "@type": "Question",
                "name": "I'm getting inaccurate or inconsistent times. What can I do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Make sure you're outdoors with a clear view of the sky — buildings, trees, and tunnels degrade GPS signal. Give the app a few seconds to lock onto satellites before starting your run. Consistent results also come from running on the same stretch of road in similar conditions. Avoid running immediately after opening the app; wait until the GPS accuracy indicator shows a strong signal."
                }
              },
              {
                "@type": "Question",
                "name": "What are Groups and how do I join one?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Groups are communities within FastTrack. Auto Groups are created automatically for every vehicle model — add a car to your garage and you're in. Custom Groups can be created by anyone for local meetups, build projects, or track day crews. Each group has its own feed, threaded discussions, and member list."
                }
              }
            ]
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FastTrack",
            "url": "https://fasttrackapp.biz",
            "description": "GPS acceleration timer app for iOS — track 0-60, quarter-mile, and compete on leaderboards.",
            "publisher": {
              "@type": "Organization",
              "name": "FastTrack Rides, Inc.",
              "url": "https://fasttrackapp.biz",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fasttrackapp.biz/images/fasttrack-icon.png"
              }
            }
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <SupportSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
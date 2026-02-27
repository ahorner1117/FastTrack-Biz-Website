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
                "name": "Why does FastTrack need location access?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FastTrack uses GPS to measure your speed and distance with precision. Location data is only collected during active timing sessions."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data private?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your run data is stored securely. Shared runs are only visible to friends you add."
                }
              },
              {
                "@type": "Question",
                "name": "The app shows poor GPS accuracy. What should I do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ensure you're outdoors with a clear view of the sky. GPS accuracy improves after a few seconds of signal acquisition."
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
import React from 'react';
import { Helmet } from 'react-helmet';
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
        <title>FastTrack Rides - Precision GPS Acceleration Timer for iOS</title>
        <meta
          name="description"
          content="Track your 0-60 mph times, quarter-mile runs, and full drives with GPS precision. FastTrack is the ultimate acceleration timer app for iOS with vehicle garage management and social leaderboards."
        />
        <meta property="og:title" content="FastTrack Rides - Precision GPS Acceleration Timer for iOS" />
        <meta property="og:description" content="Track your 0-60 mph times, quarter-mile runs, and full drives with GPS precision. The ultimate acceleration timer app for iOS." />
        <meta property="og:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <meta property="og:url" content="https://fasttrackapp.biz/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FastTrack Rides - Precision GPS Acceleration Timer for iOS" />
        <meta name="twitter:description" content="Track your 0-60 mph times, quarter-mile runs, and full drives with GPS precision. The ultimate acceleration timer app for iOS." />
        <meta name="twitter:image" content="https://fasttrackapp.biz/images/fasttrack-icon.png" />
        <link rel="canonical" href="https://fasttrackapp.biz/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "FastTrack Rides",
            "operatingSystem": "iOS",
            "applicationCategory": "UtilitiesApplication",
            "description": "Precision GPS acceleration timer for iOS. Track 0-60 mph times, quarter-mile runs, and full drives.",
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
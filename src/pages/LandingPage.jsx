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
        <title>FastTrack Support - Precision GPS Acceleration Timer for iOS</title>
        <meta
          name="description"
          content="Track your 0-60 mph times, quarter-mile runs, and full drives with GPS precision. FastTrack is the ultimate acceleration timer app for iOS with vehicle garage management and social leaderboards."
        />
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
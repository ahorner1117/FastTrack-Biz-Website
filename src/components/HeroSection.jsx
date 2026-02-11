import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
const HeroSection = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1530387735240-20f4343acbe9" alt="Sports car dashboard speedometer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#00FF7F] mb-6 leading-tight" style={{
        textShadow: '0 0 20px #00FF7F, 0 0 40px #00FF7F'
      }}>FastTrack</motion.h1>

        <motion.h2 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-2xl sm:text-3xl text-white mb-8 font-semibold">
          Precision acceleration timer for iOS
        </motion.h2>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Track your 0-60 mph times, quarter-mile runs, and full drives with GPS precision. 
          Manage your vehicle garage, share your best runs, and compete with friends on leaderboards.
        </motion.p>

        <motion.button initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} onClick={scrollToFeatures} className="bg-[#00FF7F] text-[#0a0a0a] font-bold text-lg px-8 py-4 rounded-lg neon-box-green transform hover:scale-105 transition-all duration-300" style={{
        boxShadow: '0 0 15px rgba(0, 255, 127, 0.5)'
      }}>
          Get Started
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.button onClick={scrollToFeatures} animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="text-[#00FF7F] hover:text-[#00FF7F] transition-colors drop-shadow-[0_0_5px_rgba(0,255,127,0.5)]">
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>;
};
export default HeroSection;
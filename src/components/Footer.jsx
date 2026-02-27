import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="privacy" className="bg-[#0a0a0a] border-t border-[#16213e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link
            to="/timing"
            className="text-[#00FF7F] hover:text-[#00D9FF] transition-colors drop-shadow-[0_0_5px_rgba(0,255,127,0.4)]"
            onClick={() => trackEvent('footer_link_click', { link: 'timing' })}
          >
            Precision Timing
          </Link>
          <span className="text-[#3a3a3a]">•</span>
          <Link
            to="/garage"
            className="text-[#00FF7F] hover:text-[#00D9FF] transition-colors drop-shadow-[0_0_5px_rgba(0,255,127,0.4)]"
            onClick={() => trackEvent('footer_link_click', { link: 'garage' })}
          >
            Vehicle Garage
          </Link>
          <span className="text-[#3a3a3a]">•</span>
          <Link
            to="/community"
            className="text-[#00FF7F] hover:text-[#00D9FF] transition-colors drop-shadow-[0_0_5px_rgba(0,255,127,0.4)]"
            onClick={() => trackEvent('footer_link_click', { link: 'community' })}
          >
            Community
          </Link>
          <span className="text-[#3a3a3a]">•</span>
          <Link
            to="/leaderboards"
            className="text-[#00FF7F] hover:text-[#00D9FF] transition-colors drop-shadow-[0_0_5px_rgba(0,255,127,0.4)]"
            onClick={() => trackEvent('footer_link_click', { link: 'leaderboards' })}
          >
            Leaderboards
          </Link>
          <span className="text-[#3a3a3a]">•</span>
          <Link
            to="/privacy"
            className="text-[#00FF7F] hover:text-[#00FF7F] transition-colors drop-shadow-[0_0_5px_rgba(0,255,127,0.4)]"
            onClick={() => trackEvent('footer_link_click', { link: 'privacy_policy' })}
          >
            Privacy Policy
          </Link>
          <span className="text-[#3a3a3a]">•</span>
          <Link
            to="/terms"
            className="text-[#00FF7F] hover:text-[#00FF7F] transition-colors drop-shadow-[0_0_5px_rgba(0,255,127,0.4)]"
            onClick={() => trackEvent('footer_link_click', { link: 'terms_of_service' })}
          >
            Terms of Service
          </Link>
        </div>

        {/* Terms Text */}
        <div className="bg-[#1a1a1a] backdrop-blur-md p-6 rounded-xl border border-[#00FF7F]/10 mb-8" style={{ boxShadow: '0 0 15px rgba(0, 255, 127, 0.2)' }}>
          <p className="text-gray-300 text-center leading-relaxed">
            By using FastTrack, you agree to use the app responsibly and in compliance with local traffic laws.
            Always prioritize safety—never operate your device while driving.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="text-[#00FF7F] hover:text-white transition-colors transform hover:scale-110 duration-300 drop-shadow-[0_0_5px_rgba(0,255,127,0.6)]"
            aria-label="Twitter"
            onClick={() => trackEvent('social_click', { platform: 'twitter' })}
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/fasttrack.app"
            className="text-[#00FF7F] hover:text-white transition-colors transform hover:scale-110 duration-300 drop-shadow-[0_0_5px_rgba(0,255,127,0.6)]"
            aria-label="Instagram"
            onClick={() => trackEvent('social_click', { platform: 'instagram' })}
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="text-[#00FF7F] hover:text-white transition-colors transform hover:scale-110 duration-300 drop-shadow-[0_0_5px_rgba(0,255,127,0.6)]"
            aria-label="Facebook"
            onClick={() => trackEvent('social_click', { platform: 'facebook' })}
          >
            <Facebook size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 text-sm opacity-60">
          © {new Date().getFullYear()} FastTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
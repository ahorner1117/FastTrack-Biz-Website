import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, ChevronDown, Gauge, Car, Users, Crown, UsersRound } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import AuthModal from './AuthModal';
import { trackEvent } from '@/lib/analytics';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownTimeoutRef = useRef(null);

  const featurePages = [
    { label: 'Precision Timing', to: '/timing', icon: <Gauge size={15} /> },
    { label: 'Vehicle Garage', to: '/garage', icon: <Car size={15} /> },
    { label: 'Community', to: '/community', icon: <Users size={15} /> },
    { label: 'Leaderboards', to: '/leaderboards', icon: <Crown size={15} /> },
    { label: 'Groups', to: '/groups', icon: <UsersRound size={15} /> },
  ];

  const openDropdown = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsFeaturesDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => setIsFeaturesDropdownOpen(false), 120);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    trackEvent('nav_click', { nav_item: sectionId });
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      setIsMobileMenuOpen(false);
    }
  };

  const handleSignOut = async () => {
    trackEvent('auth_action', { action: 'sign_out' });
    await signOut();
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Features', href: 'features' },
    { label: 'FAQ', href: 'faq' },
    { label: 'Support', href: 'support' },
    { label: 'Privacy', href: 'privacy' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg border-b border-[#00FF7F]/20'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-white hover:text-[#00FF7F] transition-colors"
              style={{ textShadow: '0 0 10px #00FF7F' }}
            >
              <img
                src="/images/fasttrack-horiontal-logo.png"
                alt="FastTrack"
                className="h-16 w-auto rounded-lg"
              />

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                item.href === 'features' ? (
                  <div
                    key="features"
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      onClick={() => scrollToSection('features')}
                      className="flex items-center gap-1 text-gray-300 hover:text-[#00FF7F] transition-colors font-medium relative group"
                    >
                      Features
                      <ChevronDown size={14} className={`transition-transform duration-200 ${isFeaturesDropdownOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF7F] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00FF7F]" />
                    </button>
                    <AnimatePresence>
                      {isFeaturesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          onMouseEnter={openDropdown}
                          onMouseLeave={closeDropdown}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-[#1a1a1a] border border-[#00FF7F]/20 rounded-xl shadow-[0_0_20px_rgba(0,255,127,0.1)] overflow-hidden z-50"
                        >
                          {featurePages.map(({ label, to, icon }) => (
                            <Link
                              key={to}
                              to={to}
                              onClick={() => { setIsFeaturesDropdownOpen(false); trackEvent('nav_click', { nav_item: to }); }}
                              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-[#00FF7F] hover:bg-[#00FF7F]/5 transition-colors text-sm font-medium border-b border-[#2a2a2a] last:border-0"
                            >
                              <span className="text-[#00FF7F]">{icon}</span>
                              {label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-[#00FF7F] transition-colors font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF7F] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00FF7F]" />
                  </button>
                )
              ))}

              <div className="pl-4 border-l border-gray-700 ml-4">
                {user ? (
                  <div className="flex items-center gap-4">
                    <span className="text-white text-sm font-medium">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                    <button
                      onClick={handleSignOut}
                      className="text-gray-300 hover:text-[#FF006E] transition-colors flex items-center gap-2"
                      title="Sign Out"
                    >
                      <LogOut size={20} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      trackEvent('auth_action', { action: 'sign_in_open' });
                      setIsAuthModalOpen(true);
                    }}
                    className="text-[#00FF7F] hover:text-[#00D9FF] font-bold border border-[#00FF7F] hover:border-[#00D9FF] px-4 py-1.5 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(0,255,127,0.2)] hover:shadow-[0_0_15px_rgba(0,255,127,0.4)]"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-[#00FF7F] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#1a1a1a]/98 backdrop-blur-md border-l border-[#00FF7F]/20">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {navItems.map((item) => (
                  item.href === 'features' ? (
                    <div key="features" className="flex flex-col items-center gap-3">
                      <button
                        onClick={() => setIsMobileFeaturesOpen(v => !v)}
                        className="flex items-center gap-2 text-2xl text-gray-300 hover:text-[#00FF7F] transition-colors font-medium"
                        style={{ textShadow: '0 0 10px #00FF7F' }}
                      >
                        Features
                        <ChevronDown size={20} className={`transition-transform duration-200 ${isMobileFeaturesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileFeaturesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center gap-2 overflow-hidden"
                          >
                            {featurePages.map(({ label, to, icon }) => (
                              <Link
                                key={to}
                                to={to}
                                onClick={() => { setIsMobileMenuOpen(false); setIsMobileFeaturesOpen(false); trackEvent('nav_click', { nav_item: to }); }}
                                className="flex items-center gap-2 text-lg text-[#00FF7F] hover:text-[#00D9FF] transition-colors font-medium"
                              >
                                {icon}{label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-2xl text-gray-300 hover:text-[#00FF7F] transition-colors font-medium"
                      style={{ textShadow: '0 0 10px #00FF7F' }}
                    >
                      {item.label}
                    </button>
                  )
                ))}

                <div className="w-16 h-0.5 bg-gray-700 my-4" />

                {user ? (
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-white font-medium text-lg">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                    <button
                      onClick={handleSignOut}
                      className="text-[#FF006E] hover:text-red-400 flex items-center gap-2 text-lg font-medium"
                    >
                      <LogOut size={24} /> Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-[#00FF7F] text-2xl font-bold hover:text-[#00D9FF] transition-colors"
                    style={{ textShadow: '0 0 10px #00FF7F' }}
                  >
                    Sign In
                  </button>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAuthModalOpen && (
          <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
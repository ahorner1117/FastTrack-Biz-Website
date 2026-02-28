import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TimingPage from './pages/TimingPage';
import GaragePage from './pages/GaragePage';
import CommunityPage from './pages/CommunityPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import GroupsPage from './pages/GroupsPage';
import NotFoundPage from './pages/NotFoundPage';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { trackEvent } from '@/lib/analytics';

const PageViewTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    trackEvent('page_view');
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <PageViewTracker />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/timing" element={<TimingPage />} />
            <Route path="/garage" element={<GaragePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
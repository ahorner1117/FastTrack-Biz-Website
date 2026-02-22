import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TimingPage from './pages/TimingPage';
import GaragePage from './pages/GaragePage';
import CommunityPage from './pages/CommunityPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/timing" element={<TimingPage />} />
          <Route path="/garage" element={<GaragePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;
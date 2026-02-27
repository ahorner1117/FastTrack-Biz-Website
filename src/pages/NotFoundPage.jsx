import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | FastTrack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-8xl font-black text-[#00FF7F] mb-4 drop-shadow-[0_0_30px_rgba(0,255,127,0.4)]">
            404
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#00FF7F] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#00D9FF] transition-colors duration-300 shadow-[0_0_15px_rgba(0,255,127,0.4)]"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

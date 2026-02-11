import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/SupabaseAuthContext';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });
  const [error, setError] = useState('');
  
  const { signIn, signUp } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isSignIn) {
        if (!formData.email || !formData.password) {
          throw new Error('Please fill in all fields');
        }
        
        const { error: signInError } = await signIn(formData.email, formData.password);
        if (signInError) throw signInError;
        
        onClose();
      } else {
        if (!formData.email || !formData.password || !formData.fullName) {
          throw new Error('Please fill in all fields');
        }
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        if (formData.password.length < 6) {
          throw new Error('Password must be at least 6 characters');
        }

        const { error: signUpError } = await signUp(formData.email, formData.password, formData.fullName);
        if (signUpError) throw signUpError;
        
        // Optionally show success message or switch to sign in if email confirmation is required
        onClose();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setError('');
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-md bg-[#1a1a1a]/90 backdrop-blur-md rounded-2xl border border-[#00FF7F]/50 shadow-[0_0_20px_rgba(0,255,127,0.2)] overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2" style={{ textShadow: '0 0 10px #00FF7F' }}>
              {isSignIn ? 'Welcome Back' : 'Join FastTrack'}
            </h2>
            <p className="text-gray-400">
              {isSignIn ? 'Sign in to access your garage' : 'Create an account to track your runs'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isSignIn && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg py-3 pl-10 pr-4 text-white focus:border-[#00FF7F] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,127,0.2)] transition-all placeholder:text-gray-600"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg py-3 pl-10 pr-4 text-white focus:border-[#00FF7F] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,127,0.2)] transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg py-3 pl-10 pr-4 text-white focus:border-[#00FF7F] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,127,0.2)] transition-all placeholder:text-gray-600"
              />
            </div>

            <AnimatePresence mode="wait">
              {!isSignIn && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg py-3 pl-10 pr-4 text-white focus:border-[#00FF7F] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,127,0.2)] transition-all placeholder:text-gray-600"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm text-center"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#00FF7F] hover:bg-[#00D9FF] text-[#0a0e27] font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(0,255,127,0.4)] hover:shadow-[0_0_20px_rgba(0,255,127,0.6)] transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Processing...
                </>
              ) : (
                isSignIn ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={toggleMode}
              className="text-[#00FF7F] hover:text-[#00D9FF] font-semibold hover:underline transition-colors"
            >
              {isSignIn ? 'Register' : 'Sign In'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
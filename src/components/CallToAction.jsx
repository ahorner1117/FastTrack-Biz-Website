import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <div className="relative overflow-hidden rounded-xl p-8 bg-gradient-to-r from-[#0a0e27] to-[#1a1f3a] neon-box-green">
      <motion.h1
        className='text-2xl font-bold text-white leading-8 w-full mb-4 neon-text-green'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Let's turn your ideas into reality
      </motion.h1>
      <motion.button
        className="bg-[#00FF7F] text-[#0a0e27] font-bold py-2 px-6 rounded-lg hover:bg-[#00D9FF] hover:scale-105 transition-all duration-300 neon-box-green"
        whileHover={{ scale: 1.05 }}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default CallToAction;
import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <div className="bg-[#0a0e27] p-6 rounded-lg neon-box-green">
      <motion.h2 
        className="text-2xl font-bold mb-2 text-[#00FF7F] neon-text-green"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome Back!
      </motion.h2>
      <motion.p
        className='text-sm text-[#E0E0E0] leading-5 w-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Write in the chat what you want to create.
      </motion.p>
    </div>
  );
};

export default WelcomeMessage;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ExpandableFeatureCard = ({ icon, title, description, expandedDescription, expandedImage, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isExpandable = !!expandedDescription;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      {...(isExpandable ? { whileHover: { scale: 1.02, y: -3 } } : {})}
      onClick={isExpandable ? () => setIsExpanded(v => !v) : undefined}
      className={`bg-[#1a1a1a] backdrop-blur-md p-8 rounded-xl border-2 border-[#2a2a2a] transition-all duration-300 ${
        isExpandable ? 'cursor-pointer hover:border-[#00FF7F]' : ''
      } ${isExpanded ? 'border-[#00FF7F]' : ''}`}
      style={{ boxShadow: isExpanded ? '0 0 25px rgba(0, 255, 127, 0.15)' : '0 0 15px rgba(0, 255, 127, 0.1)' }}
    >
      <div className="flex items-start justify-between">
        <div className="text-[#00FF7F] mb-4 drop-shadow-[0_0_8px_rgba(0,255,127,0.6)]">
          {icon}
        </div>
        {isExpandable && (
          <ChevronDown
            size={18}
            className={`text-gray-500 transition-transform duration-300 mt-1 ${isExpanded ? 'rotate-180 text-[#00FF7F]' : ''}`}
          />
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
      <AnimatePresence>
        {isExpanded && expandedDescription && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
              <p className="text-gray-300 leading-relaxed text-sm">{expandedDescription}</p>
              {expandedImage && (
                <img
                  src={expandedImage}
                  alt={`${title} screenshot`}
                  className="mt-4 rounded-xl border border-[#2a2a2a] w-full"
                  style={{ boxShadow: '0 0 20px rgba(0, 255, 127, 0.1)' }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandableFeatureCard;

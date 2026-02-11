import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Flag, Map, Car, Trophy } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gauge className="w-12 h-12" />,
      title: '0-60 & 0-100 mph timing',
      description: 'Measure your acceleration with GPS precision. Track your best times and improvements.'
    },
    {
      icon: <Flag className="w-12 h-12" />,
      title: 'Quarter & half-mile runs',
      description: 'Time your drag strip performance with accurate distance and speed measurements.'
    },
    {
      icon: <Map className="w-12 h-12" />,
      title: 'Full drive tracking with route maps',
      description: 'Record complete drives with detailed route visualization and performance analytics.'
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Vehicle garage management',
      description: 'Organize multiple vehicles and track performance history for each one.'
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Social sharing & leaderboards',
      description: 'Share your best runs with friends and compete on global leaderboards.'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 neon-text-green">
            Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to track and improve your vehicle's performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#1a1a1a] backdrop-blur-md p-8 rounded-xl border-2 border-[#2a2a2a] hover:border-[#00FF7F] transition-all duration-300"
              style={{ boxShadow: '0 0 15px rgba(0, 255, 127, 0.2)' }}
            >
              <div className="text-[#00FF7F] mb-6 drop-shadow-[0_0_8px_rgba(0,255,127,0.6)]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
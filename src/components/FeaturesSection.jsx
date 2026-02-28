import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gauge, Flag, Map, Car, Trophy, UsersRound, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gauge className="w-12 h-12" />,
      title: '0-60 & 0-100 mph timing',
      description: 'Measure your acceleration with GPS precision. Track your best times and improvements.',
      to: '/timing',
    },
    {
      icon: <Flag className="w-12 h-12" />,
      title: 'Quarter & half-mile runs',
      description: 'Time your drag strip performance with accurate distance and speed measurements.',
      to: '/timing',
    },
    {
      icon: <Map className="w-12 h-12" />,
      title: 'Full drive tracking with route maps',
      description: 'Record complete drives with detailed route visualization and performance analytics.',
      to: '/timing',
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Vehicle garage management',
      description: 'Organize multiple vehicles and track performance history for each one.',
      to: '/garage',
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Social sharing & leaderboards',
      description: 'Share your best runs with friends and compete on global leaderboards.',
      to: '/leaderboards',
    },
    {
      icon: <UsersRound className="w-12 h-12" />,
      title: 'Vehicle groups & forums',
      description: 'Join auto-generated groups for your vehicle or create custom communities for meetups and builds.',
      to: '/groups',
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
            >
              <Link
                to={feature.to}
                className="flex flex-col h-full bg-[#1a1a1a] backdrop-blur-md p-8 rounded-xl border-2 border-[#2a2a2a] hover:border-[#00FF7F] transition-all duration-300 group"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 127, 0.2)' }}
              >
                <div className="text-[#00FF7F] mb-6 drop-shadow-[0_0_8px_rgba(0,255,127,0.6)]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed flex-1">
                  {feature.description}
                </p>
                <div className="flex items-center gap-1 mt-5 text-[#00FF7F] text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { trackEvent } from '@/lib/analytics';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is FastTrack and how does it work?',
      answer: 'FastTrack is a GPS-based acceleration timer for iOS that measures your 0-60 mph, 0-100 mph, quarter-mile, and half-mile times using your iPhone\'s GPS and accelerometer. Just mount your phone, select your vehicle, and go — the app detects your launch automatically and records your time with no button press needed.'
    },
    {
      question: 'Is FastTrack free?',
      answer: 'Yes. FastTrack is completely free to download and use. All timing modes, garage management, community features, leaderboards, and groups are included at no cost.'
    },
    {
      question: 'How accurate is FastTrack compared to a Dragy or RaceBox?',
      answer: 'FastTrack uses iOS Motion Activity alongside GPS to deliver precise speed and movement data. Motion Activity provides real-time detection of acceleration and velocity changes, while GPS handles distance and position — together they produce reliable, repeatable results. Dedicated hardware like Dragy uses higher-frequency GPS receivers, so they can be slightly more precise in ideal conditions. For most street and track use, FastTrack gives you accurate times without carrying extra hardware.'
    },
    {
      question: 'Do I need any extra hardware or accessories?',
      answer: 'No. FastTrack runs entirely on your iPhone\'s built-in GPS and accelerometer. A phone mount is recommended for safety, but no external devices, OBD adapters, or Bluetooth accessories are required.'
    },
    {
      question: 'Is FastTrack available on Android?',
      answer: 'FastTrack is currently available on iOS only. An Android version is not available at this time.'
    },
    {
      question: 'Why does the app need location access?',
      answer: 'FastTrack uses GPS to measure your speed and distance in real time. Location data is only collected during active timing or drive sessions — the app does not track your location in the background.'
    },
    {
      question: 'What\'s the difference between Acceleration Mode and Drive Mode?',
      answer: 'Acceleration Mode is for single timed runs like 0-60 or quarter-mile — it gives you a clean, focused result for each pull. Drive Mode records your entire drive in the background, logging your route on a map along with top speed and performance events throughout the session.'
    },
    {
      question: 'Can I track modifications and see how they affect my times?',
      answer: 'Yes. The Garage lets you log modifications across 10 categories including engine, forced induction, suspension, drivetrain, and more. Each mod is timestamped, so you can compare your run history before and after upgrades to see exactly what difference they made.'
    },
    {
      question: 'How do leaderboards work?',
      answer: 'Leaderboards rank all FastTrack users by their best GPS-verified times across 0-60, 0-100, quarter-mile, and half-mile. Only runs recorded through the app count — no manual entries. You can also view a friends-only leaderboard to compete within your crew.'
    },
    {
      question: 'Who can see my runs and profile?',
      answer: 'You control your own visibility. Every post can be set to public or friends-only. Your garage, profile, and run history are private by default. Only friends you accept can see your friends-only content, and private group posts are visible only to group members.'
    },
    {
      question: 'I\'m getting inaccurate or inconsistent times. What can I do?',
      answer: 'Make sure you\'re outdoors with a clear view of the sky — buildings, trees, and tunnels degrade GPS signal. Give the app a few seconds to lock onto satellites before starting your run. Consistent results also come from running on the same stretch of road in similar conditions. Avoid running immediately after opening the app; wait until the GPS accuracy indicator shows a strong signal.'
    },
    {
      question: 'What are Groups and how do I join one?',
      answer: 'Groups are communities within FastTrack. Auto Groups are created automatically for every vehicle model — add a car to your garage and you\'re in. Custom Groups can be created by anyone for local meetups, build projects, or track day crews. Each group has its own feed, threaded discussions, and member list.'
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 neon-text-green">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4" onValueChange={(value) => {
            if (value) {
              const index = parseInt(value.replace('item-', ''), 10);
              trackEvent('faq_open', { faq_question: faqs[index]?.question });
            }
          }}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#2a2a2a] backdrop-blur-md rounded-xl border border-[#3a3a3a] overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-[#00FF7F] transition-colors [&>svg]:text-[#00FF7F] [&>svg]:drop-shadow-[0_0_5px_rgba(0,255,127,0.5)]">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
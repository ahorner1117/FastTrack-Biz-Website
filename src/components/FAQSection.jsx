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
      question: 'Why does FastTrack need location access?',
      answer: 'FastTrack uses GPS to measure your speed and distance with precision. Location data is only collected during active timing sessions.'
    },
    {
      question: 'Is my data private?',
      answer: 'Your run data is stored securely. Shared runs are only visible to friends you add.'
    },
    {
      question: 'The app shows poor GPS accuracy. What should I do?',
      answer: 'Ensure you\'re outdoors with a clear view of the sky. GPS accuracy improves after a few seconds of signal acquisition.'
    }
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
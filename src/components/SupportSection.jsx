import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';

const SupportSection = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Pre-fill form if user is logged in and fields are empty
  React.useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        email: prev.email || user.email || '',
        name: prev.name || user.user_metadata?.full_name || ''
      }));
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields correctly.',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);

    try {
      // 1. Call Edge Function to send email
      const { data: emailData, error: functionError } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          name: formData.name, 
          email: formData.email, 
          message: formData.message 
        }
      });

      if (functionError) throw new Error(functionError.message);
      if (!emailData?.success) throw new Error(emailData?.error || 'Failed to send email');

      // 2. Store submission in database after successful email
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            user_id: user ? user.id : null
          }
        ]);

      if (dbError) {
        // Log db error but don't fail the whole process for the user since email was sent
        console.error('Failed to save to database:', dbError);
      }

      toast({
        title: 'Email sent successfully!',
        description: `Your ticket number is: ${emailData.ticketNumber}`,
        variant: 'default',
        className: 'bg-[#00FF7F] text-[#0a0e27] border-none'
      });

      // Reset form
      setFormData({ 
        name: user?.user_metadata?.full_name || '', 
        email: user?.email || '', 
        subject: '', 
        message: '' 
      });
      setErrors({});

    } catch (error) {
      console.error('Error in support submission:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to send email. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="support" className="py-16 sm:py-24 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 neon-text-green">
            Support
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Need help? We're here for you.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="flex items-center gap-3 text-[#00FF7F]">
              <Mail size={24} className="drop-shadow-[0_0_5px_rgba(0,255,127,0.5)]" />
              <a
                href="mailto:support@fasttrackapp.biz"
                className="text-lg hover:text-[#00FF7F] transition-colors"
              >
                support@fasttrackapp.biz
              </a>
            </div>
            <p className="text-gray-300">
              We typically respond within <span className="text-[#00FF7F] font-semibold">48 hours</span>
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] backdrop-blur-md p-8 rounded-xl border border-[#2a2a2a]"
          style={{ boxShadow: '0 0 15px rgba(0, 255, 127, 0.2)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] text-white border border-[#3a3a3a] rounded-lg focus:outline-none focus:border-[#00FF7F] focus-glow-green transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-[#FF006E] text-sm mt-1 drop-shadow-[0_0_5px_rgba(255,0,110,0.5)]">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2a2a2a] text-white border border-[#3a3a3a] rounded-lg focus:outline-none focus:border-[#00FF7F] focus-glow-green transition-colors"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-[#FF006E] text-sm mt-1 drop-shadow-[0_0_5px_rgba(255,0,110,0.5)]">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-white font-medium mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white border border-[#3a3a3a] rounded-lg focus:outline-none focus:border-[#00FF7F] focus-glow-green transition-colors"
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="text-[#FF006E] text-sm mt-1 drop-shadow-[0_0_5px_rgba(255,0,110,0.5)]">{errors.subject}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white border border-[#3a3a3a] rounded-lg focus:outline-none focus:border-[#00FF7F] focus-glow-green transition-colors resize-none"
              placeholder="Tell us how we can help..."
            />
            {errors.message && (
              <p className="text-[#FF006E] text-sm mt-1 drop-shadow-[0_0_5px_rgba(255,0,110,0.5)]">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#00FF7F] disabled:bg-[#00FF7F]/50 text-[#0a0e27] font-bold py-4 px-6 rounded-lg neon-box-green transform hover:scale-105 disabled:transform-none transition-all duration-300 flex items-center justify-center gap-2"
            style={{ boxShadow: '0 0 15px rgba(0, 255, 127, 0.4)' }}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default SupportSection;
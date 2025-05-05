'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-primary-900 mb-2">Get in Touch</h2>
        <p className="text-lg text-primary-700">Let's connect and discuss opportunities</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/50 rounded-xl p-6 shadow-lg"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-primary-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent
                           bg-white/50 backdrop-blur-sm transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-primary-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent
                           bg-white/50 backdrop-blur-sm transition-all duration-300"
                  placeholder="mehmetcompeng@gmail.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-3 py-2 rounded-lg border border-primary-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         bg-white/50 backdrop-blur-sm transition-all duration-300"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 rounded-lg border border-primary-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         bg-white/50 backdrop-blur-sm transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 px-4 rounded-lg text-white font-medium 
                       transition-all duration-300 ${
                         isSubmitting
                           ? 'bg-primary-400 cursor-not-allowed'
                           : 'bg-primary-600 hover:bg-primary-700'
                       }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center mt-2 text-sm">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center mt-2 text-sm">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/50 rounded-xl p-6 shadow-lg"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Contact Information</h3>
              <p className="text-primary-700 text-sm leading-relaxed">
                Feel free to reach out for any questions or opportunities. I'm always open to discussing new projects and creative ideas.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-primary-900 mb-3">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="mailto:your.email@example.com"
                  className="text-primary-600 hover:text-primary-800 transition-colors p-2 hover:bg-primary-100 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/mehmetalpayy"
                  className="text-primary-600 hover:text-primary-800 transition-colors p-2 hover:bg-primary-100 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mehmet-alpay/"
                  className="text-primary-600 hover:text-primary-800 transition-colors p-2 hover:bg-primary-100 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-primary-900 mb-2">Location</h4>
              <p className="text-primary-700 text-sm">
                Ankara, Turkey
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
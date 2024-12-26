import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    //  newsletter subscription logic here
    try {
    
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl mb-6 font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Subscribe to My Newsletter
        </motion.h2>
        <motion.p 
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Get updates on my latest projects, articles, and tech insights delivered straight to your inbox.
        </motion.p>
        <motion.form 
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300 disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </motion.form>
        {status === 'success' && (
          <motion.p 
            className="text-green-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thanks for subscribing!
          </motion.p>
        )}
      </div>
    </section>
  );
};

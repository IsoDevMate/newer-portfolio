// src/components/Contact/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, Linkedin, Twitter, Mail } from 'react-feather';

export const Contact = () => {
  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/IsoDevMate', label: 'GitHub' },
    { icon: <Linkedin />, url: 'https://linkedin.com/in/barack-ouma-b37089212', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com/BarackOuma7', label: 'Twitter' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl mb-12 text-center font-heading text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}

        >
          Let's Connect
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl mb-4 text-gray-200">Get in Touch</h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail size={20} />
              <a href="mailto:oumaduor5827@gmail.com" className="hover:text-white transition-colors">
                oumaduor5827@gmail.com
              </a>
            </div>
            <div className="flex space-x-6 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

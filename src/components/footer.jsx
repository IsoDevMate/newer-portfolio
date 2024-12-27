import React from 'react';
import { motion } from 'framer-motion';
export const Footer = () => {
    return (<motion.footer className="py-12 bg-gray-900/30 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-heading text-gray-100">Barack Ouma<span className="text-blue-400">.</span></h3>
            <p className="text-gray-400 mt-2">AWS Certified Cloud Practitioner</p>
          </div>
          <div className="flex gap-8">
            <a href="mailto:oumaoduor5827@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              Email
            </a>
            <a href="tel:+254793043014" className="text-gray-400 hover:text-blue-400 transition-colors">
              Phone
            </a>
            <a href="https://updatedportfolio-ecru.vercel.app/" className="text-gray-400 hover:text-blue-400 transition-colors">
             v1  Portfolio
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Barack Ouma. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>);
};

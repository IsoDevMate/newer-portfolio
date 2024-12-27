import React from 'react';
import { motion } from 'framer-motion';
export const ServiceCard = ({ icon, title, description }) => {
    return (<motion.div className="p-8 bg-gray-800/40 rounded-lg border border-gray-700/30 backdrop-blur-sm" whileHover={{
            scale: 1.02,
            backgroundColor: 'rgba(31, 41, 55, 0.5)'
        }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <motion.div className="mb-6 text-2xl text-gray-300" whileHover={{ scale: 1.1 }}>
          {icon}
        </motion.div>
        <h3 className="text-xl font-heading mb-4 text-white/90">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </motion.div>);
};

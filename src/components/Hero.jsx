import React from 'react';
import { motion } from 'framer-motion';
import barack from '../assets/IMG_20221024_090432.jpg';
export const Hero = () => {
    return (<motion.section className="flex flex-col items-center justify-center min-h-[80vh] py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <motion.div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-gray-800" whileHover={{ scale: 1.1 }}>
          <img src={barack} alt="Profile" className="w-full h-full object-cover opacity-90"/>
        </motion.div>
        <motion.h1 className="text-5xl md:text-6xl font-heading mb-4 text-white/90" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          Hi, I'm Barack Ouma
          <span className="inline-block ml-2 animate-wave">👋</span>
        </motion.h1>
        <motion.div className="max-w-3xl mx-auto text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-4xl md:text-5xl mb-12 leading-tight text-gray-500">
            Building <span className="text-gray-400">digital</span> products,{" "}
            <span className="text-gray-400">brands,</span> and{" "}
            <span className="text-gray-400">experience.</span>
          </h2>
          <motion.button className="bg-gray-800/80 text-white/90 px-8 py-3 rounded-md text-lg hover:bg-gray-700/80 transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Latest Shots
          </motion.button>
        </motion.div>
      </motion.section>);
};

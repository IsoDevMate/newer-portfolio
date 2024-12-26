
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-sm">
          <a href="mailto:hello@koscoz.design" className="text-gray-400 hover:text-white">
           oumaoduor5827@gmail.com
          </a>
        </div>
        <div className="flex gap-4">
          {['LinkedIn', 'Twitter', 'Github','Blogs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};


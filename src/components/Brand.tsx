
// src/components/Brands/Brands.tsx
import React from 'react';
import { motion } from 'framer-motion';
import aws from '../assets/image.png';
import yafreeka from '../assets/t6Bm3Z3dEvOqAO0S.jpg';
import beemultiscents from '../assets/WhatsApp Image 2024-11-16 at 22.21.18_7f8acb78.jpg';
import bertlorbloom from '../assets/unnamed.png';

const brands = [
  { 
    name: 'AWS', 
    logo: aws,
    description: 'AWS Certified Cloud Practitioner'
  },
  { 
    name: 'Yafreeka', 
    logo: yafreeka,
    description: 'Full Stack Developer'
  },
  { 
    name: 'Beemultiscents', 
    logo: beemultiscents,
    description: 'Technical Consultant'
  },
  { 
    name: 'BertlorBloom', 
    logo: bertlorbloom,
    description: 'Development Partner'
  },
];

export const Brands = () => {
  return (
    <motion.section 
      className="py-24 bg-gray-900/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-3xl font-heading text-center mb-16 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Trusted By<span className="text-blue-400">.</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2 * index,
                duration: 0.5
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="group relative flex flex-col items-center"
            >
              <div className="h-24 w-full flex items-center justify-center mb-4">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-20 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="text-sm text-center text-gray-400 absolute -bottom-6"
              >
                {brand.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
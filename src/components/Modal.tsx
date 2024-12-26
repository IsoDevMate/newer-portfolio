// src/components/Modal.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaThumbsUp } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="bg-gray-800/50 rounded-lg shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl z-50 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-8 sm:p-10 md:p-12 lg:p-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-8 text-center text-gray-200">
                Message Sent Successfully!
              </h2>
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                >
                  <FaThumbsUp className="text-7xl sm:text-8xl lg:text-9xl text-green-500 mb-8" />
                </motion.div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-4 text-gray-200">
                  Thank you for your message!
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-center text-gray-400 max-w-sm mx-auto">
                  A support ticket has been raised. We'll contact you soon.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};



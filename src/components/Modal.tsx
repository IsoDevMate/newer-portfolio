//

'use client'

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaThumbsUp } from 'react-icons/fa';
import { useTransition } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  message = "A support ticket has been raised. We'll contact you soon.",
  title = "Message Sent Successfully!"
}) => {
  const [isPending, startTransition] = useTransition();

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        startTransition(() => {
          onClose();
        });
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

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

  // Trap focus within modal when open
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0] as HTMLElement;
      firstElement?.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => startTransition(onClose)}
          />
          <motion.div
            ref={modalRef}
            className="bg-gray-800/50 rounded-lg shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl z-50 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-8 sm:p-10 md:p-12 lg:p-16">
              <h2
                id="modal-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-8 text-center text-gray-200"
              >
                {title}
              </h2>
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                >
                  <FaThumbsUp
                    className="text-7xl sm:text-8xl lg:text-9xl text-green-500 mb-8"
                    aria-hidden="true"
                  />
                </motion.div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-4 text-gray-200">
                  Thank you for your message!
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-center text-gray-400 max-w-sm mx-auto">
                  {message}
                </p>
                <button
                  onClick={() => startTransition(onClose)}
                  className="mt-8 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
                  aria-label="Close modal"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

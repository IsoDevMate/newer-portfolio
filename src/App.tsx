// src/App.tsx
import React, { FC, Suspense } from 'react';
import { BasicLayout } from './layout';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ErrorBoundary from "./ErroBoundary";
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { BlogList } from './components/Bloglist';
import { BlogPost } from './components/blogpost';
import { Footer } from './components/footer';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      staggerChildren: 0.4,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4
    }
  }
};

const App: FC = () => {
  return (
    <Suspense fallback={
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex items-center justify-center"
      >
        Loading...
      </motion.div>
    }>
      <AnimatePresence mode="wait">
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <ErrorBoundary>
            <BasicLayout>
              <BrowserRouter basename="/">
                <Navbar />
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<BlogList />} />
                    <Route path="/blogs/:id" element={<BlogPost />} />
                  </Routes>
                </AnimatePresence>
              </BrowserRouter>
              <Footer />
            </BasicLayout>
          </ErrorBoundary>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
};

export default App;

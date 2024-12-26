
import React, { FC, Suspense  } from 'react';
import { BasicLayout }from './layout';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import ErrorBoundary from "./ErroBoundary";
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { BlogList } from './components/Bloglist';
import { BlogPost } from './components/blogpost';
import { Footer } from './components/footer';

const App: FC= () => {
  return (
    
  <Suspense fallback={<div>Loading...</div>}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.3 }}
    >
      <ErrorBoundary>
      <BasicLayout>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
      <Footer /> 
      </BasicLayout>
      </ErrorBoundary>
    </motion.div>
    </Suspense>
  
  );
};

export default App;

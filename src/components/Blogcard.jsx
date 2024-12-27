// src/components/BlogCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const BlogCard = ({ post }) => {
    return (<motion.article className="bg-gray-800/40 rounded-lg overflow-hidden border border-gray-700/30" whileHover={{ scale: 1.02 }}>
      <Link to={`/blogs/${post.id}`} className="block">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} min read</span>
          </div>
          <h3 className="text-xl font-heading mb-3 text-gray-300 font-bold">{post.title}</h3>
          <p className="text-gray-400">{post.preview}</p>
          <div className="mt-4 text-gray-300 hover:text-white transition-colors">
            Read more →
          </div>
        </div>
      </Link>
    </motion.article>);
};

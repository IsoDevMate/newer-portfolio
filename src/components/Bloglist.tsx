import React from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from './Blogcard';
import stripeimg from  "../assets/images.png"
import framerimg  from "../assets/maxresdefault.jpg"
import  firebaseimg from "../assets/social.png"
import strpcheckoutimg from "../assets/imagesss.png"

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  preview: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Seamlessly Roll Auth into Your React App using Firebase Authentication',
    excerpt: 'Learn how to integrate Firebase Authentication into your React app for seamless user authentication.',
    date: 'October 24, 2024',
    readTime: '10',
    image: firebaseimg,
    preview: 'Wrestling with authentication complexity? Want to ship your app in a weekend? Worry no more because Firebase BaaS (Backend as a Service) has you covered. Think about it: no more worrying about password hashing, token management, or setting up authentication servers...'
  },
  {
    id: '2',
    title: 'Creating Interactive UI Elements with Framer Motion',
    excerpt: 'Discover how to create interactive UI elements using Framer Motion in your React applications.',
    date: 'October 17, 2024',
    readTime: '10',
    image: framerimg,
    preview: 'Have you ever wondered how apps make those delightful transitions that instantly capture your attention? Whether it’s buttons gliding across the screen or elements fading in as you scroll, animations make interfaces engaging...'
  },
  {
    id: '3',
    title: 'Stripe Payments Made Easy: Checkout and Email Automation with SendGrid (Part 2)',
    excerpt: 'Learn how to integrate Stripe Checkout and SendGrid for email automation in your application.',
    date: 'October 15, 2024',
    readTime: '6',
    image: strpcheckoutimg,
    preview: 'Ever thought about launching your own application over a weekend or rapidly shipping your SaaS product? Stripe makes it easy to handle payments, and combining it with SendGrid can streamline sending email notifications to users after successful transactions...'
  },
  {
    id: '4',
    title: 'Stripe Checkout Integration & SendGrid Email Notification',
    excerpt: 'A comprehensive guide on integrating Stripe Checkout and SendGrid for email notifications.',
    date: 'October 14, 2024',
    readTime: '7',
    image: stripeimg,
    preview: 'In this guide, we will integrate SendGrid for sending emails and Stripe for handling payments. By the end of this guide, you will have a fully functional backend server that can handle email notifications and payment processing...'
  }
];

export const BlogList = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl mb-12 text-center font-heading text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

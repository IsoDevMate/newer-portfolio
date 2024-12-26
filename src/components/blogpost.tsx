// src/components/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogContent {
  title: string;
  content: string;
}

interface BlogContents {
  [key: string]: BlogContent;
}

const getBlogContentById = (id: string): BlogContent | undefined => {
  const blogContents: BlogContents = {
    '1': {
      title: 'How to Seamlessly Roll Auth into Your React App using Firebase Authentication',
      content: `
        <p>Wrestling with authentication complexity? Want to ship your app in a weekend? Worry no more because Firebase BaaS (Backend as a Service) has you covered.</p>
        <p>Think about it: no more worrying about password hashing, token management, or setting up authentication servers. Instead of spending time building the main app functionality, you can leverage Firebase Authentication for a production-ready solution in minutes.</p>
        <p><a href="https://kodaschool.com/blog/how-to-seamlessly-roll-auth-into-your-react-app-using-firebase-authentication" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More →</a></p>
      `
    },
    '2': {
      title: 'Creating Interactive UI Elements with Framer Motion',
      content: `
        <p>Have you ever wondered how apps make those delightful transitions that instantly capture your attention? Whether it’s buttons gliding across the screen or elements fading in as you scroll, animations make interfaces engaging.</p>
        <p>With Framer Motion, you can easily add stunning interactions to your React apps without being an animation expert.</p>
        <p><a href="https://kodaschool.com/blog/creaing-interactive-ui-elements-with-framer-motion" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More →</a></p>
      `
    },
    '3': {
      title: 'Stripe Payments Made Easy: Checkout and Email Automation with SendGrid (Part 2)',
      content: `
        <p>Ever thought about launching your own application over a weekend or rapidly shipping your SaaS product? Stripe makes it easy to handle payments, and combining it with SendGrid can streamline sending email notifications to users after successful transactions.</p>
        <p>In this blog, we'll use React to consume our Stripe backend server configured using the two third-party APIs.</p>
        <p><a href="https://kodaschool.com/blog/stripe-payments-made-easy-checkout-and-email-automation-with-sendgrid-part-2https://kodaschool.com/blog/stripe-payments-made-easy-checkout-and-email-automation-with-sendgrid-part-2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More →</a></p>
      `
    },
    '4': {
      title: 'Stripe Checkout Integration & SendGrid Email Notification',
      content: `
        <p>In this guide, we will integrate SendGrid for sending emails and Stripe for handling payments. By the end of this guide, you will have a fully functional backend server that can handle email notifications and payment processing.</p>
        <p>Emails are essential for business processes as they provide a reliable way to communicate with customers, send notifications, and confirm transactions. Stripe, on the other hand, simplifies the process of accepting payments online, making it easier to manage financial transactions securely.</p>
        <p><a href="https://kodaschool.com/blog/stripe-checkout-intergration-sendgrid-email-notification" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More →</a></p>
      `
    }
  };
  return blogContents[id];
};

export const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [blogContent, setBlogContent] = useState<BlogContent | null>(null);

  useEffect(() => {
    const content = getBlogContentById(id || '');
    if (content) {
      setBlogContent(content);
    } else {
      setBlogContent(null);
    }
  }, [id]);

  if (!blogContent) {
    return <div>Loading...</div>;
  }

  return (
    <motion.article
      className="py-20 max-w-4xl mx-auto px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl md:text-5xl mb-6 font-heading font-bold text-gray-200">{blogContent.title}</h1>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blogContent.content }}></div>
    </motion.article>
  );
};


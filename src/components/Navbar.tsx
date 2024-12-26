import React,{FC} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GitHub, Linkedin, Twitter } from 'react-feather';
import barack from '../assets/IMG_20221024_090432.jpg';
interface SocialLink {
  Icon: typeof GitHub | typeof Linkedin | typeof Twitter;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { Icon: GitHub, url: 'https://github.com/IsoDevMate', label: 'GitHub' },
  { Icon: Linkedin, url: 'https://linkedin.com/in/barack-ouma-b37089212', label: 'LinkedIn' },
  { Icon: Twitter, url: 'https://twitter.com/BarackOuma7', label: 'Twitter' }
];

export const Navbar: FC = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-sm">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            <img
             src={barack}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
             
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          {socialLinks.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={label}
            >
               {label}
            </a>
          ))}
          <Link 
            to="/blogs"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Blogs
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
// src/components/Contact/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitHub, Linkedin, Twitter, Mail } from 'react-feather';
import axios from 'axios';
import { Modal } from './Modal';
import { FaSpinner } from 'react-icons/fa';
export const Contact = () => {
    const socialLinks = [
        { icon: <GitHub />, url: 'https://github.com/IsoDevMate', label: 'GitHub' },
        { icon: <Linkedin />, url: 'https://linkedin.com/in/barack-ouma-b37089212', label: 'LinkedIn' },
        { icon: <Twitter />, url: 'https://twitter.com/BarackOuma7', label: 'Twitter' },
    ];
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!formData.firstName.trim()) {
            errors.firstName = "First name is required";
        }
        else if (!nameRegex.test(formData.firstName)) {
            errors.firstName = "First name should only contain letters";
        }
        if (!formData.lastName.trim()) {
            errors.lastName = "Last name is required";
        }
        else if (!nameRegex.test(formData.lastName)) {
            errors.lastName = "Last name should only contain letters";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        }
        else if (!emailRegex.test(formData.email)) {
            errors.email = "Invalid email format";
        }
        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: '' });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                const response = await axios.post('https://losh-site.onrender.com/support-email', formData);
                if (response.data.success) {
                    setFormData({ firstName: '', lastName: '', email: '', message: '' });
                    setShowModal(true);
                }
                else {
                    console.error('Error sending email:', response.data.error);
                    alert('Error sending message. Please try again.');
                }
            }
            catch (error) {
                console.error('Error details:', error);
                alert('Error sending message. Please try again.');
            }
            finally {
                setIsLoading(false);
            }
        }
    };
    return (<section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl mb-12 text-center font-heading text-gray-200" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Let's Connect
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="text-2xl mb-4 text-gray-200">Get in Touch</h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail size={20}/>
              <a href="mailto:oumaduor5827@gmail.com" className="hover:text-white transition-colors">
                oumaduor5827@gmail.com
              </a>
            </div>
            <div className="flex space-x-6 pt-4">
              {socialLinks.map((link) => (<motion.a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  {link.icon}
                </motion.a>))}
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6" onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="Your First Name" value={formData.firstName} onChange={handleChange} className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 text-gray-200"/>
            {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
            <input type="text" name="lastName" placeholder="Your Last Name" value={formData.lastName} onChange={handleChange} className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 text-gray-200"/>
            {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 text-gray-200"/>
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            <textarea name="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 text-gray-200"/>
            {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
            <button type="submit" className="w-full px-8 py-3 bg-gray-500 hover:bg-gray-700 rounded-md transition-colors duration-300 flex items-center justify-center" disabled={isLoading}>
                {isLoading ? <><FaSpinner className="animate-spin mr-2"/> Sending Message...</> : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}/>
    </section>);
};

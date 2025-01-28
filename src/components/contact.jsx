// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { GitHub, Linkedin, Twitter, Mail } from 'react-feather';
// import axios from 'axios';
// import { Modal }from './Modal';
// import { FaSpinner } from 'react-icons/fa';
// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   message: string;
// }
// interface FormErrors {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   message?: string;
// }
// export const Contact: React.FC = () => {
//   const socialLinks = [
//     { icon: <GitHub />, url: 'https://github.com/IsoDevMate', label: 'GitHub' },
//     { icon: <Linkedin />, url: 'https://linkedin.com/in/barack-ouma-b37089212', label: 'LinkedIn' },
//     { icon: <Twitter />, url: 'https://twitter.com/BarackOuma7', label: 'Twitter' },
//   ];
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
//   });
//   const [formErrors, setFormErrors] = useState<FormErrors>({});
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const validateForm = (): boolean => {
//     const errors: FormErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const nameRegex = /^[A-Za-z\s]+$/;
//     if (!formData.firstName.trim()) {
//       errors.firstName = "First name is required";
//     } else if (!nameRegex.test(formData.firstName)) {
//       errors.firstName = "First name should only contain letters";
//     }
//     if (!formData.lastName.trim()) {
//       errors.lastName = "Last name is required";
//     } else if (!nameRegex.test(formData.lastName)) {
//       errors.lastName = "Last name should only contain letters";
//     }
//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//       errors.email = "Invalid email format";
//     }
//     if (!formData.message.trim()) {
//       errors.message = "Message is required";
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setFormErrors({ ...formErrors, [e.target.name]: '' });
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsLoading(true);
//       try {
//         const response = await axios.post('https://losh-site.onrender.com/support-email', formData);
//         if (response.data.success) {
//           setFormData({ firstName: '', lastName: '', email: '', message: '' });
//           setShowModal(true);
//         } else {
//           console.error('Error sending email:', response.data.error);
//           alert('Error sending message. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error details:', error);
//         alert('Error sending message. Please try again.');
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };
//   return (
//     <section className="py-20">
//       <div className="max-w-4xl mx-auto px-6">
//         <motion.h2
//           className="text-3xl md:text-4xl mb-12 text-center font-heading text-gray-200"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Let's Connect
//         </motion.h2>
//         <div className="grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl mb-4 text-gray-200">Get in Touch</h3>
//             <p className="text-gray-400">
//               I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
//             </p>
//             <div className="flex items-center space-x-2 text-gray-400">
//               <Mail size={20} />
//               <a href="mailto:oumaduor5827@gmail.com" className="hover:text-white transition-colors">
//                 oumaduor5827@gmail.com
//               </a>
//             </div>
//             <div className="flex space-x-6 pt-4">
//               {socialLinks.map((link) => (
//                 <motion.a
//                   key={link.label}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-colors"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {link.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//           <motion.form
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Your First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 text-gray-200"
//             />
//             {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Your Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 text-gray-200"
//             />
//             {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 text-gray-200"
//             />
//             {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 text-gray-200"
//             />
//             {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
//             <button
//               type="submit"
//               className="w-full px-8 py-3 bg-gray-500 hover:bg-gray-700 rounded-md transition-colors duration-300 flex items-center justify-center"
//               disabled={isLoading}
//             >
//                 {isLoading ? <><FaSpinner className="animate-spin mr-2" /> Sending Message...</> : 'Send Message'}
//             </button>
//           </motion.form>
//         </div>
//       </div>
//       <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
//     </section>
//   );
// };
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, Linkedin, Twitter, Mail } from 'react-feather';
import { useFormState, useFormStatus } from 'react-dom';
import { useTransition } from 'react';
import { sendContactForm } from './actions';
import { Modal } from './Modal';
const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (<button type="submit" className="w-full px-8 py-3 bg-gray-500 hover:bg-gray-700 rounded-md transition-colors duration-300 flex items-center justify-center disabled:opacity-50" disabled={pending}>
      {pending ? (<span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending Message...
        </span>) : ('Send Message')}
    </button>);
};
export const Contact = () => {
    const [isPending, startTransition] = useTransition();
    const [showModal, setShowModal] = React.useState(false);
    const socialLinks = [
        { icon: <GitHub />, url: 'https://github.com/IsoDevMate', label: 'GitHub' },
        { icon: <Linkedin />, url: 'https://linkedin.com/in/barack-ouma-b37089212', label: 'LinkedIn' },
        { icon: <Twitter />, url: 'https://twitter.com/BarackOuma7', label: 'Twitter' },
    ];
    const initialState = {};
    const [state, formAction] = useFormState((state, formData) => sendContactForm(formData), initialState);
    React.useEffect(() => {
        if (state?.success) {
            startTransition(() => {
                setShowModal(true);
            });
        }
    }, [state]);
    const FormField = ({ name, type = 'text', placeholder, isTextArea = false }) => {
        const errors = state?.fieldErrors?.[name];
        const Component = isTextArea ? 'textarea' : 'input';
        return (<div className="space-y-1">
        <Component type={type} name={name} placeholder={placeholder} className={`w-full px-6 py-3 bg-gray-800/50 border ${errors ? 'border-red-500' : 'border-gray-700/30'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 text-gray-200`} {...(isTextArea ? { rows: 4 } : {})}/>
        {errors?.map((error, index) => (<p key={index} className="text-red-500 text-xs mt-1">
            {error}
          </p>))}
      </div>);
    };
    return (<section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl mb-12 text-center font-heading text-gray-200" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Let's Connect
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
 <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <motion.form action={formAction} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          {state?.error && (<div className="text-red-500 bg-red-100/10 p-3 rounded">
              {state.error}
            </div>)}

          <FormField name="firstName" placeholder="Your First Name"/>

          <FormField name="lastName" placeholder="Your Last Name"/>

          <FormField name="email" type="email" placeholder="Your Email"/>

          <FormField name="message" placeholder="Your Message" isTextArea/>
          <SubmitButton />
          </motion.form>
          </motion.div>

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
        </div>


      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}/>
    </section>);
};

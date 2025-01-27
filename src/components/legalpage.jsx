// import React from 'react';
// import { motion } from 'framer-motion';
// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 }
// };
// interface AccordionSectionProps {
//   title: string;
//   children: React.ReactNode;
//   isOpen: boolean;
//   onToggle: () => void;
// }
// const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children, isOpen, onToggle }) => {
//   return (
//     <div className="border-b border-gray-700">
//       <button
//         onClick={onToggle}
//         className="w-full py-4 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
//       >
//         <span className="text-lg font-medium">{title}</span>
//         <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
//           ▼
//         </span>
//       </button>
//       {isOpen && (
//         <div className="pb-4 text-gray-300">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };
// interface Section {
//   title: string;
//   content: string;
// }
// interface LegalPageProps {
//   title: string;
//   sections: Section[];
// }
// export const LegalPage: React.FC<LegalPageProps> = ({ title, sections }) => {
//   const [openSection, setOpenSection] = React.useState(0);
//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="min-h-screen bg-gray-900 py-12 px-4"
//     >
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
//           <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-white mb-4">Table of Contents</h2>
//             <nav className="space-y-2">
//               {sections.map((section, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setOpenSection(index)}
//                   className="block text-blue-400 hover:text-blue-300 transition-colors"
//                 >
//                   {index + 1}. {section.title}
//                 </button>
//               ))}
//             </nav>
//           </div>
//           <div className="space-y-4">
//             {sections.map((section, index) => (
//               <AccordionSection
//                 key={index}
//                 title={`${index + 1}. ${section.title}`}
//                 isOpen={openSection === index}
//                 onToggle={() => setOpenSection(openSection === index ? -1 : index)}
//               >
//                 {section.content}
//               </AccordionSection>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// export const TermsOfService = () => {
//   const sections = [
//     {
//       title: "Acceptance of Terms",
//       content: "By accessing and using this portfolio website, you accept and agree to be bound by the terms and provisions of this agreement."
//     },
//     {
//       title: "Use License",
//       content: "Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only."
//     }
//   ];
//   return <LegalPage title="Terms of Service" sections={sections} />;
// };
// export const PrivacyPolicy = () => {
//   const sections = [
//     {
//       title: "Information Collection",
//       content: "When you use the contact form on this website, we collect: name, email address, and message content."
//     },
//     {
//       title: "Use of Information",
//       content: "The information collected is used solely for responding to your inquiries and improving website functionality."
//     }
//   ];
//   return <LegalPage title="Privacy Policy" sections={sections} />;
// };
import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from "@material-tailwind/react";
const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    },
    exit: { opacity: 0, y: -20 }
};
const sectionVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};
// Reusable legal page component
const LegalPage = ({ title, introduction, sections }) => {
    return (<motion.div className="min-h-screen py-12 px-4 md:px-8 bg-gray-900" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div variants={sectionVariants} className="mb-12">
          <Typography variant="h1" className="text-4xl font-bold text-white mb-6" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
            {title}
          </Typography>
          <Typography className="text-gray-400" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
            {introduction}
          </Typography>
        </motion.div>

        {/* Table of Contents */}
        <motion.div variants={sectionVariants} className="mb-12 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
          <Typography variant="h4" className="text-white
          mb-4" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
            Table of Contents
          </Typography>
          <nav className="space-y-2">
            {sections.map((section) => (<a key={section.id} href={`#${section.id}`} className="block text-blue-400 hover:text-blue-300 transition-colors">
                {section.title}
              </a>))}
          </nav>
        </motion.div>

        {/* Content Sections */}
        {sections.map((section) => (<motion.section key={section.id} id={section.id} variants={sectionVariants} className="mb-12">
            <Typography variant="h2" className="text-2xl font-bold text-white mb-4" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              {section.title}
            </Typography>
            <div className="prose prose-invert max-w-none">
              {section.content}
              {section.subsections?.map((subsection) => (<div key={subsection.id} className="mt-6">
                  <Typography variant="h3" className="text-xl font-semibold text-white mb-3" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                    {subsection.title}
                  </Typography>
                  <div className="text-gray-400">
                    {subsection.content}
                  </div>
                </div>))}
            </div>
          </motion.section>))}
      </div>
    </motion.div>);
};
// Terms of Service Component
export const TermsOfService = () => {
    const termsOfServiceSections = [
        {
            id: "acceptance-of-terms",
            title: "1. Acceptance of Terms",
            content: "By accessing and using this portfolio website, you accept and agree to be bound by the terms and provisions of this agreement.",
            subsections: [
                {
                    id: "modifications",
                    title: "1.1 Modifications",
                    content: "We reserve the right to modify these terms at any time. Your continued use of the site constitutes acceptance of those changes."
                }
            ]
        },
        {
            id: "use-license",
            title: "2. Use License",
            content: "Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only.",
            subsections: [
                {
                    id: "restrictions",
                    title: "2.1 Restrictions",
                    content: "You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or content obtained from this website."
                }
            ]
        },
        {
            id: "disclaimer",
            title: "3. Disclaimer",
            content: "The materials on this website are provided 'as is'. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties."
        },
        {
            id: "limitations",
            title: "4. Limitations",
            content: "In no event shall we be liable for any damages arising out of the use or inability to use the materials on this website."
        },
        {
            id: "governing-law",
            title: "5. Governing Law",
            content: "These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
        }
    ];
    return (<LegalPage title="Terms of Service" introduction="Welcome! These Terms of Service govern your use of my portfolio website. By accessing or using this site, you agree to be bound by these terms." sections={termsOfServiceSections}/>);
};
// Privacy Policy Component
export const PrivacyPolicy = () => {
    const privacyPolicySections = [
        {
            id: "information-collection",
            title: "1. Information Collection",
            content: "When you use the contact form on this website, we collect: name, email address, and message content.",
            subsections: [
                {
                    id: "personal-data",
                    title: "1.1 Personal Data",
                    content: "We collect personal information such as your name, email address, and message content when you contact us."
                },
                {
                    id: "usage-data",
                    title: "1.2 Usage Data",
                    content: "We automatically collect certain information about how you interact with our website, such as your IP address and browsing behavior."
                }
            ]
        },
        {
            id: "use-of-information",
            title: "2. Use of Information",
            content: "The information collected is used solely for responding to your inquiries and improving website functionality.",
            subsections: [
                {
                    id: "communication",
                    title: "2.1 Communication",
                    content: "We use your contact information to respond to your inquiries and provide support."
                },
                {
                    id: "improvement",
                    title: "2.2 Improvement",
                    content: "We analyze usage data to improve the functionality and user experience of our website."
                }
            ]
        },
        {
            id: "data-protection",
            title: "3. Data Protection",
            content: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
            subsections: [
                {
                    id: "security-measures",
                    title: "3.1 Security Measures",
                    content: "We use industry-standard security practices to safeguard your data."
                },
                {
                    id: "data-retention",
                    title: "3.2 Data Retention",
                    content: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy."
                }
            ]
        },
        {
            id: "your-rights",
            title: "4. Your Rights",
            content: "You have the right to access, correct, or delete your personal information. You can also object to the processing of your data.",
            subsections: [
                {
                    id: "access-and-correction",
                    title: "4.1 Access and Correction",
                    content: "You can request access to your personal information and ask us to correct any inaccuracies."
                },
                {
                    id: "deletion",
                    title: "4.2 Deletion",
                    content: "You can request the deletion of your personal information, subject to certain legal obligations."
                }
            ]
        }
    ];
    return (<LegalPage title="Privacy Policy" introduction="This Privacy Policy explains how we collect, use, and protect your personal information when you use our website." sections={privacyPolicySections}/>);
};

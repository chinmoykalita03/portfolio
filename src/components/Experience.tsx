import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'SDE Intern',
    company: 'Bluestock',
    period: 'May 2025 - June 2025',
    links: [
      { text: 'Project Link', href: 'https://github.com/chinmoykalita03/ipo-web-app' },
      { text: 'Certificate', href: 'https://drive.google.com/file/d/1ohqWramwde5TNdb4K_I9_3YksRgcS0Ih/view?usp=sharing' },
    ],
    responsibilities: [
      'Developed a full-stack IPO management web application using the MERN stack during an internship at Bluestock Fintech, featuring secure JWT authentication, file uploads via Cloudinary, and complete CRUD functionality.',
      'Built responsive and professional UI components with React and Tailwind CSS, and integrated dynamic frontend features like dashboard search, filter, and pagination.',
      'Engineered backend services using Express.js and MongoDB, implemented robust RESTful APIs, error handling, and used Git-based version control for collaboration and deployment readiness.',
    ],
  };

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Experience</h2>
          <p className="text-slate-600 text-lg">Professional journey and achievements</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden sm:block"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 p-8 ml-0 sm:ml-16 hover:shadow-xl transition-all duration-300">
            <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg hidden sm:block"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{experience.title}</h3>
                <p className="text-lg text-slate-600">{experience.company}</p>
              </div>
              <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                <Award className="w-4 h-4 text-blue-500" />
                <span className="text-slate-500 font-medium">{experience.period}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {experience.links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ExternalLink className="w-3 h-3 text-white" />
                  <span>{link.text}</span>
                </motion.a>
              ))}
            </div>

            <ul className="space-y-3">
              {experience.responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 leading-relaxed">{responsibility}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
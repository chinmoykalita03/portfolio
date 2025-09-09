import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Bitsize News',
      description: 'AI-driven text summarization Chrome extension with React-based popup UI and trained NLP model.',
      techStack: ['React', 'Node.js', 'MongoDB', 'NLP', 'JWT', 'Chrome Extension'],
      github: 'https://github.com/Bornik03/Mini_Project',
      features: [
        'Built a Chrome extension with a React-based popup UI for an AI-driven text summarization service using a trained NLP model (avg. inference time: 2.8s)',
        'Designed and integrated RESTful APIs with Node.js, implemented JWT authentication, and managed session data with MongoDB',
        'Enabled summary history tracking and performed thorough API testing using Postman to ensure secure and reliable functionality',
      ],
    },
    {
      name: 'SkyCast',
      description: 'Responsive weather forecast web application with real-time data integration and optimized performance.',
      techStack: ['React', 'OpenWeather API', 'Responsive Design', 'Performance Optimization'],
      github: 'https://github.com/chinmoykalita03/SkyCast',
      features: [
        'Built a responsive weather forecast web application using React and integrated it with the OpenWeather API to display real-time temperature, humidity, and wind speed data',
        'Implemented optimized API request handling, ensured seamless user experience across devices, and followed best practices in frontend performance and responsiveness',
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Projects</h2>
          <p className="text-slate-600 text-lg">Featured work and technical implementations</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                <div className="flex space-x-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-slate-100 to-blue-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200/50 hover:border-blue-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">{feature}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
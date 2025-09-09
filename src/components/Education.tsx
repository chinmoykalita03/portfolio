import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'KIIT University',
      period: 'Expected 2026',
      score: 'CGPA: 8.55',
      type: 'university',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Concept Junior College',
      period: '2019 – 2021',
      score: 'Score: 93.2%',
      type: 'college',
    },
    {
      degree: 'Secondary Education',
      institution: 'Christ Jyoti School',
      period: '2007 – 2019',
      score: 'Score: 89.6%',
      type: 'school',
    },
  ];

  const coursework = [
    'Data Structures and Algorithms',
    'Operating Systems',
    'Artificial Intelligence',
    'Software Engineering',
    'Machine Learning',
    'Cloud Computing',
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Education</h2>
          <p className="text-slate-600 text-lg">Academic background and achievements</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden sm:block"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 p-6 ml-0 sm:ml-16 mb-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -left-4 top-6 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg hidden sm:block flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    <div className="flex items-center space-x-1 text-slate-500 text-sm">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-slate-700 font-semibold">{edu.score}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              Relevant Coursework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coursework.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-default border border-slate-200/50 hover:border-blue-300 shadow-sm hover:shadow-md"
                >
                  <p className="text-slate-700 font-medium text-sm">{course}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
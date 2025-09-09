import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [ 'Python','Java', 'SQL'],
    },
    {
      title: 'Technologies & Frameworks',
      icon: Database,
      skills: ['LangChain', 'PyTorch', 'RAG', 'LlaMa', 'VectorDB', 'HF Transformers', 'FastAPI', 'Pandas', 'Numpy', 'Git', 'BERT'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Gradio', 'Git', 'Comfy UI','Cursor'],
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Skills</h2>
          <p className="text-slate-600 text-lg">Technical expertise and proficiencies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4 shadow-md">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-gradient-to-r from-slate-100 to-blue-50 hover:from-blue-100 hover:to-purple-100 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-medium transition-all duration-200 cursor-default border border-slate-200/50 hover:border-blue-300 shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
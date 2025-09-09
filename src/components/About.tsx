import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import profileImage from '../profile.jpg';

const About = () => {
  const contactInfo = [
    { icon: Mail, text: 'udhaymofficial@gmail.com', href: 'mailto:udhaymofficial@gmail.com' },
    { icon: Phone, text: '+91 7984877295', href: 'tel:+917984877295' },
    { icon: MapPin, text: 'Kachchh, Gujarat', href: null },
    { icon: Github, text: 'github.com/Udhay-2505', href: 'https://github.com/Udhay-2505' },
    { icon: Linkedin, text: 'linkedin.com/in/udhaymenon', href: 'https://www.linkedin.com/in/udhay-menon-5870b8252/' },
  ];

  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Profile Picture Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src={profileImage} alt="Udhay B Menon" className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Udhay B Menon
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-600 mb-8 font-medium">
              Computer Science Engineer
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              I specialize in applying artificial intelligence and machine learning techniques to solve real-world problems, automate workflows, and extract valuable insights from data.My focus is on developing scalable and innovative AI solutions that drive efficiency, creativity, and data-driven decision-making.
            </p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 transition-all duration-300 border border-slate-200/50 shadow-sm hover:shadow-md"
                >
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-700 text-sm font-medium">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
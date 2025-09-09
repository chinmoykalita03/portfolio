import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
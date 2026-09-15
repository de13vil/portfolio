import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import Journey from './components/Journey';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white">
      {/* Background pattern */}
      <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-20 pointer-events-none mix-blend-screen mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
      <div className="fixed inset-0 z-[-2] bg-background"></div>
      
      <Navbar />
      
      <main className="flex flex-col relative z-0">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ProblemSolving />
        <Journey />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

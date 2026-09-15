import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="flex flex-col items-start space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono"
          >
            ECE @ MNNIT Allahabad
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Hi, I'm {portfolioData.personal.name}.<br/>
            <span className="text-secondary">
              I build things for the web<br/>
              and solve problems with code.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-secondary max-w-lg"
          >
            B.Tech ECE student at MNNIT Allahabad, passionate about software engineering, full-stack development, backend systems, and problem solving.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-3 bg-primary text-background font-medium rounded hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 py-3 border border-border bg-background/50 hover:bg-border/50 text-primary font-medium rounded transition-colors flex items-center justify-center"
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent hover:text-white flex items-center gap-2 transition-colors mt-2 font-mono group"
            >
              Download Resume 
              <Download size={14} className="group-hover:translate-y-[2px] transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Terminal Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          {/* Decorative elements behind terminal */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-2xl opacity-50 rounded-lg"></div>
          
          <div className="relative rounded-lg border border-border bg-[#050505] shadow-2xl box-glow overflow-hidden font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#111] border-b border-border">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-xs text-secondary">bash</div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 text-gray-300 space-y-4">
              <div>
                <span className="text-accent">$</span> <span className="text-white">whoami</span>
              </div>
              <div className="text-green-400">
                software_engineer
              </div>
              <div className="text-secondary">
                ├── full_stack<br/>
                ├── backend<br/>
                ├── problem_solver<br/>
                ├── competitive_programmer<br/>
                └── system_design_learner
              </div>
              <div className="pt-2">
                <span className="text-accent">$</span> <span className="text-white">npm run build</span>
              </div>
              <div className="text-blue-400">
                &gt; building for production...
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span> <span>ready in 2.4s</span>
              </div>
              <div className="flex items-center pt-2">
                <span className="text-accent">$</span> <span className="w-2 h-4 bg-primary ml-2 terminal-cursor inline-block"></span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

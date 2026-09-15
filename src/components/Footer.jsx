import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/30 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-primary">{portfolioData.personal.name}</span>
        </div>
        
        <div className="text-sm text-secondary text-center md:text-left">
          Software Engineer <span className="mx-2 text-border">•</span> Builder <span className="mx-2 text-border">•</span> Problem Solver
        </div>
        
        <div className="flex items-center gap-6 text-sm text-secondary">
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Email</a>
        </div>
        
        <div className="text-xs text-secondary mt-4 md:mt-0 w-full md:w-auto text-center md:text-right">
          © {year} {portfolioData.personal.name}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

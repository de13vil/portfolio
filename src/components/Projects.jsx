import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ProjectPreview = ({ type }) => {
  if (type === 'deadman') {
    return (
      <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-border p-6 font-mono relative overflow-hidden flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
        <div className="w-full max-w-sm border border-border rounded-lg bg-[#111] p-6 shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
          <div className="text-center mb-6">
            <h4 className="text-primary font-bold text-lg tracking-widest">DEADMAN-LINK</h4>
            <p className="text-xs text-secondary mt-1">Your shortened URL</p>
          </div>
          <div className="bg-background border border-accent/30 rounded p-3 text-center mb-6">
            <span className="text-accent text-sm">deadman.link/abc123</span>
          </div>
          <div className="flex justify-between items-center text-xs text-secondary mb-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Expires in: 23:41
            </span>
          </div>
          <button className="w-full py-2 bg-primary text-background rounded hover:bg-white/90 transition-colors text-sm font-sans font-medium">
            Copy Link
          </button>
        </div>
      </div>
    );
  }

  if (type === 'medwell') {
    return (
      <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-border p-6 relative overflow-hidden flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent pointer-events-none"></div>
        <div className="w-full max-w-sm border border-border rounded-lg bg-[#111] overflow-hidden shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
          {/* Header */}
          <div className="px-4 py-3 border-b border-border bg-[#151515] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-green-500/20 flex items-center justify-center border border-green-500/30">
                <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
              </div>
              <span className="font-semibold text-sm text-primary">MedWell</span>
            </div>
            <div className="flex gap-3 text-xs text-secondary">
              <span>Dashboard</span>
              <span>Patients</span>
            </div>
          </div>
          {/* Body */}
          <div className="p-4">
            <div className="text-xs text-secondary mb-3">Overview</div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#1a1a1a] p-3 rounded border border-border">
                <div className="text-xs text-secondary mb-1">Total Patients</div>
                <div className="text-lg font-mono text-primary">1,248</div>
              </div>
              <div className="bg-[#1a1a1a] p-3 rounded border border-border">
                <div className="text-xs text-secondary mb-1">Appointments</div>
                <div className="text-lg font-mono text-primary">32 Today</div>
              </div>
            </div>
            <div className="h-12 w-full bg-[#1a1a1a] rounded border border-border flex items-center justify-center">
              <div className="text-xs text-secondary italic">Patient Chart UI</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
        </motion.div>

        <div className="space-y-32">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={project.id} className="group">
                <div className={`flex flex-col gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Project Info */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-5/12 flex flex-col justify-center"
                  >
                    <div className="text-accent font-mono mb-4 text-sm">{project.id}</div>
                    <h3 className="text-3xl font-bold text-primary mb-2 uppercase tracking-tight">{project.title}</h3>
                    <p className="text-primary font-medium text-lg mb-6 leading-snug">{project.subtitle}</p>
                    
                    <p className="text-secondary mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-secondary font-mono">
                        {project.tech.map((t, i) => (
                          <span key={i} className="flex items-center">
                            {t}
                            {i < project.tech.length - 1 && <span className="mx-2 text-border">•</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mt-auto pt-4 border-t border-border/50">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-medium"
                        >
                          <Github size={18} />
                          GitHub <span className="ml-1">→</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm font-medium"
                        >
                          <ExternalLink size={18} />
                          Live Demo <span className="ml-1">→</span>
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* Project Visual */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-7/12 aspect-[4/3] lg:aspect-auto min-h-[400px]"
                  >
                    <ProjectPreview type={project.type} />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

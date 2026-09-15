import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-24 relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold tracking-tight mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-secondary text-lg leading-relaxed space-y-6"
          >
            <p>
              {portfolioData.personal.longBio}
            </p>
          </motion.div>

          {/* Right: Profile Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="bg-[#111] border border-border rounded-lg p-8 shadow-xl"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-primary font-medium">{portfolioData.personal.institute}</h3>
                <p className="text-secondary text-sm mt-1">{portfolioData.personal.degree}</p>
              </div>
              
              <div className="w-full h-px bg-border"></div>
              
              <div>
                <h3 className="text-secondary text-xs uppercase tracking-wider mb-2 font-mono">Focus</h3>
                <p className="text-primary">Software Engineering</p>
              </div>
              
              <div>
                <h3 className="text-secondary text-xs uppercase tracking-wider mb-2 font-mono">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-Stack Development",
                    "Backend Systems",
                    "DSA",
                    "Competitive Programming",
                    "System Design"
                  ].map((interest, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-background border border-border text-primary text-sm rounded"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

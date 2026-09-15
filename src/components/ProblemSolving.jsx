import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ProblemSolving = () => {
  return (
    <section className="py-24 relative border-t border-border/30 bg-[#050505]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4"
        >
          <Terminal className="text-accent" size={32} />
          <h2 className="text-3xl font-bold tracking-tight">Problem Solving</h2>
        </motion.div>

        <div className="max-w-2xl">
          {/* LeetCode */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="group block p-8 bg-[#111] border border-border rounded-lg hover:border-accent/30 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">LeetCode</h3>
                <p className="text-sm text-secondary">Algorithmic Problem Solving</p>
              </div>
              <div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-yellow-500 border border-border">
                {/* LeetCode simplified icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-sm text-secondary font-mono mb-2 uppercase tracking-wider">Rating</div>
              <div className="text-4xl font-bold text-primary font-mono tracking-tighter">
                {portfolioData.problemSolving.leetcode.rating}
              </div>
            </div>

            <a 
              href={portfolioData.problemSolving.leetcode.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors"
            >
              View Profile <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;

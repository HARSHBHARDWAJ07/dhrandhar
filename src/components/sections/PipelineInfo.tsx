"use client";

import React from 'react';
import { motion } from 'motion/react';

export const PipelineInfo = () => {
  return (
    <section id="pipeline" className="relative min-h-screen w-full bg-[#050505] py-32 px-6 md:px-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-crimson">Intelligence Briefing // Financials</span>
            <h2 className="font-clash font-semibold text-5xl md:text-7xl text-[#F5F5F5] tracking-tight">
              THE FINANCIAL <br />
              <span className="text-crimson">PIPELINE.</span>
            </h2>
          </div>
          
          <p className="font-neue text-xl text-[#A1A1AA] leading-relaxed max-w-xl">
            The shadow banking network, primarily controlled by the Khanani Brothers, forms the invisible thread connecting global terror, organized crime, and political instability.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-cyan-intel uppercase">Annual Flow</span>
              <div className="text-4xl font-clash text-white">$16B+</div>
              <p className="text-xs text-[#A1A1AA]">Estimated annual Hawala transactions.</p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-cyan-intel uppercase">Network Reach</span>
              <div className="text-4xl font-clash text-white">GLOBAL</div>
              <p className="text-xs text-[#A1A1AA]">Spanning Lyari to Wall Street.</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-square bg-black/40 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center p-12">
          {/* Data Visualization Placeholder */}
          <div className="absolute inset-0 opacity-20">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-crimson/40 via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 w-full space-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] text-white/60">
                  <span>NODE_0{i} // ENCRYPTED</span>
                  <span>{Math.floor(Math.random() * 100)}%</span>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.random() * 100}%` }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                  className="h-1 bg-crimson shadow-[0_0_10px_rgba(225,29,72,0.5)]"
                />
              </div>
            ))}
            
            <div className="pt-8 border-t border-white/10">
              <p className="font-mono text-[10px] text-white/40 leading-tight">
                CRITICAL WARNING: UNAUTHORIZED ACCESS TO FINANCIAL DATA DETECTED. <br />
                TRACE_PROTOCOL_INITIATED...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EtherealShadow } from '@/src/components/ui/ethereal-shadow';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  
  const zPush = useTransform(scrollYProgress, [0, 0.1], [1, 1.35]);
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.12], [0, -72]);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(max-width: 640px)');

    const syncMobileState = () => setIsMobile(mediaQuery.matches);
    syncMobileState();

    mediaQuery.addEventListener('change', syncMobileState);
    return () => mediaQuery.removeEventListener('change', syncMobileState);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <EtherealShadow 
          title=""
          color="#1a0505"
          animation={{ scale: 80, speed: 40 }}
          noise={{ opacity: 0.4, scale: 1.2 }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 pb-44 pt-28 sm:px-10 sm:pb-20 sm:pt-40 lg:px-16">
        <motion.div 
          style={{ scale: isMobile ? 1 : zPush, opacity, y: textY }}
          className="mx-auto flex w-full max-w-6xl flex-col items-center text-center"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 sm:gap-10">
            <h1 className="mx-auto w-full max-w-full px-3 text-center font-syncopate font-bold uppercase leading-[0.95] text-[#F5F5F5] sm:max-w-none sm:px-0">
              <span className="mx-auto block text-[clamp(1.6rem,8.2vw,7.5rem)] tracking-[0.012em] sm:text-[clamp(1.9rem,9.7vw,7.5rem)] sm:tracking-[0.06em]">
                DHURANDHAR
              </span>
              <span className="mx-auto mt-3 block text-[clamp(1.35rem,6.6vw,5.8rem)] leading-none tracking-[0.01em] text-crimson sm:mt-4 sm:text-[clamp(1.45rem,7.2vw,5.8rem)] sm:tracking-[0.05em]">
                <span className="block sm:inline">THE REALITY</span>
                <span className="block sm:inline"> BEHIND THE REEL.</span>
              </span>
            </h1>

            <p className="mx-auto max-w-3xl px-2 font-neue text-lg font-normal leading-relaxed text-[#A1A1AA] sm:text-xl">
              An editorial deep-dive into the real-life spymasters, gangsters, and political titans that inspired the cinematic underworld.
            </p>

            <div className="flex w-full max-w-sm flex-col gap-3 px-2 pt-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-0 sm:pt-2">
              <button
                type="button"
                onClick={() => scrollToSection("ajay-sanyal")}
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-crimson bg-crimson px-4 py-3 font-mono text-[10px] uppercase leading-[1.15] tracking-wider text-center text-white shadow-[0_16px_40px_rgba(225,29,72,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-rose-500 sm:w-auto sm:px-6 sm:py-4 sm:text-[11px] sm:tracking-[0.24em] sm:whitespace-nowrap"
              >
                Explore Dossiers
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("pipeline")}
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/15 bg-black/30 px-4 py-3 font-mono text-[10px] uppercase leading-[1.15] tracking-wider text-center text-white/85 backdrop-blur-md transition-colors duration-300 hover:border-cyan-intel/60 hover:text-cyan-intel sm:w-auto sm:px-6 sm:py-4 sm:text-[11px] sm:tracking-[0.24em] sm:whitespace-nowrap"
              >
                Follow The Pipeline
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

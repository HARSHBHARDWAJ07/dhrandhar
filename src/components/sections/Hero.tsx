"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EtherealShadow } from '@/src/components/ui/ethereal-shadow';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  const zPush = useTransform(scrollYProgress, [0, 0.1], [1, 1.35]);
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.12], [0, -72]);

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

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 pb-32 pt-24 sm:px-10 sm:pb-20 sm:pt-40 lg:px-16">
        <motion.div 
          style={{ scale: zPush, opacity, y: textY }}
          className="mx-auto flex w-full max-w-6xl flex-col items-center text-center"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 sm:gap-10">
            <h1 className="font-syncopate text-[clamp(3.5rem,8vw,7.5rem)] font-bold uppercase leading-[0.98] tracking-[0.06em] text-[#F5F5F5]">
              DHURANDHAR
              <br />
              <span className="text-crimson">THE REALITY BEHIND THE REEL.</span>
            </h1>

            <p className="mx-auto max-w-3xl px-2 font-neue text-lg font-normal leading-relaxed text-[#A1A1AA] sm:text-xl">
              An editorial deep-dive into the real-life spymasters, gangsters, and political titans that inspired the cinematic underworld.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

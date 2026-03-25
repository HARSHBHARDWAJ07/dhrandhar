"use client";

import React, { useEffect, useState } from 'react';
import { Compare } from '@/src/components/ui/compare';
import ScrollReveal from '@/src/components/ui/scroll-reveal';

interface CharacterDossierProps {
  id: string;
  name: string;
  realName: string;
  playedBy?: string;
  focus: string;
  narrative: string;
  movieImg: string;
  realImg: string;
  isDark?: boolean;
}

export const CharacterDossier: React.FC<CharacterDossierProps> = ({
  id,
  name,
  realName,
  playedBy,
  focus,
  narrative,
  movieImg,
  realImg,
  isDark = false
}) => {
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');

    const applyMode = () => {
      setIsCoarsePointer(mediaQuery.matches);
    };

    applyMode();

    mediaQuery.addEventListener('change', applyMode);
    return () => mediaQuery.removeEventListener('change', applyMode);
  }, []);

  return (
    <section
      id={id}
      className={`relative min-h-screen w-full overflow-hidden px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-40 lg:px-16 ${
        isDark ? 'bg-[#050505]' : 'bg-[#0e0f12]'
      }`}
    >
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute left-6 top-10 select-none font-syncopate text-6xl font-bold uppercase tracking-tighter text-white/[0.02] md:left-10 md:text-[9rem] lg:left-16 lg:text-[12rem]">
        {name.split(' ')[0]}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 md:gap-14">
        <div className="mx-auto w-full max-w-5xl space-y-8 md:space-y-10">
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full border border-crimson/20 bg-crimson/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-crimson">
              Classified Dossier // {id.toUpperCase()}
            </span>

            <div className="space-y-4">
              <h2 className="max-w-3xl font-clash text-4xl font-semibold tracking-tight text-[#F5F5F5] md:text-5xl lg:text-6xl">
                {name} <span className="text-cyan-intel">/</span> {realName}
              </h2>

              <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-6">
                {playedBy && (
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/60">
                    Played by {playedBy}
                  </p>
                )}
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-intel">
                  {focus}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/8 bg-black/25 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8 lg:p-10">
            <div className="max-w-[94ch] xl:max-w-[104ch]">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                blurStrength={6}
                textClassName="!font-neue !text-[clamp(1rem,1.45vw,1.25rem)] !font-medium !leading-[1.95] text-[#B8BAC4]"
              >
                {narrative}
              </ScrollReveal>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-crimson via-crimson/40 to-transparent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-crimson">
              End of Report
            </span>
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-5xl">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-intel/5 blur-3xl opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
          <Compare
            firstImage={movieImg}
            secondImage={realImg}
            className="h-[420px] w-full rounded-[2rem] border border-white/10 shadow-2xl sm:h-[520px] lg:h-[680px]"
            firstImageClassName="object-cover"
            secondImageClassname="object-cover"
            slideMode={isCoarsePointer ? 'drag' : 'hover'}
            autoplay={false}
          />
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 backdrop-blur-md md:bottom-6 md:left-6 md:right-6">
            <span>Reel: {name}</span>
            <span>Real: {realName}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

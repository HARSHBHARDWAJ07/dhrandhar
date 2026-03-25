"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { IconDotsVertical } from "@tabler/icons-react";
import { SparklesCore } from "@/src/components/ui/sparkles";
import { cn } from "@/src/lib/utils";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

const clamp = (v: number) => Math.max(0, Math.min(100, v));

// 🔥 Smooth factor (lower = smoother)
const SMOOTHING = 0.12;

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [target, setTarget] = useState(initialSliderPercentage);
  const [slider, setSlider] = useState(initialSliderPercentage);

  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const autoplayRef = useRef<any>(null);

  // ─── SMOOTH INTERPOLATION (LERP) ─────────────────────
  useEffect(() => {
    const animate = () => {
      setSlider((prev) => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.1) return target;
        return prev + diff * SMOOTHING;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  // ─── AUTOPLAY ─────────────────────
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
  }, []);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    stopAutoplay();

    const start = Date.now();

    const loop = () => {
      const t = (Date.now() - start) % (autoplayDuration * 2);
      const progress = t / autoplayDuration;

      const value =
        progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setTarget(value);
      autoplayRef.current = setTimeout(loop, 16);
    };

    loop();
  }, [autoplay, autoplayDuration, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  // ─── CORE POSITION ─────────────────────
  const update = useCallback((clientX: number) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const percent = clamp(((clientX - rect.left) / rect.width) * 100);

    setTarget(percent); // 👈 smooth target instead of direct
  }, []);

  // ─── GLOBAL TRACKING ─────────────────
  useEffect(() => {
    if (
      (slideMode === "hover" && !isHovering) &&
      (slideMode === "drag" && !isDragging)
    ) return;

    const move = (e: MouseEvent) => update(e.clientX);
    const up = () => {
      setIsDragging(false);
      setIsHovering(false);
      startAutoplay();
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [isDragging, isHovering, slideMode, update, startAutoplay]);

  // ─── EVENTS ─────────────────────
  const onEnter = (e: React.MouseEvent) => {
    if (slideMode !== "hover") return;
    setIsHovering(true);
    stopAutoplay();
    update(e.clientX);
  };

  const onLeave = () => {
    if (slideMode !== "hover") return;
    setIsHovering(false);
    setTarget(initialSliderPercentage);
    startAutoplay();
  };

  const onDown = (e: React.MouseEvent) => {
    if (slideMode !== "drag") return;
    setIsDragging(true);
    stopAutoplay();
    update(e.clientX);
  };

  const onUp = () => {
    if (slideMode !== "drag") return;
    setIsDragging(false);
    startAutoplay();
  };

  const onMove = (e: React.MouseEvent) => {
    if (slideMode === "hover") update(e.clientX);
    if (slideMode === "drag" && isDragging) update(e.clientX);
  };

  const active = autoplay || isHovering || isDragging;

  // ─── UI ─────────────────────
  return (
    <div
      ref={ref}
      className={cn("relative h-[400px] w-[400px] overflow-hidden", className)}
      style={{ cursor: "col-resize" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseMove={onMove}
    >
      {/* Divider */}
      <motion.div
        className="absolute inset-y-0 z-30 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-indigo-500 to-transparent"
        style={{ left: `${slider}%` }}
      >
        {/* Glow */}
        <div className="absolute left-0 top-1/2 h-full w-36 -translate-y-1/2 bg-gradient-to-r from-indigo-400 to-transparent opacity-50" />
        <div className="absolute right-0 top-1/2 h-full w-36 -translate-y-1/2 bg-gradient-to-l from-indigo-400 to-transparent opacity-50" />

        {active && (
          <div className="absolute left-1/2 top-1/2 h-3/4 w-24 -translate-x-1/2 -translate-y-1/2">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="h-full w-full"
              particleColor="#FFFFFF"
            />
          </div>
        )}

        {showHandlebar && (
          <div className="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-white">
            <IconDotsVertical className="h-4 w-4 text-black" />
          </div>
        )}
      </motion.div>

      {/* First Image */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - slider}% 0 0)`,
          }}
        >
          <img
            src={firstImage}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </motion.div>
      </div>

      {/* Second Image */}
      <img
        src={secondImage}
        className="absolute inset-0 z-[19] h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
};
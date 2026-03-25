"use client"

import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/src/lib/utils"

interface NavItem {
  name: string
  targetId: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string;
  activeTab?: string;
  onTabChange?: (name: string, targetId: string) => void;
}

export function TubelightNavBar({ items, className, activeTab: externalActiveTab, onTabChange }: NavBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  const activeTab = externalActiveTab || internalActiveTab;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleTabClick = (name: string, targetId: string) => {
    setInternalActiveTab(name);
    if (onTabChange) onTabChange(name, targetId);
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-black/20 border border-white/10 backdrop-blur-xl py-1 px-1 rounded-full shadow-2xl overflow-x-auto max-w-[95vw] sm:max-w-none no-scrollbar">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleTabClick(item.name, item.targetId)}
              className={cn(
                "relative cursor-pointer text-xs font-semibold px-4 py-2 rounded-full transition-colors",
                "text-white/60 hover:text-white",
                isActive && "text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-cyan-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-cyan-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-cyan-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

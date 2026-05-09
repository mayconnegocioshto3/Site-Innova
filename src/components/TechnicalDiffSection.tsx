"use client";

import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import content from "@/data/content.json";

function AnimatedPercent({ value, delay }: { value: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 40, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, motionValue, delay]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="font-display text-4xl font-black text-white tracking-wider">
      {displayValue}%
    </span>
  );
}

export default function TechnicalDiffSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring for "heavy" cinematic movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.001
  });

  // Premium Parallax: Deep depth and high visibility
  const backgroundY = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1.05, 1]);
  // Increased base opacity and wider full-visibility range
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.7, 1, 1, 0.7]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-black text-white border-y border-white/5" 
      id="diferenciais"
    >
      {/* Premium Background System - Part 1 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ 
            y: backgroundY, 
            scale: backgroundScale, 
            opacity: backgroundOpacity 
          }}
          className="w-full h-[115%] relative top-[-7.5%]"
        >
          <Image 
            src="/images/qualidade-servico-final.png" 
            alt="Innova Qualidade Premium" 
            fill
            sizes="100vw"
            className="object-cover brightness-90 contrast-110"
          />
          {/* Enhanced gradient overlays for the new aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </motion.div>
      </div>

      {/* Subtle modern background accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-innova-maroon)]/10 rounded-full blur-[100px] pointer-events-none z-20"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-innova-yellow)]/5 rounded-full blur-[100px] pointer-events-none z-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 flex flex-col items-center relative"
        >
          {/* Watermark text for premium feel */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-7xl lg:text-8xl font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none z-0 tracking-widest uppercase">
            Excelência
          </h2>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight relative z-10 text-white drop-shadow-sm leading-[1.1]">
            Qualidade em <br className="hidden sm:block"/>
            <span className="text-[var(--color-innova-yellow)] drop-shadow-md">Cada Serviço</span>
          </h2>
          <div className="w-16 h-1 bg-white/20 mt-8 rounded-full relative z-10"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 mt-16">
          {content.technicalDiff.map((item, index) => {
            const radius = 70;
            const circumference = 2 * Math.PI * radius;
            const delay = 0.3 + index * 0.2;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group transition-all duration-500"
              >
                {/* Radial Progress Bar */}
                <div className="relative w-40 h-40 flex items-center justify-center mb-8">
                  
                  <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-lg" viewBox="0 0 200 200">
                    {/* Track */}
                    <circle
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="16"
                    />
                    
                    {/* Progress Indicator */}
                    <motion.circle
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke="var(--color-innova-yellow)"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: circumference * (1 - item.percent / 100) }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay }}
                    />
                  </svg>
                  
                  {/* Inner Percentage Text */}
                  <div className="flex flex-col items-center justify-center relative z-10">
                    <AnimatedPercent value={item.percent} delay={delay} />
                  </div>

                  {/* Dynamic background glow on hover */}
                  <div className="absolute inset-4 bg-[var(--color-innova-yellow)]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <h3 
                  className="font-bold text-xl md:text-2xl text-white tracking-wide uppercase mb-3"
                  style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9)' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-gray-200 text-sm md:text-base max-w-[250px] leading-relaxed font-medium"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

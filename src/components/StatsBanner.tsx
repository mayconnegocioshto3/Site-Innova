"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import content from "@/data/content.json";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-black text-white">
      {displayValue}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="w-full bg-[var(--color-innova-maroon)] relative z-30">
      {/* Top thin yellow border */}
      <div className="h-1 w-full bg-[var(--color-innova-yellow)]" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {content.stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <span className="text-[var(--color-innova-yellow)] text-xs md:text-sm font-bold tracking-widest mt-2 uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

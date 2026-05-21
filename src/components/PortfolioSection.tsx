"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import content from "@/data/content.json";
import { useRef } from "react";

export default function PortfolioSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

  const backgroundY = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1.05, 1]);
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.4, 0.95, 0.95, 0.4]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden" 
      id="projetos"
    >
      {/* Premium Background System - Part 2 */}
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
            src="/images/premium-bg-2.png" 
            alt="Innova Premium Portfolio Background" 
            fill
            sizes="100vw"
            className="object-cover brightness-100 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase leading-none text-white">
              Nosso <br className="hidden md:block" />
              <span className="text-[var(--color-innova-yellow)] drop-shadow-md">Portfólio</span>
            </h2>
            <p className="mt-6 text-gray-400 font-medium text-lg md:text-xl max-w-xl leading-relaxed">
              Arraste ou use as setas para ver a transformação real dos nossos projetos. Da sujeira à perfeição.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-4"
          >
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all text-white/70 hover:text-white"
              aria-label="Voltar"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-[var(--color-innova-yellow)]/50 flex items-center justify-center hover:bg-[var(--color-innova-yellow)]/20 hover:border-[var(--color-innova-yellow)] transition-all text-[var(--color-innova-yellow)]"
              aria-label="Avançar"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Slider */}
      <div className="relative w-full pl-4 sm:pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 pt-4 snap-x snap-mandatory hide-scrollbar relative z-10" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {content.portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex-none w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] aspect-[4/5] md:aspect-[3/4] snap-center sm:snap-start rounded-3xl overflow-hidden group cursor-grab active:cursor-grabbing shadow-2xl"
            >
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-1 bg-[var(--color-innova-yellow)] mb-4 rounded-full"></div>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white drop-shadow-lg tracking-wide">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
          <div className="flex-none w-8"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import content from "@/data/content.json";

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) return `${names[0][0]}${names[1][0]}`.toUpperCase();
    return names[0].substring(0, 2).toUpperCase();
  };

  const colors = ["bg-gray-800", "bg-[var(--color-innova-cyan)]", "bg-[var(--color-innova-maroon)]", "bg-gray-600"];

  return (
    <section className="py-24 bg-gray-50 text-gray-900 relative overflow-hidden" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-16 h-1 bg-[var(--color-innova-cyan)] mb-8 rounded-full opacity-60"></div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight uppercase text-gray-900"
          >
            O Que Dizem <span className="text-[var(--color-innova-yellow)] drop-shadow-sm">Nossos Clientes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-gray-500 max-w-2xl mx-auto"
          >
            A satisfação de quem confia no nosso trabalho é a nossa maior recompensa.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-100 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:text-[var(--color-innova-cyan)] focus:outline-none"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-100 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:text-[var(--color-innova-cyan)] focus:outline-none"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Track */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {content.testimonials.map((testimonial, index) => {
              const avatarColor = colors[index % colors.length];
              
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 text-left flex flex-col h-auto min-h-[300px] transform transition-all duration-300 hover:-translate-y-2 relative"
                >
                  {/* Subtle top border accent */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-[var(--color-innova-yellow)] rounded-b-full opacity-50"></div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[var(--color-innova-yellow)] text-[var(--color-innova-yellow)]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-500 italic text-lg leading-relaxed flex-grow mb-8">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm ${avatarColor}`}>
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-lg leading-tight">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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

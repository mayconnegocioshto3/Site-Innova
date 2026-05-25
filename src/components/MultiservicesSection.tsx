"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PaintRoller, Wrench, HardHat, Lightbulb } from "lucide-react";
import content from "@/data/content.json";

const iconMap = {
  PaintRoller,
  Wrench,
  HardHat,
  Lightbulb,
};
interface Service {
  title: string;
  subtitle: string;
  icon: string;
  image: string;
}

export default function MultiservicesSection() {
  return (
    <section className="py-24 bg-gray-50 text-gray-900 relative overflow-hidden border-t border-gray-100" id="solucoes">
      {/* Decorative gradient orb for premium feel */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-innova-cyan)]/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="w-16 h-1 bg-[var(--color-innova-cyan)] mb-8 rounded-full opacity-60"></div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 tracking-tight uppercase">
            Outras <span className="text-[var(--color-innova-yellow)] drop-shadow-sm">Soluções</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Muito além da pintura. Oferecemos soluções completas com a mesma excelência e acabamento para sua reforma ou manutenção.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {(content.multiservices as unknown as Service[]).map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-2xl border border-gray-100 hover:border-transparent hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle border accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--color-innova-yellow)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 rounded-b-[2.5rem]"></div>

                {/* Image Container Wrapper for overlapping icon */}
                <div className="relative w-full mb-8">
                  {/* Image Container with overflow hidden */}
                  <div className="relative w-full h-40 rounded-3xl overflow-hidden shadow-inner bg-gray-100">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Icon floating over image (Not clipped because it's outside the overflow-hidden wrapper) */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-20 group-hover:bg-[var(--color-innova-yellow)] transition-colors duration-500">
                    {IconComponent && (
                      <IconComponent 
                        className="w-5 h-5 text-[var(--color-innova-cyan)] group-hover:text-black transition-colors duration-500" 
                        strokeWidth={2} 
                      />
                    )}
                  </div>
                </div>
                
                {/* Text Content */}
                <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-2 mt-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">
                  {service.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Home, Building2, Sparkles, ArrowRight } from "lucide-react";
import content from "@/data/content.json";

const iconMap = {
  Home,
  Building2,
  Sparkles,
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white text-gray-900 relative z-10" id="servicos">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20 text-center flex flex-col items-center"
        >
          <div className="w-16 h-1 bg-[var(--color-innova-yellow)] mb-8 rounded-full opacity-60"></div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            {content.services.title}{" "}
            <span className="text-[var(--color-innova-yellow)] drop-shadow-sm">{content.services.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl text-center">
            {content.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {content.services.list.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 relative hover:-translate-y-2"
              >
                {/* Image Top Half */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 md:opacity-80 md:group-hover:opacity-90 transition-opacity duration-500" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Title on Image */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end z-20 p-8 pb-12">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-wide group-hover:text-[var(--color-innova-yellow)] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Overlapping Icon */}
                <div className="absolute top-64 sm:top-72 right-8 -translate-y-1/2 z-30">
                  <div className="w-20 h-20 bg-[var(--color-innova-yellow)] md:bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:rotate-12 group-hover:bg-[var(--color-innova-yellow)] transition-all duration-500">
                    {IconComponent && <IconComponent className="text-gray-900 w-9 h-9" />}
                  </div>
                </div>

                {/* Content Bottom Half */}
                <div className="flex-1 flex flex-col items-start justify-start pt-10 pb-10 px-8 relative bg-white overflow-hidden">
                  {/* Golden Line Hover Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-innova-yellow)] transform origin-left md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>

                  <p className="text-gray-600 md:text-gray-500 font-medium text-base sm:text-lg leading-relaxed relative z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 w-full flex justify-start z-10 transition-transform duration-500 group-hover:-translate-y-2">
                     <span className="inline-flex items-center gap-2 text-[var(--color-innova-cyan)] font-bold uppercase text-sm tracking-wider group-hover:text-[var(--color-innova-yellow)] transition-colors duration-300 cursor-pointer">
                        Solicitar Orçamento <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

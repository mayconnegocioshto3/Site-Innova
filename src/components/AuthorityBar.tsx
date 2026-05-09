"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";

export default function AuthorityBar() {
  return (
    <section className="w-full bg-[var(--color-innova-cyan)] py-8 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          <span className="text-black/60 uppercase text-sm font-bold tracking-widest mr-4">Nossos Parceiros</span>
          {content.authority.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="font-display text-2xl md:text-3xl font-bold text-black uppercase"
            >
              {partner.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

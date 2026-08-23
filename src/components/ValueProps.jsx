"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Citrus, ShieldCheck, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import FadeInView from "./FadeInView";

export default function ValueProps({ propsData }) {

  return (
    <section className="py-12 lg:py-24 bg-white relative overflow-hidden border-t border-neutral-border/30">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply pointer-events-none">
        <Image
          src="/assets/value-props-bg.jpg"
          alt="Value Props Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12 lg:gap-16">
          
          {/* HEADER */}
          <FadeInView className="w-full text-center space-y-4 max-w-2xl mx-auto">
            <h4 className="text-accent font-sans font-black text-2xl sm:text-3xl tracking-widest uppercase">
              Why Arabian Pulpy?
            </h4>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-neutral-dark tracking-tight leading-[1.1]">
              Real Fruit.<br />
              Real <span className="italic text-accent font-light">Benefits.</span>
            </h2>
          </FadeInView>

          {/* RIGHT: 4 ITEMS GRID */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {propsData.map((item, index) => {
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="flex flex-col rounded-[7px] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-border/20 group relative overflow-hidden h-48 sm:h-56 lg:h-64 justify-center items-center"
                >
                  {/* BACKGROUND IMAGE & OVERLAY */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-[7px]">
                    <Image src={item.image} alt={item.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-[#5C535F]/95 group-hover:bg-[#5C535F]/90 transition-colors duration-500 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C535F] to-transparent" />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 relative z-10 text-center transform group-hover:-translate-y-2 transition-transform duration-500">
                    <h4 className="font-serif text-2xl sm:text-3xl lg:text-3xl tracking-wide text-white font-bold">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-sans font-light leading-relaxed text-[#F2EAF9] opacity-90 max-w-[250px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

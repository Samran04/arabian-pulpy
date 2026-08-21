"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Citrus, ShieldCheck, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import FadeInView from "./FadeInView";

export default function ValueProps() {
  const props = [
    {
      icon: Sparkles,
      title: "Authentic Taste",
      desc: "Real fruit pulp meticulously prepared to deliver an authentic, rich profile.",
    },
    {
      icon: Citrus,
      title: "Real Fruit Pulp",
      desc: "Sourced from the finest orchards, bursting with natural goodness.",
    },
    {
      icon: HeartPulse,
      title: "Natural Ingredients",
      desc: "Pure refreshment with absolutely no artificial colors or preservatives.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Crafted under rigorous hygienic standards for a premium experience.",
    },
  ];

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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          
          {/* LEFT: TITLE */}
          <FadeInView className="w-full lg:w-1/4 shrink-0 space-y-4">
            <h4 className="text-accent font-sans font-bold text-[10px] tracking-widest uppercase">
              Why Arabian Pulpy?
            </h4>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-neutral-dark tracking-tight leading-[1.1]">
              Real Fruit.<br />
              Real <span className="italic text-accent font-light">Benefits.</span>
            </h2>
          </FadeInView>

          {/* RIGHT: 4 ITEMS HORIZONTALLY */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {props.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="text-accent">
                    <Icon className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg tracking-wide text-neutral-dark font-medium">
                      {item.title}
                    </h4>
                    <p className="text-xs font-sans font-light leading-relaxed text-neutral-muted">
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

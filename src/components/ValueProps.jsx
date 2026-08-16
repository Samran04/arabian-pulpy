"use client";

import React from "react";
import { Sparkles, Citrus, ShieldCheck, HeartPulse } from "lucide-react";

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
    <section id="about" className="py-24 md:py-32 bg-primary text-neutral-offwhite relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: EDITORIAL NARRATIVE */}
          <div className="space-y-8 max-w-xl">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide leading-[1.1] text-neutral-white">
              Real Fruit.<br />
              Real Tradition.
            </h2>
            <div className="h-[1px] w-16 bg-accent/40" />
            <p className="font-sans text-lg font-light leading-relaxed text-neutral-muted">
              Arabian Pulp represents a bridge between heritage and contemporary luxury. We believe that true refreshment comes from nature itself. Every bottle is a testament to traditional preparation methods elevated for the modern palate, ensuring that the vibrant essence of real fruit is preserved in every drop.
            </p>
          </div>

          {/* RIGHT: ELEGANT LIST (NO CARDS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 pt-4 lg:pt-0">
            {props.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col gap-4">
                  <div className="text-accent">
                    <Icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl tracking-wide text-neutral-white">
                      {item.title}
                    </h4>
                    <p className="text-sm font-sans font-light leading-relaxed text-neutral-muted">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

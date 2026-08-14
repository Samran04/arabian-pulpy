"use client";

import React from "react";
import { Sparkles, Citrus, ShieldCheck, HeartPulse } from "lucide-react";

export default function ValueProps() {
  const props = [
    {
      icon: Sparkles,
      title: "Authentic Taste",
      desc: "Real fruit pulp delivers authentic and rich taste.",
    },
    {
      icon: Citrus,
      title: "Real Fruit Pulp",
      desc: "Made with real fruit pulp for natural goodness.",
    },
    {
      icon: HeartPulse,
      title: "Natural Ingredients",
      desc: "No artificial colors or preservatives.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Hygienically processed and quality tested.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-[#12081d] border-y border-[#8869AC]/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#8869AC]/15 via-transparent to-[#f5d77f]/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-5 p-5 rounded-2xl bg-[#24133b] border border-[#8869AC]/35 hover:border-[#8869AC] hover:bg-[#321950] transition-all duration-400 group shadow-lg hover:shadow-primary-glow hover:-translate-y-1"
              >
                
                {/* CIRCULAR BADGE ICON */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#e3be5a] via-[#f5d77f] to-[#b8902c] p-[1.5px] shrink-0 flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-[#12081d] flex items-center justify-center text-[#e3be5a] group-hover:text-[#f5d77f] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#e3be5a] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

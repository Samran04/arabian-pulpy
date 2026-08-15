"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Leaf, Citrus, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import RiveLightAnimation from "./RiveLightAnimation";

export default function Hero({ onExploreClick }) {
  const { addToCart } = useCart();

  return (
    <section id="hero" className="relative min-h-[85vh] bg-[#12081d] overflow-hidden flex items-center justify-center pt-16 pb-24">

      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 opacity-75 pointer-events-none">
        <Image
          src="/assets/hero-bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* RIVE VECTOR ANIMATION & INTERACTIVE LIGHT PARTICLES OVERLAY */}
      <RiveLightAnimation />

      {/* AMBIENT GLOW & SEAMLESS BACKDROP LIGHTING OVERLAYS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#8869AC]/35 via-[#432a63]/45 to-[#f5d77f]/15 blur-[140px] rounded-full pointer-events-none animate-pulse-slow z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#12081d]/85 via-transparent to-[#12081d] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-start justify-center text-left space-y-6 sm:space-y-8">

        {/* MAIN HEADINGS - MONTSERRAT MEDIUM FONT */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <h1 className="font-montserrat font-medium text-4xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[1.1] uppercase">
            Natural Pulp <br />
            <span className="animate-gold-shimmer font-montserrat font-medium">
              Drink
            </span>
          </h1>
          <p className="font-montserrat font-medium text-lg sm:text-3xl text-[#e3be5a] tracking-wider uppercase">
            Pure Arabian Essence
          </p>
        </div>

        {/* BODY DESCRIPTION */}
        <p className="text-gray-200 text-sm sm:text-lg max-w-xl font-sans leading-relaxed font-light">
          Crafted from the finest hand-selected fruits and authentic real pulp, delivering an exquisite luxury experience in every sip.
        </p>

        {/* CTA BUTTON */}
        <div className="pt-2 w-full sm:w-auto">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 h-16 rounded-2xl bg-gradient-to-r from-[#e3be5a] via-[#f5d77f] to-[#b8902c] text-[#12081d] font-montserrat font-bold text-xs sm:text-sm tracking-[0.2em] uppercase overflow-hidden shadow-gold-glow hover:shadow-[0_0_40px_rgba(227,190,90,0.7)] hover:scale-105 transition-all duration-300 active:scale-100"
          >
            <span className="relative z-10 flex items-center gap-3 text-[#12081d]">
              EXPLORE FLAVORS
              <ChevronRight className="w-5 h-5 text-[#12081d] group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}

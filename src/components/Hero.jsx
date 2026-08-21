"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ onExploreClick }) {
  return (
    <section id="hero" className="relative min-h-[100vh] md:min-h-[85vh] bg-primary-deep overflow-hidden flex items-start md:items-center justify-center pt-32 pb-16 md:pt-28 md:pb-24">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary-muted pointer-events-none z-0" />
      
      {/* BACKGROUND SPLASH DECORATION (Optional texture) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* DESKTOP BACKGROUND */}
        <Image
          src="/assets/hero-bg.png"
          alt="Hero Texture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 hidden md:block"
        />
        {/* MOBILE BACKGROUND */}
        <Image
          src="/assets/hero-bg-mobile.png"
          alt="Hero Texture Mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-100 md:hidden"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

        {/* LEFT COLUMN: TYPOGRAPHY & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-center text-left space-y-6 sm:space-y-8 z-20"
        >

          <div className="mb-6">
            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-neutral-dark leading-[1.1] mb-6">
              The Taste of
              <span className="block text-accent italic font-light mt-1">Real Fruit.</span>
            </h1>
            <p className="font-sans font-bold text-xs sm:text-sm text-neutral-dark tracking-widest uppercase">
              Authentic • Natural • Premium
            </p>
          </div>

          <p className="text-neutral-muted text-sm sm:text-base max-w-md font-sans leading-relaxed font-light">
            Crafted from the finest hand-selected fruits and authentic real pulp, delivering an exquisite luxury experience in every sip. Inspired by tradition.
          </p>

          <div className="pt-4">
            <button
              onClick={onExploreClick}
              className="group relative inline-flex items-center justify-center px-8 h-12 rounded-full bg-accent text-white font-sans font-medium text-xs sm:text-sm tracking-wider uppercase overflow-hidden hover:bg-accent-light transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                EXPLORE FLAVORS
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2]" />
              </span>
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: PRODUCT PHOTOGRAPHY */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex h-[700px] w-full relative items-center justify-center mt-10 lg:mt-0"
        >

          {/* Left Bottle - Lychee */}
          <div className="absolute w-[340px] h-[540px] left-10 lg:-left-4 top-32 z-10 hover:scale-105 hover:-translate-y-2 transition-transform duration-500">
            <Image
              src="/assets/lychee-cup.png"
              alt="Lychee Cup"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-contain"
            />
          </div>

          {/* Center Bottle - Grape (Hero) */}
          <div className="absolute w-[420px] h-[660px] top-8 z-20 transform hover:scale-105 hover:-translate-y-4 transition-all duration-500">
            <Image
              src="/assets/grape-cup.png"
              alt="Grape Cup"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Bottle - Basil Seeds */}
          <div className="absolute w-[340px] h-[540px] right-10 lg:-right-4 top-24 z-10 hover:scale-105 hover:-translate-y-2 transition-transform duration-500">
            <Image
              src="/assets/basil-seeds.png"
              alt="Basil Seeds Cup"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-contain"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Hero({ onExploreClick }) {
  return (
    <section id="hero" className="relative min-h-[85vh] bg-primary-deep overflow-hidden flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24">

      {/* DESKTOP BACKGROUND IMAGE - Subtle ambient texture */}
      <div className="hidden md:block absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <Image
          src="/assets/hero-bg.png"
          alt="Hero Background Desktop"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* MOBILE PORTRAIT BACKGROUND IMAGE */}
      <div className="block md:hidden absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <Image
          src="/assets/hero-bg-mobile.png"
          alt="Hero Background Mobile"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/80 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN: TYPOGRAPHY & CTA */}
        <div className="flex flex-col items-start justify-center text-left space-y-6 sm:space-y-8 z-20">

          <div className="mb-10">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-white leading-[1.2] drop-shadow-lg mb-6">
              <span className="block text-accent italic font-light mb-2 text-3xl sm:text-4xl">Arabian Pulpy</span>
              The Taste of Real Fruit.
            </h1>
            <p className="font-sans font-medium text-sm sm:text-base text-neutral-muted tracking-widest uppercase">
              Authentic • Natural • Premium
            </p>
          </div>

          <p className="text-neutral-offwhite text-sm sm:text-lg max-w-md font-sans leading-relaxed font-light opacity-90">
            Crafted from the finest hand-selected fruits and authentic real pulp, delivering an exquisite luxury experience in every sip. Inspired by tradition.
          </p>

          <div className="pt-4">
            <button
              onClick={onExploreClick}
              className="group relative inline-flex items-center justify-center px-10 h-14 rounded-md bg-accent/40 text-neutral-white border border-accent/50 font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase overflow-hidden hover:bg-accent/60 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                EXPLORE FLAVORS
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2]" />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: PRODUCT PHOTOGRAPHY */}
        <div className="hidden md:flex h-[600px] w-full relative items-center justify-center">

          {/* Back Bottle - Pomegranate */}
          <div className="absolute w-[220px] h-[450px] -left-8 top-12 opacity-80 rotate-[-15deg] filter grayscale animate-colorize-1 z-10">
            <Image
              src="/assets/pomegranate.png"
              alt="Pomegranate Bottle"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Back Bottle - Mango */}
          <div className="absolute w-[220px] h-[450px] -right-4 top-12 opacity-80 rotate-[15deg] filter grayscale animate-colorize-3 z-10">
            <Image
              src="/assets/mango.png"
              alt="Mango Bottle"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Center Bottle - Grape (Hero) */}
          <div className="absolute w-[280px] h-[550px] z-20 filter grayscale animate-colorize-2 transform hover:scale-105 transition-transform duration-700">
            <Image
              src="/assets/grape.png"
              alt="Grape Bottle"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

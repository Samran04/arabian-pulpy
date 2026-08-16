"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, X, Check } from "lucide-react";

export default function RefreshmentBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-primary-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER CONTAINER */}
        <div className="relative rounded-lg overflow-hidden bg-primary border border-neutral-border/10 p-10 sm:p-16 lg:p-20 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* LEFT TEXT CONTENT */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-wide text-neutral-white leading-tight">
                Simplify Your <br />
                <span className="italic font-light text-accent">Refreshment</span>
              </h2>

              <div className="inline-flex items-center gap-4 text-accent text-xs font-sans tracking-widest uppercase">
                <Sparkles className="w-4 h-4 stroke-[1.5]" />
                <span>POMEGRANATE • ROSE • SAFFRON</span>
              </div>

              <p className="text-neutral-muted text-base max-w-lg font-light leading-relaxed mx-auto lg:mx-0">
                Experience the royal synergy of cold-extracted pomegranate pulp infused with organic Persian rose petals and hand-harvested saffron threads.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-accent/30 text-neutral-offwhite font-sans text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300 rounded-md"
                >
                  DISCOVER THE BLEND
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                </button>
              </div>
            </div>

            {/* RIGHT BOTTLE SPLASH IMAGE */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-square group">
                <Image
                  src="/assets/banner-splash.png"
                  alt="Simplify Your Refreshment Routine - Arabian Pulp Splash"
                  width={420}
                  height={420}
                  className="object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* DISCOVER MORE MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/95 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-primary border border-primary-light/50 rounded-lg p-10 space-y-8 shadow-2xl">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-8 right-8 p-2 text-neutral-muted hover:text-accent transition-colors duration-300"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>

            <div className="space-y-4 border-b border-primary-light/30 pb-6">
              <span className="text-xs text-accent font-sans tracking-widest uppercase font-medium">
                Botanical Spotlight
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-neutral-white">
                Pomegranate, Rose & Saffron Heritage
              </h3>
            </div>

            <div className="space-y-6 text-base text-neutral-muted leading-relaxed font-light">
              <p>
                Rooted in ancient Arabian wellness traditions, this signature botanical blend combines three revered natural ingredients:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5 stroke-[1.5]" />
                  <div>
                    <strong className="text-neutral-offwhite font-medium">Wild-Picked Pomegranates:</strong> High in polyphenols and natural vitamin C for cellular protection.
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5 stroke-[1.5]" />
                  <div>
                    <strong className="text-neutral-offwhite font-medium">Damask Rose Water:</strong> Provides subtle floral aromatic notes and gentle digestive calming benefits.
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5 stroke-[1.5]" />
                  <div>
                    <strong className="text-neutral-offwhite font-medium">Pure Red Saffron Threads:</strong> Hand-harvested spice known for uplifting mood and enhancing natural flavor depth.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 flex justify-end border-t border-primary-light/30">
              <button
                onClick={() => setModalOpen(false)}
                className="px-8 py-3 text-accent hover:text-neutral-white font-sans text-xs tracking-widest uppercase transition-colors"
              >
                CLOSE SPOTLIGHT
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

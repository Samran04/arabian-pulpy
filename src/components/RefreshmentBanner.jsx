"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, X, Check } from "lucide-react";

export default function RefreshmentBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-12 bg-[#12081d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER CARD */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#3b1d5e] via-[#291445] to-[#1a0a2e] border border-[#8869AC]/40 p-8 sm:p-12 lg:p-14 shadow-2xl">
          
          {/* AMBIENT GLOW EFFECTS */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8869AC]/20 blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* LEFT TEXT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Simplify Your <br />
                <span className="animate-gold-shimmer font-serif">Refreshment Routine</span>
              </h2>

              <div className="inline-flex items-center gap-3 px-4.5 py-2 rounded-full bg-[#341b52]/90 border border-[#8869AC]/40 text-[#f5d77f] text-xs font-sans font-bold tracking-[0.2em] uppercase shadow-primary-glow">
                <Sparkles className="w-3.5 h-3.5 text-[#e3be5a] animate-pulse" />
                <span>POMEGRANATE • ROSE • SAFFRON</span>
              </div>

              <p className="text-gray-200 text-sm sm:text-base max-w-lg font-light leading-relaxed">
                Experience the royal synergy of cold-extracted pomegranate pulp infused with organic Persian rose petals and hand-harvested saffron threads.
              </p>

              <div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#e3be5a] via-[#f5d77f] to-[#b8902c] text-[#12081d] font-sans text-xs font-extrabold tracking-[0.2em] uppercase shadow-gold-glow hover:shadow-[0_0_35px_rgba(227,190,90,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  DISCOVER MORE
                  <ArrowRight className="w-4 h-4 text-[#12081d]" />
                </button>
              </div>
            </div>

            {/* RIGHT BOTTLE SPLASH IMAGE */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden group">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#160a25] border border-[#e3be5a]/30 rounded-3xl p-8 space-y-6 text-gray-200 shadow-2xl">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#2a133d] hover:bg-[#e3be5a] text-gray-300 hover:text-[#12081d] border border-[#e3be5a]/30 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 border-b border-[#e3be5a]/20 pb-4">
              <span className="text-xs text-[#e3be5a] font-sans tracking-[0.2em] uppercase font-bold">
                ROYAL FORMULA SPOTLIGHT
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">
                Pomegranate, Rose & Saffron Heritage
              </h3>
            </div>

            <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-light">
              <p>
                Rooted in ancient Arabian wellness traditions, this signature botanical blend combines three revered natural ingredients:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-[#200d34] p-4 rounded-xl border border-[#e3be5a]/20">
                  <Check className="w-5 h-5 text-[#e3be5a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Wild-Picked Pomegranates:</strong> High in polyphenols and natural vitamin C for cellular protection.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#200d34] p-4 rounded-xl border border-[#e3be5a]/20">
                  <Check className="w-5 h-5 text-[#e3be5a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Damask Rose Water:</strong> Provides subtle floral aromatic notes and gentle digestive calming benefits.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#200d34] p-4 rounded-xl border border-[#e3be5a]/20">
                  <Check className="w-5 h-5 text-[#e3be5a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Pure Red Saffron Threads:</strong> Hand-harvested spice known for uplifting mood and enhancing natural flavor depth.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#e3be5a] via-[#f5d77f] to-[#b8902c] text-[#12081d] font-sans font-bold text-xs tracking-wider uppercase hover:shadow-gold-glow transition-all"
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

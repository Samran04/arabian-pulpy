"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, X, Check } from "lucide-react";
import FadeInView from "./FadeInView";

export default function RefreshmentBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-12 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER CONTAINER */}
        <FadeInView>
        <div className="relative rounded-2xl overflow-hidden text-white p-8 sm:p-16 lg:p-20 shadow-2xl min-h-[800px] lg:min-h-[500px] flex items-start lg:items-center">
          
          {/* MOBILE BACKGROUND IMAGE */}
          <Image
            src="/assets/pouch-banner-mobile.png"
            alt="Grape Pouch Banner Mobile"
            fill
            sizes="(max-width: 1024px) 100vw, 0px"
            className="object-cover object-bottom absolute inset-0 z-0 pointer-events-none lg:hidden"
            priority
          />

          {/* DESKTOP BACKGROUND IMAGE */}
          <Image
            src="/assets/pouch-banner.png"
            alt="Grape Pouch Banner"
            fill
            sizes="(max-width: 1200px) 0px, 1200px"
            className="object-cover object-center absolute inset-0 z-0 pointer-events-none hidden lg:block"
            priority
          />

          <div className="relative z-10 w-full max-w-lg">
            
            {/* TEXT CONTENT */}
            <div className="space-y-6 text-left">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-primary-deep/70 font-bold">
                Perfect to share
              </span>
              
              <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide text-primary-deep leading-tight">
                Pulpy Grape <br />
                Pouch (2.5L)
              </h2>

              <div className="space-y-4">
                <p className="font-sans font-medium text-lg text-primary-deep/90">
                  More to share. More to love.
                </p>
                <p className="text-primary-deep/80 text-sm max-w-sm font-light leading-relaxed">
                  Ideal for family, gatherings, and every special occasion.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-3 px-8 py-3 bg-primary-deep text-white font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-neutral-dark transition-all duration-300 rounded-full"
                >
                  SHOP POUCH
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>

              {/* THREE ICONS ROW */}
              <div className="hidden lg:flex flex-wrap items-center gap-8 pt-10 mt-10 border-t border-primary-deep/20">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary-deep" />
                  <span className="text-xs font-sans font-medium text-primary-deep/90 max-w-[100px] leading-tight">Made from Real Fruit Pulp</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary-deep" />
                  <span className="text-xs font-sans font-medium text-primary-deep/90 max-w-[100px] leading-tight">No Added Preservatives</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary-deep" />
                  <span className="text-xs font-sans font-medium text-primary-deep/90 max-w-[100px] leading-tight">Rich in Taste & Refreshment</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        </FadeInView>
      </div>
    </section>
  );
}

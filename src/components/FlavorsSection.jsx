"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Plus, Eye, Star } from "lucide-react";
import { FLAVORS_DATA } from "../data/flavors";
import { useCart } from "../context/CartContext";

export default function FlavorsSection({ onSelectFlavor }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllMobile, setShowAllMobile] = useState(false);
  const { addToCart } = useCart();

  const categories = ["All", "Tropical", "Berries & Exotic", "Citrus & Herbal"];

  const filteredFlavors =
    activeCategory === "All"
      ? FLAVORS_DATA
      : FLAVORS_DATA.filter((f) => f.category === activeCategory);

  // On mobile screen, limit to 4 items unless showAllMobile is true
  const displayedFlavors = showAllMobile ? filteredFlavors : filteredFlavors.slice(0, 4);

  return (
    <section id="flavors" className="py-20 bg-[#12081d] relative">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#8869AC]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8869AC]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#8869AC]/30 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
                OUR FLAVORS
              </h2>
              <div className="h-[2px] w-20 bg-[#8869AC]" />
            </div>
            <p className="text-gray-300 font-sans text-sm sm:text-base">
              A wide range of natural pulp drinks to delight every taste.
            </p>
          </div>

          {/* VIEW ALL & CATEGORY FILTER TABS */}
          <div className="flex overflow-x-auto no-scrollbar pb-2 md:pb-0 md:flex-wrap items-center gap-2.5 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAllMobile(true);
                }}
                className={`px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-xs font-sans font-bold tracking-wider shrink-0 transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#8869AC] via-[#a88bc9] to-[#5e457f] text-white shadow-primary-glow scale-105 border border-[#c5a3eb]/40"
                    : "bg-[#24133d] text-gray-200 hover:text-white hover:bg-[#341b52] border border-[#8869AC]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID - SPACIOUS LUXURY LAYOUT */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredFlavors.map((flavor, index) => {
            // Hide items beyond index 3 on mobile screens unless showAllMobile is true
            const isHiddenOnMobile = !showAllMobile && index >= 4;

            return (
              <div
                key={flavor.id}
                className={`${isHiddenOnMobile ? "hidden md:flex" : "flex"} group relative rounded-2xl bg-gradient-to-b from-[#24133b] via-[#1a0c2c] to-[#12081d] border border-[#8869AC]/35 p-4 sm:p-5 flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-[#8869AC] hover:shadow-[0_20px_45px_rgba(136,105,172,0.35)]`}
              >
                
                {/* TOP BADGE & RATING */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#2a133d]/90 border border-[#e3be5a]/40 text-[#f5d77f] text-[10px] sm:text-xs font-sans font-semibold tracking-wider shadow-gold-glow">
                    {flavor.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[#e3be5a] text-xs sm:text-sm font-bold">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#e3be5a]" />
                    <span>{flavor.rating}</span>
                  </div>
                </div>

                {/* PRODUCT IMAGE CONTAINER */}
                <div
                  onClick={() => onSelectFlavor(flavor)}
                  className="relative my-4 sm:my-6 aspect-[4/5] rounded-xl overflow-hidden cursor-pointer flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                >
                  {/* AMBIENT GLOW BACKDROP */}
                  <div
                    className="absolute inset-0 opacity-40 group-hover:opacity-85 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: flavor.borderColor }}
                  />

                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    fill
                    className="object-contain p-2 relative z-10 drop-shadow-2xl"
                  />

                  {/* QUICK VIEW HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-[#12081d]/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-20">
                    <span className="p-3.5 rounded-full bg-gradient-to-r from-[#e3be5a] to-[#b8902c] text-[#12081d] shadow-gold-glow scale-110">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* FOOTER INFO & ACTION */}
                <div className="space-y-3 pt-3 sm:pt-4 border-t border-[#e3be5a]/15">
                  <div>
                    <h3
                      onClick={() => onSelectFlavor(flavor)}
                      className="font-montserrat text-base sm:text-xl font-bold text-white hover:text-[#e3be5a] cursor-pointer line-clamp-1 transition-colors"
                    >
                      {flavor.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans line-clamp-1 mt-0.5">
                      {flavor.tagline}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-sans font-extrabold text-base sm:text-lg text-[#e3be5a]">
                      ${flavor.price.toFixed(2)}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => addToCart(flavor)}
                        aria-label="Add to cart"
                        className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-[#e3be5a] to-[#b8902c] text-[#12081d] font-bold hover:scale-110 border border-[#e3be5a]/40 shadow-gold-glow transition-all duration-300"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => onSelectFlavor(flavor)}
                        aria-label="View details"
                        className="p-2.5 sm:p-3 rounded-xl bg-[#25103a] text-gray-300 hover:text-white hover:bg-[#381857] border border-[#e3be5a]/20 transition-all duration-300"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* VIEW MORE PRODUCTS TOGGLE BUTTON FOR MOBILE ONLY */}
        {filteredFlavors.length > 4 && (
          <div className="pt-8 md:hidden flex justify-center">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-[#160a25] border border-[#e3be5a]/40 text-[#f5d77f] font-montserrat font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#e3be5a] hover:text-[#12081d] hover:border-[#e3be5a] shadow-gold-glow transition-all duration-300"
            >
              <span>{showAllMobile ? "SHOW FEWER FLAVORS" : `VIEW MORE FLAVORS (${filteredFlavors.length - 4} MORE)`}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${showAllMobile ? "-rotate-90" : "rotate-90 group-hover:translate-y-0.5"}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

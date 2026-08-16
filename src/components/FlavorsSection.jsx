"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FLAVORS_DATA } from "../data/flavors";
import { useCart } from "../context/CartContext";

export default function FlavorsSection({ onSelectFlavor }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { addToCart } = useCart();

  const categories = ["All", "Tropical", "Berries & Exotic", "Citrus & Herbal"];

  const filteredFlavors =
    activeCategory === "All"
      ? FLAVORS_DATA
      : FLAVORS_DATA.filter((f) => f.category === activeCategory);

  const displayedFlavors = showAll ? filteredFlavors : filteredFlavors.slice(0, 4);

  return (
    <section id="flavors" className="py-24 bg-primary-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center mb-16 text-center space-y-6">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-white uppercase tracking-wide">
              Our Collection
            </h2>
            <div className="h-[1px] w-12 bg-accent/40 mx-auto" />
          </div>
          <p className="text-neutral-muted font-sans text-sm sm:text-base max-w-2xl mx-auto font-light">
            A curated selection of natural pulp beverages, crafted to delight every taste.
          </p>

          {/* CATEGORY FILTER TABS */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`text-xs font-sans tracking-widest uppercase transition-all duration-300 relative py-1 hover:text-neutral-offwhite ${
                  activeCategory === cat
                    ? "text-neutral-offwhite font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-accent/40"
                    : "text-neutral-muted font-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {displayedFlavors.map((flavor) => {
            return (
              <div
                key={flavor.id}
                className="flex flex-col group cursor-pointer"
                onClick={() => onSelectFlavor(flavor)}
              >
                
                {/* PRODUCT IMAGE */}
                <div className="relative aspect-[3/4] mb-6 rounded-md overflow-hidden bg-primary-light/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Subtle color hint based on product, applied with very low opacity to maintain brand feel */}
                  <div
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-3xl mix-blend-screen"
                    style={{ backgroundColor: flavor.borderColor || '#A78BFA' }}
                  />

                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    fill
                    className="object-contain p-6 relative z-10 drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="flex flex-col text-center space-y-2">
                  <h3 className="font-serif text-2xl text-neutral-white group-hover:text-accent transition-colors">
                    {flavor.name}
                  </h3>
                  <p className="text-sm text-neutral-muted font-sans font-light">
                    {flavor.tagline}
                  </p>
                  
                  <div className="pt-2 flex flex-col items-center gap-3">
                    <span className="font-sans font-medium text-lg text-neutral-offwhite tracking-wide">
                      ${flavor.price.toFixed(2)}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(flavor);
                      }}
                      className="text-xs font-sans uppercase tracking-widest text-accent hover:text-neutral-white transition-colors flex items-center gap-2"
                    >
                      ADD TO CART
                      <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* VIEW MORE TOGGLE */}
        {filteredFlavors.length > 4 && (
          <div className="pt-20 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 px-8 py-4 border border-neutral-border/20 text-neutral-offwhite font-sans text-xs tracking-widest uppercase hover:bg-primary-light/30 hover:border-accent/40 transition-all duration-300 rounded-md"
            >
              <span>{showAll ? "SHOW FEWER" : `VIEW MORE COLLECTION`}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

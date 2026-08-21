"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FLAVORS_DATA } from "../data/flavors";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import FadeInView from "./FadeInView";

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
    <section id="flavors" className="py-16 lg:py-24 bg-primary-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <FadeInView className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          
          {/* Left side */}
          <div className="space-y-4">
            <h4 className="text-accent font-sans font-bold text-xs tracking-widest uppercase">
              Our Collection
            </h4>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-neutral-dark tracking-tight">
              Pure. Natural. Irresistible.
            </h2>
          </div>
          
          {/* Right side */}
          <div className="flex flex-col space-y-4 max-w-sm">
            <p className="text-neutral-muted font-sans text-sm font-light leading-relaxed">
              A curated selection of natural pulp beverages, crafted to delight every taste.
            </p>
            <div className="hidden sm:block">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-3 px-6 py-3 border border-neutral-border text-neutral-dark font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-dark hover:text-white transition-all duration-300 rounded-md"
              >
                <span>{showAll ? "SHOW FEWER" : `VIEW ALL PRODUCTS`}</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>
        </FadeInView>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedFlavors.map((flavor, index) => {
            return (
              <motion.div
                key={flavor.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group cursor-pointer bg-white p-4 rounded-3xl shadow-sm border border-neutral-border/40 hover:shadow-md transition-shadow ${!showAll && index >= 2 ? 'hidden sm:flex flex-col' : 'flex flex-col'}`}
                onClick={() => onSelectFlavor(flavor)}
              >
                
                {/* PRODUCT IMAGE CONTAINER */}
                <div 
                  className="relative aspect-square mb-6 rounded-2xl overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2"
                  style={{ backgroundColor: flavor.pastelBg || '#f3f4f6' }}
                >
                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-6 relative z-10 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="flex flex-col px-2 pb-2">
                  <h3 className="font-serif text-lg font-medium text-neutral-dark mb-1">
                    {flavor.name}
                  </h3>
                  <p className="text-xs text-neutral-muted font-sans mb-4">
                    {flavor.tagline}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-sans font-bold text-lg text-neutral-dark">
                      ${flavor.price.toFixed(2)}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(flavor);
                      }}
                      className="w-10 h-10 rounded-full border border-neutral-border flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
                      aria-label={`Add ${flavor.name} to cart`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* MOBILE VIEW MORE BUTTON */}
        <div className="mt-12 flex justify-center sm:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 px-8 py-3 border border-neutral-border text-neutral-dark font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-dark hover:text-white transition-all duration-300 rounded-md w-full justify-center"
          >
            <span>{showAll ? "SHOW FEWER" : `VIEW ALL PRODUCTS`}</span>
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

      </div>
    </section>
  );
}

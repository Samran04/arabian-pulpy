"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import FadeInView from "./FadeInView";

export default function FlavorsSection({ onSelectFlavor, flavors = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { addToCart } = useCart();

  const categories = ["All", "Tropical", "Berries & Exotic", "Citrus & Herbal"];

  const filteredFlavors =
    activeCategory === "All"
      ? flavors
      : flavors.filter((f) => f.category === activeCategory);

  const displayedFlavors = showAll ? filteredFlavors : filteredFlavors.slice(0, 4);

  return (
    <section id="flavors" className="py-16 lg:py-24 bg-primary-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <FadeInView className="flex flex-col items-center text-center mb-16 gap-4 max-w-2xl mx-auto">
          <h4 className="text-accent font-sans font-black text-2xl sm:text-3xl tracking-widest uppercase">
            Our Flavours
          </h4>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-neutral-dark tracking-tight">
            Pure. Natural. Irresistible.
          </h2>
          <p className="text-neutral-muted font-sans text-sm font-light leading-relaxed pt-2">
            A curated selection of natural pulp beverages, crafted to delight every taste.
          </p>
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
                onClick={() => onSelectFlavor(flavor)}
                className={`group cursor-pointer bg-white p-4 rounded-[7px] shadow-sm border border-neutral-border/40 hover:shadow-md transition-shadow ${!showAll && index >= 2 ? 'hidden sm:flex flex-col' : 'flex flex-col'}`}
              >
                
                {/* PRODUCT IMAGE CONTAINER */}
                <div className="relative aspect-[4/5] w-full mb-4 bg-white/40 rounded-xl overflow-hidden">
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 text-[10px] font-sans font-medium text-neutral-muted uppercase tracking-wider bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-neutral-border/30 z-10">
                    {flavor.category}
                  </span>

                  {(flavor.inStock === false || flavor.stock === 0) && (
                    <span className="absolute top-3 right-3 text-[10px] font-sans font-bold text-rose-700 uppercase tracking-wider bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full z-10 shadow-sm">
                      Out of Stock
                    </span>
                  )}

                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col px-2 pb-2">
                  <h3 className="font-serif text-lg font-medium text-neutral-dark mb-1">
                    {flavor.name}
                  </h3>
                  <p className="text-xs text-neutral-muted font-sans mb-4">
                    {flavor.tagline}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-montserrat font-bold text-lg text-neutral-dark tabular-nums">
                      ₹{flavor.price.toFixed(2)}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(flavor);
                      }}
                      disabled={flavor.inStock === false || flavor.stock === 0}
                      className={`p-2.5 rounded-full transition-all duration-300 shadow-sm ${
                        flavor.inStock === false || flavor.stock === 0
                          ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                          : "bg-accent text-white hover:bg-accent-light hover:scale-105 active:scale-95"
                      }`}
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

        {/* VIEW ALL PRODUCTS BUTTON (BELOW PRODUCTS FOR ALL VIEWPORTS) */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#3D245B] border border-transparent text-white font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#2A1940] transition-all duration-300 rounded-md shadow-sm w-full sm:w-auto"
          >
            <span>{showAll ? "SHOW FEWER" : `VIEW ALL PRODUCTS`}</span>
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

      </div>
    </section>
  );
}

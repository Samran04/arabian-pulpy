"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, X, Star, ArrowRight } from "lucide-react";
import { FLAVORS_DATA } from "../data/flavors";
import { BLOG_POSTS } from "../data/blog";

export default function SearchModal({ isOpen, onClose, onSelectFlavor }) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const matchedFlavors = FLAVORS_DATA.filter(
    (f) =>
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.description.toLowerCase().includes(query.toLowerCase()) ||
      f.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchedBlogs = BLOG_POSTS.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#160a25] border border-[#e3be5a]/30 rounded-3xl p-6 space-y-6 text-gray-200 shadow-2xl max-h-[80vh] flex flex-col">
        
        {/* INPUT */}
        <div className="relative flex items-center border-b border-[#e3be5a]/30 pb-4">
          <Search className="w-5 h-5 text-[#e3be5a] absolute left-2" />
          <input
            type="text"
            autoFocus
            placeholder="Search drinks, ingredients (Mango, Pomegranate, Lychee, Mint...)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 bg-transparent text-white font-sans text-base focus:outline-none placeholder-gray-500"
          />
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-[#25103a] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* RESULTS */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
          
          {query.trim() === "" ? (
            <div className="text-center py-8 text-gray-400 text-xs font-sans font-light">
              Type to search signature natural pulp flavors and articles.
            </div>
          ) : (
            <>
              {/* FLAVORS */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#e3be5a] font-sans tracking-widest uppercase">
                  Flavors ({matchedFlavors.length})
                </h4>
                {matchedFlavors.length === 0 ? (
                  <p className="text-xs text-gray-400 font-sans">No matching flavors found.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchedFlavors.map((flavor) => (
                      <div
                        key={flavor.id}
                        onClick={() => {
                          onSelectFlavor(flavor);
                          onClose();
                        }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/20 hover:border-[#e3be5a]/60 hover:shadow-gold-glow cursor-pointer transition-all duration-300"
                      >
                        <div className="relative w-12 h-12 bg-[#12081d] rounded-lg shrink-0 overflow-hidden border border-[#e3be5a]/20">
                          <Image src={flavor.image} alt={flavor.name} fill className="object-contain p-1" />
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-serif text-sm font-bold text-white truncate">{flavor.name}</h5>
                          <span className="text-xs text-[#e3be5a] font-extrabold">${flavor.price.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* BLOGS */}
              <div className="space-y-3 pt-3 border-t border-[#e3be5a]/20">
                <h4 className="text-xs font-bold text-[#e3be5a] font-sans tracking-widest uppercase">
                  Articles ({matchedBlogs.length})
                </h4>
                {matchedBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="p-3.5 rounded-xl bg-[#200d34] border border-[#e3be5a]/20"
                  >
                    <h5 className="font-serif text-sm font-bold text-white">{blog.title}</h5>
                    <p className="text-xs text-gray-400 font-sans line-clamp-1">{blog.excerpt}</p>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

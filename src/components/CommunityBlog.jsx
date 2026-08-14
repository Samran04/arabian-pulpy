"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, X, Clock, User, Calendar } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";

export default function CommunityBlog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section id="blog" className="py-20 bg-[#12081d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT STORY BLOCK */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#341b52] border border-[#8869AC]/40 text-[#f5d77f] text-[11px] font-sans font-semibold tracking-[0.2em] uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>COMMUNITY HERITAGE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              A Story from the Arabian Community
            </h2>

            <p className="text-gray-300 font-sans text-sm sm:text-base font-light leading-relaxed">
              Born from a passion for purity and inspired by Arabian traditions, Arabian Pulp brings you closer to nature with every sip.
            </p>

            <div>
              <button
                onClick={() => setStoryOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#f5d77f] hover:text-white border-b-2 border-[#8869AC] pb-1 transition-all group"
              >
                READ MORE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT BLOG CARDS GRID */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="group rounded-2xl bg-[#24133b] border border-[#8869AC]/35 overflow-hidden flex flex-col justify-between hover:border-[#8869AC] transition-all duration-400 hover:-translate-y-1.5 shadow-xl hover:shadow-primary-glow"
              >
                
                <div>
                  {/* CARD IMAGE */}
                  <div className="relative aspect-[4/3] bg-[#1a082c] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#12081d]/90 text-[#f5d77f] text-[10px] font-sans font-bold border border-[#e3be5a]/40 shadow-gold-glow">
                      {post.readTime}
                    </div>
                  </div>

                  {/* CARD TEXT */}
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] text-[#e3be5a] font-sans tracking-widest uppercase font-semibold block">
                      {post.subtext}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#e3be5a] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* CARD READ MORE BUTTON */}
                <div className="px-5 pb-5 pt-2">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-2 text-xs font-sans font-bold text-[#e3be5a] hover:text-white transition-colors group-hover:translate-x-0.5"
                  >
                    READ MORE
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* FULL STORY MODAL */}
      {storyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#160a25] border border-[#e3be5a]/30 rounded-3xl p-8 space-y-6 text-gray-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setStoryOpen(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#2a133d] hover:bg-[#e3be5a] text-gray-300 hover:text-[#12081d] border border-[#e3be5a]/30 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs text-[#e3be5a] font-sans tracking-[0.2em] uppercase font-bold">
              HERITAGE & ORIGINS
            </span>
            <h3 className="font-serif text-3xl font-bold text-white">
              The Genesis of Arabian Pulp
            </h3>

            <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-light">
              <p>
                Centuries ago, along the historic trade routes of Arabia, travelers quenched their thirst with hand-crushed fruit infusions enriched with natural botanicals. 
              </p>
              <p>
                Inspired by this timeless legacy, Arabian Pulp was founded with a single mission: to resurrect pure, unadulterated fruit pulp drinks that carry authentic flavor, natural nourishment, and generous Arabian hospitality.
              </p>
              <p>
                We work directly with generational fruit farmers, harvesting sun-ripened Alphonso mangoes, ruby pomegranates, succulent lychees, and fragrant mint leaves. Every bottle is crafted with state-of-the-art hygienic cold extraction that seals in the rich texture of real fruit cells.
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStoryOpen(false)}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#e3be5a] via-[#f5d77f] to-[#b8902c] text-[#12081d] font-sans font-bold text-xs tracking-wider uppercase hover:shadow-gold-glow transition-all"
              >
                CLOSE STORY
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE READER MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#160a25] border border-[#e3be5a]/30 rounded-3xl p-8 space-y-6 text-gray-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#2a133d] hover:bg-[#e3be5a] text-gray-300 hover:text-[#12081d] border border-[#e3be5a]/30 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 border-b border-[#e3be5a]/20 pb-4">
              <span className="text-xs text-[#e3be5a] font-sans tracking-[0.2em] uppercase font-bold">
                {selectedPost.subtext}
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">
                {selectedPost.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-gray-400 pt-2 font-sans">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-[#e3be5a]" /> {selectedPost.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#e3be5a]" /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#e3be5a]" /> {selectedPost.readTime}</span>
              </div>
            </div>

            <div className="text-sm text-gray-300 leading-relaxed space-y-4 font-light whitespace-pre-line">
              {selectedPost.content}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#e3be5a] via-[#f5d77f] to-[#b8902c] text-[#12081d] font-sans font-bold text-xs tracking-wider uppercase hover:shadow-gold-glow transition-all"
              >
                BACK TO BLOG
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

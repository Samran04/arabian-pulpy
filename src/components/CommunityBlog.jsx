"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, X, Clock, User, Calendar } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";

export default function CommunityBlog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section id="blog" className="py-24 bg-primary-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT STORY BLOCK */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-wide text-neutral-white leading-[1.1]">
              A Story from the Arabian Community
            </h2>
            
            <div className="h-[1px] w-12 bg-accent/40" />

            <p className="text-neutral-muted font-sans text-base font-light leading-relaxed">
              Born from a passion for purity and inspired by Arabian traditions, Arabian Pulp brings you closer to nature with every sip. Discover our heritage and what makes our craft unique.
            </p>

            <div>
              <button
                onClick={() => setStoryOpen(true)}
                className="inline-flex items-center gap-3 text-xs font-sans tracking-widest uppercase text-accent hover:text-neutral-white transition-colors group"
              >
                READ OUR ORIGINS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" />
              </button>
            </div>
          </div>

          {/* RIGHT BLOG CARDS GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {BLOG_POSTS.slice(0, 4).map((post) => (
              <div
                key={post.id}
                className="group flex flex-col cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                
                {/* CARD IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-md">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* CARD TEXT */}
                <div className="space-y-3">
                  <span className="text-[10px] text-accent font-sans tracking-widest uppercase font-medium">
                    {post.subtext}
                  </span>
                  <h3 className="font-serif text-2xl text-neutral-white group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm font-sans font-light text-neutral-muted line-clamp-2">
                    {post.content.substring(0, 100)}...
                  </p>
                  
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-neutral-offwhite transition-colors">
                      READ MORE
                      <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* FULL STORY MODAL */}
      {storyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/95 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-primary border border-primary-light/50 rounded-lg p-10 space-y-8 my-8 shadow-2xl">
            <button
              onClick={() => setStoryOpen(false)}
              className="absolute top-8 right-8 p-2 text-neutral-muted hover:text-accent transition-colors duration-300"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>

            <span className="text-xs text-accent font-sans tracking-widest uppercase font-medium">
              HERITAGE & ORIGINS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-neutral-white">
              The Genesis of Arabian Pulp
            </h3>

            <div className="space-y-6 text-base text-neutral-muted leading-relaxed font-light">
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

            <div className="pt-6 flex justify-end border-t border-primary-light/30">
              <button
                onClick={() => setStoryOpen(false)}
                className="px-8 py-3 text-accent hover:text-neutral-white font-sans text-xs tracking-widest uppercase transition-colors"
              >
                CLOSE STORY
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE READER MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/95 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-primary border border-primary-light/50 rounded-lg p-10 space-y-8 my-8 shadow-2xl">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-8 right-8 p-2 text-neutral-muted hover:text-accent transition-colors duration-300"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>

            <div className="space-y-4 border-b border-primary-light/30 pb-6">
              <span className="text-xs text-accent font-sans tracking-widest uppercase font-medium">
                {selectedPost.subtext}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-neutral-white">
                {selectedPost.title}
              </h3>
              <div className="flex items-center gap-6 text-xs text-neutral-muted pt-2 font-sans font-light uppercase tracking-wider">
                <span className="flex items-center gap-2"><User className="w-3.5 h-3.5 text-accent stroke-[1.5]" /> {selectedPost.author}</span>
                <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-accent stroke-[1.5]" /> {selectedPost.date}</span>
              </div>
            </div>

            <div className="text-base text-neutral-muted leading-relaxed space-y-6 font-light whitespace-pre-line">
              {selectedPost.content}
            </div>

            <div className="pt-6 flex justify-end border-t border-primary-light/30">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-8 py-3 text-accent hover:text-neutral-white font-sans text-xs tracking-widest uppercase transition-colors"
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

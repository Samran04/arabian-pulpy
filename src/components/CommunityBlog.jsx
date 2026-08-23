"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import FadeInView from "./FadeInView";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function CommunityBlog() {
  const [storyOpen, setStoryOpen] = useState(false);
  
  // Parallax inertia scroll setup
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const physics = { damping: 15, mass: 0.1, stiffness: 55 };
  
  const rawY1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rawY2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rawY3 = useTransform(scrollYProgress, [0, 1], [250, -250]);

  const y1 = useSpring(rawY1, physics);
  const y2 = useSpring(rawY2, physics);
  const y3 = useSpring(rawY3, physics);

  return (
    <section id="story" className="pt-12 pb-24 lg:py-24 bg-primary-muted relative">
      <FadeInView>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-32">
        
        {/* --- OUR STORY SECTION --- */}
        <div ref={containerRef} className="flex flex-col lg:flex-row gap-16 relative items-start">
          
          {/* LEFT STORY TEXT (Sticky on Desktop) */}
          <div className="w-full lg:w-1/2 space-y-6 relative lg:sticky lg:top-[30vh] flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col items-center lg:items-start text-accent pb-4 lg:pb-2">
              <span className="font-montserrat text-6xl sm:text-7xl lg:text-4xl font-black uppercase leading-[0.85] tracking-tighter">
                OUR
              </span>
              <span className="font-montserrat text-6xl sm:text-7xl lg:text-4xl font-black uppercase leading-[0.85] tracking-tighter">
                STORY
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide text-neutral-dark leading-[1.1]">
              A Tradition of <br />
              <span className="italic text-accent font-light">Purity & Passion</span>
            </h2>
            
            <p className="text-neutral-muted font-sans text-sm font-light leading-relaxed max-w-md">
              Born from a passion for purity and inspired by Arabian traditions, Arabian Pulp brings you closer to nature with every sip. Discover our heritage and what makes our craft unique.
            </p>

          </div>

          {/* RIGHT STORY LETTER */}
          <div className="w-full lg:w-1/2 flex flex-col py-4 lg:py-0">
            <div className="bg-[#A873B8] rounded-[2rem] p-8 sm:p-10 lg:p-16 shadow-xl border border-white/20 space-y-8 text-base lg:text-lg text-white leading-loose font-light lg:-mt-10 relative font-serif">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
              
              <p className="font-medium text-white text-xl lg:text-2xl drop-shadow-sm font-serif">
                Good fruit deserves to be tasted as it is.
              </p>
              <p>
                Arabian Pulp began with a simple idea — to bring the richness of real fruit into every refreshing sip.
              </p>
              <p>
                From the beginning, our focus has been on one thing: real fruit, honest flavour, and a taste worth sharing.
              </p>
              <p>
                Inspired by the warmth of Arabian hospitality and the abundance of tropical fruit, we create beverages that celebrate familiar flavours in a refreshing way — from juicy grapes and delicate lychees to zesty citrus and basil seeds.
              </p>
              <p>
                We believe great taste doesn't need to be complicated. It starts with carefully selected ingredients, thoughtful preparation, and a commitment to preserving what makes each fruit special.
              </p>
              <p>
                Today, Arabian Pulp brings that philosophy to every cup and pouch — made for family tables, shared moments, and everyday refreshment.
              </p>
              <p className="font-sans font-bold tracking-widest uppercase text-white pt-8 border-t border-white/30 mt-8 text-sm lg:text-base">
                Real fruit. Real flavour. Made to be shared.
              </p>
            </div>
          </div>
        </div>
      </div>
      </FadeInView>


    </section>
  );
}


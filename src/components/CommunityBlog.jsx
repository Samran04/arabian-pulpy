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
    <section id="blog" className="pt-12 pb-24 lg:py-24 bg-primary-muted relative">
      <FadeInView>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-32">
        
        {/* --- OUR STORY SECTION --- */}
        <div ref={containerRef} className="flex flex-col lg:flex-row gap-16 relative items-start">
          
          {/* LEFT STORY TEXT (Sticky) */}
          <div className="w-full lg:w-1/2 space-y-6 sticky top-32 pt-10 flex flex-col items-center text-center lg:items-start lg:text-left">
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

            <div className="pt-2 hidden lg:block">
              <button
                onClick={() => setStoryOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-3 bg-accent text-white font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-accent-light transition-all duration-300 rounded-md shadow-md"
              >
                READ OUR STORY
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>

            {/* INLINE STORY FOR MOBILE */}
            <div className="lg:hidden bg-[#A873B8] rounded-3xl p-6 sm:p-8 shadow-sm border border-white/20 space-y-6 text-sm text-white leading-relaxed font-light mt-8">
              <p className="font-medium text-white text-base drop-shadow-sm">
                <TypewriterText text="Good fruit deserves to be tasted as it is." delay={0.1} />
              </p>
              <p>
                <TypewriterText text="Arabian Pulp began with a simple idea — to bring the richness of real fruit into every refreshing sip." delay={0.5} />
              </p>
              <p>
                <TypewriterText text="From the beginning, our focus has been on one thing: real fruit, honest flavour, and a taste worth sharing." delay={1.5} />
              </p>
              <p>
                <TypewriterText text="Inspired by the warmth of Arabian hospitality and the abundance of tropical fruit, we create beverages that celebrate familiar flavours in a refreshing way — from juicy grapes and delicate lychees to zesty citrus and basil seeds." delay={2.5} />
              </p>
              <p>
                <TypewriterText text="We believe great taste doesn't need to be complicated. It starts with carefully selected ingredients, thoughtful preparation, and a commitment to preserving what makes each fruit special." delay={4.0} />
              </p>
              <p>
                <TypewriterText text="Today, Arabian Pulp brings that philosophy to every cup and pouch — made for family tables, shared moments, and everyday refreshment." delay={5.5} />
              </p>
              <p className="font-sans font-bold tracking-wide text-white pt-4 border-t border-white/30">
                <TypewriterText text="Real fruit. Real flavour. Made to be shared." delay={7.0} />
              </p>
            </div>
          </div>

          {/* RIGHT STORY IMAGES (Stacked vertically, hidden on mobile) */}
          <div className="hidden lg:flex w-full lg:w-1/2 flex-col gap-24 py-10">
            <motion.div style={{ y: y1 }} className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-white shadow-xl border border-neutral-border/20 flex items-center justify-center">
               <Image src="/assets/grape-cup.png" alt="Story" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-12 hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-white shadow-xl border border-neutral-border/20 flex items-center justify-center">
               <Image src="/assets/basil-seeds.png" alt="Story" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-12 hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div style={{ y: y3 }} className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-white shadow-xl border border-neutral-border/20 flex items-center justify-center">
               <Image src="/assets/lychee-cup.png" alt="Story" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-12 hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </div>
      </FadeInView>

      {/* FULL STORY MODAL */}
      {storyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-dark/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white border border-neutral-border rounded-2xl p-10 space-y-8 my-8 shadow-2xl">
            <button
              onClick={() => setStoryOpen(false)}
              className="absolute top-8 right-8 p-2 text-neutral-muted hover:text-accent transition-colors duration-300"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>

            <span className="text-xs text-accent font-sans tracking-widest uppercase font-medium">
              HERITAGE & ORIGINS
            </span>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-neutral-dark">
              The Story Behind Arabian Pulp
            </h3>

            <div className="space-y-6 text-base text-neutral-muted leading-relaxed font-light">
              <p className="font-medium text-neutral-dark text-lg">
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
            </div>

            <div className="pt-8 border-t border-neutral-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <p className="font-sans font-bold tracking-wide text-neutral-dark">
                Real fruit. Real flavour. Made to be shared.
              </p>
              <button
                onClick={() => setStoryOpen(false)}
                className="px-6 py-2 text-accent hover:text-neutral-dark font-sans text-xs tracking-widest uppercase transition-colors inline-flex items-center gap-2"
              >
                CLOSE STORY <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}


    </section>
  );
}

const TypewriterText = ({ text, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.03, delayChildren: delay } },
        hidden: {}
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

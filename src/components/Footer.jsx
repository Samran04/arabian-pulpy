"use client";

import React, { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeInView from "./FadeInView";

export default function Footer({ onOpenDistributorModal }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-deep text-white border-t border-white/10 pt-24 pb-12 relative z-10">
      <FadeInView>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MIDDLE SECTION: 5-COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          
          {/* COLUMN 1: BRAND & SOCIALS */}
          <div className="space-y-6 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
              Arabian Pulpy
            </h3>
            <p className="text-xs font-sans font-light text-white/50">
              © {new Date().getFullYear()} Arabian Pulpy. <br /> All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors"><Instagram className="w-5 h-5 stroke-[1.5]" /></a>
              <a href="#" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors"><Facebook className="w-5 h-5 stroke-[1.5]" /></a>
              <a href="#" aria-label="Twitter" className="text-white/50 hover:text-white transition-colors"><Twitter className="w-5 h-5 stroke-[1.5]" /></a>
            </div>
          </div>

          {/* COLUMN 2: SHOP */}
          <div className="space-y-6">
            <h4 className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-widest">
              Shop
            </h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li><button onClick={() => scrollToSection("flavors")} className="hover:text-accent-light transition-colors">Pulpy Grape</button></li>
              <li><button onClick={() => scrollToSection("flavors")} className="hover:text-accent-light transition-colors">Lychee with Nata de Coco</button></li>
              <li><button onClick={() => scrollToSection("flavors")} className="hover:text-accent-light transition-colors">Basil Seeds Lemon</button></li>
              <li><button onClick={() => scrollToSection("flavors")} className="hover:text-accent-light transition-colors">Grape Pouch (2.5L)</button></li>
            </ul>
          </div>

          {/* COLUMN 3: ABOUT US */}
          <div className="space-y-6">
            <h4 className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-widest">
              About Us
            </h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-accent-light transition-colors">Our Story</button></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Press</a></li>
            </ul>
          </div>

          {/* COLUMN 4: SUPPORT */}
          <div className="space-y-6">
            <h4 className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-widest">
              Support
            </h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li><a href="#" className="hover:text-accent-light transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* COLUMN 5: LEGAL */}
          <div className="space-y-6">
            <h4 className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li><a href="#" className="hover:text-accent-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
      </div>
      </FadeInView>
    </footer>
  );
}

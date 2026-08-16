"use client";

import React, { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Footer({ onOpenDistributorModal }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-dark text-neutral-offwhite border-t border-primary-light/20 pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: BRAND STATEMENT & NEWSLETTER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-16 border-b border-primary-light/20">
          
          <div className="space-y-4 max-w-lg">
            <h2 className="font-serif text-5xl sm:text-6xl text-neutral-white leading-none">
              Real fruit.<br />
              <span className="italic font-light text-accent">Arabian soul.</span>
            </h2>
          </div>

          <div className="w-full max-w-sm space-y-4">
            <p className="text-sm font-sans font-light text-neutral-muted">
              Subscribe to our journal for exclusive releases.
            </p>
            {subscribed ? (
              <div className="py-3 text-accent text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 stroke-[1.5]" />
                <span>Thank you for subscribing.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border-b border-neutral-muted/40 focus-within:border-accent transition-colors">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 bg-transparent text-sm text-neutral-offwhite focus:outline-none placeholder:text-neutral-muted/60"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-2 text-neutral-muted hover:text-accent transition-colors"
                >
                  <ArrowRight className="w-5 h-5 stroke-[1.5]" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* MIDDLE SECTION: LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          
          <div className="space-y-6">
            <h4 className="font-sans text-xs font-medium text-neutral-white uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-4 text-sm font-light text-neutral-muted">
              <li><button onClick={() => scrollToSection("flavors")} className="hover:text-accent transition-colors">Flavors</button></li>
              <li><button onClick={() => scrollToSection("about")} className="hover:text-accent transition-colors">Our Story</button></li>
              <li><button onClick={() => scrollToSection("blog")} className="hover:text-accent transition-colors">Journal</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans text-xs font-medium text-neutral-white uppercase tracking-widest">
              Support
            </h4>
            <ul className="space-y-4 text-sm font-light text-neutral-muted">
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans text-xs font-medium text-neutral-white uppercase tracking-widest">
              Partners
            </h4>
            <ul className="space-y-4 text-sm font-light text-neutral-muted">
              <li><button onClick={onOpenDistributorModal} className="hover:text-accent transition-colors">Become a Distributor</button></li>
              <li><button onClick={onOpenDistributorModal} className="hover:text-accent transition-colors">Distributor Portal</button></li>
            </ul>
          </div>

          <div className="space-y-6 flex flex-col items-start md:items-end">
            <h4 className="font-sans text-xs font-medium text-neutral-white uppercase tracking-widest">
              Socials
            </h4>
            <div className="flex items-center gap-6 text-neutral-muted">
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5 stroke-[1.5]" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5 stroke-[1.5]" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5 stroke-[1.5]" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5 stroke-[1.5]" /></a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-primary-light/20 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-muted font-light tracking-wide">
          <p>© {new Date().getFullYear()} Arabian Pulp. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-offwhite transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-offwhite transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

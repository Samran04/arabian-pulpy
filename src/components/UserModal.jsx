"use client";

import React, { useState } from "react";
import { X, User, Lock, Mail, CheckCircle2 } from "lucide-react";

export default function UserModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("login");
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white border border-neutral-border/40 rounded-3xl p-8 space-y-6 text-neutral-dark shadow-xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-background hover:bg-neutral-border text-neutral-muted hover:text-neutral-dark transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* TAB TOGGLE */}
        <div className="flex border-b border-neutral-border/50 pb-2 gap-6">
          <button
            onClick={() => setTab("login")}
            className={`font-serif text-xl font-bold transition-colors pb-2 ${
              tab === "login"
                ? "text-primary-deep border-b-2 border-primary-deep"
                : "text-neutral-muted hover:text-primary-deep"
            }`}
          >
            Customer Sign In
          </button>
          <button
            onClick={() => setTab("register")}
            className={`font-serif text-xl font-bold transition-colors pb-2 ${
              tab === "register"
                ? "text-primary-deep border-b-2 border-primary-deep"
                : "text-neutral-muted hover:text-primary-deep"
            }`}
          >
            Create Account
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent to-primary p-[1.5px] mx-auto shadow-sm">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-accent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
            <h4 className="font-serif text-xl font-bold text-neutral-dark">Welcome Back!</h4>
            <p className="text-xs text-neutral-muted font-sans font-light">You are now logged into your Arabian Pulp portal.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-neutral-dark/70 font-semibold mb-1 uppercase tracking-wider">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-accent absolute left-3" />
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-background border border-neutral-border/40 text-neutral-dark focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-dark/70 font-semibold mb-1 uppercase tracking-wider">Password</label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-accent absolute left-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-background border border-neutral-border/40 text-neutral-dark focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary-deep text-white font-sans font-bold text-xs tracking-widest uppercase hover:scale-[1.02] hover:bg-primary transition-all shadow-sm"
              >
                {tab === "login" ? "SIGN IN" : "CREATE ACCOUNT"}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

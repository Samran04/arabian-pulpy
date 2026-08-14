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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#160a25] border border-[#e3be5a]/30 rounded-3xl p-8 space-y-6 text-gray-200 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[#25103a] hover:bg-[#e3be5a] text-gray-300 hover:text-[#12081d] border border-[#e3be5a]/20 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* TAB TOGGLE */}
        <div className="flex border-b border-[#e3be5a]/20 pb-2 gap-6">
          <button
            onClick={() => setTab("login")}
            className={`font-serif text-xl font-bold transition-colors pb-2 ${
              tab === "login"
                ? "text-white border-b-2 border-[#e3be5a]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Customer Sign In
          </button>
          <button
            onClick={() => setTab("register")}
            className={`font-serif text-xl font-bold transition-colors pb-2 ${
              tab === "register"
                ? "text-white border-b-2 border-[#e3be5a]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Create Account
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#e3be5a] to-[#b8902c] p-[1.5px] mx-auto shadow-gold-glow">
              <div className="w-full h-full rounded-full bg-[#12081d] flex items-center justify-center text-[#e3be5a]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
            <h4 className="font-serif text-xl font-bold text-white">Welcome Back!</h4>
            <p className="text-xs text-gray-300 font-sans font-light">You are now logged into your Arabian Pulp portal.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-gray-300 font-semibold mb-1 uppercase tracking-wider">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-[#e3be5a] absolute left-3" />
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-1 uppercase tracking-wider">Password</label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-[#e3be5a] absolute left-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#200d34] border border-[#e3be5a]/30 text-white focus:outline-none focus:border-[#e3be5a]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e3be5a] via-[#f5d77f] to-[#b8902c] text-[#12081d] font-sans font-bold text-xs tracking-widest uppercase hover:scale-[1.02] transition-all shadow-gold-glow"
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

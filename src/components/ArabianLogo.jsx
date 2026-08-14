"use client";

import React from "react";

export default function ArabianLogo({ className = "h-8 sm:h-10 w-auto" }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <svg
        viewBox="0 0 390 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_12px_rgba(227,190,90,0.35)] hover:drop-shadow-[0_0_20px_rgba(227,190,90,0.6)] transition-all duration-300"
      >
        <defs>
          {/* ROYAL GOLD GRADIENT */}
          <linearGradient id="arabianGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D77F" />
            <stop offset="45%" stopColor="#E3BE5A" />
            <stop offset="80%" stopColor="#C89D34" />
            <stop offset="100%" stopColor="#B8902C" />
          </linearGradient>

          {/* PURPLE ACCENT GRADIENT FOR LEAF */}
          <linearGradient id="leafPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#e3be5a" />
          </linearGradient>

          {/* GLOW FILTER */}
          <filter id="logoGlowFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g filter="url(#logoGlowFilter)">
          {/* Capital A */}
          <path
            d="M 22 75 C 18 75 14 71 16 66 L 38 18 C 40 13 46 13 49 18 L 72 66 C 74 71 70 75 66 75 C 62 75 59 72 58 68 L 53 56 L 32 56 L 27 68 C 26 72 23 75 22 75 Z M 36 46 L 49 46 L 43 31 Z"
            fill="url(#arabianGoldGradient)"
            stroke="#f5d77f"
            strokeWidth="0.8"
          />

          {/* Letter r */}
          <path
            d="M 75 34 C 75 30 78 28 82 28 C 86 28 89 30 90 34 L 90 38 C 94 31 100 28 107 28 C 111 28 114 30 114 34 C 114 38 111 40 106 40 C 99 40 94 45 94 53 L 94 68 C 94 72 91 75 86 75 C 81 75 78 72 78 68 L 78 38 C 76 36 75 35 75 34 Z"
            fill="url(#arabianGoldGradient)"
          />

          {/* Letter a */}
          <path
            d="M 142 34 C 142 30 145 28 149 28 C 153 28 156 31 156 36 L 156 68 C 156 72 153 75 149 75 C 145 75 142 72 142 68 L 142 63 C 137 71 129 76 120 76 C 110 76 103 69 103 59 C 103 48 112 42 127 41 L 142 40 L 142 37 C 142 33 137 31 130 31 C 124 31 119 33 116 35 C 114 36 112 36 110 34 C 108 32 108 30 111 28 C 116 24 124 22 133 22 C 146 22 156 28 156 39 Z M 142 48 L 129 49 C 120 50 116 53 116 58 C 116 63 120 66 126 66 C 135 66 142 60 142 52 Z"
            fill="url(#arabianGoldGradient)"
          />

          {/* Letter b */}
          <path
            d="M 166 12 C 166 8 169 6 173 6 C 177 6 180 8 180 12 L 180 34 C 185 29 193 26 202 26 C 217 26 227 36 227 51 C 227 66 216 76 201 76 C 192 76 184 72 180 66 L 180 68 C 180 72 177 75 173 75 C 169 75 166 72 166 68 Z M 180 51 C 180 61 187 67 195 67 C 205 67 212 60 212 51 C 212 41 205 34 195 34 C 187 34 180 41 180 51 Z"
            fill="url(#arabianGoldGradient)"
          />

          {/* Letter i with LEAF EMBLEM ON TOP */}
          <g>
            <path
              d="M 235 34 C 235 30 238 28 242 28 C 246 28 249 30 249 34 L 249 68 C 249 72 246 75 242 75 C 238 75 235 72 235 68 Z"
              fill="url(#arabianGoldGradient)"
            />
            {/* Elegant Fruit Leaf over 'i' */}
            <path
              d="M 242 3 C 234 7 231 15 235 22 C 239 25 248 24 252 18 C 255 13 252 6 242 3 Z M 241 9 C 244 11 246 14 247 18 C 244 18 241 16 239 13 Z"
              fill="url(#leafPurpleGradient)"
              stroke="#f5d77f"
              strokeWidth="0.6"
            />
          </g>

          {/* Letter a */}
          <path
            d="M 293 34 C 293 30 296 28 300 28 C 304 28 307 31 307 36 L 307 68 C 307 72 304 75 300 75 C 296 75 293 72 293 68 L 293 63 C 288 71 280 76 271 76 C 261 76 254 69 254 59 C 254 48 263 42 278 41 L 293 40 L 293 37 C 293 33 288 31 281 31 C 275 31 270 33 267 35 C 265 36 263 36 261 34 C 259 32 259 30 262 28 C 267 24 275 22 284 22 C 297 22 307 28 307 39 Z M 293 48 L 280 49 C 271 50 267 53 267 58 C 267 63 271 66 277 66 C 286 66 293 60 293 52 Z"
            fill="url(#arabianGoldGradient)"
          />

          {/* Letter n */}
          <path
            d="M 317 34 C 317 30 320 28 324 28 C 328 28 331 30 332 34 L 332 38 C 337 30 345 26 354 26 C 365 26 372 33 372 45 L 372 68 C 372 72 369 75 365 75 C 361 75 358 72 358 68 L 358 47 C 358 39 352 35 344 35 C 337 35 332 41 332 50 L 332 68 C 332 72 329 75 325 75 C 321 75 317 72 317 68 Z"
            fill="url(#arabianGoldGradient)"
          />

          {/* ® REGISTERED TRADEMARK SYMBOL */}
          <g transform="translate(365, 14)">
            <circle cx="7" cy="7" r="6.5" stroke="url(#arabianGoldGradient)" strokeWidth="1.2" fill="none" />
            <text x="7" y="10.2" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="bold" fill="url(#arabianGoldGradient)" textAnchor="middle">R</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

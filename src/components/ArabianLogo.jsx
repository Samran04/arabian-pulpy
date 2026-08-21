"use client";

import Image from "next/image";

export default function ArabianLogo({ className = "h-12 sm:h-16 w-auto" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/assets/arabian-logo-purple.png"
        alt="Arabian Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

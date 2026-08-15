"use client";

import React, { useEffect, useRef } from "react";
import Rive from "@rive-app/react-canvas";

export default function RiveLightAnimation({ rivUrl }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create 35 luxury light particles (golden champagne & royal lavender)
    const particleCount = 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 1,
      color: Math.random() > 0.4 ? "rgba(245, 215, 127, " : "rgba(197, 163, 235, ",
      alpha: Math.random() * 0.6 + 0.2,
      speedY: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    // Mouse ambient light tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Render mouse interactive glow spotlight
      const glowGradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        280
      );
      glowGradient.addColorStop(0, "rgba(245, 215, 127, 0.12)");
      glowGradient.addColorStop(0.5, "rgba(136, 105, 172, 0.08)");
      glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 280, 0, Math.PI * 2);
      ctx.fill();

      // Render light particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulse) * 0.015;

        // Wrap around screen boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = Math.max(0.1, Math.min(0.8, p.alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color === "rgba(245, 215, 127, " ? "#f5d77f" : "#8869AC";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* RIVE ANIMATION CANVAS (IF RIV FILE URL IS PROVIDED) */}
      {rivUrl && (
        <div className="absolute inset-0 opacity-70">
          <Rive src={rivUrl} autoplay />
        </div>
      )}

      {/* DYNAMIC 60FPS LIGHT PARTICLES & INTERACTIVE AMBIENT GLOW */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none opacity-85"
      />
    </div>
  );
}

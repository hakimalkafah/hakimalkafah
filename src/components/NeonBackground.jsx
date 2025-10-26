import React, { useEffect, useRef } from "react";

export default function NeonBackground() {
  const canvasRef = useRef(null);
  const motionOk = typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Starfield + drift lines
    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.8 + 0.2,
      r: Math.random() * 1.6 + 0.2,
      s: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle vignette
      const grad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height)/1.2);
      grad.addColorStop(0, 'rgba(2,6,23,0.0)');
      grad.addColorStop(1, 'rgba(2,6,23,0.8)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Stars
      for (const star of stars) {
        ctx.beginPath();
        const alpha = 0.6 * star.z + 0.2;
        ctx.fillStyle = `rgba(103,232,249,${alpha})`;
        ctx.shadowColor = 'rgba(34,211,238,0.6)';
        ctx.shadowBlur = 8 * star.z;
        ctx.arc(star.x, star.y, star.r * star.z, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (motionOk) {
          star.x += star.s * 0.6;
          if (star.x > width + 10) { star.x = -10; star.y = Math.random() * height; }
        }
      }

      if (motionOk) frameId = requestAnimationFrame(draw);
    };

    draw();
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(frameId); };
  }, [motionOk]);

  return (
    <div className="fixed inset-0 z-0 bg-neon">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="moving-grid" />
      <div className="scanlines" />
    </div>
  );
}

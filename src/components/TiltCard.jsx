import React, { useRef } from "react";

export default function TiltCard({ className = "", children, intensity = 12, ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rX = ((y - midY) / midY) * -intensity;
    const rY = ((x - midX) / midX) * intensity;
    el.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg) translateZ(0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateX(0) rotateY(0) translateZ(0)";
  };

  return (
    <div className={`perspective-1000 ${className}`} {...rest}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="transition-transform duration-200 will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}


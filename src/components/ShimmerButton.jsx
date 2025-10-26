import React from "react";

export default function ShimmerButton({ href, children, className = "", ...rest }) {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white focus-ring-gradient transition-all duration-300 will-change-transform bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 hover:scale-[1.03] hover:-translate-y-0.5 shadow-lg hover:shadow-2xl ${className}`}
      {...rest}
    >
      {/* Soft glow */}
      <span aria-hidden className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-500/40 via-purple-500/30 to-pink-500/30 blur-2xl animate-[var(--animate-glow)]" />
      {/* Shimmer overlay */}
      <span aria-hidden className="shimmer-overlay" />
      <span className="relative z-10">{children}</span>
    </a>
  );
}


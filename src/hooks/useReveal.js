import { useEffect, useRef } from "react";

export default function useReveal({ rootMargin = "0px 0px -10% 0px", once = true, threshold = 0.1 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("is-visible");
        }
      });
    }, { rootMargin, threshold });

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, once, threshold]);

  return ref;
}


"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = visible
    ? {
        animation: "fade-up 0.6s ease forwards",
        animationDelay: `${delay}ms`,
        opacity: 0,
      }
    : {
        opacity: 0,
        transform: "translateY(10px)",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

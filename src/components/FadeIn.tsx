import type { ReactNode, CSSProperties } from "react";

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const style: CSSProperties = {
    animation: "fade-up 0.6s ease forwards",
    animationDelay: `${delay}ms`,
    opacity: 0,
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

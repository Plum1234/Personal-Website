"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";

/** Soft blur-fade in place (no translate) for nav and staggered items. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay,
      ease: [0.14, 0.61, 0.1, 1.02],
    },
  }),
};

/** Stagger container — delayChildren 0.25s, stagger 0.09s. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.09,
    },
  },
};

/** Child item without custom delay (used inside stagger trees). */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.14, 0.61, 0.1, 1.02],
    },
  },
};

const SECTION_IDS = ["work", "involvements", "projects"] as const;
type SectionId = (typeof SECTION_IDS)[number];

/**
 * Scroll-triggered section reveals with a short cascade between sections
 * (same IntersectionObserver timing as the reference site).
 */
export function useSectionReveals(enabled = true) {
  const [visible, setVisible] = useState<Partial<Record<SectionId, boolean>>>(
    {},
  );

  useEffect(() => {
    if (!enabled) return;
    if (!("IntersectionObserver" in window)) {
      setVisible({ work: true, involvements: true, projects: true });
      return;
    }

    const seen = new Set<string>();
    const timeouts: number[] = [];
    let nextEarliest = -Infinity;

    const observer = new IntersectionObserver(
      (entries) => {
        const hitting = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.1)
          .sort(
            (a, b) =>
              SECTION_IDS.indexOf(a.target.id as SectionId) -
              SECTION_IDS.indexOf(b.target.id as SectionId),
          );

        for (const entry of hitting) {
          const id = entry.target.id as SectionId;
          if (seen.has(id)) continue;
          seen.add(id);
          observer.unobserve(entry.target);

          const now = performance.now();
          const fireAt = Math.min(Math.max(now, nextEarliest + 180), now + 360);
          nextEarliest = fireAt;
          timeouts.push(
            window.setTimeout(() => {
              setVisible((prev) => ({ ...prev, [id]: true }));
            }, fireAt - now),
          );
        }
      },
      { threshold: 0.1 },
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
      timeouts.forEach((t) => window.clearTimeout(t));
    };
  }, [enabled]);

  return visible;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

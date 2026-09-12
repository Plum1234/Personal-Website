"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { fadeUpItem, stagger } from "./FadeIn";

type AboutPart = { text: string; href?: string };

function AboutParagraph({
  item,
}: {
  item: { text?: string; parts?: readonly AboutPart[] };
}) {
  return (
    <motion.p variants={fadeUpItem} className="text-sm md:text-base">
      {"parts" in item && item.parts
        ? item.parts.map((part, i) =>
            part.href ? (
              <a
                key={`${part.text}-${i}`}
                href={part.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-dotted border-ink transition-opacity hover:opacity-60"
              >
                {part.text}
              </a>
            ) : (
              <span key={`${part.text}-${i}`}>{part.text}</span>
            ),
          )
        : item.text}
    </motion.p>
  );
}

export function About() {
  return (
    <motion.div
      className="space-y-8 pb-12 pt-16 text-left"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {site.about.map((item, i) => (
        <AboutParagraph key={i} item={item} />
      ))}
    </motion.div>
  );
}

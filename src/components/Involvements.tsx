"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { fadeUpItem, stagger } from "./FadeIn";

export function Involvements({ visible = false }: { visible?: boolean }) {
  return (
    <motion.div
      className="space-y-4 pb-16 text-left"
      variants={stagger}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <motion.div className="text-2xl font-normal" variants={fadeUpItem}>
        Involvements
      </motion.div>
      <div className="space-y-0">
        {site.involvements.map((item, i) => (
          <motion.div key={item.org} variants={fadeUpItem}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="flex items-center py-3">
                <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md border border-black/10 bg-white">
                  <img
                    src={item.logo}
                    alt={`${item.org} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-semibold">{item.org}</span>
                    <span className="text-xs text-muted">{item.role}</span>
                  </div>
                </div>
                <div className="shrink-0 text-sm text-muted">{item.dates}</div>
              </div>
            </a>
            {i < site.involvements.length - 1 ? (
              <div className="border-b border-dashed border-ink" />
            ) : null}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { fadeUpItem, stagger } from "./FadeIn";

export function Experience() {
  return (
    <div className="space-y-4 pb-16 text-left">
      <motion.div className="text-2xl font-normal" variants={fadeUpItem}>
        Work
      </motion.div>
      <motion.div className="space-y-0" variants={stagger}>
        {site.work.map((job) => (
          <motion.div key={job.company} variants={fadeUpItem}>
            <a
              href={job.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="flex items-center py-3">
                <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md border border-black/10 bg-white">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-semibold">{job.company}</span>
                    <span className="text-xs text-muted">{job.role}</span>
                  </div>
                </div>
                <div className="shrink-0 text-sm text-muted">{job.dates}</div>
              </div>
            </a>
            <div className="border-b border-dashed border-ink" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

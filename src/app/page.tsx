"use client";

import { motion, type Variants } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Involvements } from "@/components/Involvements";
import { Projects } from "@/components/Projects";
import { useSectionReveals } from "@/components/FadeIn";
import { site } from "@/data/site";

/** Section wrappers: opacity only — no blur/translate that shifts layout. */
const fadeSection: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.14, 0.61, 0.1, 1.02] },
  },
};

export default function Home() {
  const revealed = useSectionReveals();

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 pt-24">
        <section id="about">
          <About />
        </section>
        <motion.section
          id="work"
          variants={fadeSection}
          initial="hidden"
          animate={revealed.work ? "visible" : "hidden"}
        >
          <Experience />
        </motion.section>
        <motion.section
          id="involvements"
          variants={fadeSection}
          initial="hidden"
          animate={revealed.involvements ? "visible" : "hidden"}
        >
          <Involvements />
        </motion.section>
      </main>
      <section
        id="projects"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pb-24"
      >
        <Projects visible={!!revealed.projects} />
      </section>
      <footer className="mx-auto max-w-2xl px-5 pb-8 text-center text-xs text-muted">
        <span lang="zh" title="conviction">
          {site.footer}
        </span>
      </footer>
    </div>
  );
}

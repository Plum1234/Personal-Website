"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Involvements } from "@/components/Involvements";
import { Projects } from "@/components/Projects";
import { fadeUp, useSectionReveals } from "@/components/FadeIn";
import { site } from "@/data/site";

export default function Home() {
  const revealed = useSectionReveals();

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 pt-24">
        <motion.section
          id="about"
          variants={fadeUp}
          custom={0.25}
          initial="hidden"
          animate="visible"
        >
          <About />
        </motion.section>
        <motion.section
          id="work"
          variants={fadeUp}
          initial="hidden"
          animate={revealed.work ? "visible" : "hidden"}
        >
          <Experience />
        </motion.section>
        <motion.section
          id="involvements"
          variants={fadeUp}
          initial="hidden"
          animate={revealed.involvements ? "visible" : "hidden"}
        >
          <Involvements />
        </motion.section>
      </main>
      {/*
        Projects: no filter/transform on this wrapper — those create a
        containing block that clips the horizontal carousel. Cards + title
        stagger sideways inside Projects instead.
      */}
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

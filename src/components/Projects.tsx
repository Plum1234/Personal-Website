"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { fadeUpItem, stagger } from "./FadeIn";

export function Projects({ visible = false }: { visible?: boolean }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    if (scrollWidth <= clientWidth + 1) {
      setCanLeft(false);
      setCanRight(false);
      return;
    }
    setCanLeft(scrollLeft > 4);
    setCanRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateButtons();

    const onScroll = () => updateButtons();
    // Map vertical wheel/trackpad to horizontal scroll when hovering the carousel.
    const onWheel = (event: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth + 1) return;

      const mostlyVertical = Math.abs(event.deltaY) >= Math.abs(event.deltaX);
      const delta = mostlyVertical ? event.deltaY : event.deltaX;
      if (delta === 0) return;

      const max = el.scrollWidth - el.clientWidth;
      const atStart = el.scrollLeft <= 0 && delta < 0;
      const atEnd = el.scrollLeft >= max - 1 && delta > 0;
      if (atStart || atEnd) return;

      event.preventDefault();
      el.scrollLeft += delta;
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", updateButtons);

    const ro = new ResizeObserver(() => updateButtons());
    ro.observe(el);
    const t = window.setTimeout(updateButtons, 150);

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", updateButtons);
      ro.disconnect();
      window.clearTimeout(t);
    };
  }, [updateButtons]);

  const scrollByDir = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(280, el.clientWidth * 0.8);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <motion.div
      className="mx-auto w-full max-w-5xl space-y-4 px-5"
      variants={stagger}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      <motion.h2
        className="text-center text-3xl font-normal"
        variants={fadeUpItem}
      >
        Projects
      </motion.h2>

      <div
        className="relative w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollByDir("left")}
          className={`absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-zinc-300/80 bg-white/90 p-1.5 backdrop-blur-md transition-all duration-300 md:block ${
            hovered && canLeft
              ? "opacity-100 hover:bg-zinc-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Edge fades sit above content but don't steal scroll/drag */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-white to-transparent transition-opacity ${
            canLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-white to-transparent transition-opacity ${
            canRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={scrollerRef}
          tabIndex={0}
          role="region"
          aria-label="Projects carousel"
          className="projects-scroller flex gap-4 overflow-x-auto px-1 py-2 pb-3"
        >
          {site.projects.map((project) => (
            <motion.div
              key={project.title}
              className="w-[260px] shrink-0"
              variants={fadeUpItem}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#120315] bg-white transition-colors duration-300 hover:bg-zinc-50"
              >
                <div className="aspect-[13/8] overflow-hidden bg-zinc-100">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-4">
                  <div className="mb-1 flex min-w-0 items-center gap-2">
                    <h3 className="truncate text-sm font-medium">
                      {project.title}
                    </h3>
                  </div>
                  <span
                    className="rounded-md border border-zinc-300 bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700"
                    style={{ width: "fit-content" }}
                  >
                    {project.badge}
                  </span>
                  <p className="mt-1 line-clamp-5 text-xs leading-relaxed text-zinc-500">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollByDir("right")}
          className={`absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-zinc-300/80 bg-white/90 p-1.5 backdrop-blur-md transition-all duration-300 md:block ${
            hovered && canRight
              ? "opacity-100 hover:bg-zinc-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

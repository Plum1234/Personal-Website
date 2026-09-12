"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { FadeIn } from "./FadeIn";

export function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, offsetWidth } = el;
    if (scrollWidth <= offsetWidth + 1) {
      setCanLeft(false);
      setCanRight(false);
      return;
    }
    setCanLeft(Math.abs(scrollLeft) > 4);
    setCanRight(Math.abs(scrollLeft + offsetWidth - scrollWidth) > 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    const t = window.setTimeout(updateButtons, 150);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
      window.clearTimeout(t);
    };
  }, []);

  const scrollByDir = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.offsetWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const maskImage = `linear-gradient(to right, ${
    canLeft ? "transparent 0%, black 40px" : "black 0%"
  }, black ${canLeft || canRight ? "calc(100% - 40px)" : "100%"}, ${
    canRight ? "transparent 100%" : "black 100%"
  })`;

  return (
    <section
      id="projects"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen pb-24"
    >
      <FadeIn>
        <div className="mx-auto w-full max-w-5xl space-y-4 px-5">
          <h2 className="text-center text-3xl font-normal">Projects</h2>

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

            <div
              ref={scrollerRef}
              tabIndex={0}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-2"
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
                maskImage,
                WebkitMaskImage: maskImage,
              }}
            >
              {site.projects.map((project) => (
                <div
                  key={project.title}
                  className="w-full min-w-[240px] max-w-[260px] shrink-0 snap-center"
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#120315] bg-white transition-all duration-300 hover:bg-zinc-50"
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
                </div>
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
        </div>
      </FadeIn>
    </section>
  );
}

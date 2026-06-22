import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        <div className="grid gap-10">
          {site.projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{project.subtitle}</p>
                  </div>
                  {project.demo && (
                    <a
                      href={`https://youtu.be/${project.demo.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-300 transition-colors hover:border-teal-500/50 hover:text-teal-400"
                    >
                      {project.demo.label}
                    </a>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-zinc-800/80 px-2 py-0.5 font-mono text-xs text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-zinc-500">
                      <span className="text-teal-600">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {project.demo?.type === "video" && (
                <div className="border-t border-zinc-800 p-4 sm:p-6">
                  <YouTubeEmbed
                    videoId={project.demo.youtubeId}
                    title={project.title}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

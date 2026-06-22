import Image from "next/image";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Experience" subtitle="Where I've built and shipped" />

        <div className="space-y-12">
          {site.experience.map((job) => (
            <div
              key={job.company}
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-zinc-800 last:before:hidden"
            >
              <div className="absolute left-0 top-2 h-2 w-2 -translate-x-[3px] rounded-full bg-red-500" />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-zinc-100">{job.company}</h3>
                <span className="font-mono text-xs text-red-500/80">{job.tag}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{job.role}</p>
              <p className="text-sm text-zinc-600">
                {job.location} · {job.dates}
              </p>

              <ul className="mt-4 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {h}
                  </li>
                ))}
              </ul>

              {"media" in job && job.media && (
                <div className="mt-6">
                  {job.media.type === "image" && (
                    <div className="overflow-hidden rounded-xl border border-zinc-800">
                      <Image
                        src={job.media.src}
                        alt={job.media.alt}
                        width={1200}
                        height={700}
                        className="w-full object-cover"
                      />
                    </div>
                  )}
                  {job.media.type === "video" && (
                    <YouTubeEmbed
                      videoId={job.media.youtubeId}
                      title={job.media.caption}
                    />
                  )}
                  {job.media.caption && (
                    <p className="mt-2 text-center text-xs text-zinc-600">
                      {job.media.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

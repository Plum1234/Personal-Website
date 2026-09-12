import { site } from "@/data/site";
import { FadeIn } from "./FadeIn";

export function Experience() {
  return (
    <section id="work">
      <FadeIn delay={520}>
        <div className="space-y-4 pb-16 text-left">
          <div className="text-2xl font-normal">Work</div>
          <div className="space-y-0">
            {site.work.map((job) => (
              <div key={job.company}>
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
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

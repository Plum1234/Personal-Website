import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Research() {
  return (
    <section id="research" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Research" subtitle="Publications & papers" />

        <div className="space-y-6">
          {site.research.map((paper) => (
            <a
              key={paper.url}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <p className="font-mono text-xs text-rose-300/70">{paper.venue}</p>
              <h3 className="mt-2 text-lg font-medium text-zinc-100 transition-colors group-hover:text-rose-300">
                {paper.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600">{paper.authors}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {paper.description}
              </p>
              <p className="mt-3 text-sm text-rose-300/60 group-hover:text-rose-300">
                Read paper →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="About" subtitle="Background & expertise" />

        <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
          {site.bio}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {site.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-xs text-zinc-400"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
          <h3 className="font-semibold text-zinc-200">Education</h3>
          <p className="mt-2 text-zinc-300">{site.education.school}</p>
          <p className="text-sm text-zinc-500">{site.education.detail}</p>
          <p className="mt-1 text-sm text-zinc-400">
            {site.education.degree} · GPA {site.education.gpa} · {site.education.graduation}
          </p>
          <ul className="mt-4 space-y-1">
            {site.education.leadership.map((item) => (
              <li key={item} className="text-sm text-zinc-500">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

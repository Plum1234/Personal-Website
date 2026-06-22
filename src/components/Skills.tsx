import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const groups = [
    { label: "Languages", items: site.skills.languages },
    { label: "Frameworks & Tools", items: site.skills.frameworks },
    { label: "Domains", items: site.skills.domains },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Skills" />

        <div className="grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-sm font-medium text-zinc-500">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-3 text-sm font-medium text-zinc-500">Interests</h3>
          <p className="text-sm text-zinc-600">
            {site.interests.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}

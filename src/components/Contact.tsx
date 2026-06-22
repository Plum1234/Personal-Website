import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Contact" subtitle="Let's connect" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href={`mailto:${site.email}`}
              className="text-2xl font-medium text-zinc-100 transition-colors hover:text-red-400"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-zinc-600">{site.phone}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
            >
              GitHub
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-red-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
            >
              Resume
            </a>
          </div>
        </div>

        <footer className="mt-24 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} {site.name}
        </footer>
      </div>
    </section>
  );
}

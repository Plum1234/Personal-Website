import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-24 pb-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-red-500/30 to-zinc-700/30 blur-sm" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-zinc-800 sm:h-48 sm:w-48">
            <div
              role="img"
              aria-label={site.name}
              className="absolute inset-0 bg-no-repeat"
              style={{
                backgroundImage: `url(${site.headshot})`,
                backgroundSize: `${site.headshotZoom}%`,
                backgroundPosition: site.headshotPosition,
              }}
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="mb-2 font-mono text-sm text-red-400">Hello, I&apos;m</p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 text-lg text-zinc-400 sm:text-xl">{site.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-red-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-600"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:justify-start">
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              {site.email}
            </a>
            <span className="hidden text-zinc-700 sm:inline">·</span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              LinkedIn
            </a>
            <span className="hidden text-zinc-700 sm:inline">·</span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

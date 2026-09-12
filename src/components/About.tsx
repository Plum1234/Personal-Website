import { site } from "@/data/site";
import { FadeIn } from "./FadeIn";

type AboutPart = { text: string; href?: string };

function AboutParagraph({
  item,
  delay,
}: {
  item: { text?: string; parts?: readonly AboutPart[] };
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <p className="text-sm md:text-base">
        {"parts" in item && item.parts
          ? item.parts.map((part, i) =>
              part.href ? (
                <a
                  key={`${part.text}-${i}`}
                  href={part.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2 border-dotted border-ink transition-opacity hover:opacity-60"
                >
                  {part.text}
                </a>
              ) : (
                <span key={`${part.text}-${i}`}>{part.text}</span>
              ),
            )
          : item.text}
      </p>
    </FadeIn>
  );
}

export function About() {
  return (
    <section id="about">
      <FadeIn>
        <div className="space-y-8 pb-12 pt-16 text-left lowercase">
          {site.about.map((item, i) => (
            <AboutParagraph key={i} item={item} delay={i * 80} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

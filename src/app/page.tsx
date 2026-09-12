import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Involvements } from "@/components/Involvements";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 pt-24">
        <About />
        <Experience />
        <Involvements />
        <Projects />
      </main>
      <footer className="mx-auto max-w-2xl px-5 pb-8 text-center text-xs text-muted">
        © 2026
      </footer>
    </div>
  );
}

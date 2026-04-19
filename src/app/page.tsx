import Link from "next/link";

export const metadata = {
  title: "Home | My Portfolio",
  description: "Welcome to my portfolio site built with Next.js",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        <p className="text-accent font-mono text-sm tracking-wider">Hello, I am</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-accent">&gt;</span> Developer
        </h1>
        <p className="text-muted text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
          I build things for the web using Next.js, React, and Tailwind CSS.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/projects"
            className="bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-accent-dim transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="border border-accent/40 text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-black transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Projects | My Portfolio",
  description: "Check out my projects",
};

const projects = [
  {
    title: "Chat App",
    description: "Real-time messaging app built with WebSockets",
    tech: ["React", "Node.js", "Socket.io"],
  },
  {
    title: "Portfolio Site",
    description: "This website — built with Next.js & Tailwind",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Weather App",
    description: "Displays live weather using a public API",
    tech: ["React", "API", "CSS"],
  },
  {
    title: "Todo List",
    description: "Task manager with add, delete & filter features",
    tech: ["React", "LocalStorage"],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <p className="text-accent font-mono text-sm">~/projects</p>
          <h1 className="text-3xl font-bold mt-2">My Projects</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-border rounded-lg p-6 space-y-3 hover:border-accent/50 transition-colors"
            >
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-muted text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-accent text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/" className="text-muted hover:text-accent transition-colors text-sm">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

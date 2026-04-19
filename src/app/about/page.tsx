import ProfileImage from "@/components/ProfileImage";

export const metadata = {
  title: "About | My Portfolio",
  description: "Learn more about me",
};

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full space-y-8">
        <div className="flex flex-col items-center gap-4">
          <ProfileImage />
          <h1 className="text-3xl font-bold">About Me</h1>
        </div>

        <p className="text-muted leading-relaxed text-center">
          I am a web developer learning Next.js and building modern web applications.
          I enjoy turning ideas into clean, functional websites.
        </p>

        <div className="border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-accent font-mono text-sm">~/skills</h2>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git"].map((skill) => (
              <span
                key={skill}
                className="bg-surface-light border border-border px-3 py-1 rounded-md text-sm text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </main>
  );
}

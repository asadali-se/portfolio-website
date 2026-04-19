import Link from "next/link";

export const metadata = {
  title: "Blog | My Portfolio",
  description: "Read my latest blog posts",
};

const posts = [
  { slug: "hello-world", title: "Hello World", date: "Jan 1, 2024", excerpt: "Getting started with web development and building my first projects." },
  { slug: "learning-nextjs", title: "Learning Next.js", date: "Jan 15, 2024", excerpt: "Why I chose Next.js and what makes it a great framework for the web." },
  { slug: "first-project", title: "My First Project", date: "Feb 1, 2024", excerpt: "A walkthrough of my first real project built with React and Next.js." },
];

export default function Blog() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <p className="text-accent font-mono text-sm">~/blog</p>
          <h1 className="text-3xl font-bold mt-2">Blog</h1>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-border rounded-lg p-6 space-y-2 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <span className="text-muted text-xs font-mono">{post.date}</span>
              </div>
              <p className="text-muted text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

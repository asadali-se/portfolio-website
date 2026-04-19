import Link from "next/link";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "hello-world": {
    title: "Hello World",
    date: "Jan 1, 2024",
    content: "This is my first blog post! I'm just getting started with web development. There's so much to learn — HTML, CSS, JavaScript, and now frameworks like React and Next.js. The journey has just begun!",
  },
  "learning-nextjs": {
    title: "Learning Next.js",
    date: "Jan 15, 2024",
    content: "Next.js is a powerful React framework. It handles routing, server-side rendering, and optimization for you. The file-based routing system is incredibly intuitive — just create a folder and a page.tsx file, and you have a new route.",
  },
  "first-project": {
    title: "My First Project",
    date: "Feb 1, 2024",
    content: "I built my first project with React and Next.js. It was a great learning experience! From setting up the project to deploying it, every step taught me something new about modern web development.",
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <Link href="/blog" className="text-accent hover:underline">
            &larr; Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <article className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <Link href="/blog" className="text-accent text-sm hover:underline">
            &larr; Back to Blog
          </Link>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-muted font-mono text-sm">{post.date}</p>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted leading-relaxed text-lg">{post.content}</p>
        </div>
      </article>
    </main>
  );
}

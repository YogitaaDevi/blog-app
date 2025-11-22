import Link from "next/link";

const BLOG_POSTS = [
  {
    slug: "micro-frontends-with-nextjs",
    title: "Micro-Frontends with Next.js Zones",
    excerpt: "Learn how to split your monolithic Next.js application into smaller, manageable zones.",
    date: "2023-10-27",
    readTime: "5 min read",
  },
  {
    slug: "privy-authentication-guide",
    title: "Seamless Authentication with Privy",
    excerpt: "Implementing a secure and user-friendly authentication flow using Privy and Next.js Middleware.",
    date: "2023-11-02",
    readTime: "4 min read",
  },
  {
    slug: "shared-ui-components",
    title: "Sharing UI Components Across Zones",
    excerpt: "Strategies for maintaining design consistency and sharing components between micro-frontends.",
    date: "2023-11-15",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Engineering Blog
          </h1>
          <p className="text-xl text-gray-400">
            Insights on Micro-Frontends, Next.js, and Modern Web Development.
          </p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            // Use <a> tag instead of Link to ensure proper middleware redirection to login
            // for protected routes. Client-side transitions (Link) fail when middleware
            // redirects an RSC request to an HTML page (login).
            <a href={`/blog/${post.slug}`} key={post.slug} className="block group">
              <div className="glass-panel p-8 rounded-2xl transition-all duration-300 hover:bg-white/15 hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <span className="text-indigo-400 text-sm font-medium px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    Engineering
                  </span>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

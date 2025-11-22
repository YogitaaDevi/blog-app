import Link from "next/link";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        <article className="glass-panel p-8 md:p-12 rounded-3xl">
          <header className="mb-10">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="text-indigo-400 font-medium px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                Engineering
              </span>
              <span>November 21, 2025</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              {slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
            </h1>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              This is a demo blog post served from the <code>blog-app</code> zone. 
              Even though you are viewing this on <code>localhost:3000/blog</code>, 
              the content is actually being served from <code>localhost:3001</code>!
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">How it works</h2>
            <p className="text-gray-400 mb-6">
              Next.js Zones allows you to merge multiple Next.js apps into a single URL space. 
              The main app handles the routing and proxies requests to the appropriate zone based on the URL path.
            </p>

            <div className="bg-black/30 p-6 rounded-xl border border-white/10 my-8 font-mono text-sm text-gray-300">
              <p className="mb-2">// next.config.ts in main-app</p>
              <p>async rewrites() {'{'}</p>
              <p className="pl-4">return [</p>
              <p className="pl-8">{'{'}</p>
              <p className="pl-12">source: "/blog",</p>
              <p className="pl-12">destination: "http://localhost:3001/blog",</p>
              <p className="pl-8">{'}'},</p>
              <p className="pl-4">];</p>
              <p>{'}'}</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Shared Authentication</h2>
            <p className="text-gray-400 mb-6">
              By using a shared cookie and middleware in the main app, we can protect routes in the blog app as well. 
              When you try to access this page, the main app's middleware checks your authentication status before proxying the request.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

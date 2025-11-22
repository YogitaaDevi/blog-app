"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// This component mirrors the main-app Navbar visually but links back to the main app
// Since auth state is on main-app, we can't easily check it here client-side without cross-origin cookies/iframe magic
// For this demo, we'll assume if they are here, they might be logged in (middleware checks)
// or we just show "Dashboard" link which will redirect if not logged in.

export default function Navbar() {
  const pathname = usePathname();
  
  // In blog-app, usePathname includes the basePath '/blog'
  // e.g. accessing /blog returns '/blog'
  
  const isActive = (path: string) => {
     if (path === "/" && pathname === "/") return true; // Should not happen in blog-app usually
     if (path === "/blog" && (pathname === "/blog" || pathname === "/blog/")) return true;
     return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Use <a> to go to main-app root */}
            <a href="/" className="text-2xl font-bold font-heading text-gradient">
              MicroZones
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {/* Use <a> for Main App links to avoid basePath '/blog' prefix */}
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5"
                >
                  Home
                </a>
                <a 
                  href="/dashboard" 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5"
                >
                  Dashboard
                </a>
                {/* Use Link for internal Blog App links. href="/" becomes "/blog" due to basePath */}
                <Link 
                  href="/" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname.startsWith("/blog") ? "text-white bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <div>
             <a href="/dashboard" className="btn-secondary text-sm">
                Account
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

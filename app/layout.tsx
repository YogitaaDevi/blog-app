import type { Metadata } from "next";
// We can't easily import fonts from ../../main-app/app/fonts.ts because of webpack/nextjs boundary issues in simple setup
// So we'll just use the classnames which are defined in globals.css (which imports main-app globals)
// Or we can re-define them here if needed. For simplicity, we'll rely on globals.css imports working
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Blog Zone",
  description: "Blog Micro-Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f172a] text-[#f8fafc]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

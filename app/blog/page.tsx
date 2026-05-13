import Link from "next/link";
import type { Metadata } from "next";
import { allPosts, type PostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog iGaming en Español | Regulación y Mercados | GamblingCons",
  description:
    "Artículos especializados en iGaming: licencias, compliance, mercados LATAM, estrategia y regulación. Actualizado en 2026.",
};

const categoryColors: Record<string, string> = {
  Regulación: "text-[#C8B06E] bg-[#C8B06E]/10 border-[#C8B06E]/20",
  Compliance: "text-[#25C27A] bg-[#25C27A]/10 border-[#25C27A]/20",
  Mercados: "text-[#3D6BFF] bg-[#3D6BFF]/10 border-[#3D6BFF]/20",
  Estrategia: "text-[#E88C3A] bg-[#E88C3A]/10 border-[#E88C3A]/20",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Nav */}
      <nav className="border-b border-white/7 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#C8B06E] font-semibold text-lg">
            GamblingCons
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#C8B06E] text-sm font-medium tracking-wider uppercase mb-3">
            Blog
          </p>
          <h1 className="text-4xl font-bold text-[#F0EBE0] mb-4 leading-tight">
            iGaming & Gambling Insights
          </h1>
          <p className="text-[#9AA8C2] text-lg max-w-2xl">
            Análisis especializados sobre regulación, licencias, compliance y
            mercados emergentes para operadores y startups.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid gap-6">
          {allPosts.map((post: PostMeta) => {
            const catClass =
              categoryColors[post.category] ??
              "text-[#9AA8C2] bg-white/5 border-white/10";
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group block p-6 rounded-2xl border border-white/7 bg-white/2 hover:bg-white/4 hover:border-[#C8B06E]/30 transition-all"
              >
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${catClass}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-[#9AA8C2]">{post.country}</span>
                  <span className="text-xs text-[#9AA8C2]">·</span>
                  <span className="text-xs text-[#9AA8C2]">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-[#DDE3EE] group-hover:text-[#E5CE8C] transition-colors mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-[#9AA8C2] text-sm line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
                <p className="mt-3 text-xs text-[#9AA8C2]/60">{post.date}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

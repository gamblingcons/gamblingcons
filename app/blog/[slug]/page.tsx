import { notFound } from "next/navigation";
import Link from "next/link";

const slugs = [
  "licencia-casino-online-espana-2026",
  "coste-licencia-casino-online-espana-2026",
  "abrir-casino-online-espana-2026",
  "igaming-latam-2026",
  "igaming-compliance-kyc-aml-2026",
  "licencia-malta-mga-igaming-2026",
  "operador-igaming-brasil-2026",
  "crm-igaming-retencion-jugadores-2026",
  "fusiones-adquisiciones-igaming-2026",
  "mejores-jurisdicciones-igaming-licencias-2026",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

interface PostMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  country: string;
  readTime: string;
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slugs.includes(slug)) return {};
  const { metadata } = (await import(
    `@/content/blog/${slug}.mdx`
  )) as { metadata: PostMeta };
  return {
    title: `${metadata.title} | GamblingCons Blog`,
    description: metadata.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();

  const { default: Post, metadata } = (await import(
    `@/content/blog/${slug}.mdx`
  )) as { default: React.ComponentType; metadata: PostMeta };

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Nav */}
      <nav className="border-b border-white/7 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-[#C8B06E] font-semibold text-lg">
            GamblingCons
          </Link>
          <Link href="/blog/" className="text-[#9AA8C2] hover:text-[#DDE3EE] text-sm transition-colors">
            ← Blog
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Meta */}
        <div className="flex flex-wrap gap-3 items-center mb-6 text-sm text-[#9AA8C2]">
          <span className="bg-[#C8B06E]/10 text-[#C8B06E] px-3 py-1 rounded-full border border-[#C8B06E]/20">
            {metadata.category}
          </span>
          <span>{metadata.country}</span>
          <span>·</span>
          <span>{metadata.readTime} lectura</span>
          <span>·</span>
          <time>{metadata.date}</time>
        </div>

        {/* Content */}
        <div className="prose-blog">
          <Post />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 rounded-2xl border border-[#C8B06E]/20 bg-[#C8B06E]/5">
          <p className="text-[#E5CE8C] font-semibold text-lg mb-2">
            ¿Necesitas asesoramiento personalizado?
          </p>
          <p className="text-[#9AA8C2] mb-5 text-sm">
            Nuestro equipo de expertos puede ayudarte con licencias, compliance y estrategia de entrada al mercado.
          </p>
          <Link
            href="/contacto/"
            className="inline-block bg-[#C8B06E] text-[#0B0F1A] font-semibold px-6 py-3 rounded-xl text-sm hover:bg-[#E5CE8C] transition-colors"
          >
            Consulta gratuita
          </Link>
        </div>
      </article>
    </div>
  );
}

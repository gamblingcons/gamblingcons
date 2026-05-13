import { metadata as p0 } from "@/content/blog/mejores-jurisdicciones-igaming-licencias-2026.mdx";
import { metadata as p1 } from "@/content/blog/licencia-casino-online-espana-2026.mdx";
import { metadata as p2 } from "@/content/blog/coste-licencia-casino-online-espana-2026.mdx";
import { metadata as p3 } from "@/content/blog/abrir-casino-online-espana-2026.mdx";
import { metadata as p4 } from "@/content/blog/igaming-latam-2026.mdx";
import { metadata as p5 } from "@/content/blog/igaming-compliance-kyc-aml-2026.mdx";
import { metadata as p6 } from "@/content/blog/licencia-malta-mga-igaming-2026.mdx";
import { metadata as p7 } from "@/content/blog/operador-igaming-brasil-2026.mdx";
import { metadata as p8 } from "@/content/blog/crm-igaming-retencion-jugadores-2026.mdx";
import { metadata as p9 } from "@/content/blog/fusiones-adquisiciones-igaming-2026.mdx";

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  country: string;
  readTime: string;
  slug: string;
}

export const allPosts: PostMeta[] = [
  p0, p9, p8, p7, p6, p5, p4, p3, p2, p1,
] as PostMeta[];

export const allSlugs = allPosts.map((p) => p.slug);

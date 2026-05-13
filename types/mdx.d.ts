declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: {
    title: string;
    description: string;
    date: string;
    category: string;
    country: string;
    readTime: string;
    slug: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}

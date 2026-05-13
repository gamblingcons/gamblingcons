import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-serif text-4xl font-bold text-[#F0EBE0] mb-6 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-serif text-2xl font-bold text-[#F0EBE0] mt-10 mb-4 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-xl font-semibold text-[#E5CE8C] mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[#9AA8C2] leading-relaxed mb-5">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 mb-5 space-y-2 text-[#9AA8C2]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-5 mb-5 space-y-2 text-[#9AA8C2]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="text-[#DDE3EE] font-semibold">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#C8B06E] hover:text-[#E5CE8C] underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#C8B06E] pl-5 my-6 italic text-[#9AA8C2]">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-white/10 my-10" />,
  code: ({ children }) => (
    <code className="bg-white/5 text-[#E5CE8C] px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}

import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const baseClasses = {
  h1: "font-display text-4xl font-semibold text-[#CBC8BA] mt-8 mb-4",
  h2: "font-display text-3xl font-semibold text-[#CBC8BA] mt-10 mb-4",
  h3: "font-display text-2xl font-semibold text-[#CBC8BA] mt-8 mb-3",
  p: "text-base leading-7 text-[#9CA3AF] mt-4",
  ul: "list-disc pl-6 text-base leading-7 text-[#9CA3AF] mt-4 space-y-2",
  ol: "list-decimal pl-6 text-base leading-7 text-[#9CA3AF] mt-4 space-y-2",
  blockquote:
    "border-l-4 border-[#FF2003] bg-[#111827] px-4 py-3 text-[#CBC8BA] rounded-lg mt-6",
};

function CodeBlock(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <pre
      className={`overflow-x-auto rounded-xl border border-white/10 bg-[#0A0D12] p-4 text-sm leading-7 text-[#E5E7EB] shadow-[0_24px_60px_-32px_rgba(15,23,42,0.75)] ${props.className ?? ""}`}
    >
      <code className="language-javascript text-[#E5E7EB]" {...props} />
    </pre>
  );
}

function InlineCode(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded-md bg-white/10 px-1.5 py-0.5 text-[0.95em] text-[#E5E7EB]"
      {...props}
    />
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...rest }) => <h1 className={baseClasses.h1} {...rest}>{children}</h1>,
    h2: ({ children, ...rest }) => <h2 className={baseClasses.h2} {...rest}>{children}</h2>,
    h3: ({ children, ...rest }) => <h3 className={baseClasses.h3} {...rest}>{children}</h3>,
    p: ({ children, ...rest }) => <p className={baseClasses.p} {...rest}>{children}</p>,
    ul: ({ children, ...rest }) => <ul className={baseClasses.ul} {...rest}>{children}</ul>,
    ol: ({ children, ...rest }) => <ol className={baseClasses.ol} {...rest}>{children}</ol>,
    blockquote: ({ children, ...rest }) => (
      <blockquote className={baseClasses.blockquote} {...rest}>{children}</blockquote>
    ),
    a: ({ children, href = "", ...rest }) => (
      <Link
        href={href}
        className="font-semibold text-[#FF2003] underline decoration-[#FF2003]/50 underline-offset-4 transition hover:text-[#FF2003]/80"
        {...rest}
      >
        {children}
      </Link>
    ),
    pre: (props) => <CodeBlock {...props} />,
    code: (props) => <InlineCode {...props} />,
    ...components,
  };
}

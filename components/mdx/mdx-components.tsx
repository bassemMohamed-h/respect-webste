export const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="mt-12 mb-4 text-primary text-[44px] font-bold leading-none"
    />
  ),

  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mt-3 text-[18px] leading-relaxed text-black/70" />
  ),

  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="mt-5 space-y-2 pl-6 list-disc text-black/60" />
  ),

  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="text-[18px] leading-relaxed" />
  ),
};
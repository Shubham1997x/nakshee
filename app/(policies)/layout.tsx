export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-16 md:pt-20">
      <div className="mx-auto max-w-3xl px-gutter py-section">{children}</div>
    </div>
  );
}

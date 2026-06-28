import { Analytics } from "@vercel/analytics/next";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}

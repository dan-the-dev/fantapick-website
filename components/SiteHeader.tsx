import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 z-50 p-4 md:p-5">
      <nav aria-label="Collegamenti secondari">
        <Link
          href="/privacy"
          className="font-body text-xs hover:underline transition-colors"
          style={{ color: "var(--muted)" }}
        >
          Privacy
        </Link>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { LogoSmall } from "./Logo";

const TELEGRAM_URL = "https://t.me/fantapick";

export function SiteFooter() {
  return (
    <footer
      className="py-8 px-6 flex items-center justify-center gap-3 border-t"
      style={{ borderColor: "var(--shield)" }}
    >
      <LogoSmall />
      <span
        className="font-body text-sm"
        style={{ color: "var(--muted)" }}
      >
        FantaPick 2026 ·{" "}
        <a
          href={TELEGRAM_URL}
          className="hover:underline"
          style={{ color: "var(--muted)" }}
        >
          Telegram
        </a>
        {" · "}
        <Link
          href="/privacy"
          className="hover:underline"
          style={{ color: "var(--muted)" }}
        >
          Privacy
        </Link>
      </span>
    </footer>
  );
}

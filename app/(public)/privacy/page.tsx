import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LogoIcon } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy — FantaPick",
  description:
    "Informazioni su analytics anonimo e trattamento dei dati su fantapick.it.",
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="min-h-screen flex flex-col items-center px-6 py-24">
        <div className="w-full max-w-[560px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm hover:underline mb-10"
            style={{ color: "var(--muted)" }}
          >
            ← Torna alla home
          </Link>

          <div className="flex justify-center mb-8">
            <LogoIcon size={48} />
          </div>

          <h1
            className="font-display font-black uppercase text-center mb-8"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}
          >
            Privacy
          </h1>

          <div
            className="font-body space-y-5 leading-relaxed"
            style={{ color: "var(--muted)", fontSize: "0.95rem" }}
          >
            <p>
              Questo sito utilizza{" "}
              <strong style={{ color: "var(--white)", fontWeight: 500 }}>
                Vercel Web Analytics
              </strong>
              , un servizio di analisi anonimo fornito da Vercel Inc.
            </p>
            <p>
              I dati raccolti servono esclusivamente a capire come viene
              utilizzato fantapick.it — ad esempio quali pagine vengono
              visitate e da quali dispositivi, in forma aggregata.
            </p>
            <p>
              Non utilizziamo cookie di profilazione né strumenti di
              tracciamento pubblicitario. Non raccogliamo dati personali
              identificabili tramite questo servizio.
            </p>
            <p>
              Per domande relative alla privacy puoi contattarci su{" "}
              <a
                href="https://t.me/fantapick"
                className="hover:underline"
                style={{ color: "var(--white)" }}
              >
                Telegram
              </a>
              .
            </p>
            <p className="text-xs pt-2" style={{ color: "var(--muted)" }}>
              Ultimo aggiornamento: giugno 2026
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

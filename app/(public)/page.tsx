import { LogoIcon } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const GAME_URL = "https://wc26.fantapick.it";
const TELEGRAM_URL = "https://t.me/fantapick";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      {/* ── SECTION 1: HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="anim-1">
          <LogoIcon size={72} />
        </div>

        <h1
          className="anim-2 font-display font-black uppercase leading-none mt-6"
          style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
        >
          <span className="block">Drafta la tua squadra.</span>
          <span className="block" style={{ color: "var(--gold)" }}>
            Batti tutti.
          </span>
        </h1>

        <p
          className="anim-3 font-body mt-5 max-w-[480px] leading-relaxed"
          style={{ color: "var(--muted)", fontSize: "1.05rem" }}
        >
          Il fantasy game del Mondiale 2026 basato sul Draft.
          <br />
          Scegli i tuoi 11, costruisci la formazione, scala la classifica.
        </p>

        <div className="anim-4 flex flex-col items-center gap-3 mt-8">
          <a
            href={GAME_URL}
            className="font-display font-bold uppercase tracking-wide px-8 py-4 rounded-lg transition-opacity hover:opacity-90 active:opacity-75"
            style={{
              background: "var(--gold)",
              color: "var(--navy)",
              fontSize: "1.2rem",
              letterSpacing: "0.04em",
            }}
          >
            Gioca ora — è gratis
          </a>
          <a
            href={TELEGRAM_URL}
            className="font-body text-sm hover:underline transition-colors"
            style={{ color: "var(--muted)" }}
          >
            Unisciti al canale Telegram →
          </a>
        </div>
      </section>

      {/* ── SECTION 2: COME FUNZIONA ── */}
      <section style={{ background: "var(--shield)" }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display font-black uppercase text-center mb-14"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            Tre mosse. Poi si gioca.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Drafta",
                body: "Ad ogni pick scegli tra 4 giocatori casuali. Nessuno può avere tutti i migliori. Questa è la parte bella.",
              },
              {
                num: "02",
                title: "Forma",
                body: "Scegli il modulo, posiziona i tuoi giocatori. Hai 3 swap a disposizione se qualcosa non torna.",
              },
              {
                num: "03",
                title: "Scala",
                body: "I punti arrivano con gol, assist e bonus. La classifica è in tempo reale. Inizia a sudare.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex flex-col gap-3">
                <span
                  className="font-display font-black leading-none"
                  style={{ fontSize: "clamp(3.5rem, 8vw, 5rem)", color: "var(--gold)" }}
                >
                  {num}
                </span>
                <h3
                  className="font-display font-bold uppercase"
                  style={{ fontSize: "1.5rem" }}
                >
                  {title}
                </h3>
                <p
                  className="font-body leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PERCHÉ È DIVERSO ── */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-[600px] mx-auto text-center">
          <h2
            className="font-display font-black uppercase mb-12"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            Non è il solito fantacalcio.
          </h2>

          <ul className="flex flex-col gap-6">
            {[
              "Niente aste. Niente budget. Solo scelte.",
              "Ogni turno un nuovo draft. Puoi sempre rifarti.",
              "Vince chi sa leggere il momento, non chi studia le quotazioni.",
            ].map((text) => (
              <li key={text} className="flex items-start gap-4 text-left">
                <span
                  className="flex-shrink-0 text-xl leading-snug"
                  style={{ color: "var(--gold)" }}
                >
                  ⚡
                </span>
                <span
                  className="font-body text-lg leading-snug"
                  style={{ color: "var(--white)" }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 4: CTA FINALE ── */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background: "linear-gradient(160deg, var(--navy) 0%, var(--shield) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
          <h2
            className="font-display font-black uppercase leading-tight"
            style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)" }}
          >
            I sedicesimi iniziano adesso.
          </h2>
          <p
            className="font-body text-lg"
            style={{ color: "var(--muted)" }}
          >
            Hai ancora tempo per draftare.
          </p>

          <a
            href={GAME_URL}
            className="font-display font-bold uppercase tracking-wide px-8 py-4 rounded-lg mt-2 transition-opacity hover:opacity-90 active:opacity-75"
            style={{
              background: "var(--gold)",
              color: "var(--navy)",
              fontSize: "1.2rem",
              letterSpacing: "0.04em",
            }}
          >
            Gioca ora — è gratis
          </a>

          <a
            href={TELEGRAM_URL}
            className="font-body text-sm hover:underline"
            style={{ color: "var(--muted)" }}
          >
            Aggiornamenti live sul canale →
          </a>
        </div>
      </section>

      {/* ── SECTION 5: TEASER LEGA SERIE A ── */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background: "linear-gradient(180deg, var(--shield) 0%, var(--navy) 100%)",
        }}
      >
        <div className="fade-scroll max-w-[560px] mx-auto flex flex-col items-center gap-5">
          <span
            className="font-body font-medium uppercase tracking-widest px-4 py-1.5 rounded-full text-xs"
            style={{
              background: "rgba(240, 180, 41, 0.12)",
              color: "var(--gold)",
              letterSpacing: "0.1em",
            }}
          >
            🛡️ Coming August 2025
          </span>

          <h2
            className="font-display font-black uppercase leading-tight"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            Il Mondiale finisce.
            <br />
            La Serie A inizia.
          </h2>

          <p
            className="font-body leading-relaxed"
            style={{ color: "var(--muted)", fontSize: "1rem" }}
          >
            Ad agosto arriva la Lega FantaPick — draft stagionale,
            mini draft settimanale, leghe private tra amici.
            <br />
            Chi è già nel gruppo Telegram entra in lista per la demo.
          </p>

          <a
            href={TELEGRAM_URL}
            className="font-display font-bold uppercase tracking-wide px-7 py-3.5 rounded-lg mt-1 transition-colors hover:bg-gold/10"
            style={{
              border: "2px solid var(--gold)",
              color: "var(--gold)",
              fontSize: "1rem",
              letterSpacing: "0.04em",
            }}
          >
            Entra nel gruppo →
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

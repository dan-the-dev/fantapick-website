const GAME_URL = "https://wc26.fantapick.it";
const TELEGRAM_URL = "https://t.me/fantapick";

function LogoIcon({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FantaPick"
    >
      {/* Shield body */}
      <path
        d="M28 4L6 12V28C6 40 16 50 28 52C40 50 50 40 50 28V12L28 4Z"
        fill="#0D2A52"
        stroke="#1A5A99"
        strokeWidth="1.5"
      />
      {/* Gold star */}
      <path
        d="M28 16L29.8 21.6H35.7L31 25L32.9 30.6L28 27.2L23.1 30.6L25 25L20.3 21.6H26.2L28 16Z"
        fill="#F0B429"
      />
      {/* White arrow pointing down */}
      <path
        d="M28 32V42M28 42L23 37M28 42L33 37"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoSmall() {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FantaPick"
    >
      <path
        d="M28 4L6 12V28C6 40 16 50 28 52C40 50 50 40 50 28V12L28 4Z"
        fill="#0D2A52"
        stroke="#1A5A99"
        strokeWidth="1.5"
      />
      <path
        d="M28 16L29.8 21.6H35.7L31 25L32.9 30.6L28 27.2L23.1 30.6L25 25L20.3 21.6H26.2L28 16Z"
        fill="#F0B429"
      />
      <path
        d="M28 32V42M28 42L23 37M28 42L33 37"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
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

      {/* ── FOOTER ── */}
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
        </span>
      </footer>
    </main>
  );
}

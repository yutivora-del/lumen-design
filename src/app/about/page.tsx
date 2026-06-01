'use client';

import type { CSSProperties } from 'react';

// ─── Shared styles ────────────────────────────────────────────────────────────

const hairline: CSSProperties = {
  border: 'none',
  borderTop: '0.5px solid var(--color-border)',
  margin: 0,
};

const eyebrow: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--color-text-faint)',
  margin: '0 0 20px',
};

const prose: CSSProperties = {
  fontSize: '15px',
  fontWeight: 420,
  color: 'var(--color-text)',
  lineHeight: 1.7,
  margin: 0,
};

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="GitHub"
      style={{ display: 'block' }}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ─── Soundtrack ──────────────────────────────────────────────────────────────

const songs: { n: string; title: string; artist: string }[] = [
  { n: '01', title: 'Awake', artist: 'Tycho' },
  { n: '02', title: 'Kerala', artist: 'Bonobo' },
  { n: '03', title: 'Open Eye Signal', artist: 'Jon Hopkins' },
  { n: '04', title: 'Silurian Blue', artist: 'Floating Points' },
  { n: '05', title: 'So We Won’t Forget', artist: 'Khruangbin' },
  { n: '06', title: 'Says', artist: 'Nils Frahm' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ─── Header ───────────────────────────────────────────────────────── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: 'var(--color-bg)',
          borderBottom: '0.5px solid var(--color-border)',
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '52px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <a
              href="/"
              style={{
                fontSize: '15px',
                fontWeight: 540,
                letterSpacing: '-0.01em',
                color: 'var(--color-text)',
                textDecoration: 'none',
              }}
            >
              Lumen
            </a>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-faint)' }}>
              v0.2
            </span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {['Tokens', 'Components', 'About'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{
                  fontSize: '13px',
                  fontWeight: 420,
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="https://github.com/yutivora-del/lumen-design"
              target="_blank"
              rel="noopener"
              style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-muted)' }}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 32px' }}>

        {/* ─── Prose column ───────────────────────────────────────────────── */}
        <div style={{ maxWidth: '640px' }}>

          {/* ─── Section 1 — The quote ──────────────────────────────────── */}
          <section style={{ paddingTop: '120px' }}>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '32px',
                lineHeight: 1.3,
                color: 'var(--color-text)',
                margin: 0,
                maxWidth: '640px',
              }}
            >
              &ldquo;Design and code should speak the same language. So I taught them to.&rdquo;
            </p>
          </section>

          {/* ─── Section 2 — About Lumen ────────────────────────────────── */}
          <section style={{ paddingTop: '96px' }}>
            <p style={eyebrow}>About Lumen</p>
            <p style={{ ...prose, marginBottom: '1em' }}>
              Lumen is a small, open-source design system. Twenty components,
              twenty-two tokens, and one opinion: design and code should agree on
              the names, the values, and the shape of things.
            </p>
            <p style={prose}>
              It&rsquo;s free, and it will stay free. Copy what&rsquo;s useful, change what
              isn&rsquo;t, and leave the rest. No install, no dependency, no permission
              needed.
            </p>
          </section>

          {/* ─── Section 3 — About Yuti ─────────────────────────────────── */}
          <section style={{ paddingTop: '96px' }}>
            <p style={eyebrow}>About Yuti</p>
            <p style={prose}>
              I&rsquo;m Yuti Vora, a product designer. I build things that sit at the
              seam between design and code &mdash; and Lumen is the tool I kept wishing
              existed while working there.
            </p>

            {/* say hi */}
            <div style={{ marginTop: '24px' }}>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 420, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Building something, or just want to say hi? I&rsquo;d like that.
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
                <a
                  href="mailto:yutivora@gmail.com"
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  style={{
                    fontSize: '14px',
                    fontWeight: 540,
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    textUnderlineOffset: '3px',
                    textDecorationThickness: '0.5px',
                  }}
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/yuti-vora-45a2b6204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  style={{
                    fontSize: '14px',
                    fontWeight: 540,
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    textUnderlineOffset: '3px',
                    textDecorationThickness: '0.5px',
                  }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

          {/* ─── Section 4 — The soundtrack ─────────────────────────────── */}
          <section style={{ paddingTop: '96px' }}>
            <hr style={hairline} />
            <div style={{ paddingTop: '60px' }}>
              <p style={eyebrow}>The soundtrack</p>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '18px',
                  color: 'var(--color-text-muted)',
                  margin: 0,
                }}
              >
                What played while Lumen came together.
              </p>

              <div style={{ marginTop: '24px', borderTop: '0.5px solid var(--color-border-soft)' }}>
                {songs.map((song) => (
                  <div
                    key={song.n}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 0',
                      borderBottom: '0.5px solid var(--color-border-soft)',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 540, color: 'var(--color-text)' }}>
                        {song.title}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: 420, color: 'var(--color-text-muted)' }}>
                        {song.artist}
                      </span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text-faint)' }}>
                      {song.n}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ─── Section 5 — Footer ─────────────────────────────────────────── */}
        <footer style={{ paddingTop: '96px', paddingBottom: '48px' }}>
          <hr style={hairline} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '16px',
            }}
          >
            <span style={{ fontSize: '13px', fontWeight: 420, color: 'var(--color-text-muted)' }}>
              © 2026 Yuti Vora
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
              open source
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

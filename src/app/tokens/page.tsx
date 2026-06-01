'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULTS = {
  accent: '#1A1814',
  radius: 6,
  baseSize: 16,
};

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
  margin: 0,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Returns a readable foreground for a given accent: light ink on dark, dark on light.
function contrastColor(hex: string): string {
  const h = hex.replace('#', '');
  if (h.length !== 6) return '#FAFAF7';
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.55 ? '#1A1814' : '#FAFAF7';
}

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

// ─── Token reference data ──────────────────────────────────────────────────────

const colorTokens: { name: string; value: string }[] = [
  { name: '--color-bg', value: '#FAFAF7' },
  { name: '--color-surface', value: '#FFFFFF' },
  { name: '--color-text', value: '#1A1814' },
  { name: '--color-text-muted', value: '#5F5C55' },
  { name: '--color-text-faint', value: '#A8A49C' },
  { name: '--color-border', value: '#1A1814' },
  { name: '--color-border-soft', value: '#E5E1D6' },
];

const spaceTokens: { name: string; value: string }[] = [
  { name: '--space-xs', value: '4px' },
  { name: '--space-sm', value: '8px' },
  { name: '--space-md', value: '16px' },
  { name: '--space-lg', value: '32px' },
  { name: '--space-xl', value: '64px' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Tokens() {
  const [accent, setAccent] = useState(DEFAULTS.accent);
  const [radius, setRadius] = useState(DEFAULTS.radius);
  const [baseSize, setBaseSize] = useState(DEFAULTS.baseSize);
  const [copied, setCopied] = useState(false);

  const fg = contrastColor(accent);
  const scale = baseSize / 16;

  const reset = () => {
    setAccent(DEFAULTS.accent);
    setRadius(DEFAULTS.radius);
    setBaseSize(DEFAULTS.baseSize);
  };

  const cssOutput = `:root {
  /* color */
  --color-bg: #FAFAF7;
  --color-surface: #FFFFFF;
  --color-text: #1A1814;
  --color-text-muted: #5F5C55;
  --color-text-faint: #A8A49C;
  --color-border: #1A1814;
  --color-border-soft: #E5E1D6;
  --color-accent: ${accent};

  /* type */
  --font-sans: 'Inter Variable', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono Variable', ui-monospace, monospace;
  --font-display: 'Inter Variable', system-ui, sans-serif;
  --text-weight-regular: 420;
  --text-weight-bold: 540;
  --text-size-base: ${baseSize}px;

  /* space */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;

  /* radius */
  --radius-sm: 2px;
  --radius-md: ${radius}px;
  --radius-lg: 12px;
}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const controlLabel: CSSProperties = {
    fontSize: '12px',
    fontWeight: 420,
    color: 'var(--color-text-muted)',
    fontFamily: 'var(--font-sans)',
  };

  const controlValue: CSSProperties = {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    color: 'var(--color-text-faint)',
  };

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
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--color-text-faint)',
              }}
            >
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
              href="https://github.com"
              style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-muted)' }}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 32px' }}>

        {/* ─── Intro ──────────────────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <p style={{ ...eyebrow, marginBottom: '20px' }}>Foundations · Tokens</p>
          <h1
            style={{
              fontSize: '44px',
              fontWeight: 540,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--color-text)',
              margin: '0 0 24px',
              maxWidth: '680px',
            }}
          >
            The vocabulary. Make it yours.
          </h1>
          <p
            style={{
              fontSize: '17px',
              fontWeight: 420,
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '560px',
            }}
          >
            Every Lumen component is built from twenty-two tokens. Lumen ships
            without an accent — but this is your system now. Pick a color, set a
            radius, and take the CSS with you.
          </p>
        </section>

        {/* ─── The generator ──────────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <div
            style={{
              border: '0.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: '45fr 55fr',
              gap: '32px',
              alignItems: 'start',
            }}
            className="lumen-generator"
          >
            {/* LEFT — controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <p style={eyebrow}>Controls</p>

              {/* Accent color */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={controlLabel}>accent</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="color"
                    value={accent}
                    onChange={(e) => setAccent(e.target.value)}
                    aria-label="accent color"
                    style={{
                      width: '36px',
                      height: '36px',
                      padding: 0,
                      border: '0.5px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'none',
                      cursor: 'pointer',
                    }}
                  />
                  <input
                    type="text"
                    value={accent}
                    onChange={(e) => setAccent(e.target.value)}
                    aria-label="accent hex value"
                    spellCheck={false}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '0.5px solid var(--color-text)',
                      borderRadius: 0,
                      outline: 'none',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: 'var(--color-text)',
                      paddingBottom: '4px',
                      width: '100px',
                    }}
                  />
                </div>
              </div>

              {/* Radius */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={controlLabel}>radius</span>
                  <span style={controlValue}>{radius}px</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={16}
                  step={1}
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  aria-label="radius"
                  style={{ width: '100%', accentColor: 'var(--color-text)' }}
                />
              </div>

              {/* Base size */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={controlLabel}>base size</span>
                  <span style={controlValue}>{baseSize}px</span>
                </div>
                <input
                  type="range"
                  min={14}
                  max={18}
                  step={1}
                  value={baseSize}
                  onChange={(e) => setBaseSize(Number(e.target.value))}
                  aria-label="base size"
                  style={{ width: '100%', accentColor: 'var(--color-text)' }}
                />
              </div>

              {/* Reset */}
              <button
                onClick={reset}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                style={{
                  alignSelf: 'flex-start',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 420,
                  color: 'var(--color-text-faint)',
                  textUnderlineOffset: '3px',
                  textDecorationThickness: '0.5px',
                }}
              >
                Reset to defaults
              </button>
            </div>

            {/* RIGHT — live preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={eyebrow}>Preview</p>
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '0.5px solid var(--color-border)',
                  borderRadius: `${radius}px`,
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {/* Badge */}
                <span
                  style={{
                    alignSelf: 'flex-start',
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: accent,
                    color: fg,
                    borderRadius: `${radius}px`,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '2px 8px',
                    lineHeight: 1.5,
                  }}
                >
                  New
                </span>

                {/* Heading */}
                <p
                  style={{
                    margin: 0,
                    fontSize: `${15 * scale}px`,
                    fontWeight: 540,
                    color: 'var(--color-text)',
                    lineHeight: 1.3,
                  }}
                >
                  Field notes, monthly.
                </p>

                {/* Input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 420,
                      fontSize: `${12 * scale}px`,
                      color: accent,
                    }}
                  >
                    email
                  </span>
                  <input
                    placeholder="you@example.com"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: `0.5px solid ${accent}`,
                      borderRadius: 0,
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 420,
                      fontSize: `${14 * scale}px`,
                      color: 'var(--color-text)',
                      paddingBottom: '6px',
                      width: '100%',
                    }}
                  />
                </div>

                {/* Button */}
                <button
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: accent,
                    color: fg,
                    border: `0.5px solid ${accent}`,
                    borderRadius: `${radius}px`,
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 540,
                    fontSize: `${14 * scale}px`,
                    padding: '8px 16px',
                    cursor: 'pointer',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── The full token list ────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <p style={{ ...eyebrow, marginBottom: '20px' }}>All twenty-two</p>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 540,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: 'var(--color-text)',
              margin: '0 0 40px',
            }}
          >
            The complete set.
          </h2>

          <div
            className="lumen-token-groups"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
            }}
          >
            {/* COLOR */}
            <div>
              <p style={{ ...eyebrow, marginBottom: '12px' }}>Color (8)</p>
              <div>
                {colorTokens.map((t) => (
                  <TokenRow key={t.name} swatch={t.value} name={t.name} value={t.value} />
                ))}
                <TokenRow swatch={accent} name="--color-accent" value={accent} />
              </div>
            </div>

            {/* TYPE */}
            <div>
              <p style={{ ...eyebrow, marginBottom: '12px' }}>Type (6)</p>
              <div>
                <TokenRow name="--font-sans" value="Inter Variable" />
                <TokenRow name="--font-mono" value="JetBrains Mono" />
                <TokenRow name="--font-display" value="Inter Variable" />
                <TokenRow name="--text-weight-regular" value="420" />
                <TokenRow name="--text-weight-bold" value="540" />
                <TokenRow name="--text-size-base" value={`${baseSize}px`} />
              </div>
            </div>

            {/* SPACE */}
            <div>
              <p style={{ ...eyebrow, marginBottom: '12px' }}>Space (5)</p>
              <div>
                {spaceTokens.map((t) => (
                  <TokenRow key={t.name} name={t.name} value={t.value} />
                ))}
              </div>
            </div>

            {/* RADIUS */}
            <div>
              <p style={{ ...eyebrow, marginBottom: '12px' }}>Radius (3)</p>
              <div>
                <TokenRow name="--radius-sm" value="2px" />
                <TokenRow name="--radius-md" value={`${radius}px`} />
                <TokenRow name="--radius-lg" value="12px" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Copy ───────────────────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <div
            style={{
              position: 'relative',
              border: '0.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
            }}
          >
            <button
              onClick={handleCopy}
              style={{
                position: 'absolute',
                top: '18px',
                right: '20px',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 420,
                letterSpacing: '0.05em',
                color: copied ? 'var(--color-text)' : 'var(--color-text-faint)',
              }}
            >
              {copied ? 'Copied' : 'Copy globals.css'}
            </button>
            <pre
              style={{
                margin: 0,
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--color-text)',
                lineHeight: 1.6,
                overflowX: 'auto',
                whiteSpace: 'pre',
              }}
            >
              <code>{cssOutput}</code>
            </pre>
          </div>
        </section>

        {/* ─── Footer ───────────────────────────────────────────────────────── */}
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
            <span
              style={{
                fontSize: '13px',
                fontWeight: 420,
                color: 'var(--color-text-muted)',
              }}
            >
              © 2026 Yuti Vora
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--color-text-muted)',
              }}
            >
              open source
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

// ─── Token row ──────────────────────────────────────────────────────────────

function TokenRow({ swatch, name, value }: { swatch?: string; name: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 0',
        borderBottom: '0.5px solid var(--color-border-soft)',
      }}
    >
      {swatch && (
        <span
          style={{
            width: '14px',
            height: '14px',
            flexShrink: 0,
            backgroundColor: swatch,
            border: '0.5px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
          }}
        />
      )}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--color-text)',
        }}
      >
        {name}
      </span>
      <span
        style={{
          marginLeft: 'auto',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--color-text-faint)',
        }}
      >
        {value}
      </span>
    </div>
  );
}

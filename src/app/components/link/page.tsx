'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from '@/components/link';
import { ComponentExample } from '@/components/component-example';

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

// ─── Example code strings ──────────────────────────────────────────────────────

const defaultCode = `<Link href="/components">Browse the components</Link>`;

const sentenceCode = `<p>
  Lumen is open source. Read the{' '}
  <Link href="/notes">design notes</Link> or view it{' '}
  <Link href="https://github.com" external>on GitHub</Link>.
</p>`;

// ─── Props ─────────────────────────────────────────────────────────────────────

const props: { name: string; type: string; default: string; description: string }[] = [
  { name: 'href', type: 'string', default: '—', description: 'Destination' },
  { name: 'external', type: 'boolean', default: 'false', description: 'Opens in a new tab' },
  { name: 'children', type: 'ReactNode', default: '—', description: 'Link text' },
];

// ─── Component source (kept in sync with src/components/link.tsx) ────────────────

const linkSource = `'use client';

import type { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
}

export function Link({ href, external = false, style, children, ...props }: LinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={(e) => {
        e.currentTarget.style.textDecorationThickness = '1px';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.textDecorationThickness = '0.5px';
      }}
      style={{
        color: 'var(--color-text)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 420,
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        textDecorationThickness: '0.5px',
        ...style,
      }}
      {...props}
    >
      {children}
    </a>
  );
}`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LinkPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(linkSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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

        {/* ─── Page header ────────────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <p style={{ ...eyebrow, marginBottom: '20px' }}>
            <a href="/components" style={{ color: 'inherit', textDecoration: 'none' }}>
              Components
            </a>
            <span style={{ margin: '0 8px' }}>/</span>
            Actions
          </p>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 540,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: 'var(--color-text)',
              margin: '0 0 16px',
            }}
          >
            Link
          </h1>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 420,
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '560px',
            }}
          >
            Inline navigation. A thin underline that thickens on hover — no color, no fanfare.
          </p>
        </section>

        {/* ─── Examples ───────────────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <ComponentExample
            title="Default"
            code={defaultCode}
            preview={<Link href="/components">Browse the components</Link>}
          />
          <ComponentExample
            title="Within a sentence"
            code={sentenceCode}
            preview={
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 420,
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--color-text)',
                  margin: 0,
                  maxWidth: '420px',
                  textAlign: 'center',
                }}
              >
                Lumen is open source. Read the <Link href="/notes">design notes</Link> or view it{' '}
                <Link href="https://github.com" external>
                  on GitHub
                </Link>
                .
              </p>
            }
          />
        </section>

        {/* ─── Props ──────────────────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <p style={{ ...eyebrow, marginBottom: '24px' }}>Props</p>
          <div style={{ borderTop: '0.5px solid var(--color-border-soft)' }}>
            {/* Header row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 2fr 1fr 1.6fr',
                gap: '16px',
                padding: '10px 0',
                borderBottom: '0.5px solid var(--color-border-soft)',
              }}
            >
              {['Prop', 'Type', 'Default', 'Description'].map((h) => (
                <span
                  key={h}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-faint)',
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
            {/* Body rows */}
            {props.map((p) => (
              <div
                key={p.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 2fr 1fr 1.6fr',
                  gap: '16px',
                  padding: '12px 0',
                  borderBottom: '0.5px solid var(--color-border-soft)',
                  alignItems: 'baseline',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text)' }}>
                  {p.name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  {p.type}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  {p.default}
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  {p.description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Installation ───────────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <p style={{ ...eyebrow, marginBottom: '20px' }}>Installation</p>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 420,
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              margin: '0 0 24px',
              maxWidth: '560px',
            }}
          >
            Paste the source into components/link.tsx. No dependencies required.
          </p>
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
              {copied ? 'Copied' : 'Copy'}
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
              <code>{linkSource}</code>
            </pre>
          </div>
        </section>

        {/* ─── Page footer note ───────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <hr style={hairline} />
          <p style={{ paddingTop: '24px', margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>
            Built from Lumen tokens.{' '}
            <span style={{ margin: '0 4px', color: 'var(--color-text-faint)' }}>→</span>
            <a
              href="/tokens"
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              style={{
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                textUnderlineOffset: '3px',
                textDecorationThickness: '0.5px',
              }}
            >
              Edit the tokens
            </a>
          </p>
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

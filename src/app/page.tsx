'use client';

import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Alert } from '@/components/alert';
import { Card } from '@/components/card';
import { Tabs } from '@/components/tabs';
import { Badge } from '@/components/badge';
import { ComponentCard } from '@/components/component-card';

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'button' | 'input' | 'alert';

type ButtonState = {
  variant: 'primary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
  label: string;
};

type InputState = {
  size: 'sm' | 'md' | 'lg';
  label: string;
  placeholder: string;
  error: boolean;
};

type AlertState = {
  variant: 'info' | 'warning' | 'error';
  title: string;
  body: string;
};

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULTS = {
  button: {
    variant: 'primary' as const,
    size: 'md' as const,
    disabled: false,
    label: 'Click me',
  },
  input: {
    size: 'md' as const,
    label: 'Email address',
    placeholder: 'you@example.com',
    error: false,
  },
  alert: {
    variant: 'info' as const,
    title: 'Heads up.',
    body: 'This action cannot be undone.',
  },
};

// ─── Code generation ──────────────────────────────────────────────────────────

function genButtonCode(p: ButtonState) {
  const attrs = [
    `  variant="${p.variant}"`,
    `  size="${p.size}"`,
    p.disabled ? `  disabled` : null,
  ]
    .filter(Boolean)
    .join('\n');
  return `<Button\n${attrs}\n>\n  ${p.label}\n</Button>`;
}

function genInputCode(p: InputState) {
  const attrs = [
    `  label="${p.label}"`,
    `  placeholder="${p.placeholder}"`,
    `  size="${p.size}"`,
    p.error ? `  error` : null,
  ]
    .filter(Boolean)
    .join('\n');
  return `<Input\n${attrs}\n/>`;
}

function genAlertCode(p: AlertState) {
  return `<Alert\n  variant="${p.variant}"\n  title="${p.title}"\n>\n  ${p.body}\n</Alert>`;
}

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

const controlBase: CSSProperties = {
  background: 'transparent',
  border: 'none',
  borderBottom: '0.5px solid var(--color-text)',
  borderRadius: 0,
  outline: 'none',
  fontFamily: 'var(--font-sans)',
  fontWeight: 420,
  fontSize: '13px',
  color: 'var(--color-text)',
  paddingBottom: '4px',
  width: '100%',
};

const prose: CSSProperties = {
  fontSize: '15px',
  fontWeight: 420,
  color: 'var(--color-text)',
  lineHeight: 1.7,
  margin: '0 0 1em',
};

// ─── Small UI pieces ──────────────────────────────────────────────────────────

function ControlField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span
        style={{
          fontSize: '11px',
          fontFamily: 'var(--font-sans)',
          fontWeight: 420,
          color: 'var(--color-text-muted)',
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
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

// ─── Page data ────────────────────────────────────────────────────────────────

const componentCards: {
  slug: string;
  name: string;
  category: string;
  description: string;
  preview: ReactNode;
}[] = [
  {
    slug: 'card',
    name: 'Card',
    category: 'Containers',
    description: 'Surface, with hierarchy.',
    preview: (
      <div style={{ width: '170px' }}>
        <Card>
          <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: 540, color: 'var(--color-text)' }}>Dashboard</p>
          <p style={{ margin: 0, fontSize: '11px', color: 'var(--color-text-muted)' }}>Four active projects.</p>
        </Card>
      </div>
    ),
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    category: 'Navigation',
    description: 'Switch views, without the noise.',
    preview: (
      <div style={{ width: '180px' }}>
        <Tabs
          tabs={[
            { label: 'Overview', content: <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>At a glance.</span> },
            { label: 'Details', content: <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>The particulars.</span> },
          ]}
        />
      </div>
    ),
  },
  {
    slug: 'badge',
    name: 'Badge',
    category: 'Feedback',
    description: 'Status, in a few characters.',
    preview: <Badge>New</Badge>,
  },
];

const marqueeItems = [
  'Tokens, not utilities',
  "Copy, don't install",
  'Figma → code',
  'Open source',
  'Quiet by default',
  'Wear every hat',
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('button');
  const [buttonProps, setButtonProps] = useState<ButtonState>(DEFAULTS.button);
  const [inputProps, setInputProps] = useState<InputState>(DEFAULTS.input);
  const [alertProps, setAlertProps] = useState<AlertState>(DEFAULTS.alert);
  const [copied, setCopied] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === 'button') setButtonProps(DEFAULTS.button);
    if (tab === 'input') setInputProps(DEFAULTS.input);
    if (tab === 'alert') setAlertProps(DEFAULTS.alert);
  };

  const currentCode =
    activeTab === 'button'
      ? genButtonCode(buttonProps)
      : activeTab === 'input'
      ? genInputCode(inputProps)
      : genAlertCode(alertProps);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode);
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
            <span
              style={{
                fontSize: '15px',
                fontWeight: 540,
                letterSpacing: '-0.01em',
                color: 'var(--color-text)',
              }}
            >
              Lumen
            </span>
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

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 32px' }}>
        <section style={{ paddingTop: '96px', paddingBottom: '96px' }}>
          <div style={{ maxWidth: '720px' }}>
            <p style={{ ...eyebrow, marginBottom: '20px' }}>An open-source design system</p>
            <h1
              className="lumen-hero-h1"
              style={{
                fontSize: '44px',
                fontWeight: 540,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--color-text)',
                margin: '0 0 24px',
              }}
            >
              An open-source design system for designers wearing too many hats.
            </h1>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 420,
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                margin: '0 0 32px',
                maxWidth: '560px',
              }}
            >
              Lumen is twenty components, twenty-two tokens, and an opinion about
              how design and code should agree. Built by a product designer, for
              product designers who got tired of waiting on handoff.
            </p>
            <Button variant="primary" size="md">Explore components</Button>
          </div>
        </section>
      </div>

      {/* ─── Marquee ──────────────────────────────────────────────────────── */}
      <div
        className="lumen-marquee-wrap"
        style={{
          borderTop: '0.5px solid var(--color-border)',
          borderBottom: '0.5px solid var(--color-border)',
          overflow: 'hidden',
          padding: '12px 0',
        }}
      >
        <div
          className="lumen-marquee-track"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--color-text-muted)',
            fontWeight: 420,
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ whiteSpace: 'nowrap', padding: '0 20px' }}>
              {item}
              <span style={{ marginLeft: '20px', color: 'var(--color-text-faint)' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── Main content ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 32px' }}>

        {/* ─── Playground ───────────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <div
            style={{
              border: '0.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
            }}
          >
            {/* Eyebrow */}
            <p style={{ ...eyebrow, marginBottom: '16px' }}>Try it</p>
            {/* Serif intro */}
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '20px',
                fontWeight: 400,
                color: 'var(--color-text-muted)',
                lineHeight: 1.5,
                margin: '0 0 28px',
              }}
            >
              Read the docs later. Touch a button first.
            </p>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
              {(['button', 'input', 'alert'] as Tab[]).map((tab) => {
                const active = tab === activeTab;
                return (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      fontWeight: active ? 540 : 420,
                      color: active ? 'var(--color-text)' : 'var(--color-text-muted)',
                      textDecoration: active ? 'underline' : 'none',
                      textUnderlineOffset: '4px',
                      textDecorationThickness: '0.5px',
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                );
              })}
            </div>
            {/* 2-col: preview + controls */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '3fr 2fr',
                gap: '32px',
                alignItems: 'start',
              }}
            >
              {/* Live preview */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '0.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '180px',
                }}
              >
                {activeTab === 'button' && (
                  <Button
                    variant={buttonProps.variant}
                    size={buttonProps.size}
                    disabled={buttonProps.disabled}
                  >
                    {buttonProps.label}
                  </Button>
                )}
                {activeTab === 'input' && (
                  <div style={{ width: '220px' }}>
                    <Input
                      label={inputProps.label}
                      placeholder={inputProps.placeholder}
                      size={inputProps.size}
                      error={inputProps.error}
                    />
                  </div>
                )}
                {activeTab === 'alert' && (
                  <div style={{ width: '100%', maxWidth: '320px' }}>
                    <Alert variant={alertProps.variant} title={alertProps.title}>
                      {alertProps.body}
                    </Alert>
                  </div>
                )}
              </div>
              {/* Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={eyebrow}>Controls</p>

                {activeTab === 'button' && (
                  <>
                    <ControlField label="variant">
                      <select
                        value={buttonProps.variant}
                        onChange={(e) =>
                          setButtonProps((p) => ({
                            ...p,
                            variant: e.target.value as ButtonState['variant'],
                          }))
                        }
                        style={controlBase}
                      >
                        <option value="primary">primary</option>
                        <option value="outline">outline</option>
                        <option value="ghost">ghost</option>
                      </select>
                    </ControlField>
                    <ControlField label="size">
                      <select
                        value={buttonProps.size}
                        onChange={(e) =>
                          setButtonProps((p) => ({
                            ...p,
                            size: e.target.value as ButtonState['size'],
                          }))
                        }
                        style={controlBase}
                      >
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                      </select>
                    </ControlField>
                    <ControlField label="label">
                      <input
                        value={buttonProps.label}
                        onChange={(e) =>
                          setButtonProps((p) => ({ ...p, label: e.target.value }))
                        }
                        style={controlBase}
                      />
                    </ControlField>
                    <ControlField label="disabled">
                      <div style={{ paddingBottom: '4px' }}>
                        <input
                          type="checkbox"
                          checked={buttonProps.disabled}
                          onChange={(e) =>
                            setButtonProps((p) => ({ ...p, disabled: e.target.checked }))
                          }
                        />
                      </div>
                    </ControlField>
                  </>
                )}

                {activeTab === 'input' && (
                  <>
                    <ControlField label="size">
                      <select
                        value={inputProps.size}
                        onChange={(e) =>
                          setInputProps((p) => ({
                            ...p,
                            size: e.target.value as InputState['size'],
                          }))
                        }
                        style={controlBase}
                      >
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                      </select>
                    </ControlField>
                    <ControlField label="label">
                      <input
                        value={inputProps.label}
                        onChange={(e) =>
                          setInputProps((p) => ({ ...p, label: e.target.value }))
                        }
                        style={controlBase}
                      />
                    </ControlField>
                    <ControlField label="placeholder">
                      <input
                        value={inputProps.placeholder}
                        onChange={(e) =>
                          setInputProps((p) => ({ ...p, placeholder: e.target.value }))
                        }
                        style={controlBase}
                      />
                    </ControlField>
                    <ControlField label="error">
                      <div style={{ paddingBottom: '4px' }}>
                        <input
                          type="checkbox"
                          checked={inputProps.error}
                          onChange={(e) =>
                            setInputProps((p) => ({ ...p, error: e.target.checked }))
                          }
                        />
                      </div>
                    </ControlField>
                  </>
                )}

                {activeTab === 'alert' && (
                  <>
                    <ControlField label="variant">
                      <select
                        value={alertProps.variant}
                        onChange={(e) =>
                          setAlertProps((p) => ({
                            ...p,
                            variant: e.target.value as AlertState['variant'],
                          }))
                        }
                        style={controlBase}
                      >
                        <option value="info">info</option>
                        <option value="warning">warning</option>
                        <option value="error">error</option>
                      </select>
                    </ControlField>
                    <ControlField label="title">
                      <input
                        value={alertProps.title}
                        onChange={(e) =>
                          setAlertProps((p) => ({ ...p, title: e.target.value }))
                        }
                        style={controlBase}
                      />
                    </ControlField>
                    <ControlField label="body">
                      <input
                        value={alertProps.body}
                        onChange={(e) =>
                          setAlertProps((p) => ({ ...p, body: e.target.value }))
                        }
                        style={controlBase}
                      />
                    </ControlField>
                  </>
                )}
              </div>
            </div>
            {/* Code block */}
            <div
              style={{
                position: 'relative',
                marginTop: '24px',
                border: '0.5px solid var(--color-border)',
              }}
            >
              <pre
                style={{
                  margin: 0,
                  padding: '16px 48px 16px 16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--color-text)',
                  backgroundColor: 'var(--color-bg)',
                  overflowX: 'auto',
                  lineHeight: 1.6,
                }}
              >
                <code>{currentCode}</code>
              </pre>
              <button
                onClick={handleCopy}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '12px',
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
            </div>
          </div>
        </section>

        {/* ─── Component cards ──────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 540,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: 'var(--color-text)',
              margin: '0 0 32px',
            }}
          >
            A handful of the twenty.
          </h2>
          <div
            className="lumen-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}
          >
            {componentCards.map((c) => (
              <ComponentCard
                key={c.slug}
                slug={c.slug}
                name={c.name}
                category={c.category}
                description={c.description}
                preview={c.preview}
              />
            ))}
          </div>
          <div style={{ marginTop: '32px' }}>
            <a
              href="/components"
              onMouseEnter={() => setLinkHovered(true)}
              onMouseLeave={() => setLinkHovered(false)}
              style={{
                fontSize: '14px',
                fontWeight: 540,
                color: 'var(--color-text)',
                textDecoration: linkHovered ? 'underline' : 'none',
                textUnderlineOffset: '3px',
                textDecorationThickness: '0.5px',
              }}
            >
              Explore all twenty components →
            </a>
          </div>
        </section>

        {/* ─── A note from Yuti ─────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <hr style={hairline} />
          <div style={{ paddingTop: '60px', maxWidth: '620px' }}>
            <p style={{ ...eyebrow, marginBottom: '20px' }}>A note from Yuti</p>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 540,
                letterSpacing: '-0.015em',
                lineHeight: 1.2,
                color: 'var(--color-text)',
                margin: '0 0 20px',
              }}
            >
              I built this because I needed it.
            </h2>
            <p style={prose}>
              I trained as a product designer, which is to say I learned how to
              make things look right and reason about them.
            </p>
            <p style={prose}>
              What I didn&apos;t learn — what I picked up later, slowly, from
              open-source codebases on the internet — was how to actually ship
              the things I was designing. Every system I learned from was free,
              generous, and built by people who didn&apos;t have to share it.
            </p>
            <p style={prose}>
              Lumen is my small contribution back. Twenty components, an
              opinionated foundation, a clear convention between Figma and code.
              Built for designers who, like me, are ready to wear more than one
              hat — and need the tools that fit.
            </p>
            <p style={{ ...prose, margin: 0 }}>
              It&apos;s free. It will stay free. If it helps you, the only thing
              I ask is that you share it.
            </p>
            <div style={{ marginTop: '24px' }}>
              <p
                style={{
                  margin: 0,
                  fontSize: '13px',
                  fontWeight: 420,
                  color: 'var(--color-text)',
                }}
              >
                — Yuti Vora
              </p>
              <p
                style={{
                  margin: '2px 0 0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--color-text-faint)',
                }}
              >
                Product designer
              </p>
            </div>
          </div>
        </section>

        {/* ─── Footer ───────────────────────────────────────────────────── */}
        <footer style={{ paddingTop: '60px', paddingBottom: '48px' }}>
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

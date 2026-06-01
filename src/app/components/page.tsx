'use client';

import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Alert } from '@/components/alert';
import { IconButton } from '@/components/icon-button';
import { Link } from '@/components/link';
import { Textarea } from '@/components/textarea';
import { Select } from '@/components/select';
import { Checkbox } from '@/components/checkbox';
import { Radio } from '@/components/radio';
import { Switch } from '@/components/switch';
import { Slider } from '@/components/slider';
import { Badge } from '@/components/badge';
import { Avatar } from '@/components/avatar';
import { Card } from '@/components/card';
import { Tabs } from '@/components/tabs';
import { Breadcrumb } from '@/components/breadcrumb';
import { Menu } from '@/components/menu';
import { Tooltip } from '@/components/tooltip';
import { ComponentCard } from '@/components/component-card';

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

// ─── Component catalogue ───────────────────────────────────────────────────────
// Edit this array to add detail pages. Each entry maps to /components/[slug].

type Category =
  | 'Actions'
  | 'Forms'
  | 'Containers'
  | 'Navigation'
  | 'Feedback'
  | 'Data Display'
  | 'Overlays';

interface ComponentMeta {
  slug: string;
  name: string;
  category: Category;
  description: string;
}

const components: ComponentMeta[] = [
  { slug: 'button', name: 'Button', category: 'Actions', description: 'The workhorse, three variants.' },
  { slug: 'icon-button', name: 'Icon button', category: 'Actions', description: 'Compact, icon-only.' },
  { slug: 'link', name: 'Link', category: 'Actions', description: 'Inline navigation.' },
  { slug: 'input', name: 'Input', category: 'Forms', description: 'Text fields, restrained.' },
  { slug: 'textarea', name: 'Textarea', category: 'Forms', description: 'Multi-line input.' },
  { slug: 'select', name: 'Select', category: 'Forms', description: 'Single-value picker.' },
  { slug: 'checkbox', name: 'Checkbox', category: 'Forms', description: 'Boolean choice.' },
  { slug: 'radio', name: 'Radio', category: 'Forms', description: 'One of several.' },
  { slug: 'switch', name: 'Switch', category: 'Forms', description: 'Toggle, on or off.' },
  { slug: 'slider', name: 'Slider', category: 'Forms', description: 'A value in a range.' },
  { slug: 'card', name: 'Card', category: 'Containers', description: 'Surface, with hierarchy.' },
  { slug: 'tabs', name: 'Tabs', category: 'Navigation', description: 'Switch views, without the noise.' },
  { slug: 'breadcrumb', name: 'Breadcrumb', category: 'Navigation', description: 'Where you are.' },
  { slug: 'menu', name: 'Menu', category: 'Navigation', description: 'Action lists, keyboard-first.' },
  { slug: 'alert', name: 'Alert', category: 'Feedback', description: 'Inline messages.' },
  { slug: 'badge', name: 'Badge', category: 'Feedback', description: 'Status, in a few characters.' },
  { slug: 'toast', name: 'Toast', category: 'Feedback', description: 'Ephemeral notifications.' },
  { slug: 'avatar', name: 'Avatar', category: 'Data Display', description: 'User representation.' },
  { slug: 'tooltip', name: 'Tooltip', category: 'Data Display', description: 'Quiet labels for icons.' },
  { slug: 'dialog', name: 'Dialog', category: 'Overlays', description: 'Modal surface with focus trap.' },
];

const categories: Array<'All' | Category> = [
  'All',
  'Actions',
  'Forms',
  'Containers',
  'Navigation',
  'Feedback',
  'Data Display',
  'Overlays',
];

// ─── Mini previews ─────────────────────────────────────────────────────────────
// Real components where built; quiet representative mocks otherwise.

const previews: Record<string, ReactNode> = {
  button: <Button size="sm">Button</Button>,
  'icon-button': (
    <IconButton variant="outline" size="sm" aria-label="Add">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1" />
      </svg>
    </IconButton>
  ),
  link: (
    <Link href="/components" style={{ fontSize: '13px' }}>
      Learn more
    </Link>
  ),
  input: (
    <div style={{ width: '150px' }}>
      <Input label="email" placeholder="you@example.com" size="sm" />
    </div>
  ),
  textarea: (
    <div style={{ width: '150px' }}>
      <Textarea placeholder="Write a note…" rows={2} />
    </div>
  ),
  select: (
    <div style={{ width: '150px' }}>
      <Select
        options={[
          { value: 'one', label: 'Option one' },
          { value: 'two', label: 'Option two' },
        ]}
        value="one"
        onChange={() => {}}
      />
    </div>
  ),
  checkbox: <Checkbox checked onChange={() => {}} label="Label" />,
  radio: <Radio checked onChange={() => {}} label="Label" name="preview" value="label" />,
  switch: <Switch checked onChange={() => {}} />,
  slider: (
    <div style={{ width: '130px' }}>
      <Slider value={55} onChange={() => {}} />
    </div>
  ),
  card: (
    <div style={{ width: '170px' }}>
      <Card>
        <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: 540, color: 'var(--color-text)' }}>Dashboard</p>
        <p style={{ margin: 0, fontSize: '11px', color: 'var(--color-text-muted)' }}>Four active projects.</p>
      </Card>
    </div>
  ),
  tabs: (
    <div style={{ width: '180px' }}>
      <Tabs
        tabs={[
          { label: 'Overview', content: <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>At a glance.</span> },
          { label: 'Details', content: <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>The particulars.</span> },
        ]}
      />
    </div>
  ),
  breadcrumb: (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Library' },
      ]}
    />
  ),
  menu: (
    <Menu
      trigger="Actions"
      items={[
        { label: 'Rename', value: 'rename' },
        { label: 'Duplicate', value: 'duplicate' },
        { label: 'Delete', value: 'delete' },
      ]}
    />
  ),
  alert: (
    <div style={{ width: '180px' }}>
      <Alert variant="info" title="Heads up.">
        Saved as a draft.
      </Alert>
    </div>
  ),
  badge: <Badge>New</Badge>,
  toast: (
    <div
      style={{
        width: '170px',
        backgroundColor: 'var(--color-surface)',
        border: '0.5px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
      }}
    >
      <div style={{ height: '2px', backgroundColor: 'var(--color-text)' }} />
      <p style={{ margin: 0, padding: '10px 12px', fontSize: '12px', color: 'var(--color-text)' }}>
        Saved to your drafts.
      </p>
    </div>
  ),
  avatar: <Avatar initials="YV" />,
  tooltip: (
    <Tooltip content="Settings">
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 420,
          color: 'var(--color-text)',
          borderBottom: '0.5px dashed var(--color-text-faint)',
          paddingBottom: '1px',
          cursor: 'default',
        }}
      >
        Hover me
      </span>
    </Tooltip>
  ),
  dialog: (
    <div
      style={{
        width: '160px',
        backgroundColor: 'var(--color-surface)',
        border: '0.5px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: '12px',
      }}
    >
      <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: 540, color: 'var(--color-text)' }}>Confirm</p>
      <p style={{ margin: 0, fontSize: '11px', color: 'var(--color-text-muted)' }}>Are you sure?</p>
    </div>
  ),
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Components() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'All' | Category>('All');

  const q = query.trim().toLowerCase();
  const filtered = components.filter((c) => {
    const inCategory = category === 'All' || c.category === category;
    const matchesQuery =
      q === '' || c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
    return inCategory && matchesQuery;
  });

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

        {/* ─── Intro ──────────────────────────────────────────────────────── */}
        <section style={{ paddingTop: '96px' }}>
          <p style={{ ...eyebrow, marginBottom: '20px' }}>The library</p>
          <h1
            style={{
              fontSize: '44px',
              fontWeight: 540,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--color-text)',
              margin: '0 0 24px',
            }}
          >
            Twenty components.
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
            Designed to compose. Copy any of them into your project — no install
            required, no dependency to drag along.
          </p>

          {/* Controls */}
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter components…"
              aria-label="Filter components"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '0.5px solid var(--color-text)',
                borderRadius: 0,
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontWeight: 420,
                fontSize: '14px',
                color: 'var(--color-text)',
                paddingBottom: '6px',
                width: '100%',
                maxWidth: '360px',
              }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => {
                const active = cat === category;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '6px 12px',
                      border: '0.5px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      backgroundColor: active ? 'var(--color-text)' : 'transparent',
                      color: active ? 'var(--color-bg)' : 'var(--color-text-muted)',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <p style={{ ...eyebrow, fontSize: '11px', letterSpacing: '0.05em' }}>
              {filtered.length} {filtered.length === 1 ? 'component' : 'components'}
            </p>
          </div>
        </section>

        {/* ─── Grid ───────────────────────────────────────────────────────── */}
        <section style={{ paddingTop: '40px', paddingBottom: '0' }}>
          <div
            className="lumen-components-grid"
            style={{ display: 'grid', gap: '16px' }}
          >
            {filtered.map((c) => (
              <ComponentCard
                key={c.slug}
                slug={c.slug}
                name={c.name}
                category={c.category}
                description={c.description}
                preview={previews[c.slug]}
              />
            ))}
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

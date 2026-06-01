'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

interface ComponentExampleProps {
  title?: string;
  preview: ReactNode;
  code: string;
}

export function ComponentExample({ title, preview, code }: ComponentExampleProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      {title && (
        <p
          style={{
            margin: '0 0 12px',
            fontSize: '15px',
            fontWeight: 540,
            color: 'var(--color-text)',
          }}
        >
          {title}
        </p>
      )}
      <div
        style={{
          position: 'relative',
          border: '0.5px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}
      >
        {/* Tab row */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            padding: '12px 16px',
            borderBottom: '0.5px solid var(--color-border-soft)',
          }}
        >
          {(['preview', 'code'] as const).map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: active ? 540 : 420,
                  color: active ? 'var(--color-text)' : 'var(--color-text-muted)',
                  textDecoration: active ? 'underline' : 'none',
                  textUnderlineOffset: '4px',
                  textDecorationThickness: '0.5px',
                }}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            );
          })}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
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

        {/* Body */}
        {tab === 'preview' ? (
          <div
            style={{
              padding: '40px',
              backgroundColor: 'var(--color-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {preview}
          </div>
        ) : (
          <pre
            style={{
              margin: 0,
              padding: '24px',
              backgroundColor: 'var(--color-bg)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--color-text)',
              lineHeight: 1.6,
              overflowX: 'auto',
            }}
          >
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

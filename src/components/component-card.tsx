'use client';

import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface ComponentCardProps {
  slug: string;
  name: string;
  category: string;
  description: string;
  preview: ReactNode;
}

const monoCaps: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
};

export function ComponentCard({ slug, name, category, description, preview }: ComponentCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/components/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        backgroundColor: 'var(--color-bg)',
        border: `${hovered ? '1px' : '0.5px'} solid var(--color-border)`,
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
        cursor: 'pointer',
      }}
    >
      {/* Mini preview */}
      <div
        style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
        }}
      >
        {preview}
      </div>
      <p style={{ ...monoCaps, color: 'var(--color-text-faint)', margin: '0 0 6px' }}>
        {category}
      </p>
      <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 540, color: 'var(--color-text)' }}>
        {name}
      </p>
      <p style={{ margin: 0, fontSize: '12px', fontWeight: 420, color: 'var(--color-text-muted)' }}>
        {description}
      </p>
    </a>
  );
}

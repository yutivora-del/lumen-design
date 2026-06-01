'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
  onChange?: (index: number) => void;
}

export function Tabs({ tabs, defaultTab = 0, onChange }: TabsProps) {
  const [active, setActive] = useState(defaultTab);

  const select = (i: number) => {
    setActive(i);
    onChange?.(i);
  };

  return (
    <div style={{ width: '100%' }}>
      <div
        role="tablist"
        style={{
          display: 'flex',
          gap: '24px',
          borderBottom: '0.5px solid var(--color-border-soft)',
        }}
      >
        {tabs.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={tab.label}
              role="tab"
              aria-selected={isActive}
              onClick={() => select(i)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0 0 10px',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: isActive ? 540 : 420,
                color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                borderBottom: isActive
                  ? '0.5px solid var(--color-text)'
                  : '0.5px solid transparent',
                marginBottom: '-0.5px',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" style={{ paddingTop: '20px' }}>
        {tabs[active]?.content}
      </div>
    </div>
  );
}

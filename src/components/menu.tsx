'use client';

import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

interface MenuItem {
  label: string;
  value: string;
}

interface MenuProps {
  trigger: ReactNode;
  items: MenuItem[];
  onSelect?: (value: string) => void;
}

export function Menu({ trigger, items, onSelect }: MenuProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  const select = (value: string) => {
    onSelect?.(value);
    setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) setOpen(true);
      setActiveIndex((i) => (i + 1) % items.length);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + items.length) % items.length);
    }
    if (e.key === 'Enter' && open) {
      e.preventDefault();
      select(items[activeIndex].value);
    }
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={onKeyDown}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-sans)',
          fontWeight: 540,
          fontSize: '14px',
          lineHeight: 1.4,
          padding: '8px 16px',
          backgroundColor: 'transparent',
          color: 'var(--color-text)',
          border: '0.5px solid var(--color-text)',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
        }}
      >
        {trigger}
      </button>
      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            minWidth: '160px',
            backgroundColor: 'var(--color-surface)',
            border: '0.5px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            zIndex: 20,
          }}
        >
          {items.map((item, i) => (
            <button
              key={item.value}
              role="menuitem"
              onClick={() => select(item.value)}
              onMouseEnter={() => setActiveIndex(i)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '8px 12px',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 420,
                color: 'var(--color-text)',
                backgroundColor: i === activeIndex ? 'var(--color-bg)' : 'transparent',
                border: 'none',
                borderTop: i === 0 ? 'none' : '0.5px solid var(--color-border-soft)',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

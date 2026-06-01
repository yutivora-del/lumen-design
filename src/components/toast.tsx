'use client';

import { useEffect, useState } from 'react';

type ToastVariant = 'default' | 'error';

interface ToastProps {
  message: string;
  duration?: number;
  variant?: ToastVariant;
}

export function Toast({ message, duration = 3000, variant = 'default' }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        minWidth: '200px',
        maxWidth: '320px',
        backgroundColor: 'var(--color-surface)',
        border: '0.5px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        zIndex: 50,
      }}
    >
      <div
        style={{
          height: '2px',
          backgroundColor: variant === 'error' ? 'var(--color-error)' : 'var(--color-text)',
        }}
      />
      <p
        style={{
          margin: 0,
          padding: '12px 16px',
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          fontWeight: 420,
          color: 'var(--color-text)',
          lineHeight: 1.5,
        }}
      >
        {message}
      </p>
    </div>
  );
}

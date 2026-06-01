import type { CSSProperties, ReactNode } from 'react';

type BadgeVariant = 'default' | 'solid';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variants: Record<BadgeVariant, CSSProperties> = {
  default: {
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    border: '0.5px solid var(--color-text)',
  },
  solid: {
    backgroundColor: 'var(--color-text)',
    color: 'var(--color-bg)',
    border: '0.5px solid var(--color-text)',
  },
};

export function Badge({ variant = 'default', children }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 420,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '2px 8px',
        borderRadius: 'var(--radius-sm)',
        ...variants[variant],
      }}
    >
      {children}
    </span>
  );
}

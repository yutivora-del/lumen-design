import type { ReactNode } from 'react';

type AlertVariant = 'info' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  title: string;
  children?: ReactNode;
}

const indicatorColor: Record<AlertVariant, string> = {
  info: 'var(--color-text)',
  warning: 'var(--color-text-muted)',
  error: 'var(--color-error)',
};

export function Alert({ variant = 'info', title, children }: AlertProps) {
  return (
    <div
      style={{
        border: '0.5px solid var(--color-text)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
      }}
    >
      {/* 2px colored indicator bar */}
      <div
        style={{
          height: '2px',
          backgroundColor: indicatorColor[variant],
        }}
      />
      <div style={{ padding: '12px 16px' }}>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            fontWeight: 540,
            color: 'var(--color-text)',
            lineHeight: 1.5,
          }}
        >
          {title}
        </p>
        {children && (
          <p
            style={{
              margin: '4px 0 0',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 420,
              color: 'var(--color-text-muted)',
              lineHeight: 1.5,
            }}
          >
            {children}
          </p>
        )}
      </div>
    </div>
  );
}

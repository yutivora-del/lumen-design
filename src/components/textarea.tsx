import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
}

export function Textarea({ label, error = false, rows = 4, style, ...props }: TextareaProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 420,
            fontSize: '12px',
            color: 'var(--color-text-muted)',
          }}
        >
          {label}
        </span>
      )}
      <textarea
        rows={rows}
        style={{
          background: 'transparent',
          border: 'none',
          borderBottom: error
            ? '0.5px solid var(--color-error)'
            : '0.5px solid var(--color-text)',
          borderRadius: 0,
          outline: 'none',
          resize: 'vertical',
          fontFamily: 'var(--font-sans)',
          fontWeight: 420,
          fontSize: '14px',
          lineHeight: 1.6,
          color: 'var(--color-text)',
          paddingBottom: '6px',
          width: '100%',
          ...style,
        }}
        {...props}
      />
      {error && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 420,
            color: 'var(--color-error)',
          }}
        >
          Required.
        </span>
      )}
    </div>
  );
}

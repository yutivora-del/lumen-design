import type { InputHTMLAttributes, CSSProperties } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  label?: string;
  error?: boolean;
}

const sizes: Record<InputSize, { input: CSSProperties; label: CSSProperties }> = {
  sm: { input: { fontSize: '13px', paddingBottom: '4px' }, label: { fontSize: '11px' } },
  md: { input: { fontSize: '14px', paddingBottom: '6px' }, label: { fontSize: '12px' } },
  lg: { input: { fontSize: '16px', paddingBottom: '8px' }, label: { fontSize: '13px' } },
};

export function Input({
  size = 'md',
  label,
  error = false,
  style,
  ...props
}: InputProps) {
  const sz = sizes[size];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 420,
            color: 'var(--color-text-muted)',
            ...sz.label,
          }}
        >
          {label}
        </span>
      )}
      <input
        style={{
          background: 'transparent',
          border: 'none',
          borderBottom: `0.5px solid ${error ? 'var(--color-error)' : 'var(--color-text)'}`,
          borderRadius: 0,
          outline: 'none',
          fontFamily: 'var(--font-sans)',
          fontWeight: 420,
          color: 'var(--color-text)',
          width: '100%',
          ...sz.input,
          ...style,
        }}
        {...props}
      />
      {error && (
        <span
          style={{
            fontSize: '12px',
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-error)',
            fontWeight: 420,
          }}
        >
          Required.
        </span>
      )}
    </div>
  );
}

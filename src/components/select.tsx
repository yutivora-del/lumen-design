'use client';

import type { SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
}

export function Select({ label, options, value, onChange, disabled, style, ...props }: SelectProps) {
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
      <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          style={{
            appearance: 'none',
            WebkitAppearance: 'none',
            background: 'transparent',
            border: 'none',
            borderBottom: '0.5px solid var(--color-text)',
            borderRadius: 0,
            outline: 'none',
            fontFamily: 'var(--font-sans)',
            fontWeight: 420,
            fontSize: '14px',
            color: 'var(--color-text)',
            padding: '0 24px 6px 0',
            width: '100%',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.38 : 1,
            ...style,
          }}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          style={{ position: 'absolute', right: 0, bottom: '8px', pointerEvents: 'none' }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="var(--color-text-muted)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

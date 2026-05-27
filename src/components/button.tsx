import type { ButtonHTMLAttributes, CSSProperties } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const sizes: Record<ButtonSize, CSSProperties> = {
  sm: { padding: '4px 12px', fontSize: '13px' },
  md: { padding: '8px 16px', fontSize: '14px' },
  lg: { padding: '12px 24px', fontSize: '16px' },
};

const variants: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-text)',
    color: 'var(--color-bg)',
    border: '0.5px solid var(--color-text)',
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    border: '0.5px solid var(--color-text)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    border: 'none',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    textDecorationThickness: '0.5px',
  },
};

export function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  style,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        fontWeight: 540,
        lineHeight: 1.4,
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        letterSpacing: 0,
        transition: 'opacity 120ms ease',
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

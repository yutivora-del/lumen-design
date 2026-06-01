import type { ButtonHTMLAttributes, CSSProperties } from 'react';

type IconButtonVariant = 'primary' | 'outline' | 'ghost';
type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
}

const sizes: Record<IconButtonSize, CSSProperties> = {
  sm: { width: '28px', height: '28px' },
  md: { width: '36px', height: '36px' },
  lg: { width: '44px', height: '44px' },
};

const variants: Record<IconButtonVariant, CSSProperties> = {
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
  },
};

export function IconButton({
  variant = 'primary',
  size = 'md',
  disabled,
  style,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.38 : 1,
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

import type { CSSProperties } from 'react';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
}

const sizes: Record<AvatarSize, { box: number; font: number }> = {
  sm: { box: 28, font: 11 },
  md: { box: 36, font: 13 },
  lg: { box: 48, font: 16 },
};

export function Avatar({ src, alt = '', initials, size = 'md' }: AvatarProps) {
  const sz = sizes[size];

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: sz.box + 'px',
    height: sz.box + 'px',
    borderRadius: '50%',
    border: '0.5px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    overflow: 'hidden',
    flexShrink: 0,
  };

  return (
    <span style={base}>
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 540,
            fontSize: sz.font + 'px',
            color: 'var(--color-text)',
          }}
        >
          {initials}
        </span>
      )}
    </span>
  );
}

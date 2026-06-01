'use client';

import type { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
}

export function Link({ href, external = false, style, children, ...props }: LinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={(e) => {
        e.currentTarget.style.textDecorationThickness = '1px';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.textDecorationThickness = '0.5px';
      }}
      style={{
        color: 'var(--color-text)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 420,
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        textDecorationThickness: '0.5px',
        ...style,
      }}
      {...props}
    >
      {children}
    </a>
  );
}

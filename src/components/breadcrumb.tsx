import type { CSSProperties } from 'react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

const separator: CSSProperties = {
  margin: '0 8px',
  color: 'var(--color-text-faint)',
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          fontWeight: 420,
        }}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {item.label}
                </span>
              ) : (
                <a href={item.href} style={{ color: 'var(--color-text)', textDecoration: 'none' }}>
                  {item.label}
                </a>
              )}
              {!isLast && (
                <span style={separator} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

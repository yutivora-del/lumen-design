'use client';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Checkbox({ checked = false, onChange, label, disabled = false }: CheckboxProps) {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.38 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      />
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '16px',
          height: '16px',
          border: '0.5px solid var(--color-text)',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: checked ? 'var(--color-text)' : 'transparent',
          transition: 'background-color 120ms ease',
        }}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5L4.2 7L8 3" stroke="var(--color-bg)" strokeWidth="1.2" />
          </svg>
        )}
      </span>
      {label && (
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 420, fontSize: '14px', color: 'var(--color-text)' }}>
          {label}
        </span>
      )}
    </label>
  );
}

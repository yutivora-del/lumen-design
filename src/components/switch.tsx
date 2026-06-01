'use client';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Switch({ checked = false, onChange, label, disabled = false }: SwitchProps) {
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
        role="switch"
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
          justifyContent: checked ? 'flex-end' : 'flex-start',
          width: '36px',
          height: '20px',
          padding: '2px',
          border: '0.5px solid var(--color-text)',
          borderRadius: '999px',
          backgroundColor: checked ? 'var(--color-text)' : 'transparent',
          transition: 'background-color 120ms ease',
        }}
      >
        <span
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: checked ? 'var(--color-bg)' : 'var(--color-text)',
            transition: 'background-color 120ms ease',
          }}
        />
      </span>
      {label && (
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 420, fontSize: '14px', color: 'var(--color-text)' }}>
          {label}
        </span>
      )}
    </label>
  );
}

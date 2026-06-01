'use client';

interface RadioProps {
  checked?: boolean;
  onChange?: (value: string) => void;
  label?: string;
  name?: string;
  value?: string;
}

export function Radio({ checked = false, onChange, label, name, value }: RadioProps) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value ?? '')}
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
          borderRadius: '50%',
        }}
      >
        {checked && (
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-text)' }} />
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

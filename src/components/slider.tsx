'use client';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange?: (value: number) => void;
}

export function Slider({ min = 0, max = 100, step = 1, value, onChange }: SliderProps) {
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;

  return (
    <div style={{ position: 'relative', width: '100%', height: '16px', display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '1px',
          borderTop: '0.5px solid var(--color-border-soft)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          width: pct + '%',
          height: '1px',
          borderTop: '0.5px solid var(--color-text)',
        }}
      />
      <span
        style={{
          position: 'absolute',
          left: pct + '%',
          transform: 'translateX(-50%)',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-text)',
          pointerEvents: 'none',
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          margin: 0,
          opacity: 0,
          cursor: 'pointer',
          height: '16px',
        }}
      />
    </div>
  );
}

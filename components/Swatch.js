'use client';

// دايرة اللون. لو اللون له لونين (hex2) بتتقسم نصين.
export function swatchBg(c) {
  return c.hex2 ? `linear-gradient(135deg, ${c.hex} 50%, ${c.hex2} 50%)` : c.hex;
}

export default function Swatch({ color, label, on, onClick, size }) {
  return (
    <button
      type="button"
      className={`sw ${on ? 'on' : ''}`}
      style={{ background: swatchBg(color), ...(size ? { width: size, height: size } : null) }}
      title={label}
      aria-label={label}
      aria-pressed={!!on}
      onClick={onClick}
    />
  );
}

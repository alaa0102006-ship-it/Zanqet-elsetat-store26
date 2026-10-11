'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useStore } from './Providers';
import Swatch from './Swatch';
import Reveal from './Reveal';

const MAX_SW = 6;

export default function ProductCard({ product, categories = [], priority = false, index = 0 }) {
  const { t, tr, isAr, money, addToCart } = useStore();
  const [ci, setCi] = useState(null); // اللون المختار (بعد الضغط على دايرة)
  const [done, setDone] = useState(false);
  const colors = product.colors || [];
  const color = ci != null ? colors[ci] : null;
  const image = color?.image || product.images?.[0];
  const hover = !color ? product.images?.[1] : null;
  const cat = categories.find((c) => c.slug === product.category_slug);
  const needsColor = colors.length > 1 && !color;
  const href = `/product/${product.id}`;
  const badge = product.old_price ? 'sale' : product.is_new ? 'new' : null;

  const onAdd = () => {
    if (needsColor) return;
    addToCart(product.id, color ? color.name_en : colors[0]?.name_en || '');
    setDone(true);
    setTimeout(() => setDone(false), 1400);
  };

  return (
    <Reveal as="article" className="pc" delay={(index % 4) * 80}>
      <Link href={href} className="pc-media" aria-label={tr(product, 'name')}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="pc-img" src={image} alt={tr(product, 'name')} width="900" height="900" loading={priority ? 'eager' : 'lazy'} decoding="async" onError={(e) => { e.currentTarget.src = '/logo.webp'; e.currentTarget.classList.add('fallback'); }} />
        {hover && <img className="pc-img2" src={hover} alt="" width="900" height="900" loading="lazy" decoding="async" aria-hidden="true" />}
        {badge && (
          <span className={`pbadge ${badge}`}>
            {badge === 'sale' ? t.off(money(product.old_price - product.price)) : t.new}
          </span>
        )}
      </Link>
      <div className="pc-body">
        <Link href={href} className="pc-name">{tr(product, 'name')}</Link>
        {cat && <span className="pc-cat">{tr(cat, 'name')}</span>}
        {colors.length > 0 && (
          <div className="swatches" role="group" aria-label={t.color}>
            {colors.slice(0, MAX_SW).map((c, i) => (
              <Swatch key={c.name_en} color={c} label={isAr ? c.name_ar : c.name_en} on={i === ci} onClick={() => setCi(i === ci ? null : i)} />
            ))}
            {colors.length > MAX_SW && <Link href={href} className="sw-more">+{colors.length - MAX_SW}</Link>}
          </div>
        )}
        <div className="price-row">
          <span className="price">{money(product.price)}</span>
          {product.old_price && <span className="old">{money(product.old_price)}</span>}
        </div>
        {needsColor ? (
          <Link href={href} className="btn btn-coral btn-sm">{t.chooseColor}</Link>
        ) : (
          <button className={`btn btn-sm ${done ? 'btn-ok' : 'btn-coral'}`} onClick={onAdd}>
            {done ? t.added : t.addToCart}
          </button>
        )}
      </div>
    </Reveal>
  );
}

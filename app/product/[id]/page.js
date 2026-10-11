'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useStore } from '@/components/Providers';
import ProductCard from '@/components/ProductCard';
import SectionHead from '@/components/SectionHead';
import Swatch from '@/components/Swatch';
import { Ico, Social } from '@/components/Icons';
import { useCatalog } from '@/lib/useCatalog';
import { config } from '@/lib/config';

export default function ProductPage() {
  const { id } = useParams();
  const { t, tr, isAr, lang, money, addToCart, setCartOpen } = useStore();
  const { categories, products } = useCatalog();
  const [mi, setMi] = useState(0); // الصورة الكبيرة
  const [ci, setCi] = useState(null); // اللون المختار
  const [qty, setQty] = useState(1);
  const [hint, setHint] = useState(false);
  const swRef = useRef(null);

  const product = products.find((p) => p.id === id);

  // لو المنتج فيه لون واحد بس يتحدد تلقائيًا
  useEffect(() => {
    setMi(0); setQty(1); setHint(false);
    setCi(product && (product.colors || []).length === 1 ? 0 : null);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!product) {
    return (
      <section className="section"><div className="container empty">
        <p>{t.noResults}</p>
        <Link href="/shop" className="btn btn-coral">{t.continueShopping}</Link>
      </div></section>
    );
  }

  const images = product.images || [];
  const colors = product.colors || [];
  const color = ci != null ? colors[ci] : null;
  const cat = categories.find((c) => c.slug === product.category_slug);
  const related = products.filter((p) => p.category_slug === product.category_slug && p.id !== product.id).slice(0, 4);
  const features = (lang === 'ar' ? product.features_ar : product.features_en) || [];
  const needsColor = colors.length > 1 && !color;

  const pickColor = (i) => {
    setCi(i);
    setHint(false);
    const idx = images.indexOf(colors[i].image);
    if (idx >= 0) setMi(idx);
  };

  const add = (open) => {
    if (needsColor) {
      setHint(true);
      swRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    addToCart(product.id, color ? color.name_en : '', qty);
    if (open) setCartOpen(true);
  };

  const orderWa = () => {
    if (needsColor) {
      setHint(true);
      swRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const msg = [
      isAr ? 'أهلًا، عايز أطلب:' : 'Hello, I would like to order:',
      `• ${tr(product, 'name')}${color ? ` (${isAr ? color.name_ar : color.name_en})` : ''} × ${qty}`,
      `${t.total}: ${money(product.price * qty)}`,
      url,
    ].join('\n');
    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <div className="page-head page-head-sm">
        <div className="container">
          <div className="crumbs">
            <Link href="/">{t.home}</Link> / <Link href="/shop">{t.shop}</Link>
            {cat && <> / <Link href={`/shop?cat=${cat.slug}`}>{tr(cat, 'name')}</Link></>}
          </div>
        </div>
      </div>
      <section className="section section-tight">
        <div className="container pdp">
          <div className="pdp-gallery">
            <div className="pdp-main">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images[mi]} alt={tr(product, 'name')} width="900" height="900" />
              {product.old_price && <span className="pbadge sale">{t.off(money(product.old_price - product.price))}</span>}
            </div>
            {images.length > 1 && (
              <div className="pdp-thumbs" role="group" aria-label="images">
                {images.map((src, i) => (
                  <button key={src} className={i === mi ? 'on' : ''} onClick={() => setMi(i)} aria-label={`${i + 1}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" width="72" height="72" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pdp-info">
            {cat && <Link href={`/shop?cat=${cat.slug}`} className="pc-cat">{tr(cat, 'name')}</Link>}
            <h1>{tr(product, 'name')}</h1>
            <div className="price-row price-row-lg">
              <span className="price">{money(product.price)}</span>
              {product.old_price && <span className="old">{money(product.old_price)}</span>}
            </div>
            <p className="pdp-desc">{tr(product, 'desc')}</p>
            {features.length > 0 && (
              <ul className="pdp-features">{features.map((f) => <li key={f}>{f}</li>)}</ul>
            )}

            {colors.length > 0 && (
              <div ref={swRef}>
                <div className="pdp-label">
                  {t.color}: <span>{color ? (isAr ? color.name_ar : color.name_en) : '—'}</span>
                </div>
                <div className="swatches swatches-lg" role="group" aria-label={t.color}>
                  {colors.map((c, i) => (
                    <Swatch key={c.name_en} color={c} label={isAr ? c.name_ar : c.name_en} on={i === ci} onClick={() => pickColor(i)} />
                  ))}
                </div>
                {hint && <p className="err" role="alert">{t.pickColorHint}</p>}
              </div>
            )}

            <div className="pdp-buy">
              <div className="qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="-">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="+">+</button>
              </div>
              <button className="btn btn-coral" onClick={() => add(true)}>{t.addToCart}</button>
            </div>
            <button className="btn btn-wa btn-block" onClick={orderWa}>
              <span className="wa-ico">{Social.whatsapp}</span>{t.orderWa}
            </button>

            <ul className="pdp-notes">
              <li><span>{Ico.truck}</span>{t.shipNote}</li>
              <li><span>{Ico.wallet}</span>{t.payNote}</li>
            </ul>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section section-paper">
          <div className="container">
            <SectionHead title={t.related} />
            <div className="grid">{related.map((p) => <ProductCard key={p.id} product={p} categories={categories} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}

'use client';
import Link from 'next/link';
import { useStore } from './Providers';
import { Ico } from './Icons';
import { useCatalog } from '@/lib/useCatalog';
import { config } from '@/lib/config';

export function useCartLines() {
  const { cart } = useStore();
  const { products } = useCatalog();
  const lines = cart
    .map((x) => {
      const product = products.find((p) => p.id === x.id);
      if (!product) return null;
      const color = (product.colors || []).find((c) => c.name_en === x.color) || null;
      return { ...x, product, colorObj: color, image: color?.image || product.images?.[0] };
    })
    .filter(Boolean);
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
  const free = lines.length === 0 || subtotal >= config.freeShippingFrom;
  const fee = config.shippingFee;
  const shipping = free ? 0 : fee ?? null; // null = يتحدد عند التأكيد
  return { lines, subtotal, free, shipping, total: subtotal + (shipping || 0) };
}

export default function CartDrawer() {
  const { t, tr, isAr, money, cartOpen, setCartOpen, setQty, removeItem } = useStore();
  const { lines, subtotal, free, shipping, total } = useCartLines();
  if (!cartOpen) return null;

  const left = Math.max(0, config.freeShippingFrom - subtotal);
  const pct = Math.min(100, (subtotal / config.freeShippingFrom) * 100);

  return (
    <>
      <div className="overlay" onClick={() => setCartOpen(false)} />
      <aside className="drawer" role="dialog" aria-label={t.cart}>
        <div className="drawer-head">
          <h3>{t.cart}</h3>
          <button className="icon-btn" onClick={() => setCartOpen(false)} aria-label={t.close}>{Ico.close}</button>
        </div>
        <div className="drawer-body">
          {lines.length === 0 ? (
            <div className="empty">
              <p>{t.emptyCart}</p>
              <Link href="/shop" className="btn btn-coral" onClick={() => setCartOpen(false)}>{t.continueShopping}</Link>
            </div>
          ) : (
            <>
              <div className="ship-bar">
                {free ? t.freeShipDone : t.freeShipProgress(money(left))}
                <i><b style={{ width: `${pct}%` }} /></i>
              </div>
              {lines.map((l) => (
                <div className="citem" key={l.id + l.color}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.image} alt={tr(l.product, 'name')} width="76" height="76" />
                  <div>
                    <h4>{tr(l.product, 'name')}</h4>
                    {l.colorObj && <small>{t.color}: {isAr ? l.colorObj.name_ar : l.colorObj.name_en}</small>}
                    <div className="crow">
                      <div className="qty">
                        <button onClick={() => setQty(l.id, l.color, l.qty - 1)} aria-label="-">−</button>
                        <span>{l.qty}</span>
                        <button onClick={() => setQty(l.id, l.color, l.qty + 1)} aria-label="+">+</button>
                      </div>
                      <strong>{money(l.product.price * l.qty)}</strong>
                    </div>
                    <button className="link-danger" onClick={() => removeItem(l.id, l.color)}>{t.remove}</button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        {lines.length > 0 && (
          <div className="drawer-foot">
            <div className="line"><span>{t.subtotal}</span><span>{money(subtotal)}</span></div>
            <div className="line"><span>{t.shipping}</span><span>{free ? t.free : shipping == null ? t.shipLater : money(shipping)}</span></div>
            <div className="line total"><span>{t.total}</span><span>{money(total)}</span></div>
            <Link href="/checkout" className="btn btn-coral btn-block" onClick={() => setCartOpen(false)}>{t.checkout}</Link>
          </div>
        )}
      </aside>
    </>
  );
}

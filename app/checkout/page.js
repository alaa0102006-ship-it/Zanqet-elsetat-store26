'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/components/Providers';
import { useCartLines } from '@/components/CartDrawer';
import { governorates } from '@/lib/i18n';
import { supabase } from '@/lib/supabase';
import { config } from '@/lib/config';

export default function Checkout() {
  const { t, tr, isAr, lang, money, clearCart } = useStore();
  const { lines, subtotal, free, shipping, total } = useCartLines();
  const [f, setF] = useState({ name: '', phone: '', gov: '', address: '', notes: '' });
  const [pay, setPay] = useState('cod');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const colorName = (l) => (l.colorObj ? (isAr ? l.colorObj.name_ar : l.colorObj.name_en) : '');
  const shipText = free ? t.free : shipping == null ? t.shipLater : money(shipping);

  const submit = async (e) => {
    e.preventDefault();
    if (!f.name.trim() || !/^[0-9+\s-]{10,15}$/.test(f.phone.trim()) || !f.gov || !f.address.trim()) {
      setErr(t.required);
      return;
    }
    setErr('');
    setBusy(true);

    // 1) حفظ الطلب في Supabase (لو مربوط)
    if (supabase) {
      try {
        await supabase.from('orders').insert({
          customer_name: f.name, phone: f.phone, governorate: f.gov, address: f.address, notes: f.notes,
          payment_method: pay,
          items: lines.map((l) => ({ id: l.id, name: l.product.name_ar, color: l.colorObj?.name_ar || '', qty: l.qty, price: l.product.price })),
          subtotal, shipping: shipping || 0, total, status: 'new',
        });
      } catch (e) {}
    }

    // 2) فتح واتساب برسالة الطلب
    const payName = pay === 'cod' ? t.cod : pay === 'vodafone' ? t.vodafone : t.instapay;
    const msg = [
      `🛍️ ${isAr ? 'طلب جديد' : 'New order'} — ${config.name[lang]}`,
      '',
      ...lines.map((l) => `• ${tr(l.product, 'name')}${colorName(l) ? ` (${colorName(l)})` : ''} × ${l.qty} = ${money(l.product.price * l.qty)}`),
      '',
      `${t.subtotal}: ${money(subtotal)}`,
      `${t.shipping}: ${shipText}`,
      `${t.total}: ${money(total)}${!free && shipping == null ? (isAr ? ' + الشحن' : ' + shipping') : ''}`,
      `${t.payment}: ${payName}`,
      '',
      `${t.fullName}: ${f.name}`,
      `${t.phone}: ${f.phone}`,
      `${t.governorate}: ${f.gov}`,
      `${t.address}: ${f.address}`,
      f.notes ? `${t.notes}: ${f.notes}` : '',
    ].filter((x) => x !== '').join('\n');

    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    clearCart();
    setBusy(false);
    setDone(true);
  };

  if (done) {
    return (
      <section className="section"><div className="container thanks">
        <div className="thanks-ico">✓</div>
        <h2>{t.orderDone}</h2>
        <Link href="/shop" className="btn btn-coral">{t.continueShopping}</Link>
      </div></section>
    );
  }

  if (lines.length === 0) {
    return (
      <section className="section"><div className="container empty">
        <p>{t.emptyCart}</p>
        <Link href="/shop" className="btn btn-coral">{t.continueShopping}</Link>
      </div></section>
    );
  }

  const opts = [
    { k: 'cod', title: t.cod, hint: t.payHintCod },
    { k: 'vodafone', title: t.vodafone, hint: t.payHintVodafone(config.vodafoneCash) },
    { k: 'instapay', title: t.instapay, hint: t.payHintInsta(config.instapay) },
  ];

  return (
    <>
      <div className="page-head"><div className="container"><h1>{t.checkout}</h1></div></div>
      <section className="section section-tight">
        <form className="container checkout" onSubmit={submit} noValidate>
          <div className="card">
            <h3>{t.orderDetails}</h3>
            <div className="form">
              <div className="form-2">
                <div className="field"><label htmlFor="f-name">{t.fullName} *</label><input id="f-name" value={f.name} onChange={set('name')} autoComplete="name" /></div>
                <div className="field"><label htmlFor="f-phone">{t.phone} *</label><input id="f-phone" value={f.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" dir="ltr" style={{ textAlign: isAr ? 'right' : 'left' }} /></div>
              </div>
              <div className="field">
                <label htmlFor="f-gov">{t.governorate} *</label>
                <select id="f-gov" value={f.gov} onChange={set('gov')}>
                  <option value="">—</option>
                  {governorates[lang].map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div className="field"><label htmlFor="f-addr">{t.address} *</label><textarea id="f-addr" value={f.address} onChange={set('address')} /></div>
              <div className="field"><label htmlFor="f-notes">{t.notes}</label><textarea id="f-notes" value={f.notes} onChange={set('notes')} /></div>
            </div>

            <h3 className="mt">{t.payment}</h3>
            <div className="pay-opts">
              {opts.map((o) => (
                <label key={o.k} className={`pay ${pay === o.k ? 'on' : ''}`}>
                  <input type="radio" name="pay" checked={pay === o.k} onChange={() => setPay(o.k)} />
                  <div><strong>{o.title}</strong><small>{o.hint}</small></div>
                </label>
              ))}
            </div>
          </div>

          <div className="card card-sticky">
            <h3>{t.orderSummary}</h3>
            {lines.map((l) => (
              <div className="sum-item" key={l.id + l.color}>
                <div>{tr(l.product, 'name')} × {l.qty}{colorName(l) && <small>{t.color}: {colorName(l)}</small>}</div>
                <strong>{money(l.product.price * l.qty)}</strong>
              </div>
            ))}
            <div className="line mt-s"><span>{t.subtotal}</span><span>{money(subtotal)}</span></div>
            <div className="line"><span>{t.shipping}</span><span>{shipText}</span></div>
            <div className="line total"><span>{t.total}</span><span>{money(total)}</span></div>
            {err && <p className="err" role="alert">{err}</p>}
            <button className="btn btn-coral btn-block mt-s" disabled={busy} type="submit">{t.placeOrder}</button>
          </div>
        </form>
      </section>
    </>
  );
}

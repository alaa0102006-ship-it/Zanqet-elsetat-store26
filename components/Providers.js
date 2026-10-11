'use client';
import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { dict } from '@/lib/i18n';
import { config } from '@/lib/config';

const Ctx = createContext(null);
export const useStore = () => useContext(Ctx);

// السلة: [{id, color (اسم اللون بالإنجليزي أو ''), qty}]
export default function Providers({ children }) {
  const [lang, setLang] = useState('ar');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const l = localStorage.getItem('zes_lang');
      if (l === 'ar' || l === 'en') setLang(l);
      const c = JSON.parse(localStorage.getItem('zes_cart') || '[]');
      if (Array.isArray(c)) setCart(c.filter((x) => x && typeof x.id === 'string' && x.qty > 0));
    } catch (e) {}
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('zes_lang', lang); } catch (e) {}
  }, [lang]);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem('zes_cart', JSON.stringify(cart)); } catch (e) {}
  }, [cart, ready]);

  const addToCart = useCallback((id, color, qty = 1) => {
    setCart((prev) => {
      const i = prev.findIndex((x) => x.id === id && x.color === color);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { id, color, qty }];
    });
  }, []);

  const setQty = useCallback((id, color, qty) => {
    setCart((prev) => prev.map((x) => (x.id === id && x.color === color ? { ...x, qty } : x)).filter((x) => x.qty > 0));
  }, []);

  const removeItem = useCallback((id, color) => {
    setCart((prev) => prev.filter((x) => !(x.id === id && x.color === color)));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const value = useMemo(() => {
    const t = dict[lang];
    const isAr = lang === 'ar';
    return {
      lang,
      isAr,
      setLang,
      toggleLang: () => setLang((l) => (l === 'ar' ? 'en' : 'ar')),
      t,
      tr: (obj, key) => (obj ? obj[`${key}_${lang}`] ?? obj[key] : ''),
      money: (n) => `${Number(n).toLocaleString('en-US')} ${config.currency[lang]}`,
      cart,
      cartCount: cart.reduce((s, x) => s + x.qty, 0),
      cartOpen,
      setCartOpen,
      addToCart,
      setQty,
      removeItem,
      clearCart,
    };
  }, [lang, cart, cartOpen, addToCart, setQty, removeItem, clearCart]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

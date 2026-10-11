'use client';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { categories as seedCats, products as seedProds } from './data';

// بيجيب الأقسام والمنتجات من Supabase لو مربوط وفيه منتجات، وإلا بيستخدم lib/products.js
export function useCatalog() {
  const [state, setState] = useState({ categories: seedCats, products: seedProds });

  useEffect(() => {
    if (!supabase) return;
    let alive = true;
    (async () => {
      const [c, p] = await Promise.all([
        supabase.from('categories').select('*').order('sort'),
        supabase.from('products').select('*').eq('active', true).order('created_at', { ascending: false }),
      ]);
      if (!alive || c.error || p.error) return;
      if (p.data && p.data.length) {
        setState({ categories: c.data && c.data.length ? c.data : seedCats, products: p.data });
      }
    })();
    return () => { alive = false; };
  }, []);

  return state;
}

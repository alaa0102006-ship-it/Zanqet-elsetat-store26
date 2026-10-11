'use client';
import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useStore } from '@/components/Providers';
import ProductCard from '@/components/ProductCard';
import { useCatalog } from '@/lib/useCatalog';

function Shop() {
  const { t, tr } = useStore();
  const { categories, products } = useCatalog();
  const sp = useSearchParams();
  const cat = sp.get('cat') || '';
  const filter = sp.get('filter') || '';
  const q = (sp.get('q') || '').trim().toLowerCase();
  const [sort, setSort] = useState('default');

  const mains = categories.filter((c) => !c.parent_slug).sort((a, b) => a.sort - b.sort);
  const current = categories.find((c) => c.slug === cat);
  const children = categories.filter((c) => c.parent_slug === cat).sort((a, b) => a.sort - b.sort);
  const parent = current?.parent_slug ? categories.find((c) => c.slug === current.parent_slug) : null;
  const siblings = parent ? categories.filter((c) => c.parent_slug === parent.slug).sort((a, b) => a.sort - b.sort) : [];
  const chips = children.length ? children : siblings;

  const list = useMemo(() => {
    let l = products;
    if (cat) {
      const slugs = [cat, ...categories.filter((c) => c.parent_slug === cat).map((c) => c.slug)];
      l = l.filter((p) => slugs.includes(p.category_slug));
    }
    if (filter === 'new') l = l.filter((p) => p.is_new);
    if (filter === 'best') l = l.filter((p) => p.is_best);
    if (filter === 'offers') l = l.filter((p) => p.old_price || p.is_offer);
    if (q) l = l.filter((p) => `${p.name_ar} ${p.name_en}`.toLowerCase().includes(q));
    l = [...l];
    if (sort === 'low') l.sort((a, b) => a.price - b.price);
    if (sort === 'high') l.sort((a, b) => b.price - a.price);
    return l;
  }, [products, categories, cat, filter, q, sort]);

  const title = current ? tr(current, 'name') : filter === 'new' ? t.newArrivals : filter === 'best' ? t.bestSellers : filter === 'offers' ? t.offersTitle : q ? `“${sp.get('q')}”` : t.shop;

  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="crumbs"><Link href="/">{t.home}</Link> / <Link href="/shop">{t.shop}</Link>{parent ? <> / <Link href={`/shop?cat=${parent.slug}`}>{tr(parent, 'name')}</Link></> : null}</div>
          <h1>{title}</h1>
        </div>
      </div>
      <section className="section section-tight">
        <div className="container">
          <div className="shop-bar">
            <Link href="/shop" className={`chip ${!cat && !filter && !q ? 'on' : ''}`}>{t.all}</Link>
            {mains.map((c) => (
              <Link key={c.slug} href={`/shop?cat=${c.slug}`} className={`chip ${cat === c.slug || parent?.slug === c.slug ? 'on' : ''}`}>{tr(c, 'name')}</Link>
            ))}
          </div>
          {chips.length > 0 && (
            <div className="shop-bar shop-bar-sub">
              {chips.map((c) => (
                <Link key={c.slug} href={`/shop?cat=${c.slug}`} className={`chip chip-sm ${cat === c.slug ? 'on' : ''}`}>{tr(c, 'name')}</Link>
              ))}
            </div>
          )}
          <div className="shop-meta">
            <span>{t.results(list.length)}</span>
            <select className="sort" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="sort">
              <option value="default">{t.sortDefault}</option>
              <option value="low">{t.sortLow}</option>
              <option value="high">{t.sortHigh}</option>
            </select>
          </div>
          {list.length === 0 ? (
            <p className="empty">{t.noResults}</p>
          ) : (
            <div className="grid">{list.map((p, i) => <ProductCard key={p.id} product={p} categories={categories} index={i} />)}</div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <Shop />
    </Suspense>
  );
}

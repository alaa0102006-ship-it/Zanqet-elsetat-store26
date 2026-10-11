'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from './Providers';
import Logo from './Logo';
import { Ico, Social } from './Icons';
import { useCatalog } from '@/lib/useCatalog';
import { config } from '@/lib/config';

export default function Header() {
  const { t, tr, toggleLang, cartCount, setCartOpen } = useStore();
  const { categories } = useCatalog();
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState('');

  const mains = categories.filter((c) => !c.parent_slug).sort((a, b) => a.sort - b.sort);
  const subsOf = (slug) => categories.filter((c) => c.parent_slug === slug).sort((a, b) => a.sort - b.sort);

  const links = [
    { href: '/', label: t.home },
    { href: '/shop', label: t.shop },
    { href: '/shop?filter=new', label: t.newArrivals },
    { href: '/shop?filter=offers', label: t.offers },
    { href: '/#contact', label: t.contact },
  ];

  const submit = (e) => {
    e.preventDefault();
    router.push(`/shop?q=${encodeURIComponent(q.trim())}`);
    setSearchOpen(false);
  };
  const go = () => setMenu(false);

  return (
    <>
      <div className="topbar">{t.topbar}</div>
      <header className="header">
        <div className="container header-in">
          <button className="menu-btn" onClick={() => setMenu(true)} aria-label={t.menu}>
            {Ico.menu}<span>{t.menu}</span>
          </button>
          <Logo />
          <nav className="nav" aria-label="main">
            {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </nav>
          <div className="hactions">
            <button className="icon-btn" onClick={() => setSearchOpen((v) => !v)} aria-label="search">{Ico.search}</button>
            <button className="lang-btn" onClick={toggleLang}>{t.lang}</button>
            <button className="icon-btn" onClick={() => setCartOpen(true)} aria-label={t.cart}>
              {Ico.bag}
              {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="searchbar">
            <form className="container" onSubmit={submit}>
              <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.search} aria-label={t.search} />
              <button className="btn btn-coral" type="submit">{Ico.search}</button>
            </form>
          </div>
        )}
      </header>

      {menu && (
        <>
          <div className="overlay" onClick={go} />
          <aside className="sidemenu" role="dialog" aria-label={t.menu}>
            <div className="sidemenu-head">
              <Logo height={46} />
              <button className="icon-btn" onClick={go} aria-label={t.close}>{Ico.close}</button>
            </div>
            <div className="sidemenu-body">
              <Link href="/" onClick={go} className="sm-link">{t.home}</Link>
              <Link href="/shop" onClick={go} className="sm-link">{t.shop}</Link>
              <div className="sm-title">{t.categories}</div>
              {mains.map((c) => (
                <div key={c.slug}>
                  <Link href={`/shop?cat=${c.slug}`} onClick={go} className="sm-link">{tr(c, 'name')}</Link>
                  {subsOf(c.slug).map((s) => (
                    <Link key={s.slug} href={`/shop?cat=${s.slug}`} onClick={go} className="sm-link sm-sub">{tr(s, 'name')}</Link>
                  ))}
                </div>
              ))}
              <div className="sm-title">&nbsp;</div>
              <Link href="/shop?filter=new" onClick={go} className="sm-link">{t.newArrivals}</Link>
              <Link href="/shop?filter=best" onClick={go} className="sm-link">{t.bestSellers}</Link>
              <Link href="/shop?filter=offers" onClick={go} className="sm-link">{t.offers}</Link>
              <button className="sm-link sm-lang" onClick={() => { toggleLang(); go(); }}>{t.lang}</button>
              <a className="btn btn-wa btn-block" href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer">
                <span className="wa-ico">{Social.whatsapp}</span>{t.whatsapp} · {config.phoneDisplay}
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

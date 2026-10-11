'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from './Providers';
import { Ico, Social } from './Icons';
import { config } from '@/lib/config';

// شريط سفلي على الموبايل (زي Era Care)
export default function BottomNav() {
  const { t, cartCount, setCartOpen } = useStore();
  const path = usePathname();
  return (
    <nav className="bnav" aria-label="quick">
      <Link href="/shop" className={path.startsWith('/shop') ? 'on' : ''}>{Ico.store}<span>{t.shop}</span></Link>
      <button onClick={() => setCartOpen(true)}>
        <span className="bnav-ico">{Ico.bag}{cartCount > 0 && <i>{cartCount}</i>}</span>
        <span>{t.cart}</span>
      </button>
      <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer" className="bnav-wa">
        <span className="bnav-ico bnav-wa-ico">{Social.whatsapp}</span><span>{t.whatsapp}</span>
      </a>
      <Link href="/" className={path === '/' ? 'on' : ''}>{Ico.home}<span>{t.home}</span></Link>
    </nav>
  );
}

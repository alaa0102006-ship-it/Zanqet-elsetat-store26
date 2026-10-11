'use client';
import Link from 'next/link';
import { useStore } from './Providers';
import Logo from './Logo';
import { Social } from './Icons';
import { useCatalog } from '@/lib/useCatalog';
import { config } from '@/lib/config';

export default function Footer() {
  const { t, tr, isAr } = useStore();
  const { categories } = useCatalog();
  const mains = categories.filter((c) => !c.parent_slug).sort((a, b) => a.sort - b.sort);
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo"><Logo height={64} /></div>
          <p>{t.footerAbout}</p>
          <div className="socials">
            <a href={config.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">{Social.facebook}</a>
            <a href={config.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">{Social.instagram}</a>
            <a href={config.social.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">{Social.tiktok}</a>
            <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">{Social.whatsapp}</a>
          </div>
        </div>
        <div>
          <h4>{t.quickLinks}</h4>
          <ul>
            <li><Link href="/">{t.home}</Link></li>
            <li><Link href="/shop">{t.shop}</Link></li>
            <li><Link href="/shop?filter=new">{t.newArrivals}</Link></li>
            <li><Link href="/shop?filter=best">{t.bestSellers}</Link></li>
            <li><Link href="/shop?filter=offers">{t.offers}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t.categories}</h4>
          <ul>
            {mains.map((c) => <li key={c.slug}><Link href={`/shop?cat=${c.slug}`}>{tr(c, 'name')}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4>{t.callUs}</h4>
          <a className="footer-phone" href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer" dir="ltr">{config.phoneDisplay}</a>
          <div className="map"><iframe src={config.mapEmbed} loading="lazy" title="map" /></div>
          <a href={config.mapLink} target="_blank" rel="noreferrer" className="footer-map-link">
            📍 {config.address[isAr ? 'ar' : 'en']} — {t.openMap}
          </a>
          <p className="footer-pay">{t.payMethods}: {t.vodafone} · {t.instapay} · {t.cod}</p>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} {t.byName}. {t.rights}.</div>
    </footer>
  );
}

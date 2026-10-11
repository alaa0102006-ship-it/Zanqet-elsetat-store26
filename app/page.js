'use client';
import Link from 'next/link';
import { useStore } from '@/components/Providers';
import Hero from '@/components/Hero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import Logo from '@/components/Logo';
import { Ico, Social } from '@/components/Icons';
import { useCatalog } from '@/lib/useCatalog';
import { categoryCovers } from '@/lib/data';
import { reviews } from '@/lib/reviews';
import { config } from '@/lib/config';

function Marquee({ items }) {
  // الشريط بيتكرر عشان الحركة تفضل متصلة على أي عرض شاشة
  const set = [...items, ...items, ...items, ...items];
  return (
    <div className="strip" aria-label={items.join(' • ')}>
      <div className="strip-track" aria-hidden="true">
        {[0, 1].map((k) => (
          <div className="strip-set" key={k}>
            {set.map((s, n) => <span key={`${k}-${n}`}>{s}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { t, tr, isAr } = useStore();
  const { categories, products } = useCatalog();

  const mains = categories.filter((c) => !c.parent_slug).sort((a, b) => a.sort - b.sort);
  const subs = categories.filter((c) => c.parent_slug === 'bags').sort((a, b) => a.sort - b.sort);
  const slugsOf = (slug) => [slug, ...categories.filter((c) => c.parent_slug === slug).map((c) => c.slug)];
  const countIn = (slug) => products.filter((p) => slugsOf(slug).includes(p.category_slug)).length;
  const coverOf = (c) => categoryCovers[c.slug] || products.find((p) => slugsOf(c.slug).includes(p.category_slug))?.images?.[0];

  const newest = products.filter((p) => p.is_new).slice(0, 8);
  const best = products.filter((p) => p.is_best).slice(0, 4);
  const offers = products.filter((p) => p.old_price || p.is_offer);
  const all = products.slice(0, 8);
  const icons = [Ico.medal, Ico.gem, Ico.truck, Ico.wallet];
  const grid = (list, pri) => <div className="grid">{list.map((p, i) => <ProductCard key={p.id} product={p} categories={categories} priority={pri && i < 2} index={i} />)}</div>;

  return (
    <>
      <Hero />
      <Marquee items={t.marquee} />

      <section className="section">
        <div className="container">
          <SectionHead title={t.browse} sub={t.browseSub} />
          <div className="circles">
            {mains.map((c, ci) => {
              const n = countIn(c.slug);
              const cover = coverOf(c);
              return (
                <Reveal as="div" key={c.slug} delay={ci * 90} className="circle-wrap"><Link href={n ? `/shop?cat=${c.slug}` : '/shop'} className={`circle ${n ? '' : 'circle-soon'}`}>
                  <span className="circle-img">
                    {cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={cover} alt="" width="400" height="400" loading="lazy" decoding="async" />
                    ) : (
                      <span className="circle-logo"><Logo height={64} link={false} /></span>
                    )}
                  </span>
                  <span className="circle-name">{tr(c, 'name')}</span>
                  <span className="circle-count">{n ? `${n} ${t.items}` : t.soon}</span>
                </Link></Reveal>
              );
            })}
          </div>
          {subs.length > 0 && (
            <div className="groups">
              <h3>{t.bagGroups}</h3>
              <div className="chips">
                {subs.map((c) => (
                  <Link key={c.slug} href={`/shop?cat=${c.slug}`} className="chip chip-img">
                    {coverOf(c) && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={coverOf(c)} alt="" width="44" height="44" loading="lazy" />
                    )}
                    <span>{tr(c, 'name')}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section section-card">
        <div className="container">
          <SectionHead title={t.whyTitle} />
          <div className="why">
            {t.why.map((w, i) => (
              <Reveal className="why-card" key={w.t} delay={i * 100}>
                <span className="why-ico">{icons[i]}</span>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {newest.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead kicker={t.newK} title={t.newArrivals} sub={t.newArrivalsSub} />
            {grid(newest, true)}
            <div className="sec-foot"><Link href="/shop?filter=new" className="btn btn-outline">{t.viewAll}</Link></div>
          </div>
        </section>
      )}

      {best.length > 0 && (
        <section className="section section-paper">
          <div className="container">
            <SectionHead kicker={t.bestK} title={t.bestSellers} sub={t.bestSellersSub} />
            {grid(best)}
            <div className="sec-foot"><Link href="/shop?filter=best" className="btn btn-outline">{t.viewAll}</Link></div>
          </div>
        </section>
      )}

      {offers.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead kicker={t.offersK} title={t.offersTitle} sub={t.offersSub} />
            <div className="band">
              <div>
                <h3>{t.offerBand}</h3>
                <p>{t.offerBandSub}</p>
              </div>
              <Link href="/shop" className="btn btn-rose">{t.heroCta}</Link>
            </div>
            {grid(offers)}
          </div>
        </section>
      )}

      <section className="section section-paper">
        <div className="container">
          <SectionHead kicker={t.ourK} title={t.ourProducts} sub={t.ourProductsSub} />
          {grid(all)}
          <div className="sec-foot"><Link href="/shop" className="btn btn-coral">{t.viewAll}</Link></div>
        </div>
      </section>

      {config.videoUrl && (
        <section className="section">
          <div className="container">
            <SectionHead title={t.videoTitle} />
            <div className="video-wrap"><video src={config.videoUrl} controls playsInline preload="metadata" /></div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHead title={t.reviews} sub={t.reviewsSub} />
          {reviews.length > 0 ? (
            <div className="reviews">
              {reviews.map((r, i) => (
                <div className="review" key={i}>
                  <div className="stars" aria-label={`${r.stars}/5`}>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
                  <p>{r.text}</p>
                  <strong>{r.name}</strong>
                </div>
              ))}
            </div>
          ) : (
            <div className="review-empty">
              <h3>{t.reviewsEmptyT}</h3>
              <p>{t.reviewsEmptyD}</p>
              <a className="btn btn-wa" href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer">
                <span className="wa-ico">{Social.whatsapp}</span>{t.reviewsEmptyCta}
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

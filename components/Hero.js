'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useStore } from './Providers';
import { Ico } from './Icons';

export default function Hero() {
  const { t, isAr } = useStore();
  const slides = t.slides;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touch = useRef(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const go = (d) => setI((v) => (v + d + slides.length) % slides.length);
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    touch.current = null;
    if (Math.abs(dx) > 45) go((isAr ? dx > 0 : dx < 0) ? 1 : -1); // في RTL السلايد التالي على الشمال
  };

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      <div className="container hero-stage">
        {slides.map((s, idx) => (
          <div key={s.href} className={`hero-slide ${idx === i ? 'on' : ''}`} aria-hidden={idx !== i}>
            <div className="hero-text">
              <h1>{s.h}</h1>
              <p>{s.p}</p>
              <Link href={s.href} className="btn btn-rose" tabIndex={idx === i ? 0 : -1}>{s.cta}</Link>
            </div>
            <div className="hero-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt="" width="900" height="900" loading={idx === 0 ? 'eager' : 'lazy'} decoding="async" />
            </div>
          </div>
        ))}
        <button className="hero-arrow prev" onClick={() => go(-1)} aria-label="prev">{isAr ? Ico.chevR : Ico.chevL}</button>
        <button className="hero-arrow next" onClick={() => go(1)} aria-label="next">{isAr ? Ico.chevL : Ico.chevR}</button>
      </div>
      <div className="hero-dots">
        {slides.map((s, idx) => (
          <button key={s.href} className={idx === i ? 'on' : ''} onClick={() => setI(idx)} aria-label={`slide ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}

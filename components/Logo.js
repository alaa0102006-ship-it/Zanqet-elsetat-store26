'use client';
import Link from 'next/link';
import { useStore } from './Providers';
import { config } from '@/lib/config';

export default function Logo({ height = 56, link = true }) {
  const { isAr } = useStore();
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.webp" alt={config.name[isAr ? 'ar' : 'en']} height={height} width={Math.round(height * 1.26)} style={{ height, width: 'auto' }} />
  );
  if (!link) return <span className="logo">{img}</span>;
  return (
    <Link href="/" className="logo" aria-label={config.name[isAr ? 'ar' : 'en']}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.webp" alt={config.name[isAr ? 'ar' : 'en']} height={height} width={Math.round(height * 1.26)} style={{ height, width: 'auto' }} />
    </Link>
  );
}

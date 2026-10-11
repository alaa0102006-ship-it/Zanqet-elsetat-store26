'use client';
import { useStore } from './Providers';
import { Social } from './Icons';
import { config } from '@/lib/config';

export default function WhatsAppFloat() {
  const { t } = useStore();
  return (
    <a className="wa" href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer" aria-label={t.whatsapp}>
      {Social.whatsapp}
    </a>
  );
}

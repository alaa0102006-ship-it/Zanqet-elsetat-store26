const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Ico = {
  search: (<svg viewBox="0 0 24 24" {...S}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>),
  bag: (<svg viewBox="0 0 24 24" {...S}><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>),
  menu: (<svg viewBox="0 0 24 24" {...S}><path d="M4 7h16M4 12h16M4 17h16" /></svg>),
  close: (<svg viewBox="0 0 24 24" {...S}><path d="M6 6l12 12M18 6L6 18" /></svg>),
  home: (<svg viewBox="0 0 24 24" {...S}><path d="M4 11l8-7 8 7" /><path d="M6 10v10h12V10" /><path d="M10 20v-6h4v6" /></svg>),
  store: (<svg viewBox="0 0 24 24" {...S}><path d="M4 9l1.5-5h13L20 9" /><path d="M4 9h16v2a2.7 2.7 0 0 1-5.3 0 2.7 2.7 0 0 1-5.4 0A2.7 2.7 0 0 1 4 11V9z" /><path d="M5 13.5V20h14v-6.5" /></svg>),
  chevL: (<svg viewBox="0 0 24 24" {...S} strokeWidth="2.4"><path d="M15 5l-7 7 7 7" /></svg>),
  chevR: (<svg viewBox="0 0 24 24" {...S} strokeWidth="2.4"><path d="M9 5l7 7-7 7" /></svg>),
  chevD: (<svg viewBox="0 0 24 24" {...S} strokeWidth="2.4"><path d="M6 9l6 6 6-6" /></svg>),
  medal: (<svg viewBox="0 0 24 24" {...S}><circle cx="12" cy="9" r="5" /><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" /></svg>),
  gem: (<svg viewBox="0 0 24 24" {...S}><path d="M6 4h12l4 6-10 11L2 10l4-6z" /><path d="M2 10h20M9 4l3 17 3-17" /></svg>),
  truck: (<svg viewBox="0 0 24 24" {...S}><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg>),
  wallet: (<svg viewBox="0 0 24 24" {...S}><rect x="3" y="6" width="18" height="13" rx="3" /><path d="M3 10h18M16 14.5h2" /></svg>),
  check: (<svg viewBox="0 0 24 24" {...S} strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>),
};

export const Social = {
  facebook: (<svg viewBox="0 0 24 24"><path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4C16.3 4.3 15.4 4.2 14.4 4.2c-2.2 0-3.9 1.4-3.9 3.9v2.4H8v3h2.5V21h3z" /></svg>),
  instagram: (<svg viewBox="0 0 24 24"><path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm4.9-2.6a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" /></svg>),
  tiktok: (<svg viewBox="0 0 24 24"><path d="M16.6 3c.3 2.3 1.6 3.7 3.9 3.9v3c-1.4.1-2.7-.3-3.9-1.1v6.1c0 5.4-5.9 7-8.7 3.3-1.8-2.5-.7-6.9 3.9-7.2v3.1c-.4.1-.7.2-1 .3-1 .4-1.5 1.3-1.2 2.3.5 1.7 3.4 2.2 3.8-.4V3h3.2z" /></svg>),
  whatsapp: (<svg viewBox="0 0 24 24"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 6.9 12.3 8.1 8.1 0 0 1-10.9 2.9l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 0 1 12.04 3.8zM8.7 7.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4l-1.9-.9c-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5z" /></svg>),
};

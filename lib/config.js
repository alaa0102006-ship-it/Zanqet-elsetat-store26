// ⚙️ إعدادات المتجر — عدّل القيم دي بس وكل المتجر هيتحدّث
export const config = {
  name: { ar: 'زنقة الستات', en: 'Zanqet El Settat' },
  tagline: { ar: 'أناقتك تكتمل لدينا', en: 'Your elegance is complete with us' },
  since: 2003,

  // واتساب: الرقم بصيغة دولية بدون + ولا أصفار
  whatsapp: '201019080666',
  phoneDisplay: '01019080666',

  // الدفع
  vodafoneCash: '01019080666', // ← غيّره لو رقم فودافون كاش مختلف
  instapay: '', // ← اكتب عنوان إنستا باي هنا (لو فاضي هنطلب من العميل يسأل على واتساب)

  // الشحن
  freeShippingFrom: 1000,
  shippingFee: null, // ← اكتب رقم (مثلًا 60) لو عايز الشحن يتحسب تلقائي، أو سيبه null ويتحدد على واتساب

  currency: { ar: 'ج.م', en: 'EGP' },

  // السوشيال (حط روابط صفحاتك)
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
  },

  // اللوكيشن (غيّره لعنوان المحل)
  address: { ar: 'القاهرة، مصر', en: 'Cairo, Egypt' },
  mapEmbed: 'https://maps.google.com/maps?q=Cairo%20Egypt&t=m&z=11&output=embed',
  mapLink: 'https://maps.google.com/?q=Cairo%20Egypt',

  // فيديو قصير في الصفحة الرئيسية (رابط ملف mp4، اتركه فاضي لو مش عايز القسم)
  videoUrl: '',
};

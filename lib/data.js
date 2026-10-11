// الأقسام الأساسية والمجموعات. المنتجات في products.js
export { products } from './products';

export const categories = [
  { slug: 'kids-bags', name_ar: 'شنط أطفال', name_en: 'Kids Bags', parent_slug: null, sort: 1 },
  { slug: 'bags', name_ar: 'شنط', name_en: 'Bags', parent_slug: null, sort: 2 },
  { slug: 'backpacks', name_ar: 'شنط باك', name_en: 'Backpacks', parent_slug: 'bags', sort: 1 },
  { slug: 'shoulder', name_ar: 'شنط كتف', name_en: 'Shoulder Bags', parent_slug: 'bags', sort: 2 },
  { slug: 'crossbody', name_ar: 'شنط كروس', name_en: 'Crossbody Bags', parent_slug: 'bags', sort: 3 },
  { slug: 'waterproof', name_ar: 'شنط وتربروف', name_en: 'Waterproof Bags', parent_slug: 'bags', sort: 4 },
  { slug: 'mommy', name_ar: 'شنط ماميز', name_en: 'Mommy Bags', parent_slug: 'bags', sort: 5 },
  { slug: 'gym-travel', name_ar: 'شنط جيم وسفر', name_en: 'Gym & Travel Bags', parent_slug: 'bags', sort: 6 },
  { slug: 'natural-style', name_ar: 'شنط ستايل طبيعي', name_en: 'Natural Style Bags', parent_slug: 'bags', sort: 7 },
  { slug: 'wallets', name_ar: 'بوكات ومحافظ', name_en: 'Pouches & Wallets', parent_slug: null, sort: 3 },
  { slug: 'accessories', name_ar: 'إكسسوارات الموضة', name_en: 'Fashion Accessories', parent_slug: null, sort: 4 },
  { slug: 'school-bags', name_ar: 'شنط مدارس وجامعات', name_en: 'School & University Bags', parent_slug: null, sort: 5 },
];

// صورة تمثّل كل قسم (الدوائر في الصفحة الرئيسية). لقسم جديد ضيف سطر هنا بمسار صورة.
export const categoryCovers = {
  'kids-bags': '/p/kids-crossbody/2.webp',
  bags: '/p/embroidered-backpack/1.webp',
  wallets: '/p/long-wallet/1.webp',
  'school-bags': '/p/university-bag/3.webp',
  backpacks: '/p/embroidered-backpack/2.webp',
  shoulder: '/p/designer-tote/1.webp',
  crossbody: '/p/emily-crossbody/2.webp',
  waterproof: '/p/waterproof-crossbody/2.webp',
  mommy: '/p/mommy-bag/3.webp',
  'gym-travel': '/p/gym-travel-bag/1.webp',
  'natural-style': '/p/straw-bag/2.webp',
};

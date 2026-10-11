// بيانات المنتجات (مولّدة من قايمة الأسعار). عدّل الأسعار والأوصاف من هنا، أو من Supabase لو مربوط.
// price = السعر الحالي، old_price = السعر قبل الخصم (لو فيه خصم).
export const products = [
 {
  "id": "girls-wallet",
  "name_ar": "بوك بناتي",
  "name_en": "Girls Flower Wallet",
  "price": 80,
  "old_price": null,
  "category_slug": "wallets",
  "desc_ar": "بوك صغير أنيق بتصميم الزهرة، مناسب للبنات وجيب الشنطة. يتسع للكروت والفلوس الورق.",
  "desc_en": "A small, cute wallet with a flower clasp. Fits cards and bills and slips into any bag.",
  "features_ar": [
   "تصميم زهرة مميز",
   "حجم صغير يناسب الجيب",
   "5 ألوان"
  ],
  "features_en": [
   "Flower clasp design",
   "Compact size",
   "5 colors"
  ],
  "images": [
   "/p/girls-wallet/1.webp",
   "/p/girls-wallet/2.webp",
   "/p/girls-wallet/3.webp"
  ],
  "colors": [
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#F2B8C0",
    "image": "/p/girls-wallet/2.webp"
   },
   {
    "name_ar": "أصفر",
    "name_en": "Yellow",
    "hex": "#F0D36B",
    "image": "/p/girls-wallet/3.webp"
   },
   {
    "name_ar": "أزرق",
    "name_en": "Blue",
    "hex": "#9DBBDA",
    "image": null
   },
   {
    "name_ar": "أخضر مينت",
    "name_en": "Mint",
    "hex": "#A9D3B8",
    "image": null
   },
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": null
   }
  ],
  "is_new": false,
  "is_best": false,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "long-wallet",
  "name_ar": "بوك كبير",
  "name_en": "Large Wallet",
  "price": 200,
  "old_price": null,
  "category_slug": "wallets",
  "desc_ar": "محفظة كبيرة بسوستة وتقسيمات للكروت والفلوس والموبايل الصغير. شكل كلاسيك يليق على أي شنطة.",
  "desc_en": "A large zip wallet with card slots and room for bills and coins. A classic look for every day.",
  "features_ar": [
   "سوستة متينة",
   "أماكن مخصصة للكروت",
   "6 ألوان"
  ],
  "features_en": [
   "Sturdy zipper",
   "Dedicated card slots",
   "6 colors"
  ],
  "images": [
   "/p/long-wallet/1.webp",
   "/p/long-wallet/2.webp",
   "/p/long-wallet/3.webp"
  ],
  "colors": [
   {
    "name_ar": "بني",
    "name_en": "Brown",
    "hex": "#9A5B2C",
    "image": "/p/long-wallet/2.webp"
   },
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": "/p/long-wallet/3.webp"
   },
   {
    "name_ar": "أزرق",
    "name_en": "Blue",
    "hex": "#9DBBE3",
    "image": null
   },
   {
    "name_ar": "أبيض",
    "name_en": "White",
    "hex": "#F4F2EE",
    "image": null
   },
   {
    "name_ar": "بيج",
    "name_en": "Beige",
    "hex": "#D8C3B0",
    "image": null
   },
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#F0B7C0",
    "image": null
   }
  ],
  "is_new": false,
  "is_best": true,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "wallet",
  "name_ar": "بوك محفظة",
  "name_en": "Compact Wallet",
  "price": 150,
  "old_price": null,
  "category_slug": "wallets",
  "desc_ar": "محفظة متوسطة بسوستة وملمس مخطط أنيق. فيها أماكن للكروت وجيب شفاف للهوية.",
  "desc_en": "A mid-size zip wallet with a ribbed finish, card slots and a clear ID window.",
  "features_ar": [
   "جيب شفاف للهوية",
   "سوستة وجيب للعملات",
   "5 ألوان"
  ],
  "features_en": [
   "Clear ID window",
   "Zip coin pocket",
   "5 colors"
  ],
  "images": [
   "/p/wallet/1.webp",
   "/p/wallet/2.webp",
   "/p/wallet/3.webp"
  ],
  "colors": [
   {
    "name_ar": "بني",
    "name_en": "Brown",
    "hex": "#9A5B2C",
    "image": "/p/wallet/2.webp"
   },
   {
    "name_ar": "بيج",
    "name_en": "Beige",
    "hex": "#D8C0A0",
    "image": "/p/wallet/3.webp"
   },
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#E0A0A8",
    "image": null
   },
   {
    "name_ar": "أزرق",
    "name_en": "Blue",
    "hex": "#9FB6D4",
    "image": null
   },
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": null
   }
  ],
  "is_new": false,
  "is_best": true,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "kids-backpack",
  "name_ar": "شنطة أطفال باك",
  "name_en": "Kids Backpack",
  "price": 150,
  "old_price": null,
  "category_slug": "kids-bags",
  "desc_ar": "شنطة ضهر صغيرة للأطفال برسومات كرتون مبهجة. خفيفة ومناسبة للروضة والخروج.",
  "desc_en": "A small backpack for kids with fun cartoon prints. Light enough for nursery and outings.",
  "features_ar": [
   "خفيفة على الطفل",
   "رسومات كرتون",
   "سوستة سهلة الفتح"
  ],
  "features_en": [
   "Light on small shoulders",
   "Cartoon prints",
   "Easy-open zipper"
  ],
  "images": [
   "/p/kids-backpack/1.webp",
   "/p/kids-backpack/2.webp",
   "/p/kids-backpack/3.webp"
  ],
  "colors": [
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#E64C8E",
    "image": "/p/kids-backpack/2.webp"
   },
   {
    "name_ar": "سماوي",
    "name_en": "Sky",
    "hex": "#A7C8E8",
    "image": "/p/kids-backpack/3.webp"
   },
   {
    "name_ar": "بنفسجي",
    "name_en": "Purple",
    "hex": "#B58BD6",
    "image": null
   },
   {
    "name_ar": "تركواز",
    "name_en": "Teal",
    "hex": "#3EB8B0",
    "image": null
   },
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": null
   }
  ],
  "is_new": false,
  "is_best": true,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "kids-crossbody",
  "name_ar": "شنطة أطفال كروس",
  "name_en": "Kids Crossbody Bag",
  "price": 190,
  "old_price": null,
  "category_slug": "kids-bags",
  "desc_ar": "شنطة كروس صغيرة بشكل كابيتونيه لامع وسلسلة. للبنوتة اللي بتحب تكمّل لوكها.",
  "desc_en": "A mini quilted crossbody with a chain strap, made for little girls who love to accessorize.",
  "features_ar": [
   "كابيتونيه لامع",
   "سلسلة وحزام قابل للتعديل",
   "4 ألوان"
  ],
  "features_en": [
   "Glossy quilted finish",
   "Chain strap",
   "4 colors"
  ],
  "images": [
   "/p/kids-crossbody/1.webp",
   "/p/kids-crossbody/2.webp",
   "/p/kids-crossbody/3.webp"
  ],
  "colors": [
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#F2C1C4",
    "image": "/p/kids-crossbody/2.webp"
   },
   {
    "name_ar": "فضي",
    "name_en": "Silver",
    "hex": "#C9CBCE",
    "image": "/p/kids-crossbody/3.webp"
   },
   {
    "name_ar": "ذهبي",
    "name_en": "Gold",
    "hex": "#CFA84D",
    "image": null
   },
   {
    "name_ar": "كريمي",
    "name_en": "Cream",
    "hex": "#EDE0C8",
    "image": null
   }
  ],
  "is_new": false,
  "is_best": false,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "kids-crossbody-2",
  "name_ar": "شنطة أطفال كروس 2",
  "name_en": "Kids Mini Bag",
  "price": 170,
  "old_price": null,
  "category_slug": "kids-bags",
  "desc_ar": "شنطة ميني بيضاوية بإيد وحزام كتف طويل. تشيل الأساسيات وتناسب الخروجات.",
  "desc_en": "A mini oval bag with a top handle and long shoulder strap. Carries the essentials.",
  "features_ar": [
   "إيد وحزام كتف",
   "سوستة",
   "6 ألوان"
  ],
  "features_en": [
   "Handle and shoulder strap",
   "Zip closure",
   "6 colors"
  ],
  "images": [
   "/p/kids-crossbody-2/1.webp",
   "/p/kids-crossbody-2/2.webp",
   "/p/kids-crossbody-2/3.webp"
  ],
  "colors": [
   {
    "name_ar": "بينك",
    "name_en": "Hot pink",
    "hex": "#E94F95",
    "image": "/p/kids-crossbody-2/1.webp"
   },
   {
    "name_ar": "وردي فاتح",
    "name_en": "Light pink",
    "hex": "#F2B6BE",
    "image": "/p/kids-crossbody-2/2.webp"
   },
   {
    "name_ar": "أبيض",
    "name_en": "White",
    "hex": "#F4F2EE",
    "image": "/p/kids-crossbody-2/3.webp"
   },
   {
    "name_ar": "بني",
    "name_en": "Brown",
    "hex": "#9A5B2C",
    "image": null
   },
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": null
   },
   {
    "name_ar": "أحمر",
    "name_en": "Red",
    "hex": "#C0262D",
    "image": null
   }
  ],
  "is_new": true,
  "is_best": false,
  "is_offer": false,
  "badge": "new",
  "video_url": null
 },
 {
  "id": "imported-backpack",
  "name_ar": "شنطة باك مستورد",
  "name_en": "Imported Backpack",
  "price": 750,
  "old_price": null,
  "category_slug": "backpacks",
  "desc_ar": "شنطة باك مستوردة بتصميم عملي، بتتلبس باك أو كتف. فيها حزام عريض مزخرف وجيوب بسوست.",
  "desc_en": "An imported backpack that can be worn on the back or the shoulder, with a decorative wide strap and zip pockets.",
  "features_ar": [
   "باك وكتف في شنطة واحدة",
   "حزام عريض قابل للفك",
   "جيوب بسوست"
  ],
  "features_en": [
   "Backpack and shoulder in one",
   "Detachable wide strap",
   "Zip pockets"
  ],
  "images": [
   "/p/imported-backpack/1.webp",
   "/p/imported-backpack/2.webp",
   "/p/imported-backpack/3.webp"
  ],
  "colors": [],
  "is_new": false,
  "is_best": true,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "embroidered-backpack",
  "name_ar": "شنطة باك وكتف مطرزة",
  "name_en": "Embroidered Backpack",
  "price": 595,
  "old_price": null,
  "category_slug": "backpacks",
  "desc_ar": "شنطة باك وكتف بتطريز زهور وحزام مطرز. بتفتح من ورا للأمان وفيها جيوب جانبية.",
  "desc_en": "A backpack-and-shoulder bag with floral embroidery and a matching strap. Rear-opening for safety, with side pockets.",
  "features_ar": [
   "تطريز زهور",
   "باك أو كتف",
   "جيوب جانبية"
  ],
  "features_en": [
   "Floral embroidery",
   "Backpack or shoulder",
   "Side pockets"
  ],
  "images": [
   "/p/embroidered-backpack/1.webp",
   "/p/embroidered-backpack/2.webp",
   "/p/embroidered-backpack/3.webp",
   "/p/embroidered-backpack/9.webp"
  ],
  "colors": [
   {
    "name_ar": "أزرق",
    "name_en": "Blue",
    "hex": "#A9C7EA",
    "image": "/p/embroidered-backpack/1.webp"
   },
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#F2B5C8",
    "image": "/p/embroidered-backpack/2.webp"
   },
   {
    "name_ar": "أخضر",
    "name_en": "Green",
    "hex": "#A9D5BB",
    "image": "/p/embroidered-backpack/3.webp"
   },
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": null
   },
   {
    "name_ar": "عنابي",
    "name_en": "Burgundy",
    "hex": "#6E1F36",
    "image": null
   },
   {
    "name_ar": "كحلي",
    "name_en": "Navy",
    "hex": "#20305A",
    "image": null
   },
   {
    "name_ar": "بنفسجي",
    "name_en": "Lavender",
    "hex": "#B9A2DB",
    "image": null
   },
   {
    "name_ar": "بيج",
    "name_en": "Cream",
    "hex": "#E8DCC4",
    "image": null
   }
  ],
  "is_new": true,
  "is_best": true,
  "is_offer": false,
  "badge": "new",
  "video_url": null
 },
 {
  "id": "beach-bag",
  "name_ar": "شنطة بحر",
  "name_en": "Summer Beach Bag",
  "price": 350,
  "old_price": 375,
  "category_slug": "natural-style",
  "desc_ar": "شنطة قماش كبيرة بتدرج لوني ولمسة Summer. مناسبة للبحر والمصيف وتشيل كتير.",
  "desc_en": "A roomy canvas tote with a dip-dye gradient and Summer print. Made for the beach and holidays.",
  "features_ar": [
   "مساحة كبيرة",
   "تدرج لوني",
   "6 ألوان"
  ],
  "features_en": [
   "Roomy",
   "Dip-dye gradient",
   "6 colors"
  ],
  "images": [
   "/p/beach-bag/1.webp",
   "/p/beach-bag/2.webp",
   "/p/beach-bag/3.webp"
  ],
  "colors": [
   {
    "name_ar": "أصفر",
    "name_en": "Yellow",
    "hex": "#F0C93A",
    "image": "/p/beach-bag/1.webp"
   },
   {
    "name_ar": "بني",
    "name_en": "Brown",
    "hex": "#7C6A4E",
    "image": "/p/beach-bag/2.webp"
   },
   {
    "name_ar": "أزرق",
    "name_en": "Blue",
    "hex": "#8FBCE8",
    "image": "/p/beach-bag/3.webp"
   },
   {
    "name_ar": "تركواز",
    "name_en": "Teal",
    "hex": "#19A39A",
    "image": null
   },
   {
    "name_ar": "وردي وبيج",
    "name_en": "Pink and khaki",
    "hex": "#E26FA3",
    "image": null,
    "hex2": "#9C8F6C"
   },
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#DD5C95",
    "image": null
   }
  ],
  "is_new": true,
  "is_best": false,
  "is_offer": true,
  "badge": "sale",
  "video_url": null
 },
 {
  "id": "gym-travel-bag",
  "name_ar": "شنطة جيم وسفر",
  "name_en": "Gym & Travel Bag",
  "price": 495,
  "old_price": null,
  "category_slug": "gym-travel",
  "desc_ar": "شنطة جيم وسفر كبيرة بجيوب خارجية وحزام كتف، وبتتحول لشنطة باك. بتتركب على ويل الشنطة الكبيرة.",
  "desc_en": "A large gym and travel bag with outer pockets and a shoulder strap that converts to a backpack. Slides over a luggage handle.",
  "features_ar": [
   "باك وكتف",
   "جيوب خارجية",
   "تتركب على شنطة السفر"
  ],
  "features_en": [
   "Backpack or shoulder",
   "Outer pockets",
   "Fits over luggage handle"
  ],
  "images": [
   "/p/gym-travel-bag/1.webp",
   "/p/gym-travel-bag/2.webp",
   "/p/gym-travel-bag/3.webp"
  ],
  "colors": [
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#F2B5C0",
    "image": "/p/gym-travel-bag/1.webp"
   },
   {
    "name_ar": "بنفسجي",
    "name_en": "Lavender",
    "hex": "#B9A3E3",
    "image": "/p/gym-travel-bag/2.webp"
   },
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": "/p/gym-travel-bag/3.webp"
   },
   {
    "name_ar": "عنابي",
    "name_en": "Burgundy",
    "hex": "#8B1E2B",
    "image": null
   }
  ],
  "is_new": true,
  "is_best": false,
  "is_offer": false,
  "badge": "new",
  "video_url": null
 },
 {
  "id": "straw-bag",
  "name_ar": "شنطة خوص",
  "name_en": "Straw Tote Bag",
  "price": 470,
  "old_price": 495,
  "category_slug": "natural-style",
  "desc_ar": "شنطة خوص بنقشة أبيض وأسود وإيد جلد. ستايل طبيعي بيكمل لوك الصيف.",
  "desc_en": "A straw tote with a black-and-white weave and leather handles. A natural look for summer.",
  "features_ar": [
   "خوص طبيعي",
   "إيد جلد",
   "مساحة واسعة"
  ],
  "features_en": [
   "Woven straw",
   "Leather handles",
   "Roomy interior"
  ],
  "images": [
   "/p/straw-bag/1.webp",
   "/p/straw-bag/2.webp",
   "/p/straw-bag/3.webp"
  ],
  "colors": [],
  "is_new": false,
  "is_best": true,
  "is_offer": true,
  "badge": "sale",
  "video_url": null
 },
 {
  "id": "shoulder-bag",
  "name_ar": "شنطة كتف",
  "name_en": "Shoulder Bag",
  "price": 450,
  "old_price": null,
  "category_slug": "shoulder",
  "desc_ar": "شنطة كتف طويلة الإيد ومساحتها واسعة، شغل ومشاوير. بتفتح بسوستة وليها جيب داخلي.",
  "desc_en": "A tote-style shoulder bag with long handles and a roomy interior, for work and errands.",
  "features_ar": [
   "مساحة واسعة",
   "إيد طويلة مريحة للكتف",
   "9 ألوان"
  ],
  "features_en": [
   "Roomy",
   "Long comfortable handles",
   "9 colors"
  ],
  "images": [
   "/p/shoulder-bag/1.webp",
   "/p/shoulder-bag/2.webp",
   "/p/shoulder-bag/3.webp",
   "/p/shoulder-bag/4.webp"
  ],
  "colors": [
   {
    "name_ar": "بيج ووردي",
    "name_en": "Beige and pink",
    "hex": "#D9C3A0",
    "image": "/p/shoulder-bag/1.webp",
    "hex2": "#F0B7B0"
   },
   {
    "name_ar": "بني وعنابي",
    "name_en": "Brown and burgundy",
    "hex": "#6B4A3A",
    "image": "/p/shoulder-bag/2.webp",
    "hex2": "#8B2A3A"
   },
   {
    "name_ar": "رمادي غامق",
    "name_en": "Charcoal",
    "hex": "#4C5058",
    "image": "/p/shoulder-bag/3.webp"
   },
   {
    "name_ar": "أسود مطبوع",
    "name_en": "Printed black",
    "hex": "#2A2C30",
    "image": "/p/shoulder-bag/4.webp"
   },
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": null
   },
   {
    "name_ar": "بيج وأسود",
    "name_en": "Beige and black",
    "hex": "#D9C3A0",
    "image": null,
    "hex2": "#232120"
   },
   {
    "name_ar": "بني غامق",
    "name_en": "Chocolate",
    "hex": "#4A2B2B",
    "image": null
   },
   {
    "name_ar": "بيج وأصفر",
    "name_en": "Beige and yellow",
    "hex": "#D9C3A0",
    "image": null,
    "hex2": "#E7B52E"
   },
   {
    "name_ar": "بيج وكريمي",
    "name_en": "Beige and cream",
    "hex": "#D9C3A0",
    "image": null,
    "hex2": "#F2E8D2"
   }
  ],
  "is_new": false,
  "is_best": false,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "emily-crossbody",
  "name_ar": "شنطة كروس Emily",
  "name_en": "Emily Crossbody",
  "price": 495,
  "old_price": null,
  "category_slug": "crossbody",
  "desc_ar": "شنطة كروس بغطاء بنقشة جلد الثعبان وإيشارب على الإيد. شكل شيك لمشاوير ومناسبات.",
  "desc_en": "A crossbody with a snake-print flap and a scarf on the handle. Smart for outings and occasions.",
  "features_ar": [
   "غطاء بنقشة جلد الثعبان",
   "إيشارب على الإيد",
   "حزام كتف"
  ],
  "features_en": [
   "Snake-print flap",
   "Scarf on the handle",
   "Shoulder strap"
  ],
  "images": [
   "/p/emily-crossbody/1.webp",
   "/p/emily-crossbody/2.webp",
   "/p/emily-crossbody/3.webp"
  ],
  "colors": [
   {
    "name_ar": "بني",
    "name_en": "Brown",
    "hex": "#7A4A2E",
    "image": "/p/emily-crossbody/2.webp"
   },
   {
    "name_ar": "وردي وأبيض",
    "name_en": "Pink and white",
    "hex": "#EFC3CB",
    "image": "/p/emily-crossbody/3.webp",
    "hex2": "#F4F2EE"
   },
   {
    "name_ar": "بيج",
    "name_en": "Beige",
    "hex": "#D9BFA0",
    "image": null
   },
   {
    "name_ar": "أبيض",
    "name_en": "White",
    "hex": "#F4F2EE",
    "image": null
   },
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": null
   }
  ],
  "is_new": false,
  "is_best": false,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "soft-leather-crossbody",
  "name_ar": "شنطة كروس جلد طري",
  "name_en": "Soft Leather Crossbody",
  "price": 295,
  "old_price": null,
  "category_slug": "crossbody",
  "desc_ar": "شنطة كروس من الجلد الطري بعدة جيوب بسوست. خفيفة وعملية للاستخدام اليومي.",
  "desc_en": "A soft-leather crossbody with several zip pockets. Light and practical for every day.",
  "features_ar": [
   "جلد طري",
   "جيوب بسوست",
   "حزام كتف عريض"
  ],
  "features_en": [
   "Soft leather",
   "Zip pockets",
   "Wide shoulder strap"
  ],
  "images": [
   "/p/soft-leather-crossbody/1.webp",
   "/p/soft-leather-crossbody/2.webp",
   "/p/soft-leather-crossbody/3.webp"
  ],
  "colors": [],
  "is_new": true,
  "is_best": false,
  "is_offer": false,
  "badge": "new",
  "video_url": null
 },
 {
  "id": "phone-crossbody",
  "name_ar": "شنطة كروس موبايل",
  "name_en": "Phone Crossbody",
  "price": 350,
  "old_price": null,
  "category_slug": "crossbody",
  "desc_ar": "شنطة كروس صغيرة طولية تشيل الموبايل والكروت. بإيد وحزام كتف قابل للفك.",
  "desc_en": "A small upright crossbody for your phone and cards, with a top handle and detachable strap.",
  "features_ar": [
   "تشيل الموبايل",
   "حزام قابل للفك",
   "إيد للحمل باليد"
  ],
  "features_en": [
   "Fits your phone",
   "Detachable strap",
   "Top handle"
  ],
  "images": [
   "/p/phone-crossbody/1.webp",
   "/p/phone-crossbody/2.webp",
   "/p/phone-crossbody/3.webp"
  ],
  "colors": [
   {
    "name_ar": "بيج",
    "name_en": "Beige",
    "hex": "#E8D9B4",
    "image": "/p/phone-crossbody/2.webp"
   },
   {
    "name_ar": "ذهبي",
    "name_en": "Gold",
    "hex": "#CDAE5E",
    "image": "/p/phone-crossbody/3.webp"
   },
   {
    "name_ar": "بني",
    "name_en": "Brown",
    "hex": "#6B3A2A",
    "image": null
   },
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#F0B5BF",
    "image": null
   },
   {
    "name_ar": "فضي",
    "name_en": "Silver",
    "hex": "#BFC2C4",
    "image": null
   }
  ],
  "is_new": true,
  "is_best": false,
  "is_offer": false,
  "badge": "new",
  "video_url": null
 },
 {
  "id": "designer-tote",
  "name_ar": "شنطة ماركات",
  "name_en": "Tote with Pouch",
  "price": 475,
  "old_price": null,
  "category_slug": "shoulder",
  "desc_ar": "شنطة كتف كبيرة بتيجي معاها بوك صغير. بتفتح بمغناطيس وليها حزام كتف طويل.",
  "desc_en": "A large shoulder bag that comes with a matching pouch, plus a long shoulder strap.",
  "features_ar": [
   "بوك صغير معاها",
   "حزام كتف طويل",
   "4 ألوان"
  ],
  "features_en": [
   "Matching pouch",
   "Long shoulder strap",
   "4 colors"
  ],
  "images": [
   "/p/designer-tote/1.webp",
   "/p/designer-tote/2.webp",
   "/p/designer-tote/3.webp"
  ],
  "colors": [
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#F2BCC4",
    "image": "/p/designer-tote/1.webp"
   },
   {
    "name_ar": "أبيض",
    "name_en": "White",
    "hex": "#F4F2EE",
    "image": "/p/designer-tote/2.webp"
   },
   {
    "name_ar": "جملي",
    "name_en": "Tan",
    "hex": "#C0742F",
    "image": "/p/designer-tote/3.webp"
   },
   {
    "name_ar": "كريمي",
    "name_en": "Cream",
    "hex": "#EFE6D6",
    "image": null
   }
  ],
  "is_new": false,
  "is_best": false,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "mommy-bag",
  "name_ar": "شنطة ماميز",
  "name_en": "Mommy Bag",
  "price": 550,
  "old_price": null,
  "category_slug": "mommy",
  "desc_ar": "شنطة ماميز باك واسعة بجيوب منظمة للرضاعة والحفاضات، وجيب جانبي وجيب للموبايل ورا.",
  "desc_en": "A roomy mommy backpack with organised pockets for bottles and diapers, a side pocket and a hidden phone pocket.",
  "features_ar": [
   "تقسيمات داخلية منظمة",
   "جيب موبايل من ورا",
   "تتعلق على عربية الطفل"
  ],
  "features_en": [
   "Organised compartments",
   "Hidden phone pocket",
   "Hangs on a stroller"
  ],
  "images": [
   "/p/mommy-bag/1.webp",
   "/p/mommy-bag/2.webp",
   "/p/mommy-bag/3.webp"
  ],
  "colors": [
   {
    "name_ar": "بيج وكابتشينو",
    "name_en": "Cream and taupe",
    "hex": "#C7AE98",
    "image": "/p/mommy-bag/2.webp",
    "hex2": "#F0E6D6"
   },
   {
    "name_ar": "لافندر ووردي",
    "name_en": "Lavender and pink",
    "hex": "#BBA9D6",
    "image": "/p/mommy-bag/3.webp",
    "hex2": "#F2AAC0"
   },
   {
    "name_ar": "لافندر وأسود",
    "name_en": "Lavender and black",
    "hex": "#BBA9D6",
    "image": null,
    "hex2": "#232120"
   }
  ],
  "is_new": true,
  "is_best": true,
  "is_offer": false,
  "badge": "new",
  "video_url": null
 },
 {
  "id": "school-bag",
  "name_ar": "شنطة مدرسة",
  "name_en": "School Backpack",
  "price": 575,
  "old_price": null,
  "category_slug": "school-bags",
  "desc_ar": "شنطة مدرسة بجيوب كتير وحمالات مبطنة. شكل عصري بألوان شبابية.",
  "desc_en": "A school backpack with many pockets and padded straps in youthful colors.",
  "features_ar": [
   "حمالات مبطنة",
   "جيوب متعددة",
   "4 ألوان"
  ],
  "features_en": [
   "Padded straps",
   "Multiple pockets",
   "4 colors"
  ],
  "images": [
   "/p/school-bag/1.webp",
   "/p/school-bag/2.webp",
   "/p/school-bag/3.webp"
  ],
  "colors": [
   {
    "name_ar": "أسود وأبيض",
    "name_en": "Black and white",
    "hex": "#232120",
    "image": "/p/school-bag/1.webp",
    "hex2": "#F4F2EE"
   },
   {
    "name_ar": "بنفسجي",
    "name_en": "Purple",
    "hex": "#A58AD0",
    "image": "/p/school-bag/2.webp"
   },
   {
    "name_ar": "برتقالي",
    "name_en": "Orange",
    "hex": "#E8742A",
    "image": "/p/school-bag/3.webp"
   },
   {
    "name_ar": "تركواز",
    "name_en": "Teal",
    "hex": "#1B9AA6",
    "image": null
   }
  ],
  "is_new": false,
  "is_best": true,
  "is_offer": false,
  "badge": null,
  "video_url": null
 },
 {
  "id": "university-bag",
  "name_ar": "شنطة مدرسة وجامعة",
  "name_en": "School & University Backpack",
  "price": 1250,
  "old_price": null,
  "category_slug": "school-bags",
  "desc_ar": "شنطة كبيرة لطلاب المدرسة والجامعة بتدرج لوني، بتشيل اللابتوب والكتب وفيها حمالات مريحة.",
  "desc_en": "A large backpack for school and university in a gradient finish, with room for a laptop and books.",
  "features_ar": [
   "تشيل لابتوب وكتب",
   "حمالات مريحة",
   "6 ألوان"
  ],
  "features_en": [
   "Fits laptop and books",
   "Comfortable straps",
   "6 colors"
  ],
  "images": [
   "/p/university-bag/1.webp",
   "/p/university-bag/2.webp",
   "/p/university-bag/3.webp"
  ],
  "colors": [
   {
    "name_ar": "أسود وأزرق",
    "name_en": "Black and blue",
    "hex": "#232120",
    "image": "/p/university-bag/1.webp",
    "hex2": "#5BA7D8"
   },
   {
    "name_ar": "بنفسجي",
    "name_en": "Purple",
    "hex": "#7A4FC4",
    "image": "/p/university-bag/2.webp"
   },
   {
    "name_ar": "أزرق",
    "name_en": "Blue",
    "hex": "#2F86E0",
    "image": "/p/university-bag/3.webp"
   },
   {
    "name_ar": "كحلي",
    "name_en": "Navy",
    "hex": "#1E3A8A",
    "image": null
   },
   {
    "name_ar": "وردي",
    "name_en": "Pink",
    "hex": "#F0508F",
    "image": null
   },
   {
    "name_ar": "أسود وتركواز",
    "name_en": "Black and teal",
    "hex": "#232120",
    "image": null,
    "hex2": "#3CB6C2"
   }
  ],
  "is_new": true,
  "is_best": false,
  "is_offer": false,
  "badge": "new",
  "video_url": null
 },
 {
  "id": "waterproof-crossbody",
  "name_ar": "شنطة وتربروف مستورد",
  "name_en": "Imported Waterproof Bag",
  "price": 395,
  "old_price": null,
  "category_slug": "waterproof",
  "desc_ar": "شنطة كروس مستوردة وتربروف بعدة جيوب بسوست وحزام عريض. خفيفة وتناسب الاستخدام اليومي.",
  "desc_en": "An imported waterproof crossbody with several zip pockets and a wide strap. Light for everyday use.",
  "features_ar": [
   "وتربروف",
   "جيوب بسوست",
   "7 ألوان ونقشات"
  ],
  "features_en": [
   "Waterproof",
   "Zip pockets",
   "7 colors and prints"
  ],
  "images": [
   "/p/waterproof-crossbody/1.webp",
   "/p/waterproof-crossbody/2.webp",
   "/p/waterproof-crossbody/3.webp",
   "/p/waterproof-crossbody/4.webp"
  ],
  "colors": [
   {
    "name_ar": "أسود",
    "name_en": "Black",
    "hex": "#232120",
    "image": "/p/waterproof-crossbody/1.webp"
   },
   {
    "name_ar": "أزرق مورد",
    "name_en": "Blue floral",
    "hex": "#3A7CA5",
    "image": "/p/waterproof-crossbody/2.webp",
    "hex2": "#DCE9F2"
   },
   {
    "name_ar": "بنفسجي",
    "name_en": "Purple",
    "hex": "#8A3F9D",
    "image": "/p/waterproof-crossbody/3.webp"
   },
   {
    "name_ar": "أزرق وأبيض",
    "name_en": "Blue and white",
    "hex": "#2D5E8C",
    "image": "/p/waterproof-crossbody/4.webp",
    "hex2": "#F4F2EE"
   },
   {
    "name_ar": "كحلي منقط",
    "name_en": "Navy dots",
    "hex": "#243A5E",
    "image": null,
    "hex2": "#C9332D"
   },
   {
    "name_ar": "أبيض مورد",
    "name_en": "White floral",
    "hex": "#F4F2EE",
    "image": null,
    "hex2": "#C75F6E"
   },
   {
    "name_ar": "أسود زهور",
    "name_en": "Black floral",
    "hex": "#2A1F3A",
    "image": null,
    "hex2": "#A07AC8"
   }
  ],
  "is_new": false,
  "is_best": false,
  "is_offer": false,
  "badge": null,
  "video_url": null
 }
];

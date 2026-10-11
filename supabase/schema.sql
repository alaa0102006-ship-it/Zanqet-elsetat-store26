-- شغّل الملف ده كله في Supabase → SQL Editor → New query → Run
-- (اختياري: المتجر شغال من غير Supabase بالبيانات الموجودة في lib/products.js)

create table if not exists categories (
  slug text primary key,
  name_ar text not null,
  name_en text not null,
  parent_slug text references categories(slug) on delete set null,
  sort int default 0
);

create table if not exists products (
  id text primary key,
  name_ar text not null,
  name_en text not null,
  desc_ar text,
  desc_en text,
  features_ar jsonb default '[]'::jsonb,   -- ["ميزة 1","ميزة 2"]
  features_en jsonb default '[]'::jsonb,
  price numeric not null,                  -- السعر الحالي
  old_price numeric,                       -- السعر قبل الخصم (اختياري)
  category_slug text references categories(slug) on delete set null,
  colors jsonb default '[]'::jsonb,        -- [{"name_ar":"أسود","name_en":"Black","hex":"#232120","image":"https://..."}]
  images jsonb default '[]'::jsonb,        -- ["https://..."]
  video_url text,                          -- فيديو قصير للمنتج (اختياري)
  is_new boolean default false,
  is_best boolean default false,
  is_offer boolean default false,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists orders (
  id bigint generated always as identity primary key,
  customer_name text not null,
  phone text not null,
  governorate text,
  address text,
  notes text,
  payment_method text,
  items jsonb not null,
  subtotal numeric,
  shipping numeric,
  total numeric,
  status text default 'new',
  created_at timestamptz default now()
);

-- الأمان (RLS): الزائر يقرأ المنتجات والأقسام ويسجّل طلب فقط
alter table categories enable row level security;
alter table products enable row level security;
alter table orders enable row level security;

create policy "public read categories" on categories for select using (true);
create policy "public read products" on products for select using (active = true);
create policy "public create orders" on orders for insert with check (true);
-- الطلبات بتشوفها من لوحة Supabase (Table Editor) بحسابك، ومفيش قراءة عامة عمدًا.

insert into categories (slug, name_ar, name_en, parent_slug, sort) values
  ('kids-bags','شنط أطفال','Kids Bags',null,1),
  ('bags','شنط','Bags',null,2),
  ('wallets','بوكات ومحافظ','Pouches & Wallets',null,3),
  ('accessories','إكسسوارات الموضة','Fashion Accessories',null,4),
  ('school-bags','شنط مدارس وجامعات','School & University Bags',null,5)
on conflict do nothing;

insert into categories (slug, name_ar, name_en, parent_slug, sort) values
  ('backpacks','شنط باك','Backpacks','bags',1),
  ('shoulder','شنط كتف','Shoulder Bags','bags',2),
  ('crossbody','شنط كروس','Crossbody Bags','bags',3),
  ('waterproof','شنط وتربروف','Waterproof Bags','bags',4),
  ('mommy','شنط ماميز','Mommy Bags','bags',5),
  ('gym-travel','شنط جيم وسفر','Gym & Travel Bags','bags',6),
  ('natural-style','شنط ستايل طبيعي','Natural Style Bags','bags',7)
on conflict do nothing;

-- لإضافة قسم جديد: أضف صف في categories (parent_slug فاضي = قسم أساسي، أو slug القسم الأب = مجموعة تحته).
-- ملاحظة: أول ما يبقى في جدول products منتج واحد على الأقل، المتجر بيعرض منتجات Supabase بدل ملف lib/products.js.

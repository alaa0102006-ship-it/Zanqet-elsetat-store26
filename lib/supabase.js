import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// لو مفيش مفاتيح Supabase، المتجر بيشتغل ببيانات تجريبية من lib/data.js
export const supabase = url && key ? createClient(url, key) : null;

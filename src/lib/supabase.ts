import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase 環境変数が設定されていないため、問い合わせ送信機能は無効化されています。');
}

export interface ContactInquiry {
  company_name: string;
  contact_person: string;
  phone: string;
  email: string;
  message: string;
  language: string;
}

export async function submitContactInquiry(inquiry: ContactInquiry) {
  if (!supabase) {
    throw new Error('Supabase が設定されていないため、送信できません。');
  }

  const { data, error } = await supabase
    .from('contact_inquiries')
    .insert([inquiry])
    .select()
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

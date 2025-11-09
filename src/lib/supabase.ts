import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactInquiry {
  company_name: string;
  contact_person: string;
  phone: string;
  email: string;
  message: string;
  language: string;
}

export async function submitContactInquiry(inquiry: ContactInquiry) {
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

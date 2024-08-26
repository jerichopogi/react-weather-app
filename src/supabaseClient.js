import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kjwuobwvkjpprtkbuuxc.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // Use your anon key here
export const supabase = createClient(supabaseUrl, supabaseKey);

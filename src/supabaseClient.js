import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qqeixtvfrkyihsjzteyw.supabase.co/';
const supabaseAnonKey = 'sb_publishable_xib9ikcDu4iicIU8Jikbjw_3cctSiny';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
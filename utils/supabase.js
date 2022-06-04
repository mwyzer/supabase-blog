import { createClient } from '@supabase/supabase-js';

export default createClient(
  process.env.envNEXT_PUBLIC_SUPABASE_URL,
  process.envNEXT_PUBLIC_SUPABASE_API_KEY
);

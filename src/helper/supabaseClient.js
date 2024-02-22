import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wqmkwcedxmljwjbnfdzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxbWt3Y2VkeG1sandqYm5mZHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NTY0NzUsImV4cCI6MjAyNDEzMjQ3NX0.XKcdVY7bllWqie7Fj3TAv9UGM2MV6_BkzYV3kaX8HSs";
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

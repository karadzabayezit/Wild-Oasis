import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kcktbvrmzrlsdxchdcsv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtja3RidnJtenJsc2R4Y2hkY3N2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDE1ODI5NSwiZXhwIjoyMDI1NzM0Mjk1fQ.PXkzjJA0VeQYAEeLycGhsCA8iI8Hk_JZr6zWd00KzO8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

import { createClient } from "@supabase/supabase-js";

// We use non-null assertion or fallback to empty string to avoid crashes during build if env is missing
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

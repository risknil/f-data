// Supabase public configuration.
//
// The project URL and the publishable (anon) key are PUBLIC values by design —
// they are meant to be exposed in the browser. Row Level Security is what
// protects your data, not the secrecy of these values.
//
// NOTE: These are intentionally hardcoded. The project's NEXT_PUBLIC_SUPABASE_*
// environment variables kept reverting to credentials from a different/old
// Supabase project, which caused "Invalid API key" errors. Sourcing the values
// here guarantees the app always talks to the correct project
// (ikebcwplzsaukiayewtm).

export const SUPABASE_URL = 'https://ikebcwplzsaukiayewtm.supabase.co'
export const SUPABASE_ANON_KEY = 'sb_publishable_I5vWhNsH7Nwx4P1vhDCobQ_mcaB0PPd'

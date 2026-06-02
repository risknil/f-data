import { createBrowserClient } from '@supabase/ssr'

let hasWarnedAboutMissingEnv = false

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    if (!hasWarnedAboutMissingEnv) {
      console.warn('[v0] Supabase environment variables not set. Auth features will be disabled.')
      hasWarnedAboutMissingEnv = true
    }
    // Return a mock client that won't crash
    return null as unknown as ReturnType<typeof createBrowserClient>
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { createClient } from '@/lib/supabase/client'

interface User {
  id: string
  email: string
  displayName?: string
}

interface Profile {
  id: string
  email: string | null
  display_name: string | null
  created_at: string
  updated_at: string
}

interface AuthContextType {
  user: User | null
  profile: Profile | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (email: string, password: string) => Promise<{ success: boolean; error?: string; needsConfirmation?: boolean }>
  logout: () => Promise<void>
  updateProfile: (data: { display_name?: string }) => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  isLoading: true,
  login: async () => ({ success: false }),
  signup: async () => ({ success: false }),
  logout: async () => {},
  updateProfile: async () => ({ success: false }),
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch profile for user
  const fetchProfile = useCallback(async (userId: string) => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
      
      if (!error && data) {
        setProfile(data)
      }
    } catch (error) {
      console.error('[v0] Error fetching profile:', error)
    }
  }, [])

  // Load user from Supabase session on mount
  useEffect(() => {
    let mounted = true
    
    const initAuth = async () => {
      try {
        const supabase = createClient()
        const { data: { session } } = await supabase.auth.getSession()
        
        if (mounted && session?.user) {
          const supabaseUser = session.user
          setUser({
            id: supabaseUser.id,
            email: supabaseUser.email || '',
            displayName: supabaseUser.user_metadata?.display_name,
          })
          await fetchProfile(supabaseUser.id)
        }
      } catch (error) {
        console.error('[v0] Auth init error:', error)
      }
      
      if (mounted) {
        setIsLoading(false)
      }
    }

    initAuth()

    // Listen for auth state changes
    let subscription: { unsubscribe: () => void } | null = null
    
    try {
      const client = createClient()
      const { data } = client.auth.onAuthStateChange(async (event, session) => {
        if (!mounted) return
        
        if (session?.user) {
          const supabaseUser = session.user
          setUser({
            id: supabaseUser.id,
            email: supabaseUser.email || '',
            displayName: supabaseUser.user_metadata?.display_name,
          })
          await fetchProfile(supabaseUser.id)
        } else {
          setUser(null)
          setProfile(null)
        }
        setIsLoading(false)
      })
      subscription = data.subscription
    } catch (error) {
      console.error('[v0] Auth subscription error:', error)
      if (mounted) {
        setIsLoading(false)
      }
    }

    return () => {
      mounted = false
      subscription?.unsubscribe()
    }
  }, [fetchProfile])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { success: false, error: error.message }
      }

      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email || '',
          displayName: data.user.user_metadata?.display_name,
        })
        await fetchProfile(data.user.id)
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: 'Authentication service unavailable' }
    }
  }

  const signup = async (email: string, password: string): Promise<{ success: boolean; error?: string; needsConfirmation?: boolean }> => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        return { success: false, error: error.message }
      }

      // Check if email confirmation is required
      if (data.user && !data.session) {
        return { success: true, needsConfirmation: true }
      }

      if (data.user && data.session) {
        setUser({
          id: data.user.id,
          email: data.user.email || '',
          displayName: data.user.user_metadata?.display_name,
        })
        await fetchProfile(data.user.id)
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: 'Authentication service unavailable' }
    }
  }

  const logout = async () => {
    try {
      const supabase = createClient()
      await supabase.auth.signOut()
    } catch (error) {
      console.error('[v0] Logout error:', error)
    }
    setUser(null)
    setProfile(null)
  }

  const updateProfile = async (data: { display_name?: string }): Promise<{ success: boolean; error?: string }> => {
    if (!user) {
      return { success: false, error: 'Not authenticated' }
    }

    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('profiles')
        .update({ ...data, updated_at: new Date().toISOString() })
        .eq('id', user.id)

      if (error) {
        return { success: false, error: error.message }
      }

      // Refresh profile
      await fetchProfile(user.id)
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Profile update failed' }
    }
  }

  return (
    <AuthContext.Provider value={{ user, profile, isLoading, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

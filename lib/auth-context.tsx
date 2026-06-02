'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { User as SupabaseUser } from '@supabase/supabase-js'

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
  signup: (email: string, password: string, displayName?: string) => Promise<{ success: boolean; error?: string; needsConfirmation?: boolean }>
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
  const supabase = createClient()

  // Fetch profile for user
  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (!error && data) {
      setProfile(data)
    }
  }

  // Load user from Supabase session on mount
  useEffect(() => {
    const initAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        const supabaseUser = session.user
        setUser({
          id: supabaseUser.id,
          email: supabaseUser.email || '',
          displayName: supabaseUser.user_metadata?.display_name,
        })
        await fetchProfile(supabaseUser.id)
      }
      
      setIsLoading(false)
    }

    initAuth()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
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

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
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
  }

  const signup = async (email: string, password: string, displayName?: string): Promise<{ success: boolean; error?: string; needsConfirmation?: boolean }> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ?? `${window.location.origin}/auth/callback`,
        data: {
          display_name: displayName || email.split('@')[0],
        },
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
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  const updateProfile = async (data: { display_name?: string }): Promise<{ success: boolean; error?: string }> => {
    if (!user) {
      return { success: false, error: 'Not authenticated' }
    }

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

'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface User {
  email: string
  isAdmin: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => ({ success: false }),
  logout: () => {},
})

// Embedded admin credentials (for preview/dev mode)
const ADMIN_CREDENTIALS = {
  email: 'tamasorosz83@gmail.com',
  password: 'Select83',
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('risknile-user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch {
        localStorage.removeItem('risknile-user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    console.log('[v0] Login attempt:', email, 'expected:', ADMIN_CREDENTIALS.email)
    // Check against embedded admin credentials
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const adminUser: User = { email, isAdmin: true }
      setUser(adminUser)
      localStorage.setItem('risknile-user', JSON.stringify(adminUser))
      console.log('[v0] Login success!')
      return { success: true }
    }

    console.log('[v0] Login failed - credentials mismatch')
    // For now, reject all other logins (can be extended later with real auth)
    return { success: false, error: 'Invalid email or password' }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('risknile-user')
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

'use client'

import { useState, useEffect } from 'react'
import type { Tip } from '@/lib/types'

export function useTips(sport?: string, limit?: number) {
  const [tips, setTips] = useState<Tip[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const timer = setTimeout(async () => {
      try {
        const params = new URLSearchParams()
        if (sport) params.set('sport', sport)
        if (limit) params.set('limit', String(limit))
        const url = `/api/tips${params.toString() ? `?${params}` : ''}`
        const res = await fetch(url)
        if (!res.ok) throw new Error('Failed')
        const data: Tip[] = await res.json()
        if (!cancelled) {
          setTips(data)
          setIsLoading(false)
        }
      } catch {
        if (!cancelled) setIsLoading(false)
      }
    }, 150)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [sport, limit])

  return { tips, isLoading }
}

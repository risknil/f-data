import { createClient } from '@/lib/supabase/client'

export interface ModuleProgress {
  module_slug: string
  last_section: number
  completed_sections: number[]
  is_completed: boolean
  updated_at: string
}

/**
 * Fetch the saved progress for a single training module (by slug) for the
 * currently authenticated user. Returns null if no progress exists yet.
 */
export async function getModuleProgress(slug: string): Promise<ModuleProgress | null> {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data, error } = await supabase
      .from('training_module_progress')
      .select('module_slug, last_section, completed_sections, is_completed, updated_at')
      .eq('user_id', user.id)
      .eq('module_slug', slug)
      .maybeSingle()

    if (error || !data) return null
    return {
      module_slug: data.module_slug,
      last_section: data.last_section ?? 0,
      completed_sections: Array.isArray(data.completed_sections) ? data.completed_sections : [],
      is_completed: !!data.is_completed,
      updated_at: data.updated_at,
    }
  } catch (err) {
    console.error('[v0] getModuleProgress error:', err)
    return null
  }
}

/**
 * Fetch all module progress for the current user, keyed by module slug.
 */
export async function getAllProgress(): Promise<Record<string, ModuleProgress>> {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return {}

    const { data, error } = await supabase
      .from('training_module_progress')
      .select('module_slug, last_section, completed_sections, is_completed, updated_at')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })

    if (error || !data) return {}

    const map: Record<string, ModuleProgress> = {}
    for (const row of data) {
      map[row.module_slug] = {
        module_slug: row.module_slug,
        last_section: row.last_section ?? 0,
        completed_sections: Array.isArray(row.completed_sections) ? row.completed_sections : [],
        is_completed: !!row.is_completed,
        updated_at: row.updated_at,
      }
    }
    return map
  } catch (err) {
    console.error('[v0] getAllProgress error:', err)
    return {}
  }
}

/**
 * Upsert the progress for a module. Safe to call frequently; it writes the
 * current section, the set of viewed sections, and completion state.
 */
export async function saveModuleProgress(
  slug: string,
  progress: { last_section: number; completed_sections: number[]; is_completed: boolean },
): Promise<void> {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase
      .from('training_module_progress')
      .upsert(
        {
          user_id: user.id,
          module_slug: slug,
          last_section: progress.last_section,
          completed_sections: progress.completed_sections,
          is_completed: progress.is_completed,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,module_slug' },
      )
  } catch (err) {
    console.error('[v0] saveModuleProgress error:', err)
  }
}

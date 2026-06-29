-- ============================================================================
-- TRAINING MODULE PROGRESS (slug-based, for code-defined training modules)
-- ============================================================================
-- The training modules live in code (lib/training-content.ts), keyed by slug,
-- so progress is tracked by module_slug rather than a UUID foreign key.

CREATE TABLE IF NOT EXISTS public.training_module_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_slug TEXT NOT NULL,
  last_section INTEGER NOT NULL DEFAULT 0,
  completed_sections JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, module_slug)
);

ALTER TABLE public.training_module_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "tmp_select_own" ON public.training_module_progress;
DROP POLICY IF EXISTS "tmp_insert_own" ON public.training_module_progress;
DROP POLICY IF EXISTS "tmp_update_own" ON public.training_module_progress;
DROP POLICY IF EXISTS "tmp_delete_own" ON public.training_module_progress;

CREATE POLICY "tmp_select_own" ON public.training_module_progress
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "tmp_insert_own" ON public.training_module_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "tmp_update_own" ON public.training_module_progress
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "tmp_delete_own" ON public.training_module_progress
  FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_tmp_user ON public.training_module_progress(user_id);

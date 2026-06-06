-- ============================================================================
-- F-DATA DATABASE SCHEMA
-- Run this entire file in your Supabase Dashboard > SQL Editor
-- Project: ikebcwplzsaukiayewtm
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. PROFILES TABLE
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  display_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_delete_own" ON public.profiles;

CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "profiles_delete_own" ON public.profiles FOR DELETE USING (auth.uid() = id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'display_name', split_part(NEW.email, '@', 1))
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ----------------------------------------------------------------------------
-- 2. SUBSCRIPTIONS TABLE
-- ----------------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE subscription_status AS ENUM ('active', 'cancelled', 'expired', 'pending');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE subscription_plan AS ENUM ('free', 'basic', 'premium', 'vip');
EXCEPTION WHEN duplicate_object THEN null; END $$;

CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan subscription_plan NOT NULL DEFAULT 'free',
  status subscription_status NOT NULL DEFAULT 'active',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  starts_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE,
  cancelled_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "subscriptions_select_own" ON public.subscriptions;
DROP POLICY IF EXISTS "subscriptions_select_admin" ON public.subscriptions;
DROP POLICY IF EXISTS "subscriptions_insert_admin" ON public.subscriptions;
DROP POLICY IF EXISTS "subscriptions_update_admin" ON public.subscriptions;

CREATE POLICY "subscriptions_select_own" ON public.subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "subscriptions_select_admin" ON public.subscriptions FOR SELECT USING (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);
CREATE POLICY "subscriptions_insert_admin" ON public.subscriptions FOR INSERT WITH CHECK (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
  OR auth.uid() = user_id
);
CREATE POLICY "subscriptions_update_admin" ON public.subscriptions FOR UPDATE USING (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON public.subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON public.subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_expires ON public.subscriptions(expires_at);

-- Auto-create free subscription on signup
CREATE OR REPLACE FUNCTION public.handle_new_user_subscription()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.subscriptions (user_id, plan, status)
  VALUES (NEW.id, 'free', 'active')
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created_subscription ON auth.users;
CREATE TRIGGER on_auth_user_created_subscription
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user_subscription();

-- ----------------------------------------------------------------------------
-- 3. BOOKMAKERS + BOOKMAKER RATINGS
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.bookmakers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  website_url TEXT,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.bookmakers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "bookmakers_select_all" ON public.bookmakers;
DROP POLICY IF EXISTS "bookmakers_insert_admin" ON public.bookmakers;
DROP POLICY IF EXISTS "bookmakers_update_admin" ON public.bookmakers;
DROP POLICY IF EXISTS "bookmakers_delete_admin" ON public.bookmakers;

CREATE POLICY "bookmakers_select_all" ON public.bookmakers FOR SELECT USING (true);
CREATE POLICY "bookmakers_insert_admin" ON public.bookmakers FOR INSERT WITH CHECK (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);
CREATE POLICY "bookmakers_update_admin" ON public.bookmakers FOR UPDATE USING (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);
CREATE POLICY "bookmakers_delete_admin" ON public.bookmakers FOR DELETE USING (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);

CREATE TABLE IF NOT EXISTS public.bookmaker_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  bookmaker_id UUID NOT NULL REFERENCES public.bookmakers(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, bookmaker_id)
);

ALTER TABLE public.bookmaker_ratings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "bookmaker_ratings_select_all" ON public.bookmaker_ratings;
DROP POLICY IF EXISTS "bookmaker_ratings_insert_own" ON public.bookmaker_ratings;
DROP POLICY IF EXISTS "bookmaker_ratings_update_own" ON public.bookmaker_ratings;
DROP POLICY IF EXISTS "bookmaker_ratings_delete_own" ON public.bookmaker_ratings;

CREATE POLICY "bookmaker_ratings_select_all" ON public.bookmaker_ratings FOR SELECT USING (true);
CREATE POLICY "bookmaker_ratings_insert_own" ON public.bookmaker_ratings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "bookmaker_ratings_update_own" ON public.bookmaker_ratings FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "bookmaker_ratings_delete_own" ON public.bookmaker_ratings FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_bookmaker_ratings_bookmaker ON public.bookmaker_ratings(bookmaker_id);
CREATE INDEX IF NOT EXISTS idx_bookmaker_ratings_user ON public.bookmaker_ratings(user_id);

-- ----------------------------------------------------------------------------
-- 4. BETTING TIPS
-- ----------------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE sport_type AS ENUM ('football', 'basketball', 'tennis', 'hockey', 'baseball', 'mma', 'boxing', 'golf', 'esports', 'other');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE tip_status AS ENUM ('pending', 'won', 'lost', 'void', 'half_won', 'half_lost');
EXCEPTION WHEN duplicate_object THEN null; END $$;

CREATE TABLE IF NOT EXISTS public.betting_tips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sport sport_type NOT NULL,
  league TEXT,
  match_name TEXT NOT NULL,
  tip_description TEXT NOT NULL,
  odds DECIMAL(10, 2) NOT NULL,
  stake INTEGER CHECK (stake >= 1 AND stake <= 10),
  status tip_status DEFAULT 'pending',
  result_description TEXT,
  match_date TIMESTAMP WITH TIME ZONE NOT NULL,
  is_premium BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.betting_tips ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "betting_tips_select_public" ON public.betting_tips;
DROP POLICY IF EXISTS "betting_tips_select_premium" ON public.betting_tips;
DROP POLICY IF EXISTS "betting_tips_insert_admin" ON public.betting_tips;
DROP POLICY IF EXISTS "betting_tips_update_admin" ON public.betting_tips;
DROP POLICY IF EXISTS "betting_tips_delete_admin" ON public.betting_tips;

CREATE POLICY "betting_tips_select_public" ON public.betting_tips FOR SELECT USING (is_premium = false);
CREATE POLICY "betting_tips_select_premium" ON public.betting_tips FOR SELECT USING (
  is_premium = true AND (
    EXISTS (
      SELECT 1 FROM public.subscriptions
      WHERE user_id = auth.uid()
      AND status = 'active'
      AND (expires_at IS NULL OR expires_at > NOW())
    )
    OR (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
  )
);
CREATE POLICY "betting_tips_insert_admin" ON public.betting_tips FOR INSERT WITH CHECK (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);
CREATE POLICY "betting_tips_update_admin" ON public.betting_tips FOR UPDATE USING (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);
CREATE POLICY "betting_tips_delete_admin" ON public.betting_tips FOR DELETE USING (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);

CREATE INDEX IF NOT EXISTS idx_betting_tips_sport ON public.betting_tips(sport);
CREATE INDEX IF NOT EXISTS idx_betting_tips_status ON public.betting_tips(status);
CREATE INDEX IF NOT EXISTS idx_betting_tips_match_date ON public.betting_tips(match_date);
CREATE INDEX IF NOT EXISTS idx_betting_tips_is_premium ON public.betting_tips(is_premium);
CREATE INDEX IF NOT EXISTS idx_betting_tips_created_at ON public.betting_tips(created_at DESC);

-- ----------------------------------------------------------------------------
-- 5. USER SAVED TIPS
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_saved_tips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  tip_id UUID NOT NULL REFERENCES public.betting_tips(id) ON DELETE CASCADE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, tip_id)
);

ALTER TABLE public.user_saved_tips ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "user_saved_tips_select_own" ON public.user_saved_tips;
DROP POLICY IF EXISTS "user_saved_tips_insert_own" ON public.user_saved_tips;
DROP POLICY IF EXISTS "user_saved_tips_update_own" ON public.user_saved_tips;
DROP POLICY IF EXISTS "user_saved_tips_delete_own" ON public.user_saved_tips;

CREATE POLICY "user_saved_tips_select_own" ON public.user_saved_tips FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "user_saved_tips_insert_own" ON public.user_saved_tips FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "user_saved_tips_update_own" ON public.user_saved_tips FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "user_saved_tips_delete_own" ON public.user_saved_tips FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_user_saved_tips_user ON public.user_saved_tips(user_id);
CREATE INDEX IF NOT EXISTS idx_user_saved_tips_tip ON public.user_saved_tips(tip_id);

-- ----------------------------------------------------------------------------
-- 6. TRAINING MODULES + PROGRESS
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.training_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  content JSONB,
  order_index INTEGER DEFAULT 0,
  is_premium BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.training_modules ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "training_modules_select_public" ON public.training_modules;
DROP POLICY IF EXISTS "training_modules_select_premium" ON public.training_modules;
DROP POLICY IF EXISTS "training_modules_insert_admin" ON public.training_modules;
DROP POLICY IF EXISTS "training_modules_update_admin" ON public.training_modules;
DROP POLICY IF EXISTS "training_modules_delete_admin" ON public.training_modules;

CREATE POLICY "training_modules_select_public" ON public.training_modules FOR SELECT USING (is_active = true AND is_premium = false);
CREATE POLICY "training_modules_select_premium" ON public.training_modules FOR SELECT USING (
  is_active = true AND is_premium = true AND (
    EXISTS (
      SELECT 1 FROM public.subscriptions
      WHERE user_id = auth.uid()
      AND status = 'active'
      AND (expires_at IS NULL OR expires_at > NOW())
    )
    OR (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
  )
);
CREATE POLICY "training_modules_insert_admin" ON public.training_modules FOR INSERT WITH CHECK (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);
CREATE POLICY "training_modules_update_admin" ON public.training_modules FOR UPDATE USING (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);
CREATE POLICY "training_modules_delete_admin" ON public.training_modules FOR DELETE USING (
  (SELECT (raw_user_meta_data->>'is_admin')::boolean FROM auth.users WHERE id = auth.uid()) = true
);

CREATE TABLE IF NOT EXISTS public.training_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id UUID NOT NULL REFERENCES public.training_modules(id) ON DELETE CASCADE,
  completed_sections JSONB DEFAULT '[]'::jsonb,
  quiz_scores JSONB DEFAULT '{}'::jsonb,
  is_completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, module_id)
);

ALTER TABLE public.training_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "training_progress_select_own" ON public.training_progress;
DROP POLICY IF EXISTS "training_progress_insert_own" ON public.training_progress;
DROP POLICY IF EXISTS "training_progress_update_own" ON public.training_progress;
DROP POLICY IF EXISTS "training_progress_delete_own" ON public.training_progress;

CREATE POLICY "training_progress_select_own" ON public.training_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "training_progress_insert_own" ON public.training_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "training_progress_update_own" ON public.training_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "training_progress_delete_own" ON public.training_progress FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_training_progress_user ON public.training_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_training_progress_module ON public.training_progress(module_id);
CREATE INDEX IF NOT EXISTS idx_training_modules_slug ON public.training_modules(slug);
CREATE INDEX IF NOT EXISTS idx_training_modules_order ON public.training_modules(order_index);

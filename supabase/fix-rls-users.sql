-- ============================================================
-- FIX: "new row violates row-level security policy for table users"
-- Run in Supabase → SQL Editor
-- ============================================================

-- Disable conflicting auth trigger (app creates profile server-side)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Allow logged-in users to insert their own row (for client-side fallback)
DROP POLICY IF EXISTS "Users can insert own profile" ON public.users;
CREATE POLICY "Users can insert own profile"
  ON public.users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Allow users to read/update own profile
DROP POLICY IF EXISTS "Users can view own profile" ON public.users;
CREATE POLICY "Users can view own profile"
  ON public.users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.users;
CREATE POLICY "Users can update own profile"
  ON public.users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Service role (used by Next.js server) bypasses RLS automatically
GRANT ALL ON public.users TO service_role;

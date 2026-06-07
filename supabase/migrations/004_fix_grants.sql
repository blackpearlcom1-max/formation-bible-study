-- ─────────────────────────────────────────────────────────────
-- Migration 004 — Fix table-level grants
-- Run in Supabase SQL Editor (project: formation-bible)
--
-- Root cause: 001_initial_schema.sql enables RLS on all tables
-- but never GRANTs table-level access to the service_role or
-- authenticated roles. Even with BYPASSRLS, Postgres denies
-- operations without an explicit GRANT.
--
-- Sentry caught this on verse_notes (24 errors, GET /api/verse-notes).
-- All other tables in the schema have the same gap — fixed here.
-- ─────────────────────────────────────────────────────────────

-- service_role: used by the Railway backend (service key bypasses RLS
-- but still needs table-level GRANT from Postgres)
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_profiles    TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reading_history  TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.verse_notes      TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_notes      TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.subscriptions    TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.flagged_answers  TO service_role;

-- authenticated: used by Supabase client calls scoped to a logged-in user
-- (RLS policies already restrict row visibility — these are table-level grants)
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_profiles    TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reading_history  TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.verse_notes      TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_notes      TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.subscriptions    TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.flagged_answers  TO authenticated;

-- anon: public/unauthenticated reads — flagged_answers insert only,
-- everything else stays locked down
GRANT INSERT ON public.flagged_answers TO anon;

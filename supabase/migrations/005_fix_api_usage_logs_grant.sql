-- ─────────────────────────────────────────────────────────────
-- Migration 005 — Fix api_usage_logs table-level grants
-- Run in Supabase SQL Editor (project: formation-bible)
--
-- Root cause: 002_usage_tracking.sql created api_usage_logs but
-- 004_fix_grants.sql only patched the original 6 tables — it
-- missed api_usage_logs. Every trackUsage() call in the backend
-- has been throwing "permission denied for table api_usage_logs"
-- since the table was created. AI usage tracking (5 queries/day
-- free limit) is NOT being enforced until this is applied.
--
-- Discovered: June 11, 2026 via Railway deployment logs
-- ─────────────────────────────────────────────────────────────

GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_usage_logs TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_usage_logs TO authenticated;

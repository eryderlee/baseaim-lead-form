-- =====================================================
-- Supabase Database Schema for Baseaim Lead Form
-- =====================================================
-- Table: baseaim_lead_form
-- Description: Stores lead form submissions from all form types
-- =====================================================

-- Create the leads table
CREATE TABLE IF NOT EXISTS baseaim_lead_form (
  -- Primary key and metadata
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,

  -- Required fields (common to all forms)
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,

  -- Optional contact fields
  phone TEXT,
  message TEXT,

  -- Company details (from multi-step form)
  industry TEXT,
  company_size TEXT,
  role TEXT,

  -- Business needs (from multi-step form)
  challenge TEXT,
  timeline TEXT,
  budget TEXT,

  -- Super-quick form specific fields
  business_type TEXT,
  team_size TEXT,
  admin_hours TEXT,

  -- Form tracking
  form_type TEXT NOT NULL CHECK (form_type IN ('original', 'short', 'multi-step', 'super-quick')),

  -- Flexible metadata for any additional data
  metadata JSONB
);

-- =====================================================
-- Indexes for better query performance
-- =====================================================

-- Index on created_at for sorting by date
CREATE INDEX IF NOT EXISTS idx_baseaim_lead_form_created_at
  ON baseaim_lead_form(created_at DESC);

-- Index on email for searching by email
CREATE INDEX IF NOT EXISTS idx_baseaim_lead_form_email
  ON baseaim_lead_form(email);

-- Index on form_type for filtering by form type
CREATE INDEX IF NOT EXISTS idx_baseaim_lead_form_type
  ON baseaim_lead_form(form_type);

-- Index on company for searching by company
CREATE INDEX IF NOT EXISTS idx_baseaim_lead_form_company
  ON baseaim_lead_form(company);

-- =====================================================
-- Row Level Security (RLS) Policies
-- =====================================================

-- Enable Row Level Security
ALTER TABLE baseaim_lead_form ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for form submissions)
-- This allows anyone to submit a form without authentication
CREATE POLICY "Allow anonymous inserts"
  ON baseaim_lead_form
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all records
-- This allows you (when authenticated) to view all submissions
CREATE POLICY "Allow authenticated reads"
  ON baseaim_lead_form
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow service role full access
-- This allows server-side operations with service role key
CREATE POLICY "Allow service role full access"
  ON baseaim_lead_form
  FOR ALL
  TO service_role
  USING (true);

-- =====================================================
-- Comments for documentation
-- =====================================================

COMMENT ON TABLE baseaim_lead_form IS 'Stores all lead form submissions from the Baseaim website across all form variants';
COMMENT ON COLUMN baseaim_lead_form.id IS 'Unique identifier for each lead submission';
COMMENT ON COLUMN baseaim_lead_form.created_at IS 'Timestamp when the lead was submitted';
COMMENT ON COLUMN baseaim_lead_form.form_type IS 'Type of form used: original, short, multi-step, or super-quick';
COMMENT ON COLUMN baseaim_lead_form.metadata IS 'Flexible JSON field for storing additional form data';

-- =====================================================
-- Usage Notes
-- =====================================================
--
-- To use this schema:
-- 1. Copy this entire SQL file
-- 2. Go to your Supabase project dashboard
-- 3. Navigate to SQL Editor
-- 4. Paste and run this script
--
-- The table will be created with proper indexes and security policies.
-- Your Next.js app will be able to insert data using the anon key.
-- =====================================================

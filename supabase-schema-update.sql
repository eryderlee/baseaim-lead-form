-- =====================================================
-- Supabase Schema Update for Cal.com Booking Tracking
-- =====================================================
-- Run this to add booking tracking fields to existing table
-- =====================================================

-- Add new columns for tracking Cal.com bookings
ALTER TABLE baseaim_lead_form
ADD COLUMN IF NOT EXISTS booking_completed BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS cal_com_booking_id TEXT,
ADD COLUMN IF NOT EXISTS booking_completed_at TIMESTAMP WITH TIME ZONE;

-- Add index for querying bookings
CREATE INDEX IF NOT EXISTS idx_baseaim_lead_form_booking_completed
  ON baseaim_lead_form(booking_completed);

-- Add index for Cal.com booking ID
CREATE INDEX IF NOT EXISTS idx_baseaim_lead_form_cal_booking_id
  ON baseaim_lead_form(cal_com_booking_id);

-- Add comments for documentation
COMMENT ON COLUMN baseaim_lead_form.booking_completed IS 'Whether the user completed a Cal.com booking';
COMMENT ON COLUMN baseaim_lead_form.cal_com_booking_id IS 'Cal.com booking ID from webhook';
COMMENT ON COLUMN baseaim_lead_form.booking_completed_at IS 'Timestamp when booking was completed';

-- =====================================================
-- Usage Notes
-- =====================================================
--
-- To use this update:
-- 1. Copy this entire SQL
-- 2. Go to your Supabase SQL Editor
-- 3. Paste and run this script
--
-- This will add booking tracking fields to your existing table.
-- =====================================================

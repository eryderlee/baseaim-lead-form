# Supabase & Cal.com Integration Setup Guide

This guide covers the complete setup for your lead form with Supabase database integration and Cal.com booking tracking.

## ✅ Features Implemented

### 1. Progressive Data Saving
- **Name & Email**: Saved immediately when user enters them (Page 5 of SuperQuickForm)
- **Phone Number**: Updates the same record when added (Page 6)
- **Benefit**: Capture leads even if users drop off before completing the form

### 2. Cal.com Booking Tracking
- **Webhook Integration**: Automatically tracks when users complete a booking
- **Database Fields**: `booking_completed`, `cal_com_booking_id`, `booking_completed_at`
- **Benefit**: Know which leads converted into actual consultations

---

## 📋 Step-by-Step Setup

### Part 1: Update Database Schema

Run this SQL in your Supabase SQL Editor to add booking tracking fields:

```sql
-- Add new columns for tracking Cal.com bookings
ALTER TABLE baseaim_lead_form
ADD COLUMN IF NOT EXISTS booking_completed BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS cal_com_booking_id TEXT,
ADD COLUMN IF NOT EXISTS booking_completed_at TIMESTAMP WITH TIME ZONE;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_baseaim_lead_form_booking_completed
  ON baseaim_lead_form(booking_completed);

CREATE INDEX IF NOT EXISTS idx_baseaim_lead_form_cal_booking_id
  ON baseaim_lead_form(cal_com_booking_id);
```

Or simply run the file: `supabase-schema-update.sql`

### Part 2: Configure Cal.com Webhook

1. **Go to Cal.com Settings**
   - Navigate to: https://cal.com/settings/developer/webhooks
   - Or: Settings → Developer → Webhooks

2. **Add New Webhook**
   - Click "+ New Webhook"
   - **Subscriber URL**: `https://your-domain.com/api/webhooks/cal-com`
     - For local testing: `https://your-ngrok-url.ngrok.io/api/webhooks/cal-com`
     - For Netlify: `https://your-netlify-site.netlify.app/api/webhooks/cal-com`

3. **Select Trigger Event**
   - Check: ✅ **"Booking Created"**
   - This fires when someone completes a booking

4. **Save the Webhook**
   - Click "Save"
   - Test it by making a booking

### Part 3: Test Local Development (Optional)

If you want to test webhooks locally:

1. **Install ngrok**:
   ```bash
   npm install -g ngrok
   ```

2. **Start your dev server**:
   ```bash
   npm run dev
   ```

3. **Start ngrok**:
   ```bash
   ngrok http 3000
   ```

4. **Use the ngrok URL in Cal.com webhook**:
   ```
   https://abc123.ngrok.io/api/webhooks/cal-com
   ```

---

## 🔄 How It Works

### SuperQuickForm Flow

```
Page 1-3: Business questions
    ↓
Page 4: Cost reveal
    ↓
Page 5: Name & Email
    → ✅ SAVES TO DATABASE (creates new lead record)
    → Stores lead ID in component state
    ↓
Page 6: Phone number
    → ✅ UPDATES EXISTING RECORD (adds phone to same lead)
    ↓
Page 7: Cal.com calendar
    → User books consultation
    → Cal.com webhook fires
    → ✅ MARKS BOOKING AS COMPLETED
```

### API Endpoints

1. **POST `/api/submit-lead`**
   - Creates new lead record
   - Returns lead ID for tracking
   - Used on: Page 5 (name/email)

2. **PATCH `/api/update-lead`**
   - Updates existing lead by ID
   - Can update: `phone`, `booking_completed`, `cal_com_booking_id`
   - Used on: Page 6 (phone number)

3. **POST `/api/webhooks/cal-com`**
   - Receives Cal.com webhooks
   - Finds lead by email
   - Marks booking as completed
   - Used by: Cal.com (automatic)

### Database Fields

| Field | Type | Purpose |
|-------|------|---------|
| `id` | UUID | Unique lead identifier |
| `created_at` | Timestamp | When lead was first created |
| `name` | Text | Lead's name |
| `email` | Text | Lead's email (used to match bookings) |
| `phone` | Text | Lead's phone (added later) |
| `booking_completed` | Boolean | Whether they booked a consultation |
| `cal_com_booking_id` | Text | Cal.com booking UID |
| `booking_completed_at` | Timestamp | When booking was made |

---

## 📊 Querying Your Data

### Find all leads who booked consultations
```sql
SELECT
  name,
  email,
  phone,
  created_at,
  booking_completed_at
FROM baseaim_lead_form
WHERE booking_completed = true
ORDER BY booking_completed_at DESC;
```

### Find leads who dropped off (no phone)
```sql
SELECT
  name,
  email,
  created_at
FROM baseaim_lead_form
WHERE phone IS NULL
  AND form_type = 'super-quick'
ORDER BY created_at DESC;
```

### Find leads who gave phone but didn't book
```sql
SELECT
  name,
  email,
  phone,
  created_at
FROM baseaim_lead_form
WHERE phone IS NOT NULL
  AND booking_completed = false
ORDER BY created_at DESC;
```

### Conversion funnel analysis
```sql
SELECT
  COUNT(*) FILTER (WHERE phone IS NULL) as "Dropped at Name/Email",
  COUNT(*) FILTER (WHERE phone IS NOT NULL AND booking_completed = false) as "Gave Phone, No Booking",
  COUNT(*) FILTER (WHERE booking_completed = true) as "Completed Booking",
  ROUND(
    100.0 * COUNT(*) FILTER (WHERE booking_completed = true) / COUNT(*),
    2
  ) as "Conversion Rate %"
FROM baseaim_lead_form
WHERE form_type = 'super-quick'
  AND created_at > NOW() - INTERVAL '30 days';
```

---

## 🚀 Deployment to Netlify

### Environment Variables

Make sure these are set in Netlify:

1. Go to: **Site Settings** → **Environment Variables**
2. Add:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://supabase.ryderagency.com
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
   ```

### Update Cal.com Webhook URL

After deploying to Netlify:

1. Note your Netlify URL: `https://your-site.netlify.app`
2. Update Cal.com webhook URL to: `https://your-site.netlify.app/api/webhooks/cal-com`

---

## 🐛 Troubleshooting

### Webhook not firing?

1. **Check Cal.com webhook logs**:
   - Go to Cal.com → Settings → Developer → Webhooks
   - Click on your webhook → View "Recent deliveries"

2. **Check your API logs**:
   - In Netlify: Functions tab → View logs
   - Locally: Check your terminal

3. **Test the endpoint manually**:
   ```bash
   curl -X POST https://your-domain.com/api/webhooks/cal-com \
     -H "Content-Type: application/json" \
     -d '{
       "triggerEvent": "BOOKING_CREATED",
       "payload": {
         "uid": "test-123",
         "bookingId": 1,
         "attendees": [{"email": "test@example.com", "name": "Test User"}]
       }
     }'
   ```

### Lead not updating with phone?

1. Check browser console for errors
2. Verify lead ID was saved on Page 5
3. Check API logs in `/api/update-lead`

### RLS blocking inserts?

The service role key should bypass RLS. If you're still having issues:

```sql
-- Check if RLS is enabled
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'baseaim_lead_form';

-- If needed, disable RLS (not recommended for production)
ALTER TABLE baseaim_lead_form DISABLE ROW LEVEL SECURITY;
```

---

## ✨ Benefits of This Setup

1. **Capture More Leads**: Save data progressively, don't lose leads who drop off
2. **Track Conversions**: Know exactly which leads book consultations
3. **Better Follow-up**: Identify leads at different stages (email only, phone added, booked)
4. **Analytics**: Query conversion rates and funnel metrics
5. **No Data Loss**: Even if someone closes the browser, you have their initial data

---

## 📁 Files Created/Modified

### New Files
- `app/api/update-lead/route.ts` - API to update lead records
- `app/api/webhooks/cal-com/route.ts` - Cal.com webhook handler
- `supabase-schema-update.sql` - Database schema additions
- `SETUP-GUIDE.md` - This file

### Modified Files
- `components/SuperQuickForm.tsx` - Added progressive saving
- `components/CalendarBooking.tsx` - Pass lead ID to Cal.com
- `lib/supabase.ts` - Added service role client
- `.env.local` - Added service role key
- `.env.example` - Updated with service role key

---

## 🎉 You're All Set!

Your lead form now:
- ✅ Saves data progressively
- ✅ Tracks Cal.com bookings automatically
- ✅ Provides conversion metrics
- ✅ Reduces lead loss from drop-offs

Test it out and monitor your Supabase dashboard to see leads coming in!

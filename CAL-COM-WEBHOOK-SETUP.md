# Cal.com Webhook Setup Guide

## Quick Answer

**Do you need a secret?** No, it's optional but recommended for production.

- **Without secret**: Simpler, works immediately, anyone can POST to your webhook
- **With secret**: More secure, Cal.com signs requests, you verify them

---

## Setup Options

### Option 1: No Secret (Simpler)

**Perfect for:**
- Testing/development
- Getting started quickly
- Low-security requirements

**Steps:**
1. Go to Cal.com Settings → Developer → Webhooks
2. Click "+ New Webhook"
3. **Subscriber URL**: `https://your-domain.com/api/webhooks/cal-com`
4. **Event triggers**: Check ✅ "Booking Created"
5. **Secret**: Leave empty
6. Click "Create Webhook"

**In your `.env.local`:**
```env
CAL_COM_WEBHOOK_SECRET=
# Leave it empty - webhook will work without verification
```

✅ **Done!** The webhook will work immediately.

---

### Option 2: With Secret (Recommended for Production)

**Perfect for:**
- Production deployments
- Higher security requirements
- Preventing unauthorized webhook calls

**Steps:**

#### 1. Generate a Secret
Create a random secret string (32+ characters):

```bash
# On Mac/Linux
openssl rand -hex 32

# Or use an online generator
# https://www.random.org/strings/
```

Example result: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6`

#### 2. Add to Cal.com Webhook

1. Go to Cal.com Settings → Developer → Webhooks
2. Click "+ New Webhook"
3. **Subscriber URL**: `https://your-domain.com/api/webhooks/cal-com`
4. **Event triggers**: Check ✅ "Booking Created"
5. **Secret**: Paste your generated secret
6. Click "Create Webhook"

#### 3. Add to Your Environment Variables

**In `.env.local` (local development):**
```env
CAL_COM_WEBHOOK_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
```

**In Netlify (production):**
1. Go to Site Settings → Environment Variables
2. Add variable:
   - Key: `CAL_COM_WEBHOOK_SECRET`
   - Value: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6`
3. Redeploy your site

✅ **Done!** Webhook requests are now verified.

---

## How Signature Verification Works

When you set a secret:

1. **Cal.com** creates a signature:
   ```
   HMAC-SHA256(webhook_secret, request_body)
   ```

2. **Cal.com** sends it in the header:
   ```
   x-cal-signature: abc123...
   ```

3. **Your server** verifies it:
   - Creates its own signature using the same secret
   - Compares with the received signature
   - Rejects if they don't match

---

## Testing Your Webhook

### 1. Make a Test Booking

1. Go to your live form
2. Fill it out with a test email
3. Book a consultation on Cal.com
4. Check your server logs

### 2. Check Webhook Logs in Cal.com

1. Go to Cal.com → Settings → Developer → Webhooks
2. Click on your webhook
3. View "Recent Deliveries"
4. See request/response details

### 3. Manual Test (curl)

**Without secret:**
```bash
curl -X POST https://your-domain.com/api/webhooks/cal-com \
  -H "Content-Type: application/json" \
  -d '{
    "triggerEvent": "BOOKING_CREATED",
    "createdAt": "2024-01-01T00:00:00Z",
    "payload": {
      "uid": "test-booking-123",
      "bookingId": 1,
      "title": "Test Booking",
      "startTime": "2024-01-01T10:00:00Z",
      "endTime": "2024-01-01T10:30:00Z",
      "attendees": [{
        "email": "test@example.com",
        "name": "Test User",
        "timeZone": "America/New_York"
      }]
    }
  }'
```

**Expected response:**
```json
{
  "message": "Booking tracked successfully",
  "leadId": "uuid-here",
  "bookingUid": "test-booking-123"
}
```

**With secret:**
You'll need to generate the signature - easier to just test by making an actual booking.

---

## Webhook Payload Example

Here's what Cal.com sends:

```json
{
  "triggerEvent": "BOOKING_CREATED",
  "createdAt": "2024-01-15T14:30:00.000Z",
  "payload": {
    "uid": "abc123def456",
    "bookingId": 12345,
    "title": "30 Min Meeting between John Doe and Baseaim",
    "description": "Free 30-minute AI automation consultation",
    "startTime": "2024-01-20T10:00:00.000Z",
    "endTime": "2024-01-20T10:30:00.000Z",
    "attendees": [
      {
        "email": "john@example.com",
        "name": "John Doe",
        "timeZone": "America/New_York"
      }
    ],
    "responses": {
      "email": "john@example.com",
      "name": "John Doe",
      "notes": "Lead ID: uuid-123 | Industry: Tech | Company Size: 10-50"
    }
  }
}
```

---

## Troubleshooting

### Webhook not firing?

1. **Check Cal.com webhook status**:
   - Settings → Developer → Webhooks
   - Make sure it's "Active" (green dot)

2. **Check Recent Deliveries**:
   - Click on webhook → "Recent Deliveries"
   - See if requests are being sent
   - Check for error messages

3. **Check your server logs**:
   - Look for `=== Cal.com Webhook Received ===`
   - Check for any errors

### Getting 401 errors?

**Signature mismatch!** Either:
- Secret in Cal.com doesn't match `.env.local`
- Secret has extra spaces/newlines
- Wrong signature algorithm

**Fix:**
- Copy secret exactly (no spaces)
- Make sure both Cal.com and your server use the same secret
- Or temporarily disable verification: `CAL_COM_WEBHOOK_SECRET=`

### Lead not being marked as booked?

1. **Email mismatch**:
   - Webhook finds leads by email
   - Make sure booking email matches form email
   - Check logs: `Found lead: uuid` or `No lead found for email`

2. **Database not updated**:
   - Check for Supabase errors in logs
   - Verify booking fields exist: `booking_completed`, `cal_com_booking_id`
   - Run the schema update SQL if needed

---

## Security Best Practices

### ✅ DO:
- Use a webhook secret in production
- Use strong, random secrets (32+ characters)
- Keep secrets in environment variables (never in code)
- Monitor webhook logs for suspicious activity

### ❌ DON'T:
- Commit secrets to git
- Share secrets publicly
- Use simple/guessable secrets
- Skip verification in production

---

## Summary

**For getting started**: Skip the secret, it works fine without it.

**For production**: Add a secret for better security.

The webhook endpoint handles both cases automatically:
- If `CAL_COM_WEBHOOK_SECRET` is set → verifies signature
- If `CAL_COM_WEBHOOK_SECRET` is empty → skips verification

You can always add the secret later without changing any code!

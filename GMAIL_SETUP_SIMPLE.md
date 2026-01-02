# Simple Gmail Integration Steps

Follow these simple steps to connect your contact form to Gmail:

## Step 1: Sign Up for EmailJS (Free)

1. Go to **https://dashboard.emailjs.com/**
2. Click **"Sign Up"** (top right)
3. Create account with your email (use: **laibaqaiser89@gmail.com**)
4. Verify your email address

---

## Step 2: Connect Gmail Account

1. In EmailJS dashboard, click **"Email Services"** (left sidebar)
2. Click **"Add New Service"** button
3. Select **"Gmail"** from the list
4. Click **"Connect Account"** button
5. Sign in with: **laibaqaiser89@gmail.com**
6. Click **"Allow"** to grant permissions
7. **Copy the Service ID** (looks like: `service_xxxxxxx`)

**✅ You should see: "Service connected successfully"**

---

## Step 3: Create Email Template

1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"** button
3. Fill in:

   **Template Name:** `Contact Form`
   
   **Subject:** 
   ```
   New Contact Form Submission from {{from_name}}
   ```
   
   **Content:**
   ```
   Hello,
   
   You received a new message from your website:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   Message: {{message}}
   
   Reply to: {{from_email}}
   ```
   
4. Click **"Save"**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

---

## Step 4: Get Your Public Key

1. Click **"Account"** (left sidebar)
2. Scroll to **"API Keys"** section
3. **Copy your Public Key** (looks like: `xxxxxxxxxxxxx`)

---

## Step 5: Add Credentials to Your Website

**Option A: Using Environment File (Recommended)**

1. In your project root, create file: `.env.local`
2. Add these lines (replace with YOUR actual values):

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Save the file
4. **Restart your dev server** (stop and run `npm run dev` again)

**Option B: Direct Edit**

1. Open `src/config/emailjs.ts`
2. Replace these values:
   - `YOUR_PUBLIC_KEY` → your actual public key
   - `YOUR_TEMPLATE_ID` → your actual template ID
   - Keep or update `service_z1on6le` → your service ID

---

## Step 6: Allow Your Website Domain

1. In EmailJS dashboard, click **"Account"** → **"Security"**
2. Under **"Allowed Origins"**, click **"Add Origin"**
3. Add: `http://localhost:3000` (for testing)
4. Add: `https://yourdomain.com` (for production)
5. Click **"Save"**

---

## Step 7: Test It!

1. Run: `npm run dev`
2. Go to your website contact form
3. Fill out the form and submit
4. Check **laibaqaiser89@gmail.com** inbox
5. You should receive the email! ✅

---

## Quick Checklist

- [ ] EmailJS account created
- [ ] Gmail connected (Service ID copied)
- [ ] Email template created (Template ID copied)
- [ ] Public Key copied
- [ ] Credentials added to `.env.local` or `emailjs.ts`
- [ ] Allowed origins added
- [ ] Form tested successfully

---

## Common Issues

**❌ "Email service is not configured"**
→ Check that all 3 credentials are added correctly

**❌ "CORS error"**
→ Add your domain to "Allowed Origins" in EmailJS Security

**❌ "Service not found"**
→ Check your Service ID is correct

**❌ "Template not found"**
→ Check your Template ID is correct

**❌ Gmail connection fails**
→ Try using Outlook instead (same steps, choose Outlook instead of Gmail)

---

## Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- Support: support@emailjs.com

---

**That's it! Your contact form will now send emails to laibaqaiser89@gmail.com** 📧


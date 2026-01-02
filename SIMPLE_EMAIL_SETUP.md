# Simple Email Setup (No Templates Needed!)

Your contact form is now ready! Just add your Gmail credentials.

## Quick Setup (2 minutes)

### Step 1: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click **"Security"** (left sidebar)
3. Under **"How you sign in to Google"**, find **"2-Step Verification"**
   - If not enabled, enable it first (required for App Passwords)
4. After 2-Step Verification is on, go back to Security
5. Click **"App passwords"** (under "How you sign in to Google")
6. Select app: **"Mail"**
7. Select device: **"Other (Custom name)"** → Type: "Website"
8. Click **"Generate"**
9. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### Step 2: Add Credentials

Create a file named `.env.local` in your project root:

```env
SMTP_USER=laibaqaiser89@gmail.com
SMTP_PASSWORD=your_16_character_app_password_here
TO_EMAIL=laibaqaiser89@gmail.com
```

**Important:** 
- Use your Gmail address for `SMTP_USER`
- Use the **App Password** (not your regular Gmail password!)
- Remove spaces from the App Password when pasting

### Step 3: Restart Server

```bash
# Stop your server (Ctrl+C)
# Then start again:
npm run dev
```

### Step 4: Test!

1. Go to your contact form
2. Fill it out and submit
3. Check **laibaqaiser89@gmail.com** inbox
4. You should receive the email! ✅

---

## That's It!

No templates, no EmailJS setup needed. Just your Gmail App Password and you're done!

---

## Troubleshooting

**❌ "Email service not configured"**
→ Make sure `.env.local` file exists with correct credentials

**❌ "Invalid login"**
→ Make sure you're using App Password, not regular password
→ Make sure 2-Step Verification is enabled

**❌ "Connection timeout"**
→ Check your internet connection
→ Make sure Gmail SMTP is not blocked by firewall

**❌ Emails not received**
→ Check spam folder
→ Verify App Password is correct
→ Check server console for error messages

---

## Security Note

- Never commit `.env.local` to git (it's already in .gitignore)
- App Passwords are safer than regular passwords
- Each App Password can be revoked individually


# Quick Email Setup Guide

## ✅ What's Already Done

The contact form is now fully configured and ready to send emails! You just need to add your EmailJS credentials.

## 🚀 Quick Setup (5 minutes)

### 1. Sign up for EmailJS (Free)
- Go to https://dashboard.emailjs.com/
- Sign up for a free account (200 emails/month free)

### 2. Create Email Service
- Dashboard → "Email Services" → "Add New Service"
- Choose **Gmail** or **Outlook**
- Connect your email account (laibaqaiser89@gmail.com)
- Copy the **Service ID**

### 3. Create Email Template
- Dashboard → "Email Templates" → "Create New Template"
- Use this subject: `New Contact Form Submission from {{from_name}}`
- Use this body:
```
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Message: {{message}}
```
- Copy the **Template ID**

### 4. Get Public Key
- Dashboard → "Account" → "API Keys"
- Copy your **Public Key**

### 5. Add Credentials

**Option A: Environment Variables (Recommended)**
Create `.env.local` in the project root:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

**Option B: Direct Config**
Edit `src/config/emailjs.ts` and replace:
- `YOUR_PUBLIC_KEY` with your actual public key
- `YOUR_TEMPLATE_ID` with your actual template ID
- Keep `service_z1on6le` or replace with your service ID

### 6. Add Allowed Origins
- Dashboard → "Account" → "Security"
- Add: `http://localhost:3000` (for development)
- Add: `https://yourdomain.com` (for production)

### 7. Test!
- Run `npm run dev`
- Go to contact form
- Submit a test message
- Check laibaqaiser89@gmail.com

## ✨ Features

- ✅ Form validation
- ✅ Success/error messages
- ✅ Automatic email sending to laibaqaiser89@gmail.com
- ✅ Reply-to field set to sender's email
- ✅ Configuration validation

## 📧 Where Emails Go

All contact form submissions will be sent to: **laibaqaiser89@gmail.com**

## 🆘 Troubleshooting

- **"Email service is not configured"**: Add your EmailJS credentials
- **CORS errors**: Add your domain to EmailJS Allowed Origins
- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template ID

For detailed help, see `EMAILJS_SETUP.md`


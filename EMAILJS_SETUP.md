# EmailJS Setup Guide

This guide will help you set up EmailJS to enable contact form functionality on your MyraTech website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose **Gmail** as your email provider
4. **Important for Gmail API**: Follow these specific steps:
   - Click "Connect Account" next to Gmail
   - Sign in with your Gmail account
   - **Grant all requested permissions** (especially "Send email on your behalf")
   - Make sure to check "Allow less secure apps" if prompted
   - Complete the OAuth flow
5. Note down your **Service ID**: `service_z1on6le`

### Gmail API Troubleshooting:
If you get "insufficient authentication scopes" error:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create one)
3. Go to "APIs & Services" > "Credentials"
4. Find your OAuth 2.0 client ID
5. Click "Edit" and add these scopes:
   - `https://www.googleapis.com/auth/gmail.send`
   - `https://www.googleapis.com/auth/gmail.compose`
6. Save and re-authorize in EmailJS

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new message from your MyraTech website contact form:

Name: {{from_name}}
Email: {{from_email}}
Reply-To: {{reply_to}}
Company: {{company}}
Message: {{message}}

Please respond to this inquiry as soon as possible.

Best regards,
MyraTech Website
```

**Important**: Make sure to include these variables in your template:
- `{{from_name}}`
- `{{from_email}}`
- `{{reply_to}}` (optional, but recommended)
- `{{company}}`
- `{{message}}`
- `{{to_email}}` (optional, will be set automatically)

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in the EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Configuration

You have two options to configure EmailJS:

### Option 1: Using Environment Variables (Recommended for Production)

1. Create a `.env.local` file in the root of your project
2. Add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
```

3. Restart your development server after adding environment variables

### Option 2: Direct Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key_here',
  SERVICE_ID: 'your_actual_service_id_here',
  TEMPLATE_ID: 'your_actual_template_id_here',
  COMPANY_EMAIL: 'laibaqaiser89@gmail.com',
}
```

**Note**: The code will automatically check if EmailJS is properly configured and show helpful error messages if credentials are missing.

## Step 6: Configure Allowed Origins (Important!)

1. In EmailJS dashboard, go to "Account" > "Security"
2. Add your website domains to "Allowed Origins":
   - For development: `http://localhost:3000`
   - For production: `https://yourdomain.com`
3. This prevents CORS errors when submitting the form

## Step 7: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email (laibaqaiser89@gmail.com) for the message
5. The form will show a success message if the email is sent successfully

## Alternative: Use Outlook/Hotmail Service

If Gmail API continues to give issues, try using Outlook instead:

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose **Outlook** instead of Gmail
4. Sign in with your Outlook/Hotmail account
5. This usually has fewer permission issues than Gmail

## Troubleshooting

- **"Insufficient authentication scopes"**: Follow the Gmail API troubleshooting steps above
- **Form not sending**: Check that all EmailJS credentials are correct
- **Template not found**: Verify the Template ID matches exactly
- **Service not found**: Verify the Service ID matches exactly
- **CORS errors**: Make sure your domain is added to EmailJS allowed origins
- **Gmail issues**: Try switching to Outlook/Hotmail service instead

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to expose in client-side code
- Service ID and Template ID should be kept secure

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

For higher limits, consider upgrading to a paid plan.

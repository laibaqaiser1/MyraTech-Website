# EmailJS Setup Guide

This guide will help you set up EmailJS to enable contact form functionality on your MyraTech website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

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
Company: {{company}}
Message: {{message}}

Please respond to this inquiry as soon as possible.

Best regards,
MyraTech Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in the EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key_here',
  SERVICE_ID: 'your_actual_service_id_here',
  TEMPLATE_ID: 'your_actual_template_id_here',
  COMPANY_EMAIL: 'info@myratech.com',
}
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- **Form not sending**: Check that all EmailJS credentials are correct
- **Template not found**: Verify the Template ID matches exactly
- **Service not found**: Verify the Service ID matches exactly
- **CORS errors**: Make sure your domain is added to EmailJS allowed origins

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

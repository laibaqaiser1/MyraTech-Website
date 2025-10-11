// EmailJS Configuration
// Replace these with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Get these from your EmailJS dashboard: https://dashboard.emailjs.com/
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  
  // Your company email where contact form messages will be sent
  COMPANY_EMAIL: 'info@myratech.com',
}

// EmailJS Template Variables
// Make sure your EmailJS template includes these variables:
export const TEMPLATE_VARIABLES = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  company: '{{company}}',
  message: '{{message}}',
  to_email: '{{to_email}}',
}

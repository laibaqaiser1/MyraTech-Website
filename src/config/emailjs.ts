// EmailJS Configuration
// Replace these with your actual EmailJS credentials
// You can also use environment variables (NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, etc.)

export const EMAILJS_CONFIG = {
  // Get these from your EmailJS dashboard: https://dashboard.emailjs.com/
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_z1on6le', // Your Gmail service ID
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  
  // Your company email where contact form messages will be sent
  COMPANY_EMAIL: 'laibaqaiser89@gmail.com',
}

// Validation function to check if EmailJS is properly configured
export const isEmailJSConfigured = (): boolean => {
  return (
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== '' &&
    EMAILJS_CONFIG.SERVICE_ID !== '' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== ''
  )
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

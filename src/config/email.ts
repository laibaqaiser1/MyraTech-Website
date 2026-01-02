// Simple Email Configuration
// For Gmail, you'll need to use an App Password instead of your regular password
// Get it from: https://myaccount.google.com/apppasswords

export const EMAIL_CONFIG = {
  // Your Gmail address
  FROM_EMAIL: 'laibaqaiser89@gmail.com',
  
  // Where contact form emails will be sent
  TO_EMAIL: 'laibaqaiser89@gmail.com',
  
  // Gmail SMTP settings
  SMTP_HOST: 'smtp.gmail.com',
  SMTP_PORT: 587,
  
  // You'll need to set these in .env.local:
  // SMTP_USER: your Gmail address
  // SMTP_PASSWORD: your Gmail App Password (not regular password!)
}


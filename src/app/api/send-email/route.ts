import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get email credentials from environment variables
    const smtpUser = process.env.SMTP_USER || process.env.NEXT_PUBLIC_SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD || process.env.NEXT_PUBLIC_SMTP_PASSWORD
    const toEmail = process.env.TO_EMAIL || 'laibaqaiser89@gmail.com'

    if (!smtpUser || !smtpPassword) {
      console.error('Email credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    // Email content
    const mailOptions = {
      from: `"${name}" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the MyraTech website contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    )
  }
}


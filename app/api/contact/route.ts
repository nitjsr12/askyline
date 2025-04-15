export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const formData = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Business:</strong> ${formData.business || 'Not provided'}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Website:</strong> ${formData.website || 'Not provided'}</p>
        <p><strong>Service:</strong> ${formData.service || 'Not specified'}</p>
        <p><strong>Message:</strong> ${formData.message || 'No message provided'}</p>
        <p>Submitted at: ${new Date().toLocaleString()}</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Thank you for contacting Askyline Digital',
      html: `
        <h2>Thank You for Your Inquiry!</h2>
        <p>Dear ${formData.name},</p>
        <p>We've received your message and our team will get back to you within 24-48 hours.</p>
        <ul>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Business:</strong> ${formData.business || 'Not provided'}</li>
          <li><strong>Service Interested:</strong> ${formData.service || 'Not specified'}</li>
        </ul>
        <p>If you have any urgent questions, feel free to reply to this email or call us at +91 89185 67430.</p>
        <p>Best regards,</p>
        <p>The Askyline Digital Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}

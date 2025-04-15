import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SMTP configuration with connection pooling
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.HOSTINGER_EMAIL,
    pass: process.env.HOSTINGER_EMAIL_PASSWORD
  },
  pool: true,
  maxConnections: 1,
  maxMessages: 5
});

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const startTime = Date.now();
  
  try {
    // Quick content type validation
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Invalid content type' },
        { status: 400 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, business, phone, website, service, message } = body;

    // Essential field validation
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Prepare email templates
    const adminEmail = {
      from: `"Website Contact" <${process.env.HOSTINGER_EMAIL}>`,
      to: process.env.HOSTINGER_EMAIL,
      subject: `New Contact: ${name}`,
      text: `New contact form submission:
        \nName: ${name}
        \nEmail: ${email}
        \nBusiness: ${business || 'N/A'}
        \nPhone: ${phone || 'N/A'}
        \nWebsite: ${website || 'N/A'}
        \nService: ${service || 'N/A'}
        \nMessage: ${message || 'No message provided'}`
    };

    const userEmail = {
      from: `"Askyline Digital" <${process.env.HOSTINGER_EMAIL}>`,
      to: email,
      subject: 'Thank you for contacting us',
      text: `Dear ${name},\n\nThank you for reaching out! We've received your message regarding "${service || 'your inquiry'}" and will respond within 24 hours.\n\nBest regards,\nAskyline Team`
    };

    // Send emails in parallel
    await Promise.all([
      transporter.sendMail(adminEmail),
      transporter.sendMail(userEmail)
    ]);

    console.log(`Email processed in ${Date.now() - startTime}ms`);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(`Email failed after ${Date.now() - startTime}ms:`, error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
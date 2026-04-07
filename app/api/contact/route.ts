import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Use dummy key during build if not set
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, product, quantity, message } = body;

    // Validate required fields
    if (!name || !email || !product) {
      return NextResponse.json(
        { error: 'Name, email, and product are required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_dummy_key_for_build') {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at info@filieramadeo.it' },
        { status: 503 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'NdujaLovers <onboarding@resend.dev>', // You'll need to update this with your verified domain
      to: ['info@filieramadeo.it'],
      replyTo: email,
      subject: `New Product Order Request: ${product}`,
      html: `
        <h2>New Product Order Request</h2>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity || 'Not specified'}</p>
        <hr />
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        ${message ? `<hr /><h3>Message</h3><p>${message}</p>` : ''}
        <hr />
        <p style="color: #666; font-size: 12px;">Sent from NdujaLovers.com</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Error sending email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error processing request' },
      { status: 500 }
    );
  }
}

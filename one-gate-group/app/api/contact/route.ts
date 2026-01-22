import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, company, email, phoneNumber, message } = body;

    // Send email to business
    const { data: businessEmail, error: businessError } = await resend.emails.send({
      from: 'One Gate Group <onboarding@resend.dev>',
      to: 'Mustafa.Hamad23@outlook.com', // Your verified email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    if (businessError) {
      console.error('Business email error:', businessError);
      throw businessError;
    }

    // Note: Auto-reply temporarily disabled until domain is verified
    // To enable: verify your domain at resend.com/domains
    
    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}


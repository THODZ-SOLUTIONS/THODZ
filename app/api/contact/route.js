import { NextResponse } from 'next/server';

// Contact form intake. Wires to Resend (https://resend.com) when
// RESEND_API_KEY + CONTACT_TO_EMAIL are set as environment variables in
// Vercel; otherwise it logs the submission server-side so nothing is lost,
// but no email actually goes out. Set both env vars before relying on this
// in production.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, company, type, timeline, details, nda } = body || {};
  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'support@thodz.com';

  if (apiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || 'THODZ website <onboarding@resend.dev>',
          to: [toEmail],
          reply_to: email,
          subject: `New project inquiry: ${company || name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Company: ${company || 'Not provided'}`,
            `Project type: ${type || 'Not provided'}`,
            `Timeline: ${timeline || 'Not provided'}`,
            `Under NDA: ${nda ? 'Yes' : 'No'}`,
            '',
            'Details:',
            details || 'Not provided',
          ].join('\n'),
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error('Resend API error:', res.status, text);
        return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
      }
    } catch (err) {
      console.error('Contact form send failed:', err);
      return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
    }
  } else {
    // No email provider configured. Log so the submission isn't silently lost.
    console.info('[contact] RESEND_API_KEY not set, logging submission only:', {
      name, email, company, type, timeline, nda, details,
    });
  }

  return NextResponse.json({ ok: true });
}

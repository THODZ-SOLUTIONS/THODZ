import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Contact form intake. Submissions are stored in Supabase (the admin
// dashboard's source of truth) when NEXT_PUBLIC_SUPABASE_URL +
// SUPABASE_SECRET_KEY are set. Email wires to Resend (https://resend.com)
// when RESEND_API_KEY + CONTACT_TO_EMAIL are set as environment variables in
// Vercel; otherwise it logs the submission server-side so nothing is lost,
// but no email actually goes out. Set the env vars before relying on this
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

  // Primary record: store in Supabase when configured. Email below stays
  // best-effort — a DB row is the source of truth for the dashboard.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseSecret = process.env.SUPABASE_SECRET_KEY;
  if (supabaseUrl && supabaseSecret) {
    try {
      const supabase = createClient(supabaseUrl, supabaseSecret, {
        auth: { persistSession: false },
      });
      const { error } = await supabase.from('contact_submissions').insert({
        name,
        email,
        company: company || null,
        type: type || null,
        timeline: timeline || null,
        details: details || null,
        nda: Boolean(nda),
      });
      if (error) console.error('[contact] Supabase insert failed:', error.message);
    } catch (err) {
      console.error('[contact] Supabase insert failed:', err);
    }
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

'use client';
import React from 'react';
import { Input } from '@/components/forms/Input';
import { Select } from '@/components/forms/Select';
import { Radio } from '@/components/forms/Radio';
import { Switch } from '@/components/forms/Switch';
import { Textarea } from '@/components/forms/Textarea';
import { Button } from '@/components/core/Button';
import { Toast } from '@/components/feedback/Toast';

export function ContactForm() {
  const [type, setType] = React.useState('Web');
  const [timeline, setTimeline] = React.useState('flex');
  const [nda, setNda] = React.useState(false);
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      type,
      timeline,
      details: form.details.value,
      nda,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return <Toast tone="accent" title="Message sent" message="A THODZ engineer will reply within one business day." />;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Input name="name" label="Name" required />
        <Input name="email" label="Work email" type="email" required />
      </div>
      <Input name="company" label="Company" />
      <Select label="Project type" value={type} onChange={(e) => setType(e.target.value)} options={['Web', 'Mobile', 'Desktop', 'DevOps', 'Cybersecurity', 'AI/ML', 'Automation', 'UI/UX', 'Consulting']} />
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 10 }}>Timeline</div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Radio name="timeline" label="ASAP" checked={timeline === 'asap'} onChange={() => setTimeline('asap')} />
          <Radio name="timeline" label="1–3 months" checked={timeline === 'q'} onChange={() => setTimeline('q')} />
          <Radio name="timeline" label="Flexible" checked={timeline === 'flex'} onChange={() => setTimeline('flex')} />
        </div>
      </div>
      <Textarea name="details" label="Project details" placeholder="A sentence or two on what you're building" />
      <Switch checked={nda} onChange={setNda} label="This project is under NDA" />
      {status === 'error' && (
        <span style={{ color: 'var(--status-danger)', fontSize: 'var(--text-body-s)', fontFamily: 'var(--font-body)' }}>
          Something went wrong sending your message. Email us directly at support@thodz.com instead.
        </span>
      )}
      <Button type="submit" variant="primary" size="lg" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send'}
      </Button>
    </form>
  );
}

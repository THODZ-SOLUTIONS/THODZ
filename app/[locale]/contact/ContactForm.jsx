'use client';
import React from 'react';
import { Input } from '@/components/forms/Input';
import { Select } from '@/components/forms/Select';
import { Radio } from '@/components/forms/Radio';
import { Switch } from '@/components/forms/Switch';
import { Textarea } from '@/components/forms/Textarea';
import { Button } from '@/components/core/Button';
import { Toast } from '@/components/feedback/Toast';

export function ContactForm({ locale, t }) {
  const [type, setType] = React.useState('Web');
  const [timeline, setTimeline] = React.useState('flex');
  const [nda, setNda] = React.useState(false);
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    // Values (type, timeline) stay locale-independent so the email we receive
    // reads the same whatever language the visitor filled the form in.
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
    return <Toast tone="accent" title={t.sentTitle} message={t.sentBody} />;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <Input name="name" label={t.name} required />
        <Input name="email" label={t.email} type="email" required />
      </div>
      <Input name="company" label={t.company} />
      <Select
        label={t.projectType}
        value={type}
        onChange={(e) => setType(e.target.value)}
        options={t.typeOptions}
      />
      <div>
        <div className="field-label" style={{ marginBottom: 10 }}>{t.timeline}</div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Radio name="timeline" label={t.timelineAsap} checked={timeline === 'asap'} onChange={() => setTimeline('asap')} />
          <Radio name="timeline" label={t.timelineQuarter} checked={timeline === 'q'} onChange={() => setTimeline('q')} />
          <Radio name="timeline" label={t.timelineFlexible} checked={timeline === 'flex'} onChange={() => setTimeline('flex')} />
        </div>
      </div>
      <Textarea name="details" label={t.details} placeholder={t.detailsPlaceholder} />
      <Switch checked={nda} onChange={setNda} label={t.nda} />
      {status === 'error' && <span className="form-error">{t.error}</span>}
      <Button type="submit" variant="primary" size="lg" disabled={status === 'sending'}>
        {status === 'sending' ? t.sending : t.send}
      </Button>
      <span className="field-note">
        {t.privacyPre}
        <a href={`/${locale}/privacy`} style={{ color: 'var(--text-accent)' }}>
          {t.privacyLink}
        </a>
        {t.privacyPost}
      </span>
    </form>
  );
}

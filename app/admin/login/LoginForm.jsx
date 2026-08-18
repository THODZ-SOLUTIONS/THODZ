'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/core/Button';

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = React.useState('');
  const [sending, setSending] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError('');
    const form = e.target;
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: form.email.value,
      password: form.password.value,
    });
    if (signInError) {
      setError('Invalid email or password.');
      setSending(false);
      return;
    }
    router.push('/admin');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--space-4)' }}>
      <Input name="email" label="Email" type="email" required />
      <Input name="password" label="Password" type="password" required />
      {error && <span className="form-error">{error}</span>}
      <Button type="submit" variant="primary" size="lg" disabled={sending}>
        {sending ? 'Signing in…' : 'Sign in'}
      </Button>
    </form>
  );
}

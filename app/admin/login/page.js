import { LoginForm } from './LoginForm';

export const metadata = { title: 'Sign in' };

export default function AdminLoginPage() {
  return (
    <div style={{ maxWidth: 420, margin: '10vh auto 0' }}>
      <h1 style={{ marginBottom: 'var(--space-6)' }}>Admin sign in</h1>
      <LoginForm />
    </div>
  );
}

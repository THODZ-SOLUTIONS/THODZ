export function Toast({ tone = 'accent', title, message }) {
  const toneColor = {
    accent: 'var(--accent-primary)',
    amber: 'var(--accent-secondary)',
    danger: 'var(--status-danger)',
  }[tone];
  return (
    <div className="toast" style={{ '--toast-tone': toneColor }}>
      <div className="toast-dot" />
      <div>
        <div className="toast-title">{title}</div>
        {message && <div className="toast-message">{message}</div>}
      </div>
    </div>
  );
}

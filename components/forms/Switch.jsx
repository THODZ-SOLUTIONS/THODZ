// A real checkbox with role="switch": focusable, Space-togglable, announced.
export function Switch({ checked, onChange, label }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={() => onChange && onChange(!checked)}
        className="sr-only"
      />
      <span className="switch-track" aria-hidden="true" />
      {label && <span className="switch-label">{label}</span>}
    </label>
  );
}
